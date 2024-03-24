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
            _id: "65ffe2c5681a9c52f8a1d581",
            username: "andreu",
            email: "andeu@andreu.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user",
        },
        {
            _id: "65ffe2ed681a9c52f8a1d583",
            username: "ana",
            email: "ana@ana.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe311681a9c52f8a1d585",
            username: "turia",
            email: "turia@turia.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe332681a9c52f8a1d587",
            username: "oreo",
            email: "oreo@oreo.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe355681a9c52f8a1d589",
            username: "miguelangel",
            email: "miguelangel@miguel.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe37f681a9c52f8a1d58b",
            username: "josep",
            email:"josep@josep.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe3a4681a9c52f8a1d58d",
            username: "lula",
            email: "lula@lula.com",
            password: bcrypt.hashSync("123456789", 12),
            role: "user"
        },
        {
            _id: "65ffe696681a9c52f8a1d594",
            username: "paco",
            email: "paco@paco.com",
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
                _id: "65ffe4ec681a9c52f8a1d58f",
                title: "soy el post de OREO",
                text:"soy otro parrafo random",
                author: "65ffdadf1c331a830afeaad6"
            },
            {
                _id: "65ffe6f0681a9c52f8a1d597",
                title: "soy el post ded Paco",
                text:"texto de Paco",
                author: "65ffe696681a9c52f8a1d594"
            },
            {
                _id: "65ffe746681a9c52f8a1d599",
                title: "soy el SEGUNDO post de Paco",
                text:"texto SEGUNDO de Paco",
                author: "65ffe696681a9c52f8a1d594"
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




