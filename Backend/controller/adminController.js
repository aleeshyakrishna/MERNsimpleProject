import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js';
// import { adminApiSlice } from '../../frontend/src/adminSlices/adminsApi.js';
import generateToken from '../util/generateTokens.js';
import User from '../models/userModel.js';
// import generateToken from "../util/generateTokens";

const Authadmin = asyncHandler(async(req,res)=>{
   
    const { email, password } = req.body;

   const admin = await Admin.findOne({ email });

   if(admin && (await admin.matchPassword(password))){
            generateToken(admin._id);

            res.json({
                _id:admin._id,
                name:admin.name,
                email:admin.email
            });
   }else{
    res.status(401);
    throw new Error('Invalid userid or email id')
   }
    
})

const registerAdmin = asyncHandler(async(req,res)=>{
    const {name, email, password} = req.body;
    const adminExist = await Admin.findOne({email});

    if(adminExist){
        res.status(400);
        throw new Error('admin already registerd')
    }

    const admin= Admin.create({
        name,
        email,
        password
    })

    if(admin){
        const token=generateToken(admin._id)

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
          });
          res.status(201).json({
             id:admin._id,
             name:admin.name,
             email:admin.email
          })
         }else{
          res.status(400)
          throw new Error("Invalid  Data")
         }

        
        

})

const adminLogout = asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })

    res.status(200).json({message:"admin logged out"})
})

const allUsers = asyncHandler(async(req,res)=>{
    const users= await User.find()
    if(users){
        res.status(200).json({users})
    }
})

const getSingleUser= asyncHandler(async(req,res)=>{
    const Id= req.body._id;
  
    const user= await User.findOne({_id:Id})
    if(user){
        res.status(200).json({user})
    }
})

const addUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    
    const userExist= await User.findOne({email})
    
    if( userExist){
        res.status(400)
        throw new Error("User Already Exist..")
        
    }
    
    const user=await User.create({
        name,
        email,
        password
    })

    if(user){

   
        const token = generateToken(user._id);
        
        res.cookie('jwt', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 30 * 24 * 60 * 60 * 1000
        });
        res.status(201).json({
           id:user._id,
           name:user.name,
           email:user.email
        })
       }else{
        res.status(400)
        throw new Error("Invalid user Data")
       }
})

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        const Id= req.body;
        const userExist = User.findOne({Id})
        if(userExist){
            const deletedUser = await User.findByIdAndDelete(id);
            if(deletedUser){
                res.json('deleted user!')
            }else{
                res.json(401).json("try again later")
            }
        }else{
            res.status(401).json("user not exist");
        }
    } catch (err) {
        console.log(err)
    }
})



export {Authadmin,registerAdmin,adminLogout,allUsers,getSingleUser,addUser,deleteUser}