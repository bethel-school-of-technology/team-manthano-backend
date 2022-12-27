import { Document, Schema, Model, model } from 'mongoose';

interface IMakeModel extends Document {
 manufacturers: Object;
}

const makeModelSchema: Schema<IMakeModel> = new Schema({
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

const MakeModel: Model<IMakeModel> = model('MakeModel', makeModelSchema);

export { IMakeModel, MakeModel };
