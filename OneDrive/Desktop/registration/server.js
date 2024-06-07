// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema and model for users
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fullName: String,
    dateOfBirth: Date,
    phoneNumber: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());  // Use JSON body parser
app.use(express.static('public'));

// Routes
app.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
    });

    newUser.save((err) => {
        if (err) {
            res.status(500).json({ message: 'Error registering new user.' });
        } else {
            res.status(200).json({ message: 'Registration successful!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
newUser.save((err) => {
    if (err) {
        res.status(500).json({ message: 'Error registering new user.' });
    } else {
        res.status(200).json({ message: 'Registration successful!' });
    }
});
