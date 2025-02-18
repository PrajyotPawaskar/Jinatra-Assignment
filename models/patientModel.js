const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        length: 2,
        min: 1
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        length: 10
    },
})

module.exports = mongoose.model('Patient', patientSchema)