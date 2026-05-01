const http = require("http");
const username = "abhishek-aky";
const url = `https://api.github.com/users/${username}`;
const server = http.createServer(async(req, res)=>{
    const response = await fetch(url);
    const data = await response.json();
    const scrip = `<h2>GitHub Profile</h2>
    <h4>Username: ${data.login}</h4>
    <h4>Pic : <img src="${data.avatar_url}"></h4>
    <strong>Followers : ${data.followers}</strong>
    <strong>Following : ${data.following}</strong>
                    <hr>
    <strong>Location : ${data.location}</strong>,
    <strong>Bio : ${data.bio}</strong>`;
    res.writeHead(200, {"content-type":"text/html"});
    res.write(scrip);
    res.end();

})
const port = 6262;
server.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})