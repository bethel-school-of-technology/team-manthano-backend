"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleController_1 = require("../controllers/vehicleController");
const router = (0, express_1.Router)();
router.get('/', vehicleController_1.getAllVehicles);
router.get('/:id', vehicleController_1.getOneVehicle);
router.post('/', vehicleController_1.addVehicle); // change if need to later
router.put('/:id', vehicleController_1.editVehicle);
router.delete('/:id', vehicleController_1.deleteVehicle);
exports.default = router;
