// import models
// --------------------------------
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { DataTypes } = require('sequelize');
// --------------------------------
// One-To-Many Relationship Pair
// --------------------------------
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  allowNull: false,
  onDelete: 'CASCADE',
});
// --------------------------------
// Many-To-Many Relationship Pair
// --------------------------------
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: 'product_tag',
  foreignKey: 'product_id',
  allowNull: false,
  onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: 'product_tag', 
  foreignKey: 'tag_id',
  allowNull: false,
  onDelete: 'CASCADE',
});
// --------------------------------
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

