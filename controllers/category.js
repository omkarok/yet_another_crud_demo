const Category = require('../models/category');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.category_create = function (req, res, next) {
    let category = new Category(
        {
            name: req.body.name,
            parent: req.body.parent,
            category: req.body.cat
        }
    );

    category.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Category Added successfully')
    })
};

exports.categories_all = function (req, res) {
    Category.find(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.category_details = function (req, res) {
    Category.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.category_update = function (req, res) {
    Category.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Category udpated.');
    });
};

exports.category_delete = function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

