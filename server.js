// import {createServer} from 'node:http';
// const server = createServer((request, response) => {
//     response.write("Server is runig on 3333");

//     return response.end();
// });

// server.listen(3333);


import {fastify} from 'fastify';
import { DatabaseMemory } from './database-memory.js';


const server = fastify()


server.get('/', () => {
    return('Server is runing on 3333')
});

server.post('/videos', () => {
    
});

server.get('/videos', () => {
    
});

server.put('/videos/:id', () => {
    
});

server.delete('/videos/:id', () => {
    
});


server.listen({port:3333,});