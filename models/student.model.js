const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const student = sequelize.define("student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
});
module.exports = student;
