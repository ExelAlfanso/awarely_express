import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db.js"; // make sure db.js exports this as default
import authRoutes from "./routes/auth.js";
import formRoutes from "./routes/forms.js";

dotenv.config();

const app = express(); // <— you missed this
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  // "https://chatify-roan.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
