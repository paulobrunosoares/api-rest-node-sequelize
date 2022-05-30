const productService = require('../services/productService');


module.exports = {
  async all(req, res) {
    try {
      const products = await productService.all();
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
    async create(req, res) {
    try {
      const product = await productService.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
    async find(req, res) {
    try {
      const product = await productService.find(req.params.id);
      if (product == null) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
    async update(req, res) {
    try {
      const product = await productService.update(req.params.id, req.body);
      if (product == null) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
    async delete(req, res) {
    try {
      const id = req.params.id;
      const product = await productService.delete(id);
      if (product == null) {
          return res.status(400).json({ error: 'Product not found' });
      }
      return res.status(200).json("product deleted");
      
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
