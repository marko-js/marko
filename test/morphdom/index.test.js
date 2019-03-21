"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var autotest = require("../autotest");
const fs = require("fs");
const morphdom = require("marko/morphdom");
const createBrowser = require("jsdom-context-require");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var fromHTML = fs.readFileSync(resolve("from.html"), {
            encoding: "utf8"
        });
        var toHTML = fs.readFileSync(resolve("to.html"), {
            encoding: "utf8"
        });

        let fromDocument = createBrowser({
            dir: __dirname,
            html: "<html><body>" + fromHTML + "</body></html>"
        }).window.document;
        let toDocument = createBrowser({
            dir: __dirname,
            html: "<html><body>" + toHTML + "</body></html>"
        }).window.document;

        let fromNode = fromDocument.body;
        let realToNode = toDocument.body;

        var targetVEl = require("marko/runtime/vdom/vdom").___virtualize(
            realToNode
        );
        var expectedHTML = serializeNode(realToNode);
        fs.writeFileSync(resolve("expected.html"), expectedHTML, {
            encoding: "utf8"
        });

        var toNode = targetVEl;
        var doc = fromDocument;
        var componentsContext = {
            ___preserved: {},
            ___preservedBodies: {},
            ___globalContext: {
                ___isHydrate: true
            }
        };

        morphdom(fromNode, toNode, doc, componentsContext);

        var actualHTML = serializeNode(fromNode);
        snapshot(actualHTML, ".html");
    });
});

function serializeNode(node) {
    // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
    // BAD: return (new XMLSerializer()).serializeToString(node);
    var html = "";
    function serializeHelper(node, indent) {
        if (node.nodeType === 1) {
            serializeElHelper(node, indent);
        } else if (node.nodeType === 3) {
            serializeTextHelper(node, indent);
        } else {
            throw new Error("Unexpected node type");
        }
    }

    function serializeElHelper(el, indent) {
        var nodeName = el.tagName;

        var namespaceURI = el.namespaceURI;

        if (namespaceURI === "http://www.w3.org/2000/svg") {
            nodeName = "svg:" + nodeName;
        } else if (namespaceURI === "http://www.w3.org/1998/Math/MathML") {
            nodeName = "math:" + nodeName;
        } else if (namespaceURI !== "http://www.w3.org/1999/xhtml") {
            nodeName = namespaceURI + ":" + nodeName;
        }

        html += indent + "<" + nodeName;

        var attributes = el.attributes;
        var attributesArray = [];

        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            if (attr.specified !== false) {
                var qualifiedName = attr.localName;

                if (/^xmlns(:|$)/.test(attr.name)) {
                    continue;
                }

                if (attr.namespaceURI) {
                    qualifiedName = attr.namespaceURI + ":" + qualifiedName;
                }
                attributesArray.push(
                    " " + qualifiedName + '="' + attr.value + '"'
                );
            }
        }

        attributesArray.sort();

        html += attributesArray.join("");

        html += ">\n";

        var childNodes = el.childNodes;

        if (childNodes && childNodes.length) {
            for (i = 0; i < childNodes.length; i++) {
                serializeHelper(childNodes[i], indent + "  ");
            }
        }
    }

    function serializeTextHelper(node, indent) {
        html += indent + JSON.stringify(node.nodeValue) + "\n";
    }

    serializeHelper(node, "");

    return html;
}
