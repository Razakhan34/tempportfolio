require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = async ({ user }) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "RazaVITtesting123@gmail.com",
      pass: "bqbe sfkj grlz iwjm",
    },
  });

  // Define email options
  const mailOptions = {
    from: {
      name: "Amit Meerchandi",
      address: "razavittesting123@gmail.com",
    },
    to: user.email,
    subject: "Regarding the to connect with Amit meerchandi",
    text: `Hello ${user.name}. We just received your query. Kindly have a patient we will get back to you soon with the response`,
    html: `<p>Hello ${user.name}. We just received your query. Kindly have a patient we will get back to you soon with the response</p>`,
  };

  const ownerOptions = {
    from: {
      name: user.name,
      address: user.email,
    },
    to: "razavittesting123@gmail.com",
    subject: user.subject,
    text: `1 response Got from ${user.name}.  \n Email:- ${user.email} \n Message:- ${user.message}`,
    html: `<p>1 response Got from <strong>${user.name}</strong>.</p><h3>Name:- ${user.name}</h3><h3>Email:- ${user.email}</h3><h3>Message:- ${user.message}</h3>`,
  };

  // Send email
  await transporter.sendMail(mailOptions);
  await transporter.sendMail(ownerOptions);
};
