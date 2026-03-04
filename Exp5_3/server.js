const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const catalogRoutes = require("./routes/catalogRoutes");

const app = express();


// DATABASE CONNECTION
connectDB();


// MIDDLEWARE
app.use(bodyParser.json());


// ROUTES
app.use("/catalog", catalogRoutes);


// HOME ROUTE
app.get("/", (req, res) => {

  res.send("E-Commerce Catalog API Running");

});


const PORT = 5002;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});