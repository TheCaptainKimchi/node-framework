// Imports
const express = require("express");
const router = express.Router();
const path = require("path");


// ==========================
// ====== Default path ======
// ==========================

// Default path to explain API
router.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// ==========================
// ====== Sample path =======
// ==========================

// Sample path demonstrating request and responses
router.route("/sample").get((req, res) => {

    const data = req.query.data;

    // Check if data received as query param.
    if (!data) {
        // Send error status with response message
        res.status(400).send("Please enter data in query param")
    } else {
        // Send back data
        res.send(data);
    }
  });

// ==============================
// ======= Catch All path =======
// ==============================
router.route("*").get((req, res) => {
  res.send(
    "Path not defined. Try a different path or refer to '/' path to start."
  );
});
module.exports = router;