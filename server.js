const bodyParser = require('body-parser');

const express = require('express');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from Server');
})

app.post('/pay', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data received"});
})

app.listen(PORT, function(){
    console.log("Server running on localhost: "+ PORT);
});

//Hello world.