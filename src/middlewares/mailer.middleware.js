import nodemailer from "nodemailer";

export const sendConfirmationMail = async (req, res, next) => {
  const { name, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  const mailOptions = {
    from: "codingninjas2k16@gmail.com",
    to: email,
    subject: "Application Received",
    text: `Dear ${name},

Thank you for applying for the Job. We have received your application and our recruitment team is currently reviewing it.

We appreciate your interest in joining our team and will be in touch with you soon regarding the next steps in the recruitment process. If you have any questions in the meantime, please feel free to reach out to us.

Thank you again for your interest in our company.

Best regards,

Abcd
HR
abc company
company details

From Easily APP.
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    next();
  } catch (error) {
    console.log("Failed to send an email: \n", error);
    next();
  }
};
