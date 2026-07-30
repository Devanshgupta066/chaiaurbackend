// require('dotenv').config({path: '../env'})
//other way
import dotenv from "dotenv"
import connectDB from "./db/db.js"
// const app = express()

dotenv.config()

connectDB();














/* other approach
//iife
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        })

        app.listen(PerformanceObserverEntryList.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR", error)
    }
})()
*/