export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type Username = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contact: string
  address: string
}

export type Student = {
  id: string
  name: Username
  gender: 'male' | 'female'
  email: string
  dateOfBirth: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | '0+' | '0-'
  presentAddress: string
  permanAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'inactive'
}
