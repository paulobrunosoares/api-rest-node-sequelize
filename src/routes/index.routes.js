const expres = require("express");
const productController = require('../controllers/productController');
const router = expres.Router();

router.route('/')
  .get(productController.all)
  .post(productController.create)

router.route('/:id')
  .get(productController.find)
  .put(productController.update)
  .delete(productController.delete);

module.exports = router;

