require('../__util__/test-init');
var path = require('path');
var virtualize = require('marko/runtime/vdom/vdom').___virtualize;
var fs = require('fs');
var toHTML = require('../__util__/toHTML');
var jsdom = require("jsdom").jsdom;

describe('vdom-virtualize', () => {
    require('../autotest').scanDir(path.join(__dirname, './fixtures'), function (dir, helpers, done) {
        helpers.virtualize = virtualize;

        var inputPath = path.join(dir, 'input.html');
        if (fs.existsSync(inputPath)) {
            var inputHtml = fs.readFileSync(inputPath, { encoding: 'utf8' });
            var document = jsdom('<html><body>' + inputHtml + '</body></html>');
            var domNode = document.body.firstChild;
            var vdomNode = virtualize(domNode);
            var vdomHTML = toHTML(vdomNode);
            helpers.compare(vdomHTML, { suffix: '.html', prefix: 'virtualized-' });
        }
        done();
    });
});