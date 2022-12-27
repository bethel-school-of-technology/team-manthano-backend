"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMakeModel = exports.addMakeModel = exports.getMakes = void 0;
const Make_Model_1 = require("../models/Make_Model");
const getMakes = async (req, res, next) => {
    let makeList = await Make_Model_1.MakeModel.find();
    res.status(200).json(makeList);
};
exports.getMakes = getMakes;
const addMakeModel = async (req, res, next) => {
    const newMakeModel = new Make_Model_1.MakeModel({
        manufacturers: req.body
    });
    try {
        await newMakeModel.save();
        res.status(201).json(newMakeModel);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.addMakeModel = addMakeModel;
const deleteMakeModel = async (req, res, next) => {
    let itemId = req.params.id;
    let result = await Make_Model_1.MakeModel.findByIdAndDelete(itemId);
    res.status(200).json(result);
};
exports.deleteMakeModel = deleteMakeModel;
