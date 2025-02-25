const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 2000;

app.use(express.json());

app.get("/", (req, res)=>{
  res.json({message:"Server is running "})
})

//mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(()=> console.log("MongoDb is connected"))
  .catch((err)=> console.log("Error in connection DB"))

//Schema
const restaruntSchema = new mongoose.Schema({
  Name:{type: String, required: true},
  City:{type: String, required:true},
  Item:{type: Number, Array:true, required:true},
  Item:{
    Id:{type: Number}
   }
})

const dishSchema = new mongoose.Schema({
  Name:{type: String, required: true},
  Price:{type: Number, required: true}
})

const Restaurant = mongoose.model("Restaurant", restaruntSchema);
const Dish = mongoose.model("Dish", dishSchema)



app.listen(PORT, ()=>{
  console.log(`Server is running on the http://localhost:${PORT}`);
})