// import mongoose from 'mongoose'
// import { DB_NAME } from './constants'

import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js';

dotenv.config({
    path :'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.error("Database connection failed:", err)
})



/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("ERROR ", error)
        throw err
    }
})()
*/