const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const sql = require('mssql');

app.use(cors());
app.use(bodyParser.json());

const port = 7200;
app.listen(port, function(){
    console.log('Server currently running on port ' + port)
})
