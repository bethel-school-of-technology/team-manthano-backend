"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeModel = void 0;
const mongoose_1 = require("mongoose");
const makeModelSchema = new mongoose_1.Schema({
    manufacturers: {
        type: {
            chevrolet: ['Bolt', 'Tahoe', 'Silverado', 'Camaro'],
            ford: ['Mustang', 'Explorer', 'F-150'],
            dodge: ['Charger', 'Durango', 'Ram', 'Challenger'],
            toyota: ['Camry', 'Corolla', 'Prius', 'Rav4', 'Tacoma'],
            honda: ['CR-V', 'Civic', 'Pilot', 'Ridgeline']
        }
    },
});
const MakeModel = (0, mongoose_1.model)('MakeModel', makeModelSchema);
exports.MakeModel = MakeModel;
