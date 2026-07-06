const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = [
  { id: 1, name: "Tanish Kumar" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
  { id: 4, name: "Khushboo" }
];

app.get("/", (req, res) => {
  res.json(users);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
