const express = require('express');
const routes = require('../routes/routes')
const bodyParser =require('body-parser');

const server = express();
server.use(bodyParser.urlencoded({extended:true}))
server.use(express.json());


   

server.use(routes);
server.listen(process.env.PORT || 3000);

