const { validationResult } = require('express-validator')

const getUser = (req, res) => {
    res.send('get user')
}

const createUser = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty())
    {
        return res.send(errors)
    }

    res.send('create user')
}

module.exports = {getUser, createUser}