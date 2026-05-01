const http = require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    res.write(`Hello, Kaise ho?`);
    res.write(`Sb badhiya, aap btao`);
    res.write(`Kuch nhi absent lg gyi`);
    res.end();
});

const port = 3333;
server.listen(port, ()=>{
    console.log(`Server is running at localhost:${port}`);
})