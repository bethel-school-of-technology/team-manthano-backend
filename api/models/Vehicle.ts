import { Document, Schema, Model, model, Decimal128 } from 'mongoose';

interface IVehicles extends Document {
 Name: string;
 // Make: string;
 // Model: string;
 Vehicle_Manufacturer: Object;
 Year: Number;
 Condition: string;
 Price: Decimal128;
 Mileage: Number;
 Body_Style: string;
 Fuel_Economy: Object;
 Exterior_Color: string;
 Images: Array<string>;
 Posted_By: string;
 Posted_At: Date,
}

const vehcileSchema: Schema<IVehicles> = new Schema({
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
 Vehicle_Manufacturer: {
  type: {
   'Chevrolet': ['Camaro', 'Tahoe', 'Silverado'],
   'Ford': ['Fiesta', 'Mustang', 'F-150', 'Transit'],
   'Honda': ['Civic', 'Accord', 'CR-V', 'Ridgeline'],
   'Dodge': ['Charger', 'Durango', 'Ram'],
   'Toyota': ['Corolla', 'Prius', '4Runner', 'Tacoma']
  }
 },
 Year: {
  type: Number,
  required: true
 },
 Fuel_Economy: {
  type: {
   city: 0,
   highway: 0,
   combined: 0
  }
 },
 Exterior_Color: {
  type: String
 },
 Images: {
  type: Array['']
 },
 Posted_By: {
  type: String
 },
 Posted_At: {
  type: Date,
  default: Date.now
 },
});

const Vehicles: Model<IVehicles> = model('Vehicles', vehcileSchema);

export { IVehicles, Vehicles };