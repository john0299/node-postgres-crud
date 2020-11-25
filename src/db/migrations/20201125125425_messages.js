exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', t => {
        t.increments('id')
        t.string('title')
        t.string('message')
        t.integer('user_id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages')
  };