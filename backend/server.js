const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/patient", (req, res) => {
  res.json({
    message: "Patient API working"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});