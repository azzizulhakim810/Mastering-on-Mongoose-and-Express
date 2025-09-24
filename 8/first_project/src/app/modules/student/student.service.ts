import { TStudent } from './student.interface';
import { Student } from './student.model';

// Insert
const createStudentIntoDB = async (studentData: TStudent) => {
  // Custom instance method
  if (await await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }

  // built-in static method Class.method()
  const result = await Student.create(studentData);

  // built-in instance method <Create an instance & then use the method>
  // const studentInstance = new Student(studentData);

  // Custom instance method
  // if (await studentInstance.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  // const result = await studentInstance.save();

  return result;
};

// Retrieve
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

// Retrieve a single student ----- Using findOne()
// const getSingleStudentFromDB = async (id: number | string) => {
//   const result = await Student.findOne({ id });
//   return result;
// };

// Retrieve a single student ----- Using aggregation([])
const getSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};

// Delete(update) a single student
const deleteSingleStudentFromDB = async (id: number | string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
