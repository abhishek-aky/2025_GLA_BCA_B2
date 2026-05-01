const fs = require("fs");

try{
    fs.writeFileSync('Sample.txt', "Hello How are u?");
}
catch(err){
    console.error(err);
}
try{
    fs.readFileSync("Sample.txt")
}