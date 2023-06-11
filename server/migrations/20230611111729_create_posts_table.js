exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.string('title', 255)
    table.text('content')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
}
