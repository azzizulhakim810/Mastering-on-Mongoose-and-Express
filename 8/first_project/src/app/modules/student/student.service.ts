import { TStudent } from './student.interface';
import { Student } from './student.model';

// Insert
const createStudentIntoDB = async (studentData: TStudent) => {
  // built-in static method Class.method()
  // const result = await StudentModel.create(studentData);

  // built-in instance method <Create an instance & then use the method>
  const studentInstance = new Student(studentData);

  if (await studentInstance.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }

  const result = await studentInstance.save();

  return result;
};

// Retrieve
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
