module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'secret',
      database : 'my_knex_db'
    }
  }
}
