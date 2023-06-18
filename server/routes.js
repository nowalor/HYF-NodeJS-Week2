const express = require('express')
const {getPosts, createPost, getPost, createPostComment} = require('./controllers/postController')
const { getUser, createUser } = require('./controllers/userController')

const { check } = require('express-validator')

const router = express.Router()

// Posts
router.get('/posts', getPosts)
router.get('/create-post', createPost)
router.get('/posts/:id',  getPost)

// Users
router.get('/users', getUser)

// Comments
router.post('/posts/:id/comments', createPostComment)

const createUserRules = [
    check('email').notEmpty().isEmail(),
    check('password').notEmpty(),
]

router.post('/users', createUserRules, createUser)

module.exports = router