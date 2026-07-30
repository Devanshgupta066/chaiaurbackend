import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//set and acccess cookies i.e. crud operation 
const app = express()

app.ise(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))//limits the data comes from json
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export {app}