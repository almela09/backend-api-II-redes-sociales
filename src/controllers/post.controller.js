

// router.post('/api/posts');   //CREAR post
// router.delete('/api/posts/:_id');   //Eliminar post por id
// router.put('/api/posts');   //actualizar post por id
// router.get('/api/posts/own');  //recuperar mis propios posts 
// router.get('/api/posts');   //recuperar todos los posts
// router.get('/api/posts/:_id');   //recuperar posts por id
// router.get('/api/posts/:user_id');   //recuperar posts de un usuario

import Post from "../models/Post.js";


//  const createPost = async (req,res)=> {
// try {
//     const {
//         title, text, author
//     } = req.body;

//     const newPost = new Post (
//         {
//             title,
//             text,
//             author

//     }
//     );
//     const savedPost = await newPost.save();

//     res.status(201).json({
//         message: 'post created succesfully',
//         post: savedPost
//     })
    
    
// } catch (error) {
//     res.status(500).json(
//         {
//             message: 'error creating the post',
//             error: error
//     }
//     )
// }

// };

//  const deleteById = async (req,res)=>{
//     try {
//         const {_id} = req.params;
//         const deletedPost = await Post.findByIdDelete(_id);

//         if(!deletedPost) {
//             return res.status(404).json(
//                 {
//                     message: 'Post not found'

//             },
//             res.status(200).json(
//                 {
//                     message: 'Post deleted succesfully'
//             }
//             )
//             )
//         }
        
//     } catch (error) {
//        res.status(500).json(
//         {
//             message: 'error deleting post',
//             error: error

//        }
//        ) 
//     }
// };

// const updatePostById = async (req,res)=>{

//     try {

//         const {_id} = req.params;
//         const updateData = req.body;
//         const updatedPost = await Post.findByIdUpdate (
//             _id, updateData, {new:true});

//     if(!updatedPost){
//         return res.status(404).json(
//             {
//                 message: 'Post not found'

//         }
//         )
//     }
        
//     } catch (error) {
//         res.status(500).json({
//             message: 'update ',
//             error: error
//     })
// };

//  const getMyPost = async(req,res)=>{   //byId

// try {

//     const userId = req.user._id
//     const posts = await Post.find({ author: { $in: [userId] } }).sort({ createdAt: -1 });
//     res.json(posts);

    
// } catch (error) {
//     res.status(500).json({
//         message: 'Error retrieving the posts',
//         error: error
//     });
// }

// };



// const getAllPost = async (req, res) => {

//   try {
    
//   } catch (error) {
    
//   }
// }

// const getPostById = async(req,res)=>{
//     try {
//         const { _id } = req.params;
//         const post = await Post.findById(_id);
//         if (!post) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Post not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Post retrieved successfully",
//             data: post
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Error retrieving the post",
//             error: error,
//         });
//     }


// };

// const getUserPostById = async(req,res)=>{

//     try {
//         const { user_id } = req.params;
//         const userPosts = await Post.find({ author: user_id });
        
//         if (!userPosts.length) {
//             return res.status(404).json({
//                 success: true,
//                 message: "No posts found for this user",
//                 data: []
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Posts retrieved successfully",
//             data: userPosts
//         });
        
//     } catch (error) {
//          res.status(500).json({
//             success: false,
//             message: "Error retrieving the user's posts",
//             error: error,
//         });
//     }

// };

// }



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

export const getAllPost = async (req, res) => {
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

