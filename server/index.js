const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandle = require('./middlewares/errorHandle');
const setRoutes = require('./routes');
const setMiddlewares = require('./middlewares');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

dotenv.config({ path: './config/.env' })

// connect Database
connectDB();


//set middlewares
app.use(morgan('dev'))
app.use(cors());
setMiddlewares(app)

// all routes set here
setRoutes(app)

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' })
})

// handle Error
app.use(errorHandle)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


