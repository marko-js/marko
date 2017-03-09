var path = require('path');

var fs = require('fs');
var toHTML = require('./util/toHTML');

var jsdom = require("jsdom").jsdom;
var document = jsdom('<html><body></body></html>');

var vdom = require('../runtime/vdom/vdom');
var VElement = vdom.$__VElement;
var VText = vdom.$__VText;
var VComment = vdom.$__VComment;
var VDocumentFragment = vdom.$__VDocumentFragment;


var vdomHelpers = {
    createElement: function(tagName, attrs, childCount, constId, flags) {
        return new VElement(tagName, attrs, childCount, constId, flags);
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

describe('vdom-create', () => {
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
