import { createServer } from 'node:http';

const server = createServer((req, res) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000,
    }

    res.writeHead(200, headers);

    const partes = req.url.split('/');
    const num1 = parseFloat(partes[1]);
    const num2 = parseFloat(partes[2]);

    const resultado = num1 + num2;

    let respuesta = { "resultado": resultado }
    let respuestaJson = JSON.stringify(respuesta);
    res.end(respuestaJson);
});

server.listen(3001, '127.0.0.1', () => {
    console.log('Servicio SUMA PATH en 127.0.0.1:3001');
});