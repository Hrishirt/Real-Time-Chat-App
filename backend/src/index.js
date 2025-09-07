import express from "express"
import AuthRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB  } from "./lib/db.js";

dotenv.config()
const app = express()

app.use(express.json());
app.use("/api/auth", AuthRoutes)

const PORT = process.env.PORT

app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
    connectDB()
})