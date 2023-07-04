import express from "express";
const router=express.Router()
import { Authadmin, registerAdmin,adminLogout,allUsers,getSingleUser,addUser,deleteUser} from "../controller/adminController.js";
// import { protect } from "../middleware.js/authMiddleware.js";
// , getUsers, registerAdmin,editUser,deleteUser,,getSingleUser 

router.post('/',registerAdmin)
router.post('/auth',Authadmin)
router.post('/logout',adminLogout)
router.get('/allUsers',allUsers)
router.post('/addUser',addUser)
router.get('/:id',getSingleUser)
// router.post('/id:',editUser)
router.delete('/id:',deleteUser)









export default router;



