"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserMessage = exports.getUserMessages = exports.deleteUser = exports.updateUser = exports.getOneUser = exports.getUsers = exports.getUser = exports.loginUser = exports.createUser = void 0;
const User_1 = require("../models/User");
const Vehicle_1 = require("../models/Vehicle");
const auth_1 = require("../services/auth");
const createUser = async (req, res, next) => {
    const newUser = new User_1.Users({
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
            let hashedPassword = await (0, auth_1.hashPassword)(newUser.password);
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
};
exports.createUser = createUser;
const loginUser = async (req, res, next) => {
    let existingUser = await User_1.Users.findOne({ username: req.body.username });
    if (existingUser) {
        let passwordsMatch = await (0, auth_1.comparePasswords)(req.body.password, existingUser.password);
        if (passwordsMatch) {
            let token = await (0, auth_1.signUserToken)(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
};
exports.loginUser = loginUser;
const getUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    let userVehicles;
    if (user) {
        userVehicles = await (await Vehicle_1.Vehicles.find({})).filter(vehicle => vehicle.Posted_By == user?._id);
    }
    let allData = {
        user: user,
        vehicles: userVehicles
    };
    res.status(200).json(allData);
};
exports.getUser = getUser;
const getUsers = async (req, res, next) => {
    let userList = await User_1.Users.find();
    res.status(200).json(userList);
};
exports.getUsers = getUsers;
const getOneUser = async (req, res, next) => {
    let userId = req.params.id;
    let user = await User_1.Users.findById(userId);
    res.status(200).json(user);
};
exports.getOneUser = getOneUser;
const updateUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let userId = req.params.id;
    // console.log("ID: ", req.params.id)
    const updatedUser = new User_1.Users({
        _id: userId,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        zip: req.body.zip,
        profile_image: req.body.profile_image
    });
    await User_1.Users.findByIdAndUpdate(userId, { $set: updatedUser });
    res.status(200).json(updatedUser);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let userId = req.params.id;
    let result = await User_1.Users.findByIdAndDelete(userId);
    res.status(200).json(result);
};
exports.deleteUser = deleteUser;
// Messages
const getUserMessages = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    res.status(200).json(user.messages);
};
exports.getUserMessages = getUserMessages;
const postUserMessage = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let userId = req.params.id;
    console.log("ID: ", req.params.id);
    const newMessage = new User_1.Users({
        _id: userId,
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        messages: req.body.messages
    });
    console.log("REQ: ", newMessage);
    try {
        await User_1.Users.findByIdAndUpdate(userId, { $set: newMessage });
        res.status(201).json(newMessage);
    }
    catch (err) {
        console.log("ERROR: ", err);
        res.status(400).send(err);
    }
};
exports.postUserMessage = postUserMessage;
