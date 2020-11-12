'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
        this.hasOne(models.Appointment)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true      
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone: DataTypes.INTEGER,
    role: DataTypes.ENUM('adm','dtr','usr'),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};