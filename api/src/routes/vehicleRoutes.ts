import { Router } from 'express';
import { addVehicle, deleteVehicle, editVehicle, getAllVehicles, getOneVehicle } from '../controllers/vehicleController';

const router = Router();

router.get('/', getAllVehicles);   
router.get('/:id', getOneVehicle);
router.post('/', addVehicle);               // change if need to later
router.put('/:id', editVehicle);
router.delete('/:id', deleteVehicle); 

export default router;
