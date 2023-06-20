const express = require ('express'); // la nosta costante express corrisponde ad un importazione , una richiesta del modulo express
const app = express(); // dichiariamo una costante , restituiexe express , lo richiammiamo tramite due metodi , il get e listen

app.get('/', function (req, res) {  //mandiamo una stringa attraverso il metodo listen di app  
   res.send('ciao, Mondo!'); 
});
app.get('/about', function (req, res) {  //mandiamo una stringa attraverso il metodo listen di app  
   res.send('Bravo!'); 
});

//listen si occupa di assegnare la porta listen , invia 
app.listen(3000, function(){
console.log('il server è in ascolto sulla porta 3000!')
});


