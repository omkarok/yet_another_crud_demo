const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    category: {type: String, required: true, max: 100},
    sub_cat:{type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
