Express + Marko
=====================

# Installation

```
npm install express --save
npm install marko --save
```

# Usage

```javascript
require('marko/node-require').install();

var express = require('express');
var template = require('./template.marko');

var app = express();

app.get('/', function(req, res) {
    template.render({
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        }, res);
});

app.listen(8080);
```