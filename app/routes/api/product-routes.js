const Router = require('express').Router();
const { where, Model } = require('sequelize');
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
Router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const getProductsData = await Product.findAll({
      order: [
        ['product_id', 'ASC']
      ],
      include: [Category, Tag],
    });
    (!getProductsData) ? res.status(404).json({ message: `Product Data Not Found! | Status Code 404 (Not Found)` }) : res.status(200).json(getProductsData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}}` });
  }
});

// get one product
Router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const getProductData = await Product.findAll({
      where: {
        product_id: req.params.id,
      },
      include: [Category, Tag],
    });
    (!getProductData) ? res.status(404).json({ message: `Product Data Not Found! | Status Code 404 (Not Found)` }) : res.status(200).json(getProductData);
  } catch (error) {
    res.status(500).json({ message: `Internam Server Error! | ERROR: ${error}` });
  }
});

// create new product
Router.post('/', async (req, res) => {
  //Add new product to database
  try {
    const addNewProductData = await Product.create({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_stock: req.body.product_stock,
      category_id: req.body.category_id,
    });
    (!addNewProductData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(addNewProductData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.`})
  }
});

// update product
Router.put('/:id', async (req, res) => {
  // update product data
  try {
    const updateProductData = await Product.update({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_stock: req.body.product_stock,
      category_id: req.body.category_id,
    },
    { 
      where: {
        product_id: req.params.id,
      },
    },
  );
  (!updateProductData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(updateProductData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

Router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const deleteProductData = await Product.destroy({
      where: {
        product_id: req.params.id,
      },
    });
    (!deleteProductData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(deleteProductData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` })
  }
});

module.exports = Router;
