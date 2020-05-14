const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("joke", {
  setup: Sequelize.STRING,
  punchline: Sequelize.STRING,
});

module.exports = Event;
