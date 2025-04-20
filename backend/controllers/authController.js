require('dotenv').config();
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = rows[0];

        const isMatch = await bcrypt.compare(password, user.PASSWORD);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }


        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });


        res.json({ message: "Logged in successfully", token });
    } catch (error) {
        console.error(error);

        if (error.code === 'ER_BAD_DB_ERROR' || error.code === 'ER_PARSE_ERROR') {
            return res.status(500).json({ message: 'Database error occurred' });
        }

        return res.status(500).json({ message: 'An unexpected error occurred' });
    }
};
