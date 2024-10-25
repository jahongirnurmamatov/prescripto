import express from 'express';
import { appointmentsDoctor, doctorList, loginDoctor } from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor);
doctorRouter.post('/login',loginDoctor);

export default doctorRouter;