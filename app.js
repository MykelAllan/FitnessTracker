//import require modules
const fs = require("fs");
const path = require("path");
const http = require("http");

//read a file using file system
//and path module
const  filePath = path.join(__dirname, "example.txt");
let fileData = "";

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    fileData = data;
    console.log("File read successfully: ", data);
});

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`HTTP Server says: ${fileData}`);
    } else if (req.url === "/api/users") {
        const users = JSON.stringify([
            { id: 1, name: 'John' }, 
            { id: 2, name: 'Jane' }
        ]);
        res.writeHead(200, { "content-Type" : "application/json"});
        res.end(users);
    } else {
        res.writeHead(404, { "content-Type": "text/plain"})
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("HTTP Server and REST API is running on port 3000")
})