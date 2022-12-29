import { Document, Schema, Model, model } from 'mongoose';

interface IUsers extends Document {
 username: string;
 email: string;
 phone: number;
 password: string;
 firstName: string;
 lastName: string;
 zip: Number;
 profile_image: String;
 messages: Object
}

const userSchema: Schema<IUsers> = new Schema({
 username: {
  type: String,
  unique: true,
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
 messages: {
  type: Object
 }
});

const Users: Model<IUsers> = model('Users', userSchema);

export { IUsers, Users };
