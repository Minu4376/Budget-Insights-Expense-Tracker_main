const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/transactions",require("./routes/transactionRoutes"))
app.use("/api/ai",require("./routes/aiRoutes"))

app.listen(3000,()=>console.log("Server running"))