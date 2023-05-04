const express = require('express')
const product_route = express.Router();
const productControl = require("../controller/productControl");


product_route.post("/addProduct",productControl.addProduct);
product_route.get("/lookProduct",productControl.productLook);


module.exports = product_route;


