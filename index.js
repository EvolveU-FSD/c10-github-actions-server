const express = require("express");
const app = express();
const PORT = 3000;
app.get("/api", (req, res) => {
  res.json(1000);
});

app.listen(PORT, () => console.log("connected"));
