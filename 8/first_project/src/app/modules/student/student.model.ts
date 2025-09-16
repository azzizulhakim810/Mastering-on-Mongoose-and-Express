import { model, Schema } from 'mongoose';
import {
  Address,
  Guardian,
  LocalGuardian,
  Name,
  Student,
} from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  permanentAddresss: { type: String, required: true },
  presentAddresss: { type: String, required: true },
});

const guardiansSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fathersOccupation: { type: String, required: true },
  fathersContactNo: { type: String, required: true },

  motherName: { type: String, required: true },
  mothersOccupation: { type: String, required: true },
  mothersContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: nameSchema,
  profileImg: { type: String },
  isActive: ['active', 'inActive'],
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  emergencyContactNo: { type: String },
  email: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  address: addressSchema,
  guardians: guardiansSchema,
  localGuardian: localGuardianSchema,
});

// Creating model<type>(name, schema)
export const StudentModel = model<Student>('Student', studentSchema);
