import { Router } from "express";

const router = Router();

router.post("/ai-summary", (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      message: "Text is required",
    });
  }

  // простая "AI имитация"
  const summary =
    "Summary: " +
    text.split(" ").slice(0, 10).join(" ") +
    (text.split(" ").length > 10 ? "..." : "");

  return res.json({
    success: true,
    summary,
  });
});

export default router;