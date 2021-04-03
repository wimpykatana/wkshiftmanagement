const mongoose = require('mongoose');

const ShiftSchema = new mongoose.Schema({
    dateShift:{
        type: Date,
    },
    dataShift:[{
            name:{
                type: String,
            },
            start:{
                type: Number,
            },
            end:{
                type: Number,
            }
        }],
    
})

module.exports = mongoose.model('Shift', ShiftSchema);