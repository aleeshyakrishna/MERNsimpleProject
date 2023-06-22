import mongoose from "mongoose";
import dotenv from "dotenv"

const connectDb= async ()=>{


try {
    const conn= await mongoose.connect(process.env.MONGO_URI)
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
} catch (error) {
    console.error(`ERROR : ${error.message}`)  
    process.exit(1)
}
 

}

export default connectDb
