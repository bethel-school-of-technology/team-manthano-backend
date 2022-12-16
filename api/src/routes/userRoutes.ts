import { Router } from 'express';
import { createUser, loginUser, getUsers, updateUser, deleteUser, getUser } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.post('/signin', loginUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser)

export default router;