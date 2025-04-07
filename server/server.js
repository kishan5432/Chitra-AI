import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"

const PORT  = process.env.PORT || 4000
const app = express()

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization","token"]
}

app.use(express.json())
app.use(cors(corsOptions))
await connectDB()

app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)

app.get("/", (req, res) => res.send("API working"))

app.listen(PORT, () => console.log(`server running on port ${PORT}`));