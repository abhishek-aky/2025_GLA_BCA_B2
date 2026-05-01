const http = require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    const currentDateTime =  new Date();
    res.write("<h3>Current Date and Time</h3>");
    res.write(`<strong>${currentDateTime}</strong>`);
    res.write("<strong>"+ currentDateTime+"</strong>");
    res.end();
});

const port = 3333;

server.listen(port, ()=>{
    console.log(`Server is running at port http:localhost:${port}`);
})
