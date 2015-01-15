var async = require('async');
var marko = require('marko');
var fs = require('fs');
var nodePath = require('path');
var markoWidgets = require('../../');

var pagesToRender = [
    {
        page: 'server-init',
        input: {},
        output: 'page-server-init.json'
    }
];

var work = pagesToRender.map(function(pageToRender) {
    var pageRenderer = require('./fixtures/pages/' + pageToRender.page);
    var outFile = nodePath.join(__dirname, 'generated', pageToRender.output);

    return function(callback) {
        var out = marko.createWriter();
        out
            .on('error', function(err) {
                callback(err);
            })
            .on('finish', function() {

                var initWidgetsCode = markoWidgets.getInitWidgetsCode(out);
                var html = out.getOutput();

                var result = {
                    html: html,
                    js: initWidgetsCode
                };

                var json = JSON.stringify(result, null, 4);

                fs.writeFileSync(outFile, json, 'utf8');
                callback();
            });

        pageRenderer(pageToRender.input || {}, out);
        out.end();
    };
});

module.exports = function renderPages(callback) {
    async.series(work, callback);
};