var path = require('path');

var fs = require('fs');
var toHTML = require('./util/toHTML');

var jsdom = require("jsdom").jsdom;
var document = jsdom('<html><body></body></html>');

var HTMLElement = require('../runtime/vdom/HTMLElement');
var Text = require('../runtime/vdom/Text');
var Comment = require('../runtime/vdom/Comment');
var DocumentFragment = require('../runtime/vdom/DocumentFragment');

var vdomHelpers = {
    createElement: function(tagName, attrs, childCount, constId) {
        return new HTMLElement(tagName, attrs, childCount, constId);
    },
    createText: function(value) {
        return new Text(value);
    },
    createComment: function(value) {
        return new Comment(value);
    },
    createDocumentFragment: function() {
        return new DocumentFragment();
    },
    HTMLElement: HTMLElement
};

describe('marko-vdom', () => {
    require('./autotest').scanDir(
        path.join(__dirname, 'autotests/vdom-create'),
        function(dir, helpers, done) {
            helpers.vdom = vdomHelpers;
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