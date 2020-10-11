const http = require('http');
const moment = require('moment');
const hostname = '127.0.0.1';
const port = 9001;

function newSlip(value) {
    const slipDigits = []

    for (let index = 0; index < 42; index++) {
        slipDigits.push(Math.floor(Math.random() * 10))
    }

    return {
        YourBarCode: slipDigits.join(""),
        YourDueDate: moment().add(3, 'days').toDate(),
        YourValue: parseFloat(value)
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Wellcome to YOUR GOLD => Bank as a Service');
    } else if (req.url === '/slip' && req.method === 'POST') {
        let value = NaN

        req.on('data', buffer => {
            const body = JSON.parse(buffer.toString())
            value = parseFloat(body.value)
        })

        req.on('end', () => {
            if (value) {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(newSlip(value)));
            } else {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: "Missing value parameter to generate slip" }))
            }
        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});