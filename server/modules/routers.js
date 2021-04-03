const express = require('express');
const ShiftModel = require('./model')
const router = express.Router();
const moment = require('moment');

router.get('/shift', async(req, res) => {
    try{
        let result = await ShiftModel.find({});
        return res.status(200).json({data: result});
    }catch(err){
        return res.status(500).json({error:true, message:err.message});
    }
});

router.get('/shiftdate/:date', async(req, res)=>{
    let d =  moment(req.params.date).format('YYYY-MM-DD')
    let content = await ShiftModel.findOne({
        dateShift: d
    })
    return res.status(200).json({data: content});
})

router.post('/shift', async(req,res) => {

    const {title} = req.body 
    const {shiftDateYear} = req.body
    const {shiftDateMonth} = req.body
    const {shiftDateDay} = req.body
    const {shiftStart} = req.body
    const {shiftEnd} = req.body


    let shiftDate = moment(`${req.body.shiftDateYear}${req.body.shiftDateMonth}${req.body.shiftDateDay}`).format('YYYY-MM-DD');
    //get content by date
    let content = await ShiftModel.findOne({
        dateShift: shiftDate
    },(err, content) => {
        if(err){
            return res.status(500).json({error:true, message:err.message});
        }
        return content
    })

    if(content){ // tanggal sudah ada
        await ShiftModel.updateOne({
            _id: content._id,
        },
        {
            $push: { dataShift: { name: title, start: shiftStart, end: shiftEnd }}
        },(err) => {
            if(err){
                return res.status(500).json({error:true, message:err.message});
            }
            return res.status(200).json({error: false, message: 'success'})
        })
        
    }else{
        //TODO: Add new shift on date
        const newShift= new ShiftModel({
            dateShift: shiftDate,
            dataShift: [ { name: title, start: shiftStart, end: shiftEnd } ]
        }); 

        const result = await newShift.save();
        if(result){
            return res.status(200).json({error: false, message: 'success'})
        }
    }

})

module.exports = router;


// async function getDate(){
//     let content = await ShiftModel.findOne({
//         dateShift: moment('2021-04-07').format('YYYY-MM-DD')
//     })
//     console.log(content)
//     // var dat = moment('2021-04-07').valueOf();
//     // console.log(dat)
//     // console.log(moment(dat).format('YYYY-MM-DD'));
// }
// getDate();

// async function createShift(){
//     const newShift= new ShiftModel({
//         dateShift: moment('2021-04-03').format('YYYY-MM-DD'),
//         dataShift: [
//             {name: "Wimpy", start:1, end: 9},
//             {name: "Lani", start:10, end: 11},
//             {name: "Casielle", start:12, end: 13},
//         ]
//     })

//     const result = await newShift.save();
//     console.log("save succes ", result);
// }
// createShift();




