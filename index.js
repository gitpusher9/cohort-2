const express = require("express");
const bodyParser = require("body-parser");
const web = express();
const port = 3000;
web.use(bodyParser.json());

web.get('/', function (req, res) {
  res.send('Hello World!')    
})

web.listen(3000) 