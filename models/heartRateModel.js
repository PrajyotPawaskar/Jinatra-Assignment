const mongoose = require('mongoose');
const heartRateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    heartRate:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('HeartRate', heartRateSchema)