import { Router } from "express";


const router= Router();

router.get('/api/users'); // ver todos los usuarios super_admin
router.get('/api/users/profile'); //ver perfil usuario
router.put('/api/users'); //modificar perfil al menos un campo
