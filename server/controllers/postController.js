const myGetPosts = (req, res) => {
    res.send('/posts router working')
}

 const myCreatePost = (req, res) => {
    res.send('Post created')
 }

module.exports = { 
    getPosts: myGetPosts,
    createPost: myCreatePost,
 }