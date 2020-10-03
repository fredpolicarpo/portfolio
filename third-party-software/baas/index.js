const http = require('http');
const moment = require('moment');
const hostname = '127.0.0.1';
const port = 9001;

function newSlip() {
    const slipDigits = []

    for(let index = 0; index < 42; index++) {
        slipDigits.push(Math.floor(Math.random() * 10))
    }

    return {
        BarCode: slipDigits.join(""),
        DueDate: moment().add(3, 'days').toDate()
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Wellcome to One More Bank as a Service');
    } else if (req.url === '/billet' && req.method === 'POST') {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(newSlip()));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});