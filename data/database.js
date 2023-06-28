
import mongoose from "mongoose";


export const connectDB = () => {
//mongoDb connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "BackendApi",
  })
  .then((data) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
//mongoDb  
}