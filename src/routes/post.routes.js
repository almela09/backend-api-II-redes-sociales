import { Router } from "express";

import { auth } from "../middleware/auth.js";
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/post.controller.js";


const router= Router();
//en mongo el id es asi: _id 

router.post('/', auth, createPost);   //CREAR post
router.delete('/:id', auth, deletePost);   //Eliminar post por id
router.put('/:id', auth, updatePost);   //actualizar post por id
router.get('/own', auth, getAllPost);  //recuperar mis propios posts 
router.get('/', auth, getPostById);   //recuperar todos los posts

router.put('/like/:id')
export default router;