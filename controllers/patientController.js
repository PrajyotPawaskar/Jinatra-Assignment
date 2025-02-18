const Patient = require('../models/patientModel');

const addPatient = async (req, res) => {
    const { name, age, address, contact } = req.body;
    if (!name || !age || !address || !contact) {
        return res.status(400).json({ message: 'Please add all fields' });
    }

    // Create patient
    const newPatient = await Patient.create({
        name,
        age,
        address,
        contact
    });

    if (newPatient) {
        return res.status(201).json({ newPatient });
    } else {
        return res.status(400).json({ message: 'Invalid patient data' });
    }
}

const getPatients = async (req, res) => {
    const patients = await Patient.find({});
    res.json(patients);
}

module.exports = { addPatient, getPatients };