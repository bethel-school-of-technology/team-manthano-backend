import { Document, Schema, Model, model, Decimal128 } from 'mongoose';

interface IVehicles extends Document {
 Name: string;
 Vehicle_Manufacturer: String;
 Vehicle_Model: String;
 Year: Number;
 Condition: string;
 Price: Decimal128;
 Mileage: Number;
 Body_Style: string;
 Fuel_Economy: Object;
 Exterior_Color: string;
 Images: string;
 Status: String;
 Posted_By: string;
 Posted_At: Date,
}

const vehcileSchema: Schema<IVehicles> = new Schema({
 Name: {
  type: String,
  required: true,
 },
 Vehicle_Manufacturer: {
  type: String,
 },
 Vehicle_Model: {
  type: String,
 },
 Year: {
  type: Number,
  required: true
 },
 Price: {
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
 Images: {
  type: String
 },
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

const Vehicles: Model<IVehicles> = model('Vehicles', vehcileSchema);

export { IVehicles, Vehicles };
