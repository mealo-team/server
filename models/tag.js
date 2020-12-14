'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Recipe, { through: models.RecipeTag });
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'name is required'
        },
        isAlpha: {
          args: true,
          msg: 'name cannot contain number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};