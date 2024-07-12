const express = require('express');
const cors = require('cors');
const compression = require('compression');
const swaggerUI = require('swagger-ui-express');
const morgan = require('morgan');

const dbConnect = require('./config/dataBaseConfig');

//Enviorement
require('dotenv').config();

//Init API
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

//API Content
app.get('/health', (req,res)=>{
    res.status(200).json({response:'server alive'})
});

app.use('/', require('./routes'));

//API Listen
app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
})
