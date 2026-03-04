const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();


// Connect MongoDB
connectDB();


// Middleware
app.use(bodyParser.json());


// Routes
app.use("/products", productRoutes);


// Default route
app.get("/", (req, res) => {
  res.send("Product API Running");
});


// Server Port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});