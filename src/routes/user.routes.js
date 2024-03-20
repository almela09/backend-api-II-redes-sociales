import { Router } from "express";
import {isSuperAdmin} from "../middleware/isSuperAdmin.js"
import { auth } from "../middleware/auth.middlware.js";
import { getAllUser, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";

const router= Router();

router.get('/', auth, isSuperAdmin, getAllUser); // ver todos los usuarios super_admin
router.get('/profile', auth, getUserProfile); //ver perfil usuario
router.put('/api/users', auth, updateUserProfile); //modificar perfil al menos un campo

export default router; 