import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, Username } from './student.interface'

const usernameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: usernameSchema,
  gender: ['male', 'female'],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', '0+', '0-'],
  presentAddress: { type: String, required: true },
  permanAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inactive'],
})

export const StudentModel = model<Student>('Student', studentSchema)
