import mongoose, { Schema, Document } from 'mongoose';

export interface ITreatment extends Document {
  name: string;
  description: string;
  category: string;
}

const TreatmentSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Treatment || mongoose.model<ITreatment>('Treatment', TreatmentSchema);
