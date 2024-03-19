import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import userSeeder from "./userSeeder.js"
import "dotenv/config";
import seedPosts from "./postSeeder.js";

const seed = async () => {
    try {
        await dbConnection();
        console.log("Database connected");
        await userSeeder();
        await seedPosts();

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