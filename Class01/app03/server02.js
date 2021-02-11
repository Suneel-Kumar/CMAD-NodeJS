const { EADDRNOTAVAIL } = require('constants');
const http = require('http');
const { userInfo } = require('os');
const enroll = require('./Student/enroll')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/add':
            let userName = `User ${enroll.getAllStudents().length + 1}`
            enroll.addNewStudent(userName);
            res.write(`${userName} added Successfully`)
            break;
        case '/list':
            let users = enroll.getAllStudents();
            res.write(JSON.stringify({students : users}));
            break
        default:
            break;
    }
    res.end()
})

server.listen(9000, (err) => {
    if (err) {
        console.log("Error in Starting Server")
        return console.log(err)
    }
    console.log("Server started Successfully");
})