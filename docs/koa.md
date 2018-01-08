# Koa + Marko

See the [marko-koa](https://github.com/marko-js-samples/marko-koa) sample
project for a fully-working example.

## Installation

    npm install koa --save
    npm install marko --save

## Usage

```javascript
require('marko/node-require');

const Koa = require('koa');
const app = new Koa();

const template = require('./index.marko');

app.use((ctx, next) => {
    ctx.type = 'html';
    ctx.body = template.stream({
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

app.listen(8080);
```

You may also easily add `gzip` streaming support without additional dependencies:

```javascript
require('marko/node-require');
const { createGzip } = require('zlib');

const Koa = require('koa');
const app = new Koa();

const template = require('./index.marko');

app.use((ctx, next) => {
    ctx.type = 'html';
    ctx.body = template.stream({
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });

    ctx.vary('Accept-Encoding');
    if (ctx.acceptsEncodings('gzip')) {
        ctx.set('Content-Encoding', 'gzip');
        ctx.body = ctx.body.pipe(createGzip());
    }
});

app.listen(8080);
```
