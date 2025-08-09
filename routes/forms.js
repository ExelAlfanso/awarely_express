import express from "express";
const router = express.Router();
import {
  createReport,
  createCounseling,
} from "../controllers/formsController.js";

router.post("/createReport", createReport);
router.post("/createCounseling", createCounseling);

export default router;
