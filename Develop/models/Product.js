// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const {Category} = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Define columns
    // Using activity 28 mini project Trip.js as an example to define columns   
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },

        product_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
        product_price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
          validate: {
          isDecimal: true,
          },
        },

        in_stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10,
          validate: {
          isNumeric: true,
          },
        },

        category_id: {
          type: DataTypes.INTEGER,
          references: {
            model: Category,
            key: 'id',
            unique: 'false',

          },
        },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
