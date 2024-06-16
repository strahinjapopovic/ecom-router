const seedCategoryData = require('./category-seeds');
const seedProductData = require('./product-seeds');
const seedTagData = require('./tag-seeds');
const seedProductTagData = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategoryData();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProductData();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTagData();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTagData();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
