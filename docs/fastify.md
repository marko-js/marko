# Fastify + Marko

See the [marko-fastify](https://github.com/marko-js-samplesmarko-fastify) sample
project for a fully-working example.

## Installation

```bash
npm install fastify --save
npm install point-of-view --save
npm install marko --save
```

## Usage

```js
const fastify = require('fastify')();

fastify.register(require('point-of-view'), {
    engine: {
        marko: require('marko')
    }
});

fastify.get('/', (req, reply) => {
    reply.view('/index.marko', {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

fastify.listen(8080, err => {
    if (err) throw err;
    console.log(`Server listening on ${fastify.server.address().port}`);
});
```
