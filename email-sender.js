import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

const emailSend = async () => {
  try {
    const info = await transporter.sendMail({
      from: "Facebook ",
      to: "princewilly93@gmail.com",
      subject: "Job update",
      text: "Hello, you got the job",
      HTML: "<H1>Hello</h1>\n<p>You got the job</p>",
    });
    console.log(`Message sent: ${info}`);
  } catch (e) {
    console.log(e);
  }
};

emailSend();
