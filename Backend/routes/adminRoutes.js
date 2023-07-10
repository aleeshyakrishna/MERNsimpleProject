import express from "express";
const router=express.Router()
import { Authadmin, registerAdmin,adminLogout,allUsers,getUserData,addUser,deleteUser,editUser} from "../controller/adminController.js";
// import { protect } from "../middleware.js/authMiddleware.js";
// , getUsers, registerAdmin,editUser,deleteUser,,getSingleUser 

router.post('/',registerAdmin)
router.post('/auth',Authadmin)
router.post('/logout',adminLogout)
router.get('/allUsers',allUsers)
router.post('/addUser',addUser)
router.post('/updateuser/:id',editUser)
router.get('/edit/:id',getUserData)
router.get('/delete/:id',deleteUser)









export default router;



