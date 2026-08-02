import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//set and acccess cookies i.e. crud operation 
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//limits the data comes from json
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes imort

import userRouter from './routes/user.routes.js'

//router declaration
app.use("/api/v1/users", userRouter)

// https://localhost:8000/api/v1/useres/register
export {app}