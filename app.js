require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path= require('path')
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
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));