'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuItems.belongsTo(models.Restaurant,{
        foreignKey: 'restaurantId'
      })
    }
  };
  MenuItems.init({
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    restaurantId:{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'restaurants',
      key:'id'
    }
  }
  }, {
    sequelize,
    modelName: 'MenuItems',
    tableName: 'menu_items'
  });
  return MenuItems;
};