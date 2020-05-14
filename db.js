const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL || "postgres://postgres:eve@localhost:5432/postgres";
const db = new Sequelize(databaseURL);

db.sync()
  .then(() => console.log("Database is in  Sync"))
  .catch(console.error);

module.exports = db;
