require("dotenv").config();

const mongoose = require("mongoose");
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.jlg2ysh.mongodb.net`;

mongoose.set("strictQuery", false);

mongoose
  .connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
