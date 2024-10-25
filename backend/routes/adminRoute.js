import express from "express";
import {
  addDoctor,
  allDoctors,
  appointmentsAdmin,
  cancelAppointment,
  adminDashboard,
  loginAdmin,
} from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.get("/dashboard", authAdmin, adminDashboard);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.post("/cancel-appointment", authAdmin, cancelAppointment);

export default adminRouter;
