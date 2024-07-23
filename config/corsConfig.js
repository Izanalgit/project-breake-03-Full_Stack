require('dotenv').config();

const clientURL = process.env.CLIENT_URL || 'http://localhost:5173';

const corsOptions = {
    origin: clientURL,
    optionsSuccessStatus: 200,
  };

module.exports = corsOptions;