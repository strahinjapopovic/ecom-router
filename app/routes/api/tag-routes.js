const Router = require('express').Router();
const { Tag, Product, Category, ProductTag } = require('../../models');

// The `/api/tags` endpoint

Router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      order: [
        ['tag_id', 'ASC']
      ],
      include: Product,
    });
    (!tagData) ? res.status(404).json({ message: `Product Data Not Found! | Status Code 404 (Not Found)` }) : res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}` });
  }
});

Router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagIdData = await Tag.findAll({
      include: {
        model: Product,
      },
      where: {
        tag_id: req.params.id,
      },
    });
    (!tagIdData) ? res.status(404).json({ message: `Tag Data Not Found! | Status Code 404 (Not Found)` }) : res.status(200).json(tagIdData);
  } catch (error) {
    res.status(500).json({ messge: `Internal Server Error! | ERROR: ${error}` });
  }
});

Router.post('/', async (req, res) => {
  // create a new tag
  try {
    const addNewTagData = await Tag.create({
      tag_name: req.body.tag_name,
  });
    (!addNewTagData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(addNewTagData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

Router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagData = await Tag.update({
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_id: req.params.id,
      },
    },
  );
  (!updateTagData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(updateTagData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
  }
});

Router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTagData = await Tag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });
    (!deleteTagData) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(deleteTagData);
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}. `});
  }
});

module.exports = Router;
