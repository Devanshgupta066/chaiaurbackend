// require('dotenv').config({path: '../env'})
//other way
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import {app} from "./app.js"
// const app = express()

dotenv.config()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at post : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONgO db connection field !!! ", err);
})













/* other approach
//iife
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        app.on("errrror", (error) => {
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