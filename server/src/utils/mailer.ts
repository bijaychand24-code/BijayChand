import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL || user;

  if (!host || !user || !pass) {
    console.log('ℹ️ SMTP settings not fully configured. Skipping actual email sending.');
    console.log('📧 Received Contact Message:', data);
    return true;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${data.name}" <${user}>`,
      replyTo: data.email,
      to: recipient,
      subject: `Portfolio Contact Form: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px;">
          <h2>New Message from Portfolio Website</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f4f4f5; padding: 15px; borderRadius: 8px;">${data.message}</p>
        </div>
      `,
    });

    console.log('✅ Contact notification email sent successfully.');
    return true;
  } catch (error) {
    console.error('❌ Failed to send email via nodemailer:', error);
    return false;
  }
};
