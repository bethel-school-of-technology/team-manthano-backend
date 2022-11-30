import { Document, Schema, Model, model } from 'mongoose';

interface IUsers extends Document {
 username: string;
 email: string;
 phone: number;
 password: String;
 firstName: string;
 lastName: string;
 zip: Number;
 profile_image: String;
}

const userSchema: Schema<IUsers> = new Schema({
 username: {
  type: String,
  required: true,
 },
 email: {
  type: String,
  required: true
 },
 phone: {
  type: Number,
 },
 password: {
  type: String,
 },
 firstName: {
  type: String,
  required: true
 },
 lastName: {
  type: String,
  required: true
 },
 zip: {
  type: Number,
 },
 profile_image: {
  type: String,
 },
});

const Users: Model<IUsers> = model('Users', userSchema);

export { IUsers, Users };
