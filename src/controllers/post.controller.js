

// router.post('/api/posts');   //CREAR post
// router.delete('/api/posts/:_id');   //Eliminar post por id
// router.put('/api/posts');   //actualizar post por id
// router.get('/api/posts/own');  //recuperar mis propios posts 
// router.get('/api/posts');   //recuperar todos los posts
// router.get('/api/posts/:_id');   //recuperar posts por id
// router.get('/api/posts/:user_id');   //recuperar posts de un usuario


const createPost = async (req,res)=> {
try {
    const {
        title, text, author
    } = req.body;

    const newPost = new Post (
        {
            title,
            text,
            author

    }
    );
    const savedPost = await newPost.save();

    res.status(201).json({
        message: 'post created succesfully',
        post: savedPost
    })
    
    
} catch (error) {
    res.status(500).json(
        {
            message: 'error creating the post',
            error: error
    }
    )
}

};

const deleteById = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
};

const updatePostById = (req,res)=>{

    try {
        
    } catch (error) {
        
    }
};

const myOwnPost = (req,res)=>{
try {
    
} catch (error) {
    
}

};

const getAllPost = (req,res)=>{

try {
    
} catch (error) {
    
}

};

const getPostById =(req,res)=>{
    try {
        
    } catch (error) {
        
    }


};

const getUserPostById = (req,res)=>{

    try {
        
    } catch (error) {
        
    }

};