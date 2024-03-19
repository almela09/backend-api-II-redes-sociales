
import { Schema, model } from "mongoose";


const PostSchema = new Schema({
    title: {

        type: String,
        required: false,

    },

    text: {

        type: String,
        required: false,


    },

    author: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',

        }
    ],


    like: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false

        }
    ]

},

    {
        timestamps: true,
        versionKey: false,
    }


);

const Post = model("Post", PostSchema);

export default Post;