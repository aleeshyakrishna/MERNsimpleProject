import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../util/generateTokens.js"




const registerUser=asyncHandler(async(req,res)=>{

   const {name,email,password}=req.body

  const userExist=await User.findOne({email})

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


const getUserProfile=asyncHandler(async(req,res)=>{
   const user={
      id:req.user._id,
      name:req.user.name,
      emai:req.user.email

   }
  
   res.status(200).json(user)
})


const updateUserProfile=asyncHandler(async(req,res)=>{
   const user= await User.findById(req.user._id)

   if(user){
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;


      if(req.body.password){

         user.password=req.body.password
      }

      const updatedUser =  await user.save()

   res.status(200).json({
      id:updatedUser._id,
      name:updatedUser.name,
      email:updatedUser.email
   })

   }else{
      res.status(404)
      throw new Error('USER NOT FOUND')
   }




  
   res.status(200).json({message: "Updatae User Profile"})
})



const logoutUser=asyncHandler(async(req,res)=>{


   res.cookie('jwt','',{
      httpOnly:true,
      expires:new Date(0)
   } )
  
   res.status(200).json({message: "User Logged Out"})
})




 const Authuser = asyncHandler(async(req,res)=>{

   const {email,password}=req.body

   const user=await User.findOne({email})
   if( user && (await user.matchPassword(password)) ){

   const token = generateToken(user._id);
   
   res.cookie('jwt', token, {
     httpOnly: true,
     secure: process.env.NODE_ENV !== 'development',
     sameSite: 'strict',
     maxAge: 30 * 24 * 60 * 60 * 1000
   });
   res.status(200).json({
      id:user._id,
      name:user.name,
      email:user.email
   })
  }else{
   res.status(401)
   throw new Error("Invalid UserName or Password")
  }

 })


 export {Authuser,logoutUser,updateUserProfile,getUserProfile,registerUser}