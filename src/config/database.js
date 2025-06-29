// src/config/database.js
import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/twitter-clone', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connect;
