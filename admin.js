const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log(
    "Ini Admin Middleware",
    "Halaman yang akan dituju adalah",
    req.url
  );
  next();
});

router.get("/admin/info", (req, res) => {
  res.send("From Admin Router - Info Page");
});

router.get("/admin/about", (req, res) => {
  res.send("From Admin Router - About Page");
});

module.exports = router;
