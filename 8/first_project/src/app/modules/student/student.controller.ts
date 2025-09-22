import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

// Insert
const createStudent = async (req: Request, res: Response) => {
  try {
    const JoiValidation = Joi.object({
      id: Joi.string(),
      name: {
        firstName: Joi.string().alphanum().max(20).required(),
        middleName: Joi.string(),
        lastName: Joi.string().alphanum().max(20).required(),
      },
      gender: Joi.string().required().valid(['male', 'female', 'other']),
    });

    const student = req.body;

    const result = await StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student Creation Successfull',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

// Retrieve
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.id;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Students is retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
