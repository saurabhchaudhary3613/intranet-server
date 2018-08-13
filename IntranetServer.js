/**
 * To build WebService
 */
const express = require('express');
const app = express(); //express returns object Refernce 

//data
const intranetData = {
    "text": "Hello world"
}
const staticHtml = {
	"myHtml": "<app-header></app-header><router-outlet></router-outlet><app-footer></app-footer>"
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Writing api's - RestFull webservices
app.get('/api/data', function (req, res) {
    res.json(intranetData);
});
app.get('/api/html', function (req, res) {
    res.send(staticHtml.myHtml);
});

app.listen(8081, function () {
    console.log('Server is Ready!');
});