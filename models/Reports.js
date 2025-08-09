import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
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
    schedule_date:{
        type: Date,
    },
    schedule_time: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;