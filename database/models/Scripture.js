const mongoose = require('mongoose');

const ScriptureSchema = new mongoose.Schema({
    type: { type: String, required: true }, // Veda, Purana, Upanishad
    name: { type: String, required: true },
    description: String,
    summary: String,
    significance: String,
});

module.exports = mongoose.model('Scripture', ScriptureSchema);
