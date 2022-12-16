"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
const mongoose_1 = require("mongoose");
const vehcileSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true,
    },
    Vehicle_Manufacturer: {
        type: String
    },
    Vehicle_Make: {
        type: String,
    },
    Year: {
        type: Number,
        required: true
    },
    Condition: {
        type: String,
        enum: ['New', 'Used'],
    },
    Mileage: {
        type: Number,
        required: true
    },
    Body_Style: {
        type: String,
        enum: ['Convertible', 'Sedan', 'Hatchback', 'SUV/Crossover', 'Truck', 'Van/MiniVan'],
    },
    Fuel_Economy: {
        type: {
            city: 0,
            highway: 0,
            combined: 0
        }
    },
    Exterior_Color: {
        type: String,
        enum: ['Black', 'Blue', 'Brown', 'Burgundy', 'Gray', 'Green', 'White', 'Silver', 'Red'],
    },
    Images: [{
            type: String
        }],
    Status: {
        type: String,
        enum: ['For Sale', 'Pending', 'Sold'],
    },
    Posted_By: {
        type: String
    },
    Posted_At: {
        type: Date,
        default: Date.now
    },
});
const Vehicles = (0, mongoose_1.model)('Vehicles', vehcileSchema);
exports.Vehicles = Vehicles;
