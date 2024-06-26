import { Router } from "express";
import { auth } from "../middleware/auth.middlware.js";
import { createPost, deletePost, getAllPosts, getMyOwnPost, getPostById, putLikes, removeLikes, updatePost } from "../controllers/post.controller.js"


const router= Router();

router.post('/', auth, createPost);  
router.delete('/:id', auth, deletePost);  
router.put('/:id', auth, updatePost);   
router.get('/own', auth, getMyOwnPost);  
router.get('/',auth,getAllPosts )
router.get('/:id', auth, getPostById);   
router.put('/like/:id', auth, putLikes); 
router.delete('/like/:id', auth, removeLikes); 

export default router;