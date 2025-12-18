const express = require("express")
const cors =require("cors")

const app = express()
app.use(cors())

app.get('/add', function(req,res){
    const a = parseInt(req.query.b);
    const b = parseInt(req.query.a);

    const finalsum = a +b;

    res.send(finalsum.toString());
})

app.get('/interest', function(req,res){
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);

    interest = (p*r*t)/100;
    total = p + interest;

    res.send({
        interest: interest,
        total: total,
    })
})

app.listen(3000);