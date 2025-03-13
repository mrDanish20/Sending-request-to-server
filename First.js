let Server = require("http");
require("dotenv").config();

let { exec } = require("child_process");

let port = process.env.PORT;

Server.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Home Page</h1> 
        <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/services">Services</a></li>
       </ul> `);

        res.end();

    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>About Page</h1>`);
        res.end();
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Contact Page</h1>`);
        res.end();
    } else if (req.url === "/services") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Services Page</h1>`);
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
    }

}).listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    let u = `http://localhost:${port}`;
    if (process.platform === "win32") {
        exec(`start ${u}`);
    }

});
