const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

// Optionally, ensure a unique index on the 'firstname' field
itemSchema.index({ firstname: 1 }, { unique: true });

module.exports = mongoose.model('Item', itemSchema);
