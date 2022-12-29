"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeModel = void 0;
const mongoose_1 = require("mongoose");
const makeModelSchema = new mongoose_1.Schema({
    manufacturers: {
        type: {
            Chevrolet: ['Bolt', 'Tahoe', 'Silverado', 'Camaro'],
            Ford: ['Mustang', 'Explorer', 'F-150'],
            Dodge: ['Charger', 'Durango', 'Ram', 'Challenger'],
            Toyota: ['Camry', 'Corolla', 'Prius', 'Rav4', 'Tacoma'],
            Honda: ['CR-V', 'Civic', 'Pilot', 'Ridgeline']
        }
    },
});
const MakeModel = (0, mongoose_1.model)('MakeModel', makeModelSchema);
exports.MakeModel = MakeModel;
