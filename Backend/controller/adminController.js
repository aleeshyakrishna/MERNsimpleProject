import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js';
// import { adminApiSlice } from '../../frontend/src/adminSlices/adminsApi.js';
import generateToken from '../util/generateTokens.js';
import User from '../models/userModel.js';
// import generateToken from "../util/generateTokens";

const Authadmin = asyncHandler(async(req,res)=>{
    try{
        console.log("hiiiiiiiiiiiiiiiii");
    const { email, password } = req.body;

   const admin = await Admin.findOne({ email });

    console.log(admin,"admins");

   if(admin && (await admin.matchPassword(password))){
    const Id=admin._id;
    // console.log(Id,"admins id,,,,,,,,,,,,,,,,");
    // console.log('uirgdhihoh');
    const token = generateToken(Id);

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

    console.log();
            res.json({
                _id:admin._id,
                name:admin.name,
                email:admin.email
            });
    }
    else{
        const err="not exists"
        res.json()
    }
   
   }catch(err){
    console.log("<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(err);
    res.json(err)
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

    const admin=await Admin.create({
        name,
        email,
        password
    })

    if(admin){
        console.log(admin._id,"thisssssssss");
        const token=generateToken(admin._id)
        
        
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
          });
          res.status(201).json({
            mess:"Admin Registered successfully!"
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

        console.log(users);
        res.status(200).json(users)
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

const deleteUser = async (req,res) => {
    try {
    console.log("iuyiyiyiyoyo");
        await User.deleteOne({ _id: req.params.id});
        res.status(200).json({ message: "User deleted successfully"})
    } catch (error) {
        res.status(409).json({ message: error.message});
    }


}
const editUser=(req,res)=>{
    console.log("hellow");
    console.log(req.body,"body");
    try{

        const{email,name}=req.body

        User.findOneAndUpdate({_id:req.params.id},{$set:{
           email,name
        }}).then((result) => {
          
            res.json(result)
            
        }).catch((err) => {
            
            res.json(err)
            
        });
        
    }
    catch(err){
        res.json(err)
        
    }
    

}

const getUserData=(req,res)=>{

    User.findOne({_id:req.params.id}).then(response=>{
        console.log('////////oij/')+
        
        console.log(response);
        res.json(response)
    }).catch(err=>{
        res.json(err)
    })

}



export {Authadmin,registerAdmin,adminLogout,allUsers,getSingleUser,addUser,deleteUser,editUser,getUserData}