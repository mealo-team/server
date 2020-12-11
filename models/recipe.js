'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recipe.init({
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    step: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    serving: {
      type: DataTypes.INTEGER,
    },
    timeCook: {
      type: DataTypes.INTEGER,
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};