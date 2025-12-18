const mongoose = require('mongoose');

const TempleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    history: String,
    deity: String,
    images: [String],
    coordinates: {
        lat: Number,
        lng: Number
    }
});

module.exports = mongoose.model('Temple', TempleSchema);
