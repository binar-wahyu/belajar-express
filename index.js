const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi Mom!");
});

app.get("/product", (req, res) => {
  res.json(["Macbook Pro", "Asus Vivobook", "Lenovo Yoga"]);
});

app.get("/order", (req, res) => {
  res.json([
    { id: 1, paid: true, userId: 1 },
    { id: 2, paid: false, userId: 1 },
    { id: 3, paid: false, userId: 2 },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
