import { Model } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fathersOccupation: string;
  fathersContactNo: string;

  motherName: string;
  mothersOccupation: string;
  mothersContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TAddress = {
  permanentAddresss: string;
  presentAddresss: string;
};

export type TStudent = {
  id: string;
  name: TName;
  profileImg?: string;
  isActive: 'active' | 'inActive';
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  emergencyContactNo?: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  address: TAddress;
  guardians: TGuardian;
  localGuardian: TLocalGuardian;
};

// Method type declearation
export type StudentMethod = {
  // the function
  isUserExists(id: string): Promise<TStudent | null>; // either return TStudent type or null
};

// Model declearation
export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethod
>;
