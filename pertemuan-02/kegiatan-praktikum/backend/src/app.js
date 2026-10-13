const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/v1', indexRouter);

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: `Route ${req.method} ${req.originalUrl} tidak ditemukan`,
  });
});

module.exports = app;