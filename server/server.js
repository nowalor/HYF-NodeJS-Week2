const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('', router)

app.listen('5001', () => console.log('Listening on port 5001'))









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

  app.get('/', (req, res) => {
    res.send('/')
  })