import { model, Schema } from 'mongoose';
// import validator from 'validator';
import {
  StudentMethods,
  StudentModel,
  TAddress,
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from './student.interface';

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true, // Trim usual Spaces <"    Azzizul   "> ---> <"Azzizul">
    maxlength: [20, "First Name can't be more than 10 Characters"], // Custom message in the validation

    // using Validator Js to custom validate
    // validate: {
    //   // Custom Validator
    //   validator: function (value: string) {
    //     const firstNameStr =
    //       value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not an accepted format',
    // },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not accepted',
    // },
  },
});

const addressSchema = new Schema<TAddress>({
  permanentAddresss: { type: String, required: true },
  presentAddresss: { type: String, required: true },
});

const guardiansSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fathersOccupation: { type: String, required: true },
  fathersContactNo: { type: String, required: true },

  motherName: { type: String, required: true },
  mothersOccupation: { type: String, required: true },
  mothersContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

// Added the custom model & method inside schema | Static only requires Model not method
const studentSchema = new Schema<TStudent, StudentModel>({
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
  // Validation using "Validator" Library
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not valid email type',
    // },
  },
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

// Using the static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Using the instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });

//   return existingUser;
// };

// Creating model<type>(name, schema)
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
