const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("<h2>Welcome to Web ...!</h2>")
})

app.get('/add', (req, res) => {
    res.send(`
        <label>Add User : <input type="text"/></label>
        <button>Save User</button>
    `)
})

app.listen(port, (err) => {
    if(err){
        return console.log(err)
    }
    console.log("Server is listening on PORT 3000")
})