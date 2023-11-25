
export type Guardian={
    fatherName:string;
    fatherOccupation:string;
    fatherContractNo:string;
    motherName:string;
    motherOccupation:string;
    motherContractNo:string;

    }
    export type User={
        firstName:string;
        middleName:string;
        lastName:string
    }
export type Student={
    id:string;
    name:User,
    gender:"male"|"female";
    email:string;
    dateOfBirth?:string;
    contractNo:string;
    emergencyContractNo:string;
    bloodGroup:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress:string;
    permanentAddress:string;
    guardian:Guardian;
    profileImg:string;
    isActive:["active","inActive"]
}