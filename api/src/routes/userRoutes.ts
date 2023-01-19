import { Router } from 'express';
import { createUser, loginUser, getUsers, updateUser, deleteUser, getUser, getUserMessages, postUserMessage, getOneUser } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.post('/signin', loginUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/oneUser', getUser)
router.get('/:id', getOneUser);
router.get('/:id/messages', getUserMessages)
router.put('/:id/messages', postUserMessage)

export default router;

