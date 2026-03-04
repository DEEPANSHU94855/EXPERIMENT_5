const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();


// CONNECT DATABASE
connectDB();


// MIDDLEWARE
app.use(bodyParser.json());


// ROUTES
app.use("/students", studentRoutes);


// DEFAULT ROUTE
app.get("/", (req, res) => {

  res.send("Student Management API Running");

});


const PORT = 5001;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});