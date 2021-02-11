const fs = require('fs');

fs.writeFile('abc.txt', 'Welcome to my NodeJs Blog', (err) => {
    if(err){
        return console.log("Err in Writing File")
    }
    console.log('Data Write Successfully');
})