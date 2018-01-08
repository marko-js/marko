Express + Marko
=====================

See the [marko-express](https://github.com/marko-js-samples/marko-express) sample
project for a working example.

## Installation

```
npm install express --save
npm install marko --save
```

## Skip the view engine

The built in view engine for express may be asynchronous, but it doesn't support streaming (check out [Rediscovering Progressive HTML Rendering](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/) to see why this is so important).  So instead we'll [bypass the view engine](https://strongloop.com/strongblog/bypassing-express-view-rendering-for-speed-and-modularity/).

## Usage

Marko provides a submodule (`marko/express`) to add a `res.marko` method to the express response object.  This function works much like `res.render`, but doesn't impose the restrictions of the express view engine and allows you to take full advantage of Marko's streaming and modular approach to templates.  

By using `res.marko` you'll automatically have access to `req`, `res`, `app`, `app.locals`, and `res.locals` from within your Marko template and custom tags.  These values are added to `out.global`.

```javascript

require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var markoExpress = require('marko/express');
var template = require('./template');

var app = express();

app.use(markoExpress()); //enable res.marko(template, data)

app.get('/', function(req, res) {
    res.marko(template, {
        name: 'Frank',
        count: 30,
        colors: ['red', 'green', 'blue']
    });
});

app.listen(8080);
```
