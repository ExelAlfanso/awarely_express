import mongoose from "mongoose";

const counselingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["ULTKSP", "Rekan Melangkah"],
      required: true,
    },
    counselor: {
      type: String,
      required: true,
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    schedule_date: {
      type: Date,
      required: true,
    },
    schedule_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Counseling =
  mongoose.models.Counseling || mongoose.model("Counseling", counselingSchema);

export default Counseling;
