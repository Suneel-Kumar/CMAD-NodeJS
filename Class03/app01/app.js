const express = require('express');
const app = express();

const port = 3000;

const blog = [
    { title: 'Article 01', author: 'author 01', createdOn: new Date() },
    { title: 'Article 02', author: 'author 02', createdOn: new Date() },
    { title: 'Article 03', author: 'author 03', createdOn: new Date() },
    { title: 'Article 04', author: 'author 04', createdOn: new Date() },
    { title: 'Article 05', author: 'author 05', createdOn: new Date() }
]

function requestLogger(req, res, next){
    console.log("Received request for "+req.url)
    next();
}

function requestReceivingTime(req, res, next){
    req.receivingTime = new Date();
    next()
}
//  middleware mount
// app.use(requestLogger);
app.use(requestReceivingTime)

app.get('/article/get-all', requestLogger, (req, res) => {
    res.send(blog)
})

app.get('/article/get-counts', (req, res) => {
    res.send({ count: blog.length })
})

app.get('/article/create', (req, res) => {
    let count = blog.length + 1;
    blog.push({title : `Article ${count}`, author : `author ${count}`, createdOn : new Date()})
    res.send({ count: blog.length })
})

app.listen(3000, (err) => {
    if (err) {
        console.log("Err in server Listening");
        console.log(err)
        return
    }
    console.log("Server is listening on PORT 3000")
})