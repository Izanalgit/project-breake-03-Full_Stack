require('dotenv').config();

const clientURL = process.env.CLIENT_URL || 'http://locahost';

const corsOptions = {
    origin: clientURL,
    optionsSuccessStatus: 200,
  };

module.exports = corsOptions;