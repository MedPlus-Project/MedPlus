const express = require("express");
const cors = require("cors");

const dbConnect = require("./config/dbConnect");

const symptomRoutes = require("./routes/symptom.route");
const diseaseRoutes = require("./routes/disease.route");
const messageRoutes = require("./routes/message.route");
const hospitalRoutes =  require("./routes/hospital.route");
const clinicRoutes = require("./routes/clinic.route");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/symptoms", symptomRoutes);
app.use("/api/v1/diseases", diseaseRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/hospital", hospitalRoutes);
app.use("/api/v1/clinic", clinicRoutes);

dbConnect();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
