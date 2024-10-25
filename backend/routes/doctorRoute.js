import express from "express";
import {
  appointmentComplete,
  appointmentsDoctor,
  cancelAppointment,
  doctorDashboard,
  doctorList,
  doctorProfile,
  loginDoctor,
  updateProfile,
} from "../controllers/doctorController.js";
import authDoctor from "../middleware/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.post("/login", loginDoctor);
doctorRouter.post("/appointment-cancel", authDoctor, cancelAppointment);
doctorRouter.post("/appointment-complete", authDoctor, appointmentComplete);
doctorRouter.post("/update-profile", authDoctor, updateProfile);
doctorRouter.get("/profile", authDoctor, doctorProfile);

export default doctorRouter;
