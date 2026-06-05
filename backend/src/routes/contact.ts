import { Router } from "express";

const router = Router();

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid data format",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Message received",
  });
});

export default router;