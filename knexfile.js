require('dotenv').config();

module.exports = {
   
    development: {
      client: 'pg',
      connection: process.env.DB_URL,
      migrations: {
        directory: __dirname + '/src/db/migrations'
      },
      seeds: {
        directory: __dirname + '/src/db/seeds/development'
      }
    },
   
  }