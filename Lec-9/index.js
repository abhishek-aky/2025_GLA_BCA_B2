const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
const username = "admin";
const password = "MainNhiBataunga";
let attempts = 3;
function askCredentionals(){
    if(attempts === 0){
        console.log(`😭You have exhausted the limits, Please Try After Sometime`);
        rl.close();
        return;
    }
    rl.question("Enter Username : ", (user)=>{
        rl.question("Enter Password : ", (pass)=>{
            if(user === username && pass === password){
                console.log(`Welcome ${user} Sir. 😎`)
            }
            else{
                attempts--;
                console.log(`❌Access Denied. Invalid Credentionals, ${attempts} attempts left`);
                askCredentionals();
            }
        })
    })
}
askCredentionals();

