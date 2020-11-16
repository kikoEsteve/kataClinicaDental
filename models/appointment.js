'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      this.belongsTo(models.User)
      this.belongsTo(models.User, {
        as: 'doctor',
        foreignKey: 'doctorId'
      })
    }
  };
  Appointment.init({
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    userId: {
      type: DataTypes.INTEGER,
      allowNull: null
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: null
    },
    allergies: DataTypes.BOOLEAN,
    covid: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};