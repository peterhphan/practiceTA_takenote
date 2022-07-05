const mysql = require('mysql2');
const Promise = require('bluebird');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'takenote'
// });
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

//always need to return for a promise
const getAll = () => {return db.queryAsync(
  `select * from notes`
)}
// const getAll = db.query(`select * from notes`)

module.exports = {db, getAll};
//module.exports = getAll;
//module.exports = getAll;