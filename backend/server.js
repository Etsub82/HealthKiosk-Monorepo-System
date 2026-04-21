const express = require("express");
const cors = require("cors");

const app = express();

// ✅ THIS LINE IS VERY IMPORTANT
app.use(cors());

app.get("/api/patients", (req, res) => {
  res.json([
    { name: "Abel", age: 28, heartRate: 76, temperature: 36.6 },
    { name: "Sara", age: 25, heartRate: 80, temperature: 37.0 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});