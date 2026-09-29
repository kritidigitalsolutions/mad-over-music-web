import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { generateAdminEmailHtml, generateUserConfirmationHtml } from './emailTemplates.js';

dotenv.config();

// Create and configure Hostinger SMTP transporter
export function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER || 'contact@madovermusic.com';
  const pass = process.env.SMTP_PASS || 'MadoverMusic@1122';

  return nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for 587
    auth: {
      user,
      pass
    },
    tls: {
      // Do not fail on invalid certs in strict network environments
      rejectUnauthorized: false
    }
  });
}

/**
 * Sends contact enquiry notification to admin and optional auto-reply to user
 */
export async function sendContactEnquiry({ name, email, phone, interest, customInterest, message }) {
  const transporter = createTransporter();
  const receiverEmail = process.env.RECEIVER_EMAIL || 'contact@madovermusic.com';
  const fromName = process.env.SMTP_FROM_NAME || 'Mad Over Music';
  const fromEmail = process.env.SMTP_FROM_EMAIL || 'contact@madovermusic.com';
  const senderDisplay = `"${fromName}" <${fromEmail}>`;

  const finalInterest = interest === 'Other' && customInterest
    ? `Other: ${customInterest}`
    : (interest || 'General Inquiry');

  const adminSubject = `⚡ New MOM Enquiry: ${name || 'Lead'} - [${finalInterest}]`;
  const adminHtml = generateAdminEmailHtml({ name, email, phone, interest, customInterest, message });

  // 1. Send Admin Email
  const adminMailOptions = {
    from: senderDisplay,
    to: receiverEmail,
    replyTo: email ? `"${name || 'Enquiry Sender'}" <${email}>` : fromEmail,
    subject: adminSubject,
    html: adminHtml,
    text: `New Enquiry from ${name} (${email}, ${phone || 'N/A'})\nInterest: ${finalInterest}\n\nMessage:\n${message}`,
    attachments: [
      {
        filename: 'Mom logo dark.png',
        path: path.join(process.cwd(), 'public', 'Mom logo dark.png'),
        cid: 'mom-logo'
      }
    ]
  };

  const adminInfo = await transporter.sendMail(adminMailOptions);

  // 2. Send Auto-Reply to Visitor (if visitor provided email)
  let userAutoReplyInfo = null;
  if (email && email.includes('@')) {
    try {
      const userSubject = `We've received your enquiry - Mad Over Music`;
      const userHtml = generateUserConfirmationHtml({ name, interest, customInterest });

      userAutoReplyInfo = await transporter.sendMail({
        from: senderDisplay,
        to: email,
        replyTo: fromEmail,
        subject: userSubject,
        html: userHtml,
        text: `Hi ${name},\nThank you for reaching out to Mad Over Music regarding ${finalInterest}. Our team will review your message and get back to you shortly.\n\nWarm regards,\nMad Over Music Team\ncontact@madovermusic.com`,
        attachments: [
          {
            filename: 'Mom logo dark.png',
            path: path.join(process.cwd(), 'public', 'Mom logo dark.png'),
            cid: 'mom-logo'
          }
        ]
      });
    } catch (userErr) {
      console.warn('Auto-reply could not be sent to visitor:', userErr.message);
    }
  }

  return {
    success: true,
    messageId: adminInfo.messageId,
    userAutoReply: !!userAutoReplyInfo
  };
}

/**
 * Verify SMTP Connection
 */
export async function verifySmtpConnection() {
  const transporter = createTransporter();
  try {
    const verified = await transporter.verify();
    return { success: true, verified };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
