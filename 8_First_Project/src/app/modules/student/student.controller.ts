import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    // Will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(studentData)

    // Send response
    res.status(200).json({
      success: true,
      message: 'A Student is created succesfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()

    res.status(200).json({
      success: true,
      message: 'All Students are retrieved succesfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getASingleStudent = async (req: Request, res: Response) => {
  try {
    const { email } = req.params

    const result = await StudentServices.getSingleStudent(email)

    res.status(200).json({
      success: true,
      message: 'A Student is retrieved succesfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getASingleStudent,
}
