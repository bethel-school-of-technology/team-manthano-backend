import { Router } from 'express';
import { getMakes, addMakeModel, deleteMakeModel, editMakeModel } from '../controllers/Make_Model_Controller';

const router = Router();

router.get('/', getMakes);
// Disabled so that it can't be changed
// router.post('/', addMakeModel);
// router.put('/:id', editMakeModel);
// router.delete('/:id', deleteMakeModel);

export default router;
