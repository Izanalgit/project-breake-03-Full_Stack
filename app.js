const express = require('express');
const session = require('express-session');
const cors = require('cors');
const compression = require('compression');
const swaggerUI = require('swagger-ui-express');
const morgan = require('morgan');

const docs = require('./docs/index');

const dbConnect = require('./config/dataBaseConfig');
const {createSession} = require('./middleware/authMiddleware');

//Enviorement
require('dotenv').config();

//API Init
const app = express();
const PORT = process.env.PORT || 8080;

//DB Connection
dbConnect();

//Security
app.use(cors());

//Data
app.use(compression());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Logger
app.use(morgan('dev'));

//Session
app.use(session(createSession()));

//API Documentation
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

//API Content
app.use('/', require('./routes'));

//API Listen
app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})
