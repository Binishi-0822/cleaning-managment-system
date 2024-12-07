import express from 'express';
import {userRegister, loginUser} from '../controllers/authControllers.js'

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', loginUser)
router.post('/verify',loginUser)


export default router;