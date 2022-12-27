import { RequestHandler } from "express";
import { MakeModel, IMakeModel } from "../models/Make_Model";

export const getMakes: RequestHandler = async (req, res, next) => {
    let makeList = await MakeModel.find();
    res.status(200).json(makeList);
}

export const addMakeModel: RequestHandler = async (req, res, next) => {
    const newMakeModel: IMakeModel = new MakeModel({
        manufacturers: req.body
    });
    try {
        await newMakeModel.save();
        res.status(201).json(newMakeModel);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

export const deleteMakeModel: RequestHandler = async (req, res, next) => {

    let itemId = req.params.id;
    let result = await MakeModel.findByIdAndDelete(itemId);
    res.status(200).json(result);

}