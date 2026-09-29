/**
 * Mad Over Music - Premium Responsive Email Templates
 * Designed for light theme excellence with editorial styling.
 */

export function generateAdminEmailHtml({ name, email, phone, interest, customInterest, message, date }) {
  const finalInterest = interest === 'Other' && customInterest
    ? `Other: ${customInterest}`
    : (interest || 'General Inquiry');

  const safeName = escapeHtml(name || 'Anonymous Visitor');
  const safeEmail = escapeHtml(email || 'Not provided');
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeInterest = escapeHtml(finalInterest);
  const safeMessage = escapeHtml(message || 'No message provided.').replace(/\n/g, '<br/>');

  const baseUrl = process.env.PUBLIC_URL || process.env.VITE_APP_URL || 'https://madovermusic.com';
  // Use CID embedded image to guarantee it renders reliably anywhere
  const logoUrl = 'cid:mom-logo'; 

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry | Mad Over Music</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F3F1EC;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: #101010;
      -webkit-font-smoothing: antialiased;
    }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; outline: none; text-decoration: none; display: block; }
    .email-container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E7E4DE; border-radius: 12px; overflow: hidden; }
    .mobile-stack { display: inline-block; }
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; }
      .mobile-padding { padding-left: 16px !important; padding-right: 16px !important; }
      .mobile-stack { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
      .mobile-btn { width: 100% !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F3F1EC; font-family: Inter, Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F3F1EC; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- HEADER LOGO -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
          <tr>
            <td align="center">
              <img src="${logoUrl}" alt="MAD OVER MUSIC" width="160" style="width: 160px; max-width: 100%; display: block; margin: 0 auto; outline: none; border: 0;">
              <p style="margin: 8px 0 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6B6B6B;">
                Incubated at STPI &middot; MeitY, Govt. of India
              </p>
            </td>
          </tr>
        </table>

        <!-- MAIN CARD -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" class="email-container" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E7E4DE; border-radius: 12px;">
          <!-- RED ACCENT -->
          <tr>
            <td height="4" style="background-color: #E31B23; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>
          
          <!-- CONTENT PADDING -->
          <tr>
            <td class="mobile-padding" style="padding: 40px 48px;">
              
              <!-- STATUS & HEADING -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td align="left">
                    <span style="display: inline-block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #E31B23; margin-bottom: 12px;">
                      &bull; New Website Enquiry
                    </span>
                    <h1 style="margin: 0 0 6px; font-size: 26px; font-weight: 800; color: #101010; line-height: 1.2;">
                      You've received a new enquiry
                    </h1>
                    <h2 style="margin: 0; font-size: 24px; font-weight: 400; color: #6B6B6B; line-height: 1.2;">
                      from <strong>${safeName}</strong>
                    </h2>
                  </td>
                </tr>
              </table>

              <!-- INTRODUCTION -->
              <p style="margin: 0 0 32px; font-size: 15px; color: #666666; line-height: 1.6;">
                A new enquiry has been submitted through the MAD OVER MUSIC website.
              </p>

              <!-- SENDER DETAILS -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding-bottom: 12px; border-bottom: 1px solid #E7E4DE;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6B6B6B;">
                      Sender Details
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #E7E4DE;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="140" style="font-size: 14px; color: #6B6B6B;">Name</td>
                        <td style="font-size: 14px; font-weight: 600; color: #101010;">${safeName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #E7E4DE;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="140" style="font-size: 14px; color: #6B6B6B;">Email</td>
                        <td style="font-size: 14px; font-weight: 600; color: #E31B23;">
                          <a href="mailto:${safeEmail}" style="color: #E31B23; text-decoration: none;">${safeEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #E7E4DE;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="140" style="font-size: 14px; color: #6B6B6B;">Phone</td>
                        <td style="font-size: 14px; font-weight: 600; color: #101010;">
                          ${safePhone !== 'Not provided' ? `<a href="tel:${safePhone}" style="color: #101010; text-decoration: none;">${safePhone}</a>` : safePhone}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="140" style="font-size: 14px; color: #6B6B6B;">Interested in</td>
                        <td style="font-size: 14px; font-weight: 600; color: #E31B23;">
                          <span style="background-color: #FCE8E8; padding: 4px 10px; border-radius: 4px;">${safeInterest}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 36px;">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6B6B6B;">
                      Message / Details
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #FAF9F6; border-left: 3px solid #E31B23; padding: 20px;">
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #101010;">
                      ${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTAs -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- Primary Button -->
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0" class="mobile-stack" style="margin-right: 12px;">
                      <tr>
                        <td align="center" style="border-radius: 6px; background-color: #E31B23;">
                          <a href="mailto:${safeEmail}?subject=Re:%20MAD%20OVER%20MUSIC%20Enquiry%20(${encodeURIComponent(finalInterest)})" 
                             class="mobile-btn"
                             style="display: inline-block; padding: 14px 24px; font-size: 14px; font-weight: 700; color: #FFFFFF; text-decoration: none; border-radius: 6px;">
                            REPLY TO ENQUIRY &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Secondary Button -->
                    ${phone && phone !== 'Not provided' ? `
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0" class="mobile-stack">
                      <tr>
                        <td align="center" style="border-radius: 6px; background-color: #101010;">
                          <a href="tel:${safePhone}" 
                             class="mobile-btn"
                             style="display: inline-block; padding: 14px 24px; font-size: 14px; font-weight: 700; color: #FFFFFF; text-decoration: none; border-radius: 6px;">
                            CALL
                          </a>
                        </td>
                      </tr>
                    </table>
                    ` : ''}
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
        
        <!-- FOOTER -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-top: 32px; text-align: center; width: 100%; max-width: 600px;">
          <tr>
            <td align="center" style="padding-bottom: 16px;">
              <img src="${logoUrl}" alt="MAD OVER MUSIC" width="110" style="width: 110px; max-width: 100%; display: block; margin: 0 auto; outline: none; border: 0; opacity: 0.8;">
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; color: #101010;">
                MAD OVER MUSIC
              </p>
              <p style="margin: 0 0 16px; font-size: 11px; color: #6B6B6B;">
                A venture of Desi Tunes Entertainment Pvt. Ltd.
              </p>
              <p style="margin: 0 0 16px; font-size: 11px; color: #6B6B6B;">
                <a href="${baseUrl}" style="color: #6B6B6B; text-decoration: underline;">Website</a> &middot; 
                <a href="${baseUrl}#contact" style="color: #6B6B6B; text-decoration: underline;">Contact</a> &middot; 
                <a href="https://instagram.com/madovermusic" style="color: #6B6B6B; text-decoration: underline;">Instagram</a> &middot; 
                <a href="https://linkedin.com/company/madovermusic" style="color: #6B6B6B; text-decoration: underline;">LinkedIn</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #A0A0A0; line-height: 1.5;">
                This is an automated notification from the MAD OVER MUSIC website.<br/>
                Do not reply to this automated notification if not required.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Auto-reply confirmation email sent to the user (Redesigned matching brand)
 */
export function generateUserConfirmationHtml({ name, interest, customInterest }) {
  const safeName = escapeHtml(name || 'there');
  const finalInterest = interest === 'Other' && customInterest
    ? `"${customInterest}"`
    : (interest ? `"${interest}"` : 'our platform');

  const baseUrl = process.env.PUBLIC_URL || process.env.VITE_APP_URL || 'https://madovermusic.com';
  const logoUrl = 'cid:mom-logo'; 

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your Enquiry | Mad Over Music</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F3F1EC;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: #101010;
      -webkit-font-smoothing: antialiased;
    }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; outline: none; text-decoration: none; display: block; }
    .email-container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E7E4DE; border-radius: 12px; overflow: hidden; }
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; }
      .mobile-padding { padding-left: 16px !important; padding-right: 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F3F1EC; font-family: Inter, Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F3F1EC; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- HEADER LOGO -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
          <tr>
            <td align="center">
              <img src="${logoUrl}" alt="MAD OVER MUSIC" width="160" style="width: 160px; max-width: 100%; display: block; margin: 0 auto; outline: none; border: 0;">
              <p style="margin: 8px 0 0; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6B6B6B;">
                Incubated at STPI &middot; MeitY, Govt. of India
              </p>
            </td>
          </tr>
        </table>

        <!-- MAIN CARD -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" class="email-container" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E7E4DE; border-radius: 12px;">
          <!-- RED ACCENT -->
          <tr>
            <td height="4" style="background-color: #E31B23; line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>
          
          <!-- CONTENT PADDING -->
          <tr>
            <td class="mobile-padding" style="padding: 40px 48px;">
              <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 800; color: #101010; line-height: 1.2;">
                Thank you for reaching out, ${safeName}!
              </h2>
              <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #444444;">
                We've successfully received your enquiry regarding <strong style="color: #E31B23;">${escapeHtml(finalInterest)}</strong>.
              </p>
              <p style="margin: 0 0 24px; font-size: 15px; line-height: 1.6; color: #444444;">
                Our team at <strong>Mad Over Music</strong> is reviewing your message and one of our specialists will get back to you shortly.
              </p>
              
              <div style="background-color: #FAF9F6; border-left: 3px solid #E31B23; padding: 18px 20px; border-radius: 0 4px 4px 0; margin-bottom: 28px;">
                <p style="margin: 0; font-size: 14px; color: #555555; line-height: 1.6;">
                  If your request is urgent, feel free to write to us directly at <a href="mailto:contact@madovermusic.com" style="color: #E31B23; font-weight: 700; text-decoration: none;">contact@madovermusic.com</a>.
                </p>
              </div>

              <p style="margin: 0; font-size: 15px; color: #101010; font-weight: 700; line-height: 1.5;">
                Warm regards,<br/>
                <span style="font-weight: 400; color: #666666;">Team Mad Over Music<br/>Desi Tune Entertainment Pvt. Ltd.</span>
              </p>
            </td>
          </tr>
        </table>
        
        <!-- FOOTER -->
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-top: 32px; text-align: center; width: 100%; max-width: 600px;">
          <tr>
            <td align="center" style="padding-bottom: 16px;">
              <img src="${logoUrl}" alt="MAD OVER MUSIC" width="110" style="width: 110px; max-width: 100%; display: block; margin: 0 auto; outline: none; border: 0; opacity: 0.8;">
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin: 0; font-size: 11px; color: #A0A0A0;">
                &copy; ${new Date().getFullYear()} Desi Tune Entertainment Pvt. Ltd. All rights reserved.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
