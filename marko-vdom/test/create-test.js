var path = require('path');
var markoVDOM = require('../');
var fs = require('fs');
var toHTML = require('./util/toHTML');

var jsdom = require("jsdom").jsdom;
var document = jsdom('<html><body></body></html>');

describe('marko-vdom', () => {
    require('./util/autotest').scanDir(
        path.join(__dirname, 'autotests-create'),
        function(dir, helpers, done) {
            helpers.vdom = markoVDOM;
            helpers.document = document;

            var mainPath = path.join(dir, 'index.js');
            if (fs.existsSync(mainPath)) {
                var main = require(mainPath);
                var rootNode = main(helpers);

                var rootNodeHTML = rootNode != null ? toHTML(rootNode) : '(null)';
                helpers.compare(rootNodeHTML, '.html');
            }
            done();
        }
    );
});