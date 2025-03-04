const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, description, imageUrl } = req.body;
        const newProduct = new Product({ name, price, description, imageUrl });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getProducts, addProduct };
