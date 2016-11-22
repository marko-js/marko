require('../patch-module');

require('marko/node-require');
require('marko/express');

require('lasso').configure({
    outputDir: __dirname + '/static',
    bundlingEnabled: false
});

var express = require('express');

var app = express();

var serveStatic = require('serve-static');

require('./codegen-create/run');

var template = require('./index.marko');

app.use('/codegen-create', serveStatic(__dirname + '/codegen-create'));

app.use(require('lasso/middleware').serveStatic());

app.get('/', function(req, res) {
    res.marko(template);
});

app.listen(8080, function(err) {
    if (err) {
        throw err;
    }

    console.log('Server ready:\nhttp://localhost:8080');
});
