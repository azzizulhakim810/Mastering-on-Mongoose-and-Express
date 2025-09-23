import Joi from 'joi';

// ---------- Name Schema ----------
const nameJoiValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .custom((value, helpers) => {
      const formatted =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (formatted !== value) {
        return helpers.error('any.invalid', { value }); // use helpers.error
      }
      return value;
    })
    .messages({
      'any.invalid': '{#value} is not an accepted format',
      'string.max': "First Name can't be more than 20 characters",
      'any.required': 'First Name is required',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': '{#value} is not accepted',
      'any.required': 'Last Name is required',
    }),
});

// ---------- Address Schema ----------
const addressJoiValidationSchema = Joi.object({
  permanentAddresss: Joi.string().required(),
  presentAddresss: Joi.string().required(),
});

// ---------- Guardians Schema ----------
const guardiansJoiValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fathersOccupation: Joi.string().required(),
  fathersContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  mothersOccupation: Joi.string().required(),
  mothersContactNo: Joi.string().required(),
});

// ---------- Local Guardian Schema ----------
const localGuardianJoiValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
});

// ---------- Student Schema ----------
const studentJoiValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: nameJoiValidationSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('active', 'inActive').default('active'),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': 'Gender can be male | female | other',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  emergencyContactNo: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not valid email type',
    'any.required': 'Email is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .messages({
      'any.only': '{#value} is not defined',
    }),
  address: addressJoiValidationSchema.required(),
  guardians: guardiansJoiValidationSchema.required(),
  localGuardian: localGuardianJoiValidationSchema.required(),
});

export default studentJoiValidationSchema;
