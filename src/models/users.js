const dbPool = require("../config/database");

const getAllUsers = () => {
  const SqlQuery = "SELECT * FROM users";

  return dbPool.execute(SqlQuery);
};

const getChoosenUsers = (idUser) => {
  const SqlQuery = `SELECT * FROM users WHERE id=${idUser}`;

  return dbPool.execute(SqlQuery);
};

const createNewUsers = (body) => {
  const SqlQuery = `INSERT INTO users (name,email,address) VALUES
                    ('${body.name}', '${body.email}', '${body.address}')`;

  return dbPool.execute(SqlQuery);
};

const updateUsers = (body, idUser) => {
  const SqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id=${idUser}`;

  return dbPool.execute(SqlQuery);
};

const deleteUsers = (idUser) => {
  const SqlQuery = `DELETE FROM users WHERE id=${idUser}`;

  return dbPool.execute(SqlQuery);
};

module.exports = {
  getAllUsers,
  getChoosenUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
