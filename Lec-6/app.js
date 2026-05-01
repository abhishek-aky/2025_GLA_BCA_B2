const fs = require("fs");
let data = "Hello! How was your Exam?";
fs.writeFile("Hey.txt", data, (err)=>{
    if(err){
        console.log("Error aa gya : ", err);
    }
    else{
        console.log("Congrats! File bn gyi");
    }
})