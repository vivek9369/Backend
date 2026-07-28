const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
dotenv.config()

let port = process.env.PORT || 4000
app.use(express.json())
app.use(cookieParser())
app.use("/api", authRouter)

const startServer = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}

startServer()