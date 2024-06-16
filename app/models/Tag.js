const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// --------------------------------
// Model table structure definition
// --------------------------------
class Tag extends Model {}
Tag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// --------------------------------
module.exports = Tag;
