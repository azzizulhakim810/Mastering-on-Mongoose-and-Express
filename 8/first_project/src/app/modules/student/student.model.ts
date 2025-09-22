import { model, Schema } from 'mongoose';
import {
  Address,
  Guardian,
  LocalGuardian,
  Name,
  Student,
} from './student.interface';

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: [true, 'First Name is required'] }, // Custom message in the validation
  middleName: { type: String, required: [true, 'Middle Name is required'] },
  lastName: { type: String, required: [true, 'Last Name is required'] },
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
  id: { type: String, required: true, unique: true },
  name: {
    type: nameSchema,
    required: [true, 'Name is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    default: 'active',
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: 'Gender can be male | female | other',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  emergencyContactNo: { type: String },
  email: { type: String, required: true, unique: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not defined', // We can show the user input using {VALUE}
    },
  },
  address: {
    type: addressSchema,
    required: true,
  },
  guardians: {
    type: guardiansSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
});

// Creating model<type>(name, schema)
export const StudentModel = model<Student>('Student', studentSchema);
