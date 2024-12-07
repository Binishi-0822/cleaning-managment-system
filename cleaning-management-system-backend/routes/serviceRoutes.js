import express from 'express';
import {createService, deleteService} from '../controllers/serviceControllers.js'

const router = express.Router();

router.post('/services', createService);
router.delete('/services/:_id',deleteService)


export default router;