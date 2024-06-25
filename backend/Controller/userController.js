const { sendEmail } = require("./sendEmail");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const user = {
      name,
      email,
      subject,
      message,
    };

    await sendEmail({
      user,
    });

    console.log("Email Sent!!!");

    res.status(200).json({
      success: true,
      message: `Email successfully sent to ${user.email}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
