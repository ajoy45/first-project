import { Schema,model} from 'mongoose';
import { Guardian, Student, Student, Student, User } from './student-interface';

const userSchema=new Schema<User>(
  {
    firstName:{
      type:String,required:true
  },
  middleName:{
      type:String
  },
  lastName:{
      type:String,required:true
  }
  })

  const guardianSchema=new Schema<Guardian>({
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    fatherContractNo: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccupation: {
      type: String,
      required: true,
    },
    motherContractNo: {
      type: String,
      required: true,
    },
  })

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
    id: { type: String },
    name:userSchema,
    gender:["male","female"],
    dateOfBirth:{type:String,},
    email:{type:String,required:true},
    contractNo:{type:String,required:true},
    emergencyContractNo:{type:String,required:true},
    bloodGroup:['A+', 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'],
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true},
    guardian:guardianSchema,
    profileImg:{type:String},
    isActive:["active","block"]
  });

  // create model

 export const StudentModel=model<Student>('Student',studentSchema);