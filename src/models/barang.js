const dbPool = require("../config/database");

const getAllUsers = () => {
  const SqlQuery = "SELECT * FROM tbl_barang";

  return dbPool.execute(SqlQuery);
};

module.exports = {
  getAllUsers,
};
