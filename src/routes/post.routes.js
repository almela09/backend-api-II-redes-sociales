import { Router } from "express";


const router= Router();
//en mongo el id es asi: _id 

router.post('/api/posts');   //CREAR post
router.delete('/api/posts/:_id');   //Eliminar post por id
router.put('/api/posts');   //actualizar post por id
router.get('/api/posts/own');  //recuperar mis propios posts 
router.get('/api/posts');   //recuperar todos los posts
router.get('/api/posts/:_id');   //recuperar posts por id
router.get('/api/posts/:user_id');   //recuperar posts de un usuario
