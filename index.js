'use strict';
var path = require('path');
var http = require('http');
var oas3Tools = require('oas3-tools');
var serverPort = 8080 || process.env.Port;
// Import mongoose
const mongoose = require('mongoose');
// Conectar à BD através do mongoDB Atlas
// Mudar para Atlas
const url = "mongodb+srv://Carolina1:Carolina1@takeawayapi.mrdmw.mongodb.net/takeawayAPI?retryWrites=true&w=majority" //"mongodb+srv://API_takeAway:gVPpDm85SE9hms45@takeaway.8c4rr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const optionsDB = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
        services: path.join(__dirname,'./service')
    },
};
var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp(); 