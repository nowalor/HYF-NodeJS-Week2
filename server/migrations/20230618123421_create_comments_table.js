exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.increments()
    table.integer('post_id').unsigned()
    table.text('comment')

    table.foreign('post_id').references('posts.id')
  })
};


exports.down = function(knex) {
  
};
