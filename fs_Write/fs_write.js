const fs = require('fs');

fs.writeFile('message.txt', 'ciao, Mondo!', (err) => {

    if (err) throw err;
    console.log('Il log file è stato creato!');
});