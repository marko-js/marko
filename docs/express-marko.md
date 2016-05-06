Express + Marko
=====================

# Installation

```
npm install express --save
npm install marko --save
```

# Usage

Marko provides a submodule (`marko/express`) to add a `res.marko` method to the express response object.  This function works much like `res.render`, but doesn't impose the restrictions of the express view engine and allows you to take full advantage of Marko's streaming and modular approach to templates.  

By using `res.marko` you'll automatically have access to `req`, `res`, `app`, `app.locals`, and `res.locals` from within your Marko template and custom tags.  These values are added to `out.global`.

```javascript
require('marko/express'); //enable res.marko
require('marko/node-require').install();

var express = require('express');
var template = require('./template.marko');

var app = express();

app.get('/', function(req, res) {
    res.marko(template, {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

app.listen(8080);
```
