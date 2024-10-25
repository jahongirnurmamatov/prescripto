import express from 'express';
import { appointmentComplete, appointmentsDoctor, cancelAppointment, doctorList, loginDoctor } from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList);
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor);
doctorRouter.post('/login',loginDoctor);
doctorRouter.post('/appointment-cancel',authDoctor,cancelAppointment);
doctorRouter.post('/appointment-complete',authDoctor,appointmentComplete);

export default doctorRouter;