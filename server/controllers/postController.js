// Connect to database
const knex = require('knex')

const db = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'secret',
      database : 'my_knex_db'
    }
  })

const myGetPosts = (req, res) => {
    res.send('/posts router working')
}

 const myCreatePost = (req, res) => {
    res.send('Post created')
 }

const getPost = async (req, res) => {
    const postId = req.params['id']

    const rows = await db('posts')
    .select('posts.id', 'posts.title', 'posts.content', 'comments.id as commentId', 'comments.comment')
    .leftJoin('comments', 'posts.id', 'comments.post_id')
    .where('posts.id', postId)

    const post = {
        id: rows[0].id,
        title: rows[0].title,
        content: rows[0].content,
        comments: rows.map((row) => ({
          id: row.commentId,
          comment: row.comment,
        }))
      };


    res.send(post)
}

const createPostComment = async(req, res) => {
    const { comment } = req.body

    const postId = req.params['id']

    const newPost = {
        post_id: postId,
        comment,
    }

    const newPostId = await db('comments').insert(newPost)

    res.send(newPostId)
}

module.exports = { 
    getPosts: myGetPosts,
    createPost: myCreatePost,
    getPost,
    createPostComment
 }
