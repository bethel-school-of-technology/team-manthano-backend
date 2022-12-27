"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Make_Model_Controller_1 = require("../controllers/Make_Model_Controller");
const router = (0, express_1.Router)();
router.get('/', Make_Model_Controller_1.getMakes);
// Disabled so that it can't be changed
// router.post('/', addMakeModel);
// router.delete('/:id', deleteMakeModel);
exports.default = router;
