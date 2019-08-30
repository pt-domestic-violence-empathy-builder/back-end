const db = require('../../data/config/dbConfig.js');

module.exports = {
  insert,
  getAll,
  findBy
};
// async function insert(data) {
//   const [id] = await db('data')
//     .insert(data)
//     .returning('id');

//   return findBy('id', id);
// }

function insert(data) {
  return db('data')
    .insert(data, 'id')
    .then(ids => {
      return db('data')
        .where({ id: ids[0] })
        .first();
    });
}

function getAll() {
  return db('data');
}

function findBy(column, filter) {
  return db('data').where({ [column]: filter });
}
