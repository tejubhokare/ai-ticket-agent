import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT= process.env.PORT || 3000;


app.use(cors())

app.use(express.json())


mongoose
    .connect(process.env.MOGO_URI)
    .then( () => {
        console.log("Mongo DB connected ");
        app.listen(PORT,() => console.log("Server started at `$PORT`"))
    })
    .catch((err)=> console.error("MongoDB error:", err))