import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt"
import User from "../../models/User.js";
import Post from "../../models/Post.js";

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

        const user = new User(
            {
            _id: "65fb06d73ced2d6c56cb47c4",
            username: "user",
            email: "user@user.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user",
        },
        {
            _id: "65fc62da8764586f8f7fb4eb",
            username: "andreu",
            email: "andeu@andreu.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user",
        },
        {
            _id: "65fd459b6d03e8796104ccab",
            username: "ana",
            email: "ana@ana.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "5fea3a41c331a830afeaac8",
            username: "turia",
            email: "turia@turia.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65fea4001c331a830afeaaca",
            username: "oreo",
            email: "oreo@oreo.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65fea4671c331a830afeaacc",
            username: "miguelangel",
            email: "miguelangel@miguelangel.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65fea57c1c331a830afeaace",
            username: "josep",
            email:"josep@josep.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65feb9eb1c331a830afeaad0",
            username: "lula",
            email: "lula@lula.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
    
        )
        await user.save();

        const post = new Post(
            {
                _id: "65fb09073b95ec635e8b6fb9",
                title: "asdasdas",
                text: "asdsadsa",
                author: "65fb06d73ced2d6c56cb47c4",
            },
            {
                _id: "65fc64428764586f8f7fb4ee",
                title: "hola soy un titulin",
                text:"aquí podría escribirte algo profundo, pero no.",
                author: "65fc62da8764586f8f7fb4eb"
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""

            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
            {
                _id: "",
                title: "",
                text:"",
                author: ""
            },
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




