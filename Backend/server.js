import path from 'path'
import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import logger from 'morgan'
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from './routes/adminRoutes.js'
import connectDb from "./Config/db.js"
import { notFound,handlerError } from "./middleware.js/errorMiddleware.js";
import bodyParser from 'body-parser'

dotenv.config()

connectDb();
 
const port= 5000
const app=express() 
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended : true }))
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(logger('dev'))


app.use('/api/users',userRoutes)
app.use('/api/admins',adminRoutes)

if(process.env.NODE_ENV === 'production'){
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname,'frontend/dist')))

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','dist',
    'index.html')))
}else{
    app.get('/',(req,res)=>res.send('Server is Ready'))

}


app.use(notFound)
app.use(handlerError)
app.listen(port,()=>console.log(`Server started on port ${port}`))