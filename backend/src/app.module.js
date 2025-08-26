const express = require('express');
const cors = require('cors');
const formController = require('./app.controller');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', formController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`);
});