import mongoose from "mongoose";
import dotenv from 'dotenv';

const MONGO_URI='mongodb+srv://sathvikdeekonda09:sathvikdeekonda@cluster0.fqaq352.mongodb.net/?retryWrites=true'



export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
