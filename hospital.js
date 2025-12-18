const express = require("express")
const hospital = express()
const port = 3000;

const user =[{
    name : "John",
    kidney : [{
        healthy : false
    }]
}]

hospital.get('/', function (req, res) {
    const johnkidney = user[0].kidney;
    const numberofkidney = johnkidney.length;
    let numberofhealthykidney =0;
    for(i = 0; i<johnkidney.length; i++){
        if(johnkidney[i].healthy){
        numberofhealthykidney += 1;
        }
    }    
    const numberofunhealthykideny = numberofkidney - numberofhealthykidney;

    res.json({
        numberofkidney,
        numberofhealthykidney,
        numberofunhealthykideny
    }) 

    
    
})
hospital.listen(port)