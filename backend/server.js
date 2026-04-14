const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/patient", (req, res) => {
  res.json({
    name: "Abel",
    age: 28,
    heartRate: 76,
    temperature: 36.6
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});