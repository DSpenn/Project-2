let sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  Sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
  Sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;