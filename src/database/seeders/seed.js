import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt"
import User from "../../models/User.js";
import Post from "../../models/Post.js";
import { Faker } from "@faker-js/faker";

dbConnection();

const seed = async () => {
    try {
        const superAdmin = new User({
            _id: "65fb06d63ced2d6c56cb47bf",
            username: "superAdmin",
            email: "superadmin@superadmin.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "super_admin",
        })
        await superAdmin.save();

        const admin = new User({
            _id: "65fb06d73ced2d6c56cb47c2",
            username: "Admin",
            email: "admin@admin.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "admin",
        })
        await admin.save();

        const user = new User({
            _id: "65fb06d73ced2d6c56cb47c4",
            username: "user",
            email: "user@user.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user",
        })
        await user.save();

        const post = new Post(
            {
                _id: "65fb09073b95ec635e8b6fb9",
                title: "asdasdas",
                text: "asdsadsa",
                author: "65fb06d73ced2d6c56cb47c4",
            }
        )
        await post.save();
        console.log("users created")
        console.log("Post created")
    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close()
    }
}
seed();



