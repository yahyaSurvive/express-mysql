const dbPool = require("../config/database");

const getProduct = () => {
  const SqlQuery = "SELECT * FROM tbl_product";

  return dbPool.execute(SqlQuery);
};

const createNewProduct = (body) => {
  const SqlQuery = `INSERT INTO tbl_product (nama_product,foto_product) VALUES
                    ('${body.nama_product}', '${body.foto_product}')`;

  return dbPool.execute(SqlQuery);
};

module.exports = {
  getProduct,
  createNewProduct,
};
