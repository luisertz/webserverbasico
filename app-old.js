const http = require ('http');

http.createServer( (req, res) =>  {

    res.writeHead(200, { 'Content-Type': 'application/json'});

    let salida = {

        nombre: "luis",
        apellido: "mtz",
        url: req.url
    }

    res.write ('HOLA pinche mundo');

    res.write( JSON.stringify( salida ));
    res.end();
})
.listen(8080);


console.log('escuchando el pto 8080');