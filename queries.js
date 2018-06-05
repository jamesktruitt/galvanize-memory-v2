const database = require("./database-connection");

module.exports = {
    list() {
      return database('coffee_registry').select();
    },
    read(id) {
      return database('coffee_registry').select('*').where('id', id).first();
    },
    create(coffee) {
      return database('coffee_registry').insert(coffee).returning('*').then(record => record[0]);
    },
    update(id, coffee) {
      return database('coffee_registry').update(coffee).where('id', id).returning('*').then(record => record[0])
    },
    delete(id) {
      return database('coffee_registry').select('*').where('id', id).del()
    }
};
