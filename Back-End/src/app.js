const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())
const subscribers = require("./models/subscribers");

// Your code goes here
app.get("/subscribers", async (req, res) => {
 try{
    const data = await subscribers.find().exec();
    res.send(data);
 }catch(error){
    res.send("Sorry Something Went Wrong")
 }
});

app.get("/subscribers/names", async (req, res) => {
  try{
    const data = await subscribers
    .find({}, { name: 1, subscribedChannel: 1, _id: 0 })
    .exec();
  res.send(data);
  }catch{
    res.send("Sorry Something Went Wrong")
  }
});

app.get("/subscribers/:id", async (req, res) => {
  try {
    const data = await subscribers.findById(req.params.id).exec();
    if(!data){
        res.json({message:"Invalid User"})
    }
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: "Sorry! Something Went Wrong !!!"});
  }
});

module.exports = app;
