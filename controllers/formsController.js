import Counseling from "../models/Counselings.js";
import Report from "../models/Reports.js";

export const createReport = async (req, res) => {
  const { contact, description, assistance, schedule_date, schedule_time } =
    req.body;
  try {
    const report = await Report.create({
      contact,
      description,
      assistance,
      schedule_date,
      schedule_time,
    });
    return res.status(201).json({ message: "Report successfully created." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCounseling = async (req, res) => {
  const {
    type,
    counselor,
    contact,
    description,
    assistance,
    schedule_date,
    schedule_time,
  } = req.body;
  try {
    const counseling = await Counseling.create({
      type,
      counselor,
      contact,
      description,
      assistance,
      schedule_date,
      schedule_time,
    });
    return res
      .status(201)
      .json({ message: `${type} counseling successfully created.` });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};
