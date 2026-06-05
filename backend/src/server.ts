import express from "express"
import cors from "cors"
import type { Request, Response } from "express"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})