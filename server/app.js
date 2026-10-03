var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173' // Fallback to local Vite port
];

var usersRouter = require('./routes/users');
var aptRouter = require('./routes/apt');
var resumeRouter = require('./routes/resume');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true
}));

// Point Express to your Vue build output folder (usually 'dist')
app.use(express.static(path.join(__dirname, 'dist')));


// Catch-all route to let Vue Router handle the page navigation
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.use('/users', usersRouter);
app.use('/apt', aptRouter);
app.use('/resume', resumeRouter);

module.exports = app;
