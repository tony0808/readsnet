require('dotenv').config({ path: './config/.env' });
const express = require('express');
const connectToDatabase = require('./config/dbConnector');

const indexRouter = require('./routes/indexRoute');
const authRouter = require('./routes/authRoutes');

const app = express()
const PORT = process.env.PORT || 5000;

// Database connection
connectToDatabase();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// Views directory
app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);

// Start the server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
