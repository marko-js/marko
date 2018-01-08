require('../__util__/test-init');

var path = require('path');

var fs = require('fs');
var domToString = require('../__util__/domToString');

var jsdom = require("jsdom").jsdom;
var document = jsdom('<html><body></body></html>');

var vdom = require('marko/runtime/vdom/vdom');
var VElement = vdom.___VElement;
var VText = vdom.___VText;
var VComment = vdom.___VComment;
var VDocumentFragment = vdom.___VDocumentFragment;

var vdomHelpers = {
    createElement: function (tagName, attrs, key, component, childCount, flags, props) {
        return new VElement(tagName, attrs, key, component, childCount, flags, props);
    },
    createText: function (value) {
        return new VText(value);
    },
    createComment: function (value) {
        return new VComment(value);
    },
    createDocumentFragment: function () {
        return new VDocumentFragment();
    },
    VElement: VElement,
    virtualizeElement: VElement.___virtualize
};

describe('vdom-create', () => {
    require('../autotest').scanDir(path.join(__dirname, './fixtures'), function (dir, helpers, done) {
        helpers.vdom = vdomHelpers;
        helpers.document = document;

        var mainPath = path.join(dir, 'index.js');
        if (fs.existsSync(mainPath)) {
            var main = require(mainPath);
            var rootNode = main(helpers);

            var rootNodeHTML = rootNode != null ? domToString(rootNode) : '(null)';
            helpers.compare(rootNodeHTML, '.html');
        }
        done();
    });
});