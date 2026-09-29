import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sendContactEnquiry, verifySmtpConnection } from './server/mailer.js';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'vite-api-contact-handler',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/smtp-status' && req.method === 'GET') {
              try {
                const status = await verifySmtpConnection();
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(status));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
              return;
            }

            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });

              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, phone, interest, customInterest, message } = data;

                  if (!name || !name.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: false, error: 'Name is required.' }));
                    return;
                  }
                  if (!email || !email.trim() || !email.includes('@')) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: false, error: 'A valid email address is required.' }));
                    return;
                  }
                  if (!message || !message.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: false, error: 'Message is required.' }));
                    return;
                  }

                  const result = await sendContactEnquiry({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone ? phone.trim() : '',
                    interest: interest || 'General Inquiry',
                    customInterest: customInterest ? customInterest.trim() : '',
                    message: message.trim()
                  });

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: true,
                    message: 'Enquiry submitted successfully! We will get in touch shortly.',
                    data: result
                  }));
                } catch (err) {
                  console.error('API Contact Error:', err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: false,
                    error: err.message || 'Failed to send email. Check SMTP credentials.'
                  }));
                }
              });
              return;
            }

            next();
          });
        }
      }
    ],
    server: {
      host: '127.0.0.1',
      port: 5173
    }
  };
});
