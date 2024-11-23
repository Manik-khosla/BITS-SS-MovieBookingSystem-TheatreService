const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const theatreRoutes = require('./routes/theatres');

const app = express();

// Middleware
app.use(cors({
    origin: true,
    credentials: true,
  }));
app.use(bodyParser.json());

// Routes
app.use('/api/theatres', theatreRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
