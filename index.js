const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/api/create", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Name and email are required fields" });
  }
  res.json({ message: `User created: ${name} (${email})` });
});

// Error handler for 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
