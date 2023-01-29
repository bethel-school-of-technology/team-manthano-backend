"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.editVehicle = exports.addVehicle = exports.getOneVehicle = exports.getAllVehicles = void 0;
const Vehicle_1 = require("../models/Vehicle");
const auth_1 = require("../services/auth");
const getAllVehicles = async (req, res, next) => {
    let vehicleList = await Vehicle_1.Vehicles.find();
    res.status(200).json(vehicleList);
};
exports.getAllVehicles = getAllVehicles;
const getOneVehicle = async (req, res, next) => {
    let itemId = req.params.id;
    let vehicle = await Vehicle_1.Vehicles.findById(itemId);
    res.status(200).json(vehicle);
};
exports.getOneVehicle = getOneVehicle;
const addVehicle = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    const newVehicle = new Vehicle_1.Vehicles({
        Name: req.body.Name,
        Vehicle_Manufacturer: req.body.Vehicle_Manufacturer,
        Vehicle_Model: req.body.Vehicle_Model,
        Year: req.body.Year,
        Condition: req.body.Condition,
        Price: req.body.Price,
        Mileage: req.body.Mileage,
        Body_Style: req.body.Body_Style,
        Fuel_Economy: req.body.Fuel_Economy,
        Exterior_Color: req.body.Exterior_Color,
        Images: req.body.Images,
        Status: req.body.Status,
        Posted_By: req.body.Posted_By,
        Posted_At: req.body.Posted_At
    });
    console.log("NEW: ", newVehicle.Images);
    try {
        await newVehicle.save();
        res.status(201).json(newVehicle);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.addVehicle = addVehicle;
const editVehicle = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user || user._id != req.body.Posted_By) {
        return res.status(403).send();
    }
    let itemId = req.params.id;
    const updatedVehicle = new Vehicle_1.Vehicles({
        _id: itemId,
        Name: req.body.Name,
        Vehicle_Manufacturer: req.body.Vehicle_Manufacturer,
        Vehicle_Model: req.body.Vehicle_Model,
        Year: req.body.Year,
        Condition: req.body.Condition,
        Price: req.body.Price,
        Mileage: req.body.Mileage,
        Body_Style: req.body.Body_Style,
        Fuel_Economy: req.body.Fuel_Economy,
        Exterior_Color: req.body.Exterior_Color,
        Images: req.body.Images,
        Status: req.body.Status,
        Posted_By: req.body.Posted_By,
        Posted_At: req.body.Posted_At
    });
    await Vehicle_1.Vehicles.findByIdAndUpdate(itemId, { $set: updatedVehicle });
    res.status(200).json(updatedVehicle);
};
exports.editVehicle = editVehicle;
const deleteVehicle = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let itemId = req.params.id;
    let result = await Vehicle_1.Vehicles.findByIdAndDelete(itemId);
    res.status(200).json(result);
};
exports.deleteVehicle = deleteVehicle;
