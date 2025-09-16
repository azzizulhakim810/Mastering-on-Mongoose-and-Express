export type Guardian = {
  fatherName: string;
  fathersOccupation: string;
  fathersContactNo: string;

  motherName: string;
  mothersOccupation: string;
  mothersContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};

export type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Address = {
  permanentAddresss: string;
  presentAddresss: string;
};

export type Student = {
  id: string;
  name: Name;
  profileImg: string;
  isActive: 'active' | 'inActive';
  gender: 'male' | 'female';
  dateOfBirth: string;
  emergencyContactNo: string;
  email?: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  address: Address;
  guardians: Guardian;
  localGuardian: LocalGuardian;
};
