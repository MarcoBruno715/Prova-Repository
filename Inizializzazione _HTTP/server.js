const http = require('http') //  

const server = http.createServer((req,res) => {  //oggetto server 
    if(req.url === '/') {                     // / rotta tutto l'index 
      res.writeHead(200, {'Const-Type': 'text/plain; charset=UTF-8' });
      res.end('Benvenuto nella mia applicazione!');
    }else if (req.url === '/about') {
        res.writeHead(200, {'Const-Type': 'text/plain; charset=UTF-8' });
        res.end('Questa è la pagina About!');
    } else{
        res.writeHead(200, {'Const-Type': 'text/plain;  charset=UTF-8' });
        res.end('Pagina non trovata!');
    }
});

server.listen(3000, () => {
    console.log('il server è in ascolto sulla porta 3000!');

});