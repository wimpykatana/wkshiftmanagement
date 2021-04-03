const mongoose = require('mongoose');
function con(){
    mongoose.connect('mongodb://localhost:27017/staffmanagement', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("conected to mongodb");
    })
    .catch(err => handleError(err));
}

module.exports.con = con;