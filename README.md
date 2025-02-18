Installation
Prerequisites
Node.js
MongoDB
npm or yarn
Steps
Clone the repository:
git clone https://github.com/PrajyotPawaskar/Jinatra-Assignment
cd jobboard
Install dependencies for the backend:
cd backend
npm install
Start the application:
Run the backend server:
cd backend
npm start
npm start
Open the application in your browser at http://localhost:3000.
Endpoints
1. Register a new user
Endpoint: POST /register

Description: Registers a new user by providing the necessary user data.

Request Body:

email (string): The user's email address.
password (string): The user's password (hashed before storing).

2. Login a user
Endpoint: POST /login

Description: Authenticates a user and provides a token if the credentials are valid.

Request Body:

email (string): The user's email address.
password (string): The user's password.

3. Add a new patient
Endpoint: POST /addPatient

Description: Adds a new patient to the system.

Request Body:

name (string): Patient's full name.
age (number): Patient's age.
address (string): Patient's address,
contact (number): Patient's contact

4. Get all patients
Endpoint: GET /getPatients

Description: Fetches a list of all patients in the system.

5. Add a new heart rate record
Endpoint: POST /addHeartRate

Description: Adds a new heart rate record for a patient.

6. Get all heart rate records
Endpoint: GET /getHeartRates

Description: Fetches a list of all heart rate records for the system.


