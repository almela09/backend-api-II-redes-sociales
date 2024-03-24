import { Router } from "express";
import { auth } from "../middleware/auth.middlware.js";
import { createPost, deletePost, getAllPost, getMyOwnPost, getPostById, putLikes, updatePost } from "../controllers/post.controller.js";


const router= Router();

router.post('/', auth, createPost);  
router.delete('/:id', auth, deletePost);  
router.put('/:id', auth, updatePost);   
router.get('/own', auth, getMyOwnPost);  
router.get('/', auth,getAllPost )
router.get('/', auth, getPostById);   
router.put('/like/:id', auth, putLikes); 

export default router;