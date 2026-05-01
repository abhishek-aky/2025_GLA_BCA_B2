const fs = require("fs");
fs.unlink("Sample.txt",(err)=>{
    if(err) console.log(err);
    console.log("File Deleted Successfully✅");
})