import { Router } from "express";



const router = Router();

router.use('/auth');
router.use('/users');
router.use('/posts');

export default router;