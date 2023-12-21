const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv").config({ path: __dirname + "/.env" });

// Import the routes from the routes.js file
const routes = require("./routes/route");

// Enable cors
app.use(cors());
// Serve static assets from server
app.use(express.static("public"));

// Route using default route
app.use("/", routes);

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});