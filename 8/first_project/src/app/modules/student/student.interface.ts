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

export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  profileImg: string;
  isActive: 'active' | 'inActive';
  gender: 'male' | 'female';
  dateOfBirth: string;
  email?: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  address: {
    permanentAddresss: string;
    presentAddresss: string;
  };
  guardians: Guardian;
  localGuardian: LocalGuardian;
};
