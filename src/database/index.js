const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const User = require("../models/User");
const Addres = require("../models/Address");

const connection = new Sequelize(dbconfig);

User.init(connection);
Addres.init(connection);
Addres.associate(connection.models);

module.exports = connection;
