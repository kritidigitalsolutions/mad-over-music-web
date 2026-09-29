import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEnquiry, verifySmtpConnection } from './mailer.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health / SMTP Verification Endpoint
app.get('/api/health', async (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/smtp-status', async (req, res) => {
  try {
    const status = await verifySmtpConnection();
    res.json(status);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Contact Form Submission Handler
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, interest, customInterest, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }

    const result = await sendContactEnquiry({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      interest: interest || 'General Inquiry',
      customInterest: customInterest ? customInterest.trim() : '',
      message: message.trim()
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! We will get in touch shortly.',
      data: result
    });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please verify Hostinger SMTP credentials or contact us directly at contact@madovermusic.com.',
      details: error.message
    });
  }
});

// Serve production static assets if dist exists
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

// Use regex or app.use for catch-all in Express 5
app.get(/^(?!\/api).*/, (req, res, next) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next();
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Mad Over Music Email Server running on port ${PORT}`);
  console.log(`📧 Hostinger SMTP User: ${process.env.SMTP_USER || 'contact@madovermusic.com'}`);
});
