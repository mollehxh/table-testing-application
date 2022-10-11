const express = require('express');
const cors = require('cors');
const carRouter = require('./routes/car.routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', carRouter);

app.listen(PORT, () => {});
