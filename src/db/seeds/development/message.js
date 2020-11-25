exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('messages').del()
      .then(function () {
        // Inserts seed entries
        return knex('messages').insert([
          {id:1,   title: 'he',    message: 'Hello there!' ,        user_id:1},
          {id:2,   title: 'h',     message: 'General Kenobi',       user_id:2},
          {id:3,   title: 'low',   message: 'You\'re a bold one',   user_id:3}
        ]);
      });
  };