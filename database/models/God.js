const mongoose = require('mongoose');

const GodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: String,
    description: String,
    mantra: String,
    imagePath: String,
    significance: String,
});

module.exports = mongoose.model('God', GodSchema);
