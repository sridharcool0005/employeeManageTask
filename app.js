// require('./config/config');
require('./models/db');
const db = require('./dbConnection');

const path=require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

//  static files location.
app.use(express.static(__dirname + '/dist'));
// Bundle API routes.
app.use('/api', rtsIndex);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// start server
app.listen(3000, () => console.log(`Server started at port : 3000`));