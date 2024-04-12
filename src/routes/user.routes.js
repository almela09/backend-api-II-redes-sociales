import { Router } from "express";
import {isSuperAdmin} from "../middleware/isSuperAdmin.js"
import { auth } from "../middleware/auth.middlware.js";
import { getAllUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";

const router= Router();

router.get('/', auth, isSuperAdmin, getAllUser); 
router.get('/profile', auth, getUserProfile); //api/users/profile
router.put('/api/users', auth, updateUserProfile); //api/api/users

export default router; 