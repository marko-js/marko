# Marko + HTTP Server

See the [marko-http](https://github.com/marko-js-samples/marko-http) sample
project for a working example.

## Installation

```bash
npm install marko --save
```

## Usage

```js
require('marko/node-require').install();

const http = require('http');
const server = require('http').createServer();

const port = 8080;
const indexTemplate = require('./index.marko');

server.on('request', (req, res) => {
    indexTemplate.render({
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    }, res);
});

server.listen(port, () => {
    console.log(`Successfully started server on port ${port}`);
});
```
