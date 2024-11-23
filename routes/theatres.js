const express = require('express');
const Theatre = require('../models/theatre');
const router = express.Router();

// List all theatres
router.get('/all', async (req, res) => {
    try {
        const theatres = await Theatre.find();
        res.json(theatres);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a theatre (Admin)
router.post('/add', async (req, res) => {
    const { name, location, capacity } = req.body;

    const theatre = new Theatre({
        name,
        location,
        capacity
    });

    try {
        const savedTheatre = await theatre.save();
        res.status(201).json(savedTheatre);
        console.log("New Theatre details added successfully " + savedTheatre);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
