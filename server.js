const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware


app.use(cors());
app.use(express.json()); // Allows JSON data handling

// Dummy Products API Route
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Riding Helmet", price: 50 },
        { id: 2, name: "Leather Saddle", price: 200 },
        { id: 3, name: "Bridle", price: 80 }
    ]);
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
