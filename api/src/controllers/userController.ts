import { RequestHandler } from "express";
import { Users, IUsers } from "../models/User";
import { hashPassword } from "../services/auth";

export const createUser: RequestHandler = async (req, res, next) => {
    const newUser: IUsers = new Users({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        zip: req.body.zip,
        profile_image: req.body.profile_image
    });

    try{
        if(newUser.username && newUser.password) {
            let hashedPassword = await hashPassword(newUser.password);
            newUser.password = hashedPassword;
            let created = await newUser.save();
            res.status(201).json({
                username: created.username,
                userId: created._id
            });
        }
        else {
            res.status(400).send('Username and password required');
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export const loginUser: RequestHandler = async (req, res, next) => {

}

export const getUser: RequestHandler = async (req, res, next) => {

}

export const getUsers: RequestHandler = async (req, res, next) => {

}

export const updateUser: RequestHandler = async (req, res, next) => {

}

export const deleteUser: RequestHandler = async (req, res, next) => {

}
