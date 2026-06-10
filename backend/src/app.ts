import express from "express"
import cors from "cors"
import contactRouter from "./routes/contact"
import aiSummaryRouter from "./routes/ai-summary";

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

app.use("/api", contactRouter)

app.use("/api", aiSummaryRouter);

export default app