import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent=async(req:Request,res:Response)=>{
try{
    const {student}=req.body;
    //   will call service function to send this data
     const result=await studentServices.createStudentInDb(student);
    //  send response
    res.status(200).json({
        success:true,
        message:"student is created successfully",
        data:result
    })
}catch(err){
    console.log(err)
}

}

const getAllStudent=async(req:Request,res:Response)=>{
      try{
         const result=await studentServices.getAllStudentFromDb();
         res.status(200).json({
            success:true,
            message:"data retrieved",
            data:result
         })
      }catch(err){
        console.log(err)
      }
}

const getSingleStudent=async(req:Request,res:Response)=>{
    try{
        const studentId=req.params.studentId
    const result=await studentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
        success:true,
        message:"student is retrieved",
        data:result
     })
    }catch(err){
        console.log(err)
    }
}
export const studentController={
      createStudent,getAllStudent,getSingleStudent
}