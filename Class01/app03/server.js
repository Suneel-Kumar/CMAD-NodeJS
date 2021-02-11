const http = require('http');

http.createServer((req, res) => {
    // res.write(JSON.stringify({ name : 'Suneel Kumar', age : 22}));
    // res.end()
    res.writeHead(200, {'Content-Type' : 'text/html'});

    switch (req.url) {
        case '/home':
            res.write('<h2>Welcome to my Home</h2>');
            break;
        case '/about':
            res.write('<h2>Welcome to my About us</h2>');
            break;

        default:
            res.write('<h2>Welcome to my Web ...!</h2>');

    }
    res.end();


}).listen(9000, (err) => {
    if(err){
        return console.log(err);
    }
    console.log("Server is lintening on 9000")
})