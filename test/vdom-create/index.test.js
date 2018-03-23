"use strict";

require("../__util__/test-init");

var fs = require("fs");
var domToString = require("../__util__/domToString");
var createJSDOMModule = require("../__util__/create-jsdom-module");
var autotest = require("../autotest");

var document = createJSDOMModule({
    dir: __dirname,
    html: "<html><body></body></html>"
}).window.document;

var vdom = require("marko/runtime/vdom/vdom");
var VElement = vdom.___VElement;
var VText = vdom.___VText;
var VComment = vdom.___VComment;
var VDocumentFragment = vdom.___VDocumentFragment;

var vdomHelpers = {
    createElement: function(
        tagName,
        attrs,
        key,
        component,
        childCount,
        flags,
        props
    ) {
        return new VElement(
            tagName,
            attrs,
            key,
            component,
            childCount,
            flags,
            props
        );
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
    VElement: VElement,
    virtualizeElement: VElement.___virtualize
};

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var helpers = {};
        helpers.vdom = vdomHelpers;
        helpers.document = document;

        var mainPath = resolve("index.js");
        if (fs.existsSync(mainPath)) {
            var main = require(mainPath);
            var rootNode = main(helpers);

            var rootNodeHTML =
                rootNode != null ? domToString(rootNode) : "(null)";
            snapshot(rootNodeHTML, ".html");
        }
    });
});
