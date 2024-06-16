const Router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

Router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const getCategoriesData = await Category.findAll({
      order: [
        ['category_id', 'ASC']
      ],
      include: [
        {
          model: Product,
        },
      ],
    });
    (!getCategoriesData) ? res.status(404).json({ message: `Category Data Not Found! | Status Code 404 (Not Found)` }) : res.status(200).json(getCategoriesData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}` });
  }
});

Router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const getCategoryData = await Category.findAll({
      include: {
        model: Product,
      },
      where: {
        category_id: req.params.id,
      },
    });
    (!getCategoryData) ? res.status(404).json({ message: `No Category Data Found! | Status Code 404 (Not Found)` }) : res.status(200).json(getCategoryData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}` })
  }
});

Router.post('/', async (req, res) => {
  // create a new category
  try {
    const addNewCategoryData = await Category.create(req.body);
    (!addNewCategoryData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(addNewCategoryData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

Router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategoryData = await Category.update({
        category_name: req.body.category_name,
      },
      {
        where: {
          category_id: req.params.id,
        }
      },
    );
    (!updateCategoryData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(updateCategoryData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

Router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategoryData = await Category.destroy({
      where: {
        category_id: req.params.id,
      },
    });
    (!deleteCategoryData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(deleteCategoryData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

module.exports = Router;
