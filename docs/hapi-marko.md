Hapi + Marko
=====================

```javascript
'use strict';
require('marko/node-require').install();

const Hapi = require('hapi');

var template = require('./template.marko');

const server = new Hapi.Server();
server.connection({ port: 8000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply(template.stream({ name: 'Frank' })).type('text/html');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
```
