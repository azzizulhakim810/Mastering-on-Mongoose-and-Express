import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudent = async (email: string) => {
  const result = await StudentModel.findOne({ email })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudent,
}
