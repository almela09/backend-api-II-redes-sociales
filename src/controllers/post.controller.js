import Post from "../models/Post.js";

export const createPost = async (req, res) => {
    try {
        const author = req.tokenData.userId;
        const { text, title } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Write some words"
            });
        }
        const newPost = await Post.create({ author, text, title });

        res.status(201).json({
            success: true,
            message: "Post created",
            data: newPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cannot be created",
            error: error.message
        });
    }
};
export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        console.log(postId)
        const userId = req.tokenData.userId;
        const findPost = await Post.findOne({ _id: postId, author: userId });
        if (!findPost) {
            return res.status(400).json({
                success: false,
                message: "Can't find a post"
            });
        }
        await Post.deleteOne({ _id: postId });
        res.status(200).json({
            success: true,
            message: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post was not deleted",
            error: error.message
        });
    }
};
export const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.tokenData.userId;
        const { title } = req.body; // Solo actualizamos el título en este ejemplo

        const findPost = await Post.findOne({ _id: postId, author: userId });
        if (!findPost) {
            return res.status(400).json({
                success: false,
                message: "Can't find a post"
            });
        }
        findPost.title = title; // Actualiza el título directamente
        await findPost.save();
        res.status(200).json({
            success: true,
            message: "Post updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post was not updated",
            error: error.message
        });
    }
};
export const getMyOwnPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const ownPosts = await Post.find({ author: userId });
        console.log(ownPosts);
        if (ownPosts.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No posts found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: ownPosts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving posts",
            error: error.message
        });
    }
};
// export const getAllPost = async (req, res) => {
//     try {
//         const findPosts = await Post.find({});
//         if (findPosts.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No posts found"
//             });
//         }
//         res.status(200).json({
//             success: true,
//             message: "All posts retrieved",
//             data: findPosts
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Posts didn't retrieved",
//             error: error.message
//         });
//     }
// };
export const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const findPost = await Post.findById(postId);
        if (!findPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Post retrieved successfully",
            data: findPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving the post",
            error: error.message
        });
    }
};
export const putLikes = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.tokenData.userId;
        const findPost = await Post.findById(postId);
        if (!findPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        const index = findPost.like.indexOf(userId);
        if (index > -1) {
            findPost.like.splice(index, 1);
        } else {
            findPost.like.push(userId);
        }

        await findPost.save();

        res.status(200).json({
            success: true,
            message: "Post like status updated successfully",
            data: findPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating post like status",
            error: error.message
        });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const findPosts = await Post.find({});
        if (findPosts.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No posts found"
            });
        }
        res.status(200).json({
            success: true,
            message: "All posts retrieved",
            data: findPosts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Posts didn't retrieved",
            error: error.message
        });
    }
};