import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:id', StudentControllers.getSingleStudent);

router.patch('/:id', StudentControllers.updateSingleStudent);

router.delete('/:id', StudentControllers.deleteSingleStudent);

export const StudentRoutes = router;
