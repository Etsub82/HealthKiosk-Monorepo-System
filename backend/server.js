const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow frontend (VERY IMPORTANT)
app.use(cors({
  origin: "http://localhost:3000"
}));

app.get("/api/patients", (req, res) => {
  res.json([
    { name: "Abel", age: 28, heartRate: 76, temperature: 36.6 },
    { name: "Sara", age: 25, heartRate: 80, temperature: 37.0 }
  ]);
});
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server running on port 5000");
});