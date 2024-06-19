const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const Userroute = require('./routes/Userroute');
const fileUploadRoutes = require('./routes/Filecreateroute');
const connection = require('./database/DbConnect');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file setup
app.use('/static', express.static(path.join(__dirname, 'uploads/')));
app.use(express.static('uploads/'));

// Route setups
app.use("/api/user", Userroute); // User routes
app.use('/api/nilesh', fileUploadRoutes); // File upload routes

// Database connection
connection(); // Assuming this function establishes the database connection

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
