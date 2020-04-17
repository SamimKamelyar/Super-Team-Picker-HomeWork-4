module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "cohorts"
    },
    migrations: {
      directory: "db/migrations"
    }
  }

};