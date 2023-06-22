import express from "express";
const router=express.Router()
import { Authuser, getUserProfile, logoutUser, registerUser,updateUserProfile } from "../controller/userController.js";
import { protect } from "../middleware.js/authMiddleware.js";


router.post('/',registerUser)
router.post('/auth',Authuser)
router.post('/logout',logoutUser)
router.route('/profile')
.get(protect, getUserProfile)
.put(protect,updateUserProfile)




export default router;



