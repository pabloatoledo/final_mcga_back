const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        maxLength: 7,
        required: true,
    },
    stock: {
        type: Number,
        maxLength: 4,
        required: true,
    },
    description: {
        type: String,
        maxLength: 50,
        required: false,
    }
});

module.exports = mongoose.model("Products", ProductsSchema);