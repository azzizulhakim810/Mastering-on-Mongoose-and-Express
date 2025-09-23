import { Student } from './student.interface';
import { StudentModel } from './student.model';

// Insert
const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData); // built-in static method Class.method()

  const studentInstance = new StudentModel(studentData);
  const result = await studentInstance.save();

  return result;
};

// Retrieve
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: number | string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
