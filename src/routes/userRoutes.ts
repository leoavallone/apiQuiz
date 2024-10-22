import express, { Router } from 'express';
import * as userController from '../controllers/userControllers';

const router: Router = express.Router();

router.get('/users', userController.getUsers);
router.get('/user/id', userController.getUserById);
router.post('/user', userController.createUser);

export default router;