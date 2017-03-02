Koa + Marko
=====================

# Installation

```
npm install koa --save
npm install marko --save
```

# Usage

```javascript
require('marko/node-require').install();

var koa = require('koa');

var app = koa();

app.use(function *() {
    this.body = template.stream({
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        });
});

app.listen(8080);
```