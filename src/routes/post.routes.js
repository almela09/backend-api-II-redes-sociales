import { Router } from "express";
// import { createPost, getPostById, updatePostById } from "../controllers/post.controller.js";
import { auth } from "../middleware/auth.js";


const router= Router();
//en mongo el id es asi: _id 

router.post('/api/posts');   //CREAR post
router.delete('/:_id');   //Eliminar post por id
router.put('/:_id');   //actualizar post por id
router.get('/own');  //recuperar mis propios posts 
router.get('/' );   //recuperar todos los posts
router.get('/:_id');   //recuperar posts por id

router.put('/like/:_id')
export default router;