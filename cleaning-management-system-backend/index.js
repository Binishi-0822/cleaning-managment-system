import express from 'express'
import dotenv from 'dotenv'
import cors from  'cors'
import  authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingsRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js'
import http from 'http';


dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())

import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        const response = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully`)
    }catch(error){
        console.log(error)
    }   
}


connectDB();

//Routes
app.use("/api/auth", authRoutes);

app.use("",bookingRoutes)

app.use("/admin",serviceRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})

