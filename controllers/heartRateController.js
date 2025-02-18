const HeartRate = require('../models/heartRateModel');

const addHeartRate = async (req, res) => {
    const { name, heartRate } = req.body;
    if (!name || !heartRate) {
        return res.status(400).json({ message: 'Please add all fields' });
    }

    // Add heart rate
    const newHeartRate = await HeartRate.create({
        name,
        heartRate
    });

    if (newHeartRate) {
        return res.status(201).json({ newHeartRate });
    } else {
        return res.status(400).json({ message: 'Invalid heart rate data' });
    }
}

const getHeartRates = async (req, res) => {
    const heartRate = await HeartRate.find({});
    res.json(heartRate);
}

module.exports = { addHeartRate, getHeartRates };