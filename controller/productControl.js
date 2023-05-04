const productModel = require("../model/product");

const addProduct = async (req, res) => {
    try {
        const product = new productModel(req.body);
        const productData = await product.save();
        res.json({
            success: true,
            message: "The product data saves",
            record: productData
        })
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

const productLook = async (req, res) => {
    try {
        const productData = await productModel.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField:"user_id",
                    foreignField:"_id",
                    as:"myuser"
                }
            }
        ]);
        res.json({
            success:true,
            message:"Product Data",
            record:productData
        }); // res.json 
    } // try 
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}
module.exports =
{
    addProduct,
    productLook
}