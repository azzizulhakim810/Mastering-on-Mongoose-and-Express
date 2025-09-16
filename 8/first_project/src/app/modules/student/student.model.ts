import { Schema } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  profileImg: { type: String },
  isActive: ['active', 'inActive'],
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  address: {
    permanentAddresss: { type: String, required: true },
    presentAddresss: { type: String, required: true },
  },
  guardians: {
    fatherName: { type: String, required: true },
    fathersOccupation: { type: String, required: true },
    fathersContactNo: { type: String, required: true },

    motherName: { type: String, required: true },
    mothersOccupation: { type: String, required: true },
    mothersContactNo: { type: String, required: true },
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
  },
});
