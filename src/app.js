const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//routes
const userRouter = require('./routes/user.routes');
const repairRouter = require('./routes/repairs.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// rutas
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);

module.exports = app;
