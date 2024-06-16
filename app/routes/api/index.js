const Router = require('express').Router();
const Category = require('./category-routes');
const Product = require('./product-routes');
const Tag = require('./tag-routes');
const ProductTag = require('./product-tag-routes');

Router.use('/categories', Category);
Router.use('/products', Product);
Router.use('/tags', Tag);
Router.use('/product-tags', ProductTag);

module.exports = Router;
