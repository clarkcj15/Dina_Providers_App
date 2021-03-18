const mongoose = require('mongoose');
const providerSchema = new mongoose.Schema({
    identifier: { type: Number, required: true},
    gender: { type: String, required: true},
    name: { type: String, required: true},
    specialty: { type: String, required: true},
    address: [{type: String, required: true}]
})
module.exports = mongoose.model('Provider', providerSchema);