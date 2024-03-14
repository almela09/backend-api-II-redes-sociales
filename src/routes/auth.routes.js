import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";


const router = Router();
router.post('/api/auth', register);
router.post('/api/auth',login);

