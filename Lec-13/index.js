const http = require("http");
let books = [{id:1, title:"Vasant"}, {id:2, title:"Flamingo"}];
const server = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"application/JSON"});
    if(req.method === "GET" && req.url === '/books'){
        res.end(JSON.stringify(books));
    }
    else if(req.method === "POST" && req.url === '/books'){
        let body="";
        req.on("data", chunk=> body+=chunk);
        req.on("end", ()=>{
            if(!body){
                res.end(JSON.stringify({message:"Data Not Received"}));
            }
            try{
                const product = JSON.parse(body);
                books.push(product);
                res.end(JSON.stringify(product));
            }
            catch(err){
                res.end(JSON.stringify({message:"Invalid JSON Format"}));
            }
        })
    }
    else if(req.method === "PUT"){
        books[0].title = "Bharat Ki Khoj";
        res.end(JSON.stringify({message:"Book Updated"}));
    }
    else if(req.method === "DELETE"){
        books.pop();
        res.end(JSON.stringify(books));

    }
})
const port = 6070;
server.listen(port, ()=>{
    console.log(`Server is running at http//localhost:${port}`);
})