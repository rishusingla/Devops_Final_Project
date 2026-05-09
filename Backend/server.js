require("dotenv").config();

const app=require('./src/app')
const connectDB = require("./src/config/db");


connectDB();


const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
