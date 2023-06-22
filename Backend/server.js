import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import connectDb from "./Config/db.js"
import { notFound,handlerError } from "./middleware.js/errorMiddleware.js";
dotenv.config()

connectDb();
 
const port=process.env.PORT || 5000
const app=express() 

app.use(express.json()) 
app.use(express.urlencoded({extended : true }))
app.use(cookieParser())

app.use('/api/users',userRoutes)
app.get('/',(req,res)=>res.send('Server is Ready'))

app.use(notFound)
app.use(handlerError)
app.listen(port,()=>console.log(`Server started on port ${port}`))