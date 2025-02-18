const express = require('express');
const connectDB = require('./config/index');
const app = express();
const port = 3000;
const { register, login } = require('./controllers/userController')
const { addPatient, getPatients } = require('./controllers/patientController')
const { addHeartRate, getHeartRates } = require('./controllers/heartRateController')
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API Running');
})

app.post('/register', register);
app.post('/login', login);
app.post('/addPatient', addPatient);
app.get('/getPatients', getPatients);
app.post('/addHeartRate', addHeartRate);
app.get('/getHeartRates', getHeartRates);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})