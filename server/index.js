const express = require('express');
const dbConfig = require('./config/db');
const cors = require('cors');


const shiftRouter = require('./modules/index');

dbConfig.con()
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', [
    shiftRouter
]);
 

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
 });