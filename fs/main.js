const fs = require('fs');  //istanziamo oggetto fs

fs.readFile('file.txt', (err, data) => {   // richiamo metodo readefile
    if (err) throw err;           //se non esiste file txt 
    console.log(data.toString()); //stampa contenuto del file
});