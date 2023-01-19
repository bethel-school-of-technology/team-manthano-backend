import { RequestHandler } from "express";
import { Users, IUsers } from "../models/User";
import { Vehicles } from "../models/Vehicle";
import { comparePasswords, hashPassword, signUserToken, verifyUser } from "../services/auth";
import { ObjectId } from "mongoose";

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

    try {
        if (newUser.username && newUser.password) {
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
    let existingUser: IUsers | null = await Users.findOne(
        { username: req.body.username }
    );

    if (existingUser) {
        let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);

        if (passwordsMatch) {
            let token = await signUserToken(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
}

export const getUser: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req)


    let userVehicles;
    if (user) {
        userVehicles = await (await Vehicles.find({})).filter(vehicle => vehicle.Posted_By == user?._id);
    }

    let allData = {
        user: user,
        vehicles: userVehicles
    }

    res.status(200).json(allData);
}

export const getUsers: RequestHandler = async (req, res, next) => {
    let userList = await Users.find();
    res.status(200).json(userList)
}

export const updateUser: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let userId = req.params.id;
    // console.log("ID: ", req.params.id)
    const updatedUser: IUsers = new Users({
        _id: userId,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        zip: req.body.zip,
        profile_image: req.body.profile_image
    });

    await Users.findByIdAndUpdate(userId, { $set: updatedUser })

    res.status(200).json(updatedUser);
}

export const deleteUser: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let userId = req.params.id;
    let result = await Users.findByIdAndDelete(userId);
    res.status(200).json(result);
}

// Messages
export const getUserMessages: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    res.status(200).json(user.messages);
}

export const postUserMessage: RequestHandler = async (req, res, next) => {
    let user: IUsers | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let userId = req.params.id;
    console.log("ID: ", req.params.id)
    const newMessage: IUsers = new Users({
        _id: userId,
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        messages: req.body.messages
    });

    console.log("REQ: ", newMessage)

    try {
        await Users.findByIdAndUpdate(userId, { $set: newMessage })
        res.status(201).json(newMessage);
    }
    catch (err) {
        console.log("ERROR: ", err)
        res.status(400).send(err);
    }
}