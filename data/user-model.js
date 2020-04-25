const db = require('./db-config.js');

module.exports = {
    add,
    find,
    findnBy,
    findById
};

function find() {
    return db('users').select('id', 'username', 'department');
};

function findById(filter) {
    return db('users').where(filter);
};

async function add(user) {
    const [id] = await db("users").insert(user, "id");
  
    return findById(id);
};

function findById(id) {
    return db("users")
      .where({ id })
      .first();
};