require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///covfefe'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
