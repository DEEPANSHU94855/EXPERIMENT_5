const mongoose = require("mongoose");

const connectDB = async () => {

  try {

    await mongoose.connect(
      "mongodb+srv://Deepanshu1406:TAru1234@cluster0.7l8ztbw.mongodb.net/catalogDB"
    );

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("Database connection error:", error);
    process.exit(1);

  }

};

module.exports = connectDB;