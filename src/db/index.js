import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONOGO_URI}/${DB_NAME}`
    );

    console.log(
      ` \n MongoDB Connected: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
