import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRouter from "./routes/exampleRoute.js";
import flightsRouter from "./routes/flightsRoute.js";
import mapsRouter from "./routes/mapsRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/example", exampleRouter);
app.use("/api/flights", flightsRouter);
app.use("/api/maps", mapsRouter);

app.get("/", (req, res) => {
  res.send("Hello, AeroNav Server is running!");
});

app.listen(PORT, () => {
  console.log(`? Server running on port ${PORT}`);
});
