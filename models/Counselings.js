import mongoose from "mongoose";

const counselingSchema = new mongoose.Schema(
  {
    type: {
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
    assistance: {
      type: Boolean,
      required: true,
    },
    schedule_date: {
      type: Date,
    },
    schedule_time: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Counseling =
  mongoose.models.Counseling || mongoose.model("Counseling", counselingSchema);

export default Counseling;
