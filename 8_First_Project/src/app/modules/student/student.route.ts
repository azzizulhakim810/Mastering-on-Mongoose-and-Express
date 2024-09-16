import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

// Will call Controller func
router.post('/create-student', StudentController.createStudent)

router.get('/', StudentController.getAllStudents)

router.get('/:email', StudentController.getASingleStudent)

export const StudentRoutes = router
