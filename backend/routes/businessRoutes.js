const express = require("express");
const router = express.Router();
const db = require("../database");

// Add business owner
router.post("/", (req, res) => {
    const { citizenship, id_number, passport_number, other_names, surname, nationality, phone_number, email } = req.body;
    const query = `
        INSERT INTO business_owners (citizenship, id_number, passport_number, other_names, surname, nationality, phone_number, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.query(query, [citizenship, id_number, passport_number, other_names, surname, nationality, phone_number, email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, message: "Business owner added successfully" });
    });
});

module.exports = router;
