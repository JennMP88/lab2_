const express = require('express');
const app = express ();
const port= 8080;
const file=require(`./routes/readwrite.js`)
//check if class exist
//-------------------TO BE DONE 
//if exist then update {load, process data(json.parse), 
//check if student exist {rewrite student data}}
//response.send should look like the ask 
//added:req.queryname....etc.
//class:req.query.class

app.get("/class/add",(req,res)=>{
    let currentData;
    file.load(req.query.name,(data,classname)=>{
        currentData=JSON.parse(data);
        res.send({
            message:currentData,
        })
    })
    
})


app.listen(port,()=>{
    console.log('listening to port')
})

// const Me={
//     name:"jen",
//     age:22,
// }

// const lol = JSON.stringify(Me);
// file.save(`Name`, lol, (err,response)=>{
//     console.log("hi")

// })

///class/add/?class=physics&name=John&age=30&city=NYC&grade=75
//request.query.name for name...etc 
//request.query.age for name
//request.query.city for name
//request.query.grade 

