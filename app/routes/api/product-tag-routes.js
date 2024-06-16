const Router = require('express').Router();
const { ProductTag } = require('../../models');
// The `/api/product-tags` endpoint
// Sync table product_tag insert last product_id and tag_id
Router.post('/:p_id/:t_id', async (req, res) => {
    try{
        const productID = req.params.p_id;
        const tagID = req.params.t_id;
        const syncProductTag = await ProductTag.create({
            product_id: productID,
            tag_id: tagID,
        });
        (!syncProductTag) ? res.status(400).json({ message: `Erorr Code 400 | (Bad Request).` }) : res.status(200).json(syncProductTag);
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error! | ERROR: ${error}.` });
    }
});
module.exports = Router;