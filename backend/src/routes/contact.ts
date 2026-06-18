import { Router } from "express";
import { resend } from "../services/email";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    // 1. письмо себе
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.OWNER_EMAIL!,
      subject: "New contact form message",
      html: `
        <h2>📩 New message from portfolio</h2>

        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📧 Email:</strong> ${email}</p>

        <hr />

        <p><strong>💬 Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. копия пользователю
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>

        <p>We received your message and will respond soon.</p>

        <hr />

        <p><strong>Your message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent",
    });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

export default router;