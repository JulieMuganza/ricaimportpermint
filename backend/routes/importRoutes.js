const express = require("express");
const router = express.Router();
const db = require("../database");

// Add import details
router.post("/", (req, res) => {
    const { business_id, purpose, specify_purpose } = req.body;
    const query = `INSERT INTO import_details (business_id, purpose, specify_purpose) VALUES (?, ?, ?)`;

    db.query(query, [business_id, purpose, specify_purpose], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, message: "Import details added successfully" });
    });
});

module.exports = router;
