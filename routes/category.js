const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/category');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', category_controller.test);
router.post('/add', category_controller.category_create);

router.get('/',category_controller.categories_all);

router.get('/:id', category_controller.category_details);

router.put('/:id/update', category_controller.category_update);

router.delete('/:id/delete', category_controller.category_delete);

module.exports = router;
