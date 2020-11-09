'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    age: DataTypes.STRING,
    adress: DataTypes.STRING,
    dni: DataTypes.STRING,
    records: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};