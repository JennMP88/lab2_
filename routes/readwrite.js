//read and writes file 



const fs = require('fs');

const load = (classname, cb) => {
    console.log("Loading");
    fs.readFile(`./classes/${classname}.json`, (err, data) => {
        if (err) {
            console.log('error');
            return "No file found"
        }
        cb(data);
    })
}

const save = (classname, data,cb) => {
    console.log("saving")
    fs.writeFile(`./classes/${classname}.json`, data, (err,res)=> {
        console.log(err,res);
        
        cb(data)
    })
}

// const add=(className,fileData,cb)=>{
//     load(className,(data)=>{

//         // cb(data);
//     })
// }

module.exports={
    load,
    save,
}