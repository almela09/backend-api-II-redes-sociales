import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import userSeed from "./userSeed.js"
import "dotenv/config";
import postSeed from "./postSeed.js";

const seed = async () => {
    try {
        await dbConnection();
        console.log("Database connected");
        await userSeed();
        await postSeed();

    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
    }

    finally {
        await mongoose.connection.close();
        console.log("Database connection closed");
    }
}

seed();