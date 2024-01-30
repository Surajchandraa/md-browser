const fs = require('fs');
const http = require('http');
const markdownIt = require('markdown-it');

const md = new markdownIt();

let readmepath=process.argv[2];
let pr=process.argv[3];


if(!fs.existsSync(readmepath)){
    console.log(`README file '${readmepath}' not found.`);
    process.exit(1);
}

function renderReadme() {
    return new Promise((resolve, reject) => {
        fs.readFile(readmepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(md.render(data));
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    try {
        const htmlContent = await renderReadme();
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlContent);
    } catch (error) {
        console.error('Error rendering README:', error);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
});


if(fs.existsSync("temp.html")){
    fs.unlinkSync("temp.html");
}
else{
    null
}


if(!pr){
pr=8080
}
else{
    null
}
const HOST = 'http://localhost';
server.listen(pr, () => {
    console.log(`Preview server running at ${HOST}:${pr}`);
});

process.on('SIGINT', () => {
    console.log('Shutting down server gracefully...');
    server.close(() => {
        console.log('Server stopped.');
        process.exit(0);
    });
});
