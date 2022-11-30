"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
const mongoose_1 = require("mongoose");
const vehcileSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true,
    },
    // Make: {
    //  type: String,
    //  required: true
    // },
    // Model: {
    //  type: String,
    //  required: true
    // },
    // Vehicle_Manufacturer: {
    //  type: {
    //   'Chevrolet': ['Camaro', 'Tahoe', 'Silverado'],
    //   'Ford': ['Fiesta', 'Mustang', 'F-150', 'Transit'],
    //   'Honda': ['Civic', 'Accord', 'CR-V', 'Ridgeline'],
    //   'Dodge': ['Charger', 'Durango', 'Ram'],
    //   'Toyota': ['Corolla', 'Prius', '4Runner', 'Tacoma']
    //  }
    // },
    // Year: {
    //  type: Number,
    //  required: true
    // },
    // Fuel_Economy: {
    //  type: {
    //   city: 0,
    //   highway: 0,
    //   combined: 0
    //  }
    // },
    // Exterior_Color: {
    //  type: String
    // },
    // Images: [{
    //  type: String
    // }],
    // Posted_By: {
    //  type: String
    // },
    // Posted_At: {
    //  type: Date,
    //  default: Date.now
    // },
});
const Vehicles = (0, mongoose_1.model)('Vehicles', vehcileSchema);
exports.Vehicles = Vehicles;
