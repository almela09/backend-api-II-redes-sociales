import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    urlImg: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        default: "" //put de este campo para añadir una descripcion al usuario.
        
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
