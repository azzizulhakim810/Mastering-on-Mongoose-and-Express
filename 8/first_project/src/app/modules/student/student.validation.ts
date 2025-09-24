import { z } from 'zod';

// ---------- Name Schema ----------
export const nameZodValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, "First Name can't be more than 20 characters")
    .nonempty('First Name is required'),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty('Last Name is required')
    .regex(/^[A-Za-z]+$/, { message: 'Last Name must contain only letters' }),
});

// ---------- Address Schema ----------
export const addressZodValidationSchema = z.object({
  permanentAddresss: z.string().nonempty('Permanent Address is required'),
  presentAddresss: z.string().nonempty('Present Address is required'),
});

// ---------- Guardians Schema ----------
export const guardiansZodValidationSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  fathersOccupation: z.string().nonempty("Father's occupation is required"),
  fathersContactNo: z.string().nonempty("Father's contact no is required"),

  motherName: z.string().nonempty("Mother's name is required"),
  mothersOccupation: z.string().nonempty("Mother's occupation is required"),
  mothersContactNo: z.string().nonempty("Mother's contact no is required"),
});

// ---------- Local Guardian Schema ----------
export const localGuardianZodValidationSchema = z.object({
  name: z.string().nonempty('Local guardian name is required'),
  occupation: z.string().nonempty('Local guardian occupation is required'),
  contactNo: z.string().nonempty('Local guardian contact no is required'),
});

// ---------- Student Schema ----------
export const studentZodValidationSchema = z.object({
  id: z.string().nonempty('Student ID is required'),
  password: z.string().max(20).nonempty('Password is required'),
  name: nameZodValidationSchema,
  profileImg: z.url().optional(),
  isActive: z.enum(['active', 'inActive']).default('active'),
  gender: z.enum(['male', 'female', 'other'], {
    error: 'Gender can be male | female | other',
  }),
  dateOfBirth: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  email: z.email('Invalid email format').nonempty('Email is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
    .optional(),
  // .or(z.literal('')), // allow optional empty string if needed
  address: addressZodValidationSchema,
  guardians: guardiansZodValidationSchema,
  localGuardian: localGuardianZodValidationSchema,
  isDeleted: z.boolean(),
});

export default studentZodValidationSchema;
