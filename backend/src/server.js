const express = require('express');
const routes = require('./Routes/routes');
require('dotenv').config();
const app = express();
app.use(routes);
app.use(express.json())


app.listen(process.env.PORT, (req, res)=> {
    console.log('Server running on the port 3333');
})