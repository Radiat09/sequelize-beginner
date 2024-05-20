const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

// class student extends Model {}

// student.init(
//   {
//     //Model attributes are defined here
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       //allowNull defaults to true
//     },
//     age: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: "highStudents",
//   }
// );

const student = sequelize.define(
  "student",
  {
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
  },
  {
    createdAt: false,
    updatedAt: true,
  }
);
module.exports = student;
