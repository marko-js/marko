var path = require('path');

var fs = require('fs');
var toHTML = require('./util/toHTML');

var jsdom = require("jsdom").jsdom;
var document = jsdom('<html><body></body></html>');

var VElement = require('../runtime/vdom/VElement');
var VText = require('../runtime/vdom/VText');
var VComment = require('../runtime/vdom/VComment');
var VDocumentFragment = require('../runtime/vdom/VDocumentFragment');

var vdomHelpers = {
    createElement: function(tagName, attrs, childCount, constId) {
        return new VElement(tagName, attrs, childCount, constId);
    },
    createText: function(value) {
        return new VText(value);
    },
    createComment: function(value) {
        return new VComment(value);
    },
    createDocumentFragment: function() {
        return new VDocumentFragment();
    },
    VElement: VElement
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
