import nodemailer from 'nodemailer';

// This function will handle the POST request
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate the form fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
      });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your email provider's SMTP server
      port: 587, // Port number, typically 587 for STARTTLS or 465 for SSL
      secure: false, // True for 465, false for 587
      auth: {
        user: 'your-email@example.com', // Your email
        pass: 'your-email-password', // Your email password
      },
    });

    // Send email
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender name and email
      to: 'info@yourcompany.com', // Receiver's email
      subject: 'New Contact Form Submission', // Email subject
      text: message, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`, // HTML body
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    return new Response(
      JSON.stringify({ success: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
