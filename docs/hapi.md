# Hapi + Marko

See the [marko-hapi](https://github.com/marko-js-samples/marko-hapi) sample
project for a working example.

## Installation

```bash
npm install hapi --save
npm install marko --save
```

## Usage

```javascript
'use strict';

require('marko/node-require');

const Hapi = require('hapi');

const indexTemplate = require('./index');

const server = new Hapi.Server();
const port = 8080;

server.connection({ port });

server.route({
    method: 'GET',
    path: '/',
    handler (request, reply) {
        return reply(indexTemplate.stream({
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        })).type('text/html');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running on port: ${port}`);
});
```
