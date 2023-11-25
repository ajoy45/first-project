
import express from "express"
import { studentController } from "./student.controller";
const router=express.Router();
// will call controler function
router.post('/create-student',studentController.createStudent);
router.get('/',studentController.getAllStudent)
router.get('/:studentId',studentController.getSingleStudent)
export const studentsRouts=router;