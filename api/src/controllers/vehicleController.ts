import { RequestHandler } from "express";
import { Vehicles, IVehicles } from "../models/Vehicle";
import { IUsers } from "../models/User";
import { verifyUser } from "../services/auth";

export const getAllVehicles: RequestHandler = async (req, res, next) => {
    let vehicleList = await Vehicles.find();
    res.status(200).json(vehicleList);
}

export const getOneVehicle: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let vehicle = await Vehicles.findById(itemId);
    res.status(200).json(vehicle);
}

export const addVehicle: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    const newVehicle: IVehicles = new Vehicles({
        Name: req.body.Name,
        Vehicle_Manufacturer: req.body.Vehicle_Manufacturer,
        Year: req.body.Year,
        Condition: req.body.Condition,
        Price: req.body.Price,
        Mileage: req.body.Mileage,
        Body_Style: req.body.Body_Style,
        Fuel_Economy: req.body.Fuel_Economy,
        Exterior_Color: req.body.Exterior_Color,
        Images: req.body.Images,
        Status: req.body.Status,
        Posted_By: user._id,
        Posted_At: req.body.Posted_At
    });

    try {
        await newVehicle.save();
        res.status(201).json(newVehicle);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

export const editVehicle: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user || user._id != req.body.Posted_By) {
        console.log("USER: ", user?._id)
        console.log("POST: ", req.body.Posted_By)
        return res.status(403).send();
    }

    let itemId = req.params.id;
    const updatedVehicle: IVehicles = new Vehicles({
        _id: itemId,
        Name: req.body.Name,
        Vehicle_Manufacturer: req.body.Vehicle_Manufacturer,
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

    await Vehicles.findByIdAndUpdate(itemId, { $set: updatedVehicle })

    res.status(200).json(updatedVehicle);
}

export const deleteVehicle: RequestHandler = async (req, res, next) => {

    let user: IUsers | null = await verifyUser(req);

    if (!user || user._id != req.body.Posted_By) {
        console.log("USER: ", user?._id)
        console.log("VEHICLE: ", req.body.Posted_By)
        return res.status(403).send();
    }

    let itemId = req.params.id;
    let result = await Vehicles.findByIdAndDelete(itemId);
    res.status(200).json(result);

}