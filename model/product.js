const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId
const productSchema = new mongoose.Schema({
    user_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    name:
    {
        type: String,
        required: true
    },
    price:
    {
        type: String,
        required: true
    }
});

const product = new mongoose.model("products", productSchema);
module.exports = product;
