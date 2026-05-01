const fs = require("fs");
fs.writeFile("Sample.txt", 
    "GLA is Welcoming 2026 Admissions",
    {encoding:'utf-8', flag:'w'}, 
    (err)=>{
        if(err) throw(err);
        console.log("File Created Successfully")
})
// fs.writeFileSync();
// fs.readFileSync();
// fs.appendFileSync();
// fs.unlinkSync();


fs.readFile("Sample.txt", 
    {encoding:'utf-8', flag:'r'}, 
        (err, contentlao)=>{
        if(err) throw(err);
        console.log(contentlao);
})
fs.appendFile("Sample.txt",
    "\nGLA is North-India's Best college",
    {encoding:'utf-8', flag:'a'},
    (err)=>{
        if(err) throw(err);
        console.log("File Edited Successfully");
    }
)



