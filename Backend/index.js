// Import the required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // requiring body parser
const app = express();
const PORT = 3000;
const router = require('./Routes/userrouter')
const cors = require('cors')
//middleware
app.use(cors())
app.use(bodyParser.json()); 

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://Sukritx:Sukrit2024@myclusterx.wsf6vfd.mongodb.net/dataabase1`")
    .then(() => {
        console.log('Connected to MongoDB server');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// // Set up a simple GET route
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });
app.use('/',router)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
