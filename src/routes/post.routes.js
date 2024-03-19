import { Router } from "express";
import { createPost, getAllPost, getPostById, updatePostById } from "../controllers/post.controller";



const router= Router();
//en mongo el id es asi: _id 

router.post('/api/posts', auth, createPost);   //CREAR post
router.delete('/:_id', auth, deletePost);   //Eliminar post por id
router.put('/:_id', auth, updatePostById);   //actualizar post por id
router.get('/own', auth, getMyPost);  //recuperar mis propios posts 
router.get('/', auth, getAllPost);   //recuperar todos los posts
router.get('/:_id',auth,getPostById);   //recuperar posts por id
router.get('/api/posts/:user_id');   //recuperar posts de un usuario

export default router;