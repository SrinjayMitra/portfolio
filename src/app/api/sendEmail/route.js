import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // 1. Parse JSON body from the request
    const { email, subject, message ,phno ,name } = await request.json();

    // 2. Configure the transporter using environment variables (.env.local)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'srinjaymitratrading918@gmail.com', // e.g., yourname@gmail.com
        pass: 'nswrxfvqnvrrvpif', // your Gmail App Password
      },
    });

    // 3. Prepare mail options
    const mailOptions = {
      from: 'srinjaymitratrading918@gmail.com',
      to: 'srinjaymitra918@gmail.com', // Where you want to receive your form submissions
      subject: `SrinjayDevStudio| From ${name} | ${subject} | New Inquiry`,
      text: `Ek Tuhi Nirankar\nSender's Name: ${name}\nSender's Email: ${email}\nSender's Phone No.: ${phno}\n\nMessage:\n${message}\nGood Luck,\nKintsugi Dev Studio`,
    };
    const confirmationEmail = {
      from: 'srinjaymitra918@gmail.com',
      to: email,
      subject: 'Thank you for your message',
      text: `Dear ${name},

Thank you for contacting us. We have received your message and will get back to you soon.

Best regards,
Srinjay`
    };  // 4. Send the email
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationEmail)
    ]);
    // 5. Return a successful response
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
