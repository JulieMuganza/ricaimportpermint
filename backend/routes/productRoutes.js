const express = require("express");
const router = express.Router();
const db = require("../database");

// Add product details
router.post("/", (req, res) => {
    const { import_id, category, name, description, quantity } = req.body;
    const query = `INSERT INTO products (import_id, category, name, description, quantity) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [import_id, category, name, description, quantity], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, message: "Product details added successfully" });
    });
});

module.exports = router;
