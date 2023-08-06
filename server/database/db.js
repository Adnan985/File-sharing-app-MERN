import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

const DBConnection = async () => {
  //     const USERNAME = process.env.DB_USERNAME;
  //     const PASSWORD = process.env.DB_PASSWORD;

  const MONGODB_URI =
    `mongodb://user:Project123@ac-wrjrstk-shard-00-00.zso3afe.mongodb.net:27017,ac-wrjrstk-shard-00-01.zso3afe.mongodb.net:27017,ac-wrjrstk-shard-00-02.zso3afe.mongodb.net:27017/?ssl=true&replicaSet=atlas-fhmv8h-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
