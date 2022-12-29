import { Document, Schema, Model, model } from 'mongoose';

interface IMakeModel extends Document {
 manufacturers: Object;
}

const makeModelSchema: Schema<IMakeModel> = new Schema({
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

const MakeModel: Model<IMakeModel> = model('MakeModel', makeModelSchema);

export { IMakeModel, MakeModel };
