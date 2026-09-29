import { sendContactEnquiry } from '../server/mailer.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, interest, customInterest, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required.' });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return res.status(400).json({ success: false, error: 'Valid email is required.' });
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
      message: 'Enquiry sent successfully!',
      data: result
    });
  } catch (err) {
    console.error('Serverless mail error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to send enquiry via Hostinger SMTP',
      details: err.message
    });
  }
}
