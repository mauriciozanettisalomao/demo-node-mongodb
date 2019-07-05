const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    measure: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;