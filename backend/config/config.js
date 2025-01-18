import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mirzarmaf206:mirze2005@fullstackpractise7.fhynv.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  });
