import { Router } from "express";
import { transporter } from "../services/mailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid data format",
    });
  }

  try {
    // 1. письмо владельцу
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.OWNER_EMAIL,
      subject: "New contact form message",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    // 2. копия пользователю
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We received your message",
      text: `Hi ${name}, we received your message and will respond soon.`,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
  
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

export default router;