import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    followers: {
        type: Array,    //opcional si da tiempo y eso.
        default: []

    },
    followins: {
        type: Array,
        default: []
    },
    role: {
        type: String,
        enum: ["user", "admin", "super_admin"],
        default: "user",
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);
const User = model("User", UserSchema);
export default User;
