const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please add all fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({
        email,
        password: hashedPassword
    });

    if (newUser) {
        return res.status(201).json({ newUser });
    } else {
        return res.status(400).json({ message: 'Invalid user data' });
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
        user: {
            _id: user._id,
            email: user.email,
        }
    });
};

module.exports = { register, login };