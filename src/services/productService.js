// service for product
const Product = require("../model/productModel");

module.exports = {
  async all() {
    const products = await Product.findAll();
    return products;
  },
  async create(reqBody) {
    const product = await Product.create(reqBody);
    return product;
  },
  async find(reqId) {
    const product = await Product.findByPk(reqId);
    return product;
  },
  async update(reqId, reqBody) {
    const product = await Product.findByPk(reqId);
    if (!product) {
      return null;
    }
    await product.update(reqBody);
    return product;

  },
  async update2(reqId, reqBody) {
    const { name, price, description, category } = reqBody;

    const id = reqId;
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;

    await product.update();
    return product;
  },
  async delete(reqId) {
    const id = reqId;
    const product = await Product.destroy({ where: { id } });
    if (!product) {
      return null;
    }
    return "product deleted";
  },
};
