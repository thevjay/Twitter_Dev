// src/config/database.js
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connect;
