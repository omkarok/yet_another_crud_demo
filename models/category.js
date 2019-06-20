const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: {type: String, max: 100},
    parent: {type: String},
    category: {type: String}
});


// Export the model
module.exports = mongoose.model('Category', CategorySchema);
