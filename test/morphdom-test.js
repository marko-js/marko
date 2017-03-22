'use strict';
require('./util/patch-module');

var chai = require('chai');
chai.config.includeStack = true;

var path = require('path');

var autotest = require('./autotest');
const fs = require('fs');
const jsdom = require("jsdom").jsdom;
const morphdom = require('../morphdom');
const expect = require('chai').expect;
function serializeNode(node) {

    // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
    // BAD: return (new XMLSerializer()).serializeToString(node);
    var html = '';
    function serializeHelper(node, indent) {
        if (node.nodeType === 1) {
            serializeElHelper(node, indent);
        } else if (node.nodeType === 3) {
            serializeTextHelper(node, indent);
        } else {
            throw new Error('Unexpected node type');
        }
    }

    function serializeElHelper(el, indent) {
        var nodeName = el.tagName;

        var namespaceURI = el.namespaceURI;

        if (namespaceURI === 'http://www.w3.org/2000/svg') {
            nodeName = 'svg:' + nodeName;
        } else if (namespaceURI === 'http://www.w3.org/1998/Math/MathML') {
            nodeName = 'math:' + nodeName;
        } else if (namespaceURI !== 'http://www.w3.org/1999/xhtml') {
            nodeName = namespaceURI + ':' + nodeName;
        }

        html += indent + '<' + nodeName;

        var attributes = el.attributes;
        var attributesArray = [];

        for (var i=0; i<attributes.length; i++) {
            var attr = attributes[i];
            if (attr.specified !== false) {
                var qualifiedName = attr.localName;

                if (/^xmlns(:|$)/.test(attr.name)) {
                    continue;
                }

                if (attr.namespaceURI) {
                    qualifiedName = attr.namespaceURI + ':' + qualifiedName;
                }
                attributesArray.push(' ' + qualifiedName + '="' + attr.value + '"');
            }
        }

        attributesArray.sort();

        html += attributesArray.join('');

        html += '>\n';

        var childNodes = el.childNodes;

        if (childNodes && childNodes.length) {
            for (i=0; i<childNodes.length; i++) {
                serializeHelper(childNodes[i], indent + '  ');
            }
        }
    }

    function serializeTextHelper(node, indent) {
        html += indent + JSON.stringify(node.nodeValue) + '\n';
    }

    serializeHelper(node, '');

    return html;
}

function buildElLookup(node) {
    var map = {};

    function buildMapHelper(node) {
        if (node.nodeType !== 1) {
            return;
        }

        var id = node.getAttribute('id');
        if (id) {
            map[id] = node;
        }

        var curNode = node.firstChild;
        while(curNode) {
            buildMapHelper(curNode);
            curNode = curNode.nextSibling;
        }
    }

    buildMapHelper(node);
    return map;
}

function collectNodes(rootNode) {
    var allNodes = [];

    function buildArrayHelper(node) {
        allNodes.push(node);
        var curNode = node.firstChild;
        while(curNode) {
            buildArrayHelper(curNode);
            curNode = curNode.nextSibling;
        }
    }

    buildArrayHelper(rootNode);
    return allNodes;
}

function isNodeInTree(node, rootNode) {
    if (node == null) {
        throw new Error('Invalid arguments');
    }
    var currentNode = node;

    while (true) {
        if (currentNode == null) {
            return false;
        } else if (currentNode == rootNode) {
            return true;
        }

        currentNode = currentNode.parentNode;
    }

    return false;
}

describe('morphdom', function() {
    var autoTestDir = path.join(__dirname, 'autotests/morphdom');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {

            var fromHTML = fs.readFileSync(path.join(dir, 'from.html'), { encoding: 'utf8' });
            var toHTML = fs.readFileSync(path.join(dir, 'to.html'), { encoding: 'utf8' });

            let fromDocument = jsdom('<html><body>' + fromHTML + '</body></html>');
            let toDocument = jsdom('<html><body>' + toHTML + '</body></html>');

            let fromNode = fromDocument.body.firstChild;
            let toNode = toDocument.body.firstChild;

            var allFromNodes = collectNodes(fromNode);
            var elLookupBefore = buildElLookup(fromNode);

            var targetVEl = require('marko/runtime/vdom/vdom').$__virtualize(toNode);
            var expectedHTML = serializeNode(toNode);
            fs.writeFileSync(path.join(dir, 'expected.html'), expectedHTML, { encoding: 'utf8' });

            var morphedNode = morphdom(
                fromNode,
                targetVEl,
                {},
                function onNodeAdded() {},
                function onBeforeElUpdated(node) {
                    if (node.$onBeforeElUpdated) {
                        throw new Error('Duplicate onBeforeElUpdated for: ' + serializeNode(node));
                    }

                    node.$onBeforeElUpdated = true;
                },
                function onBeforeNodeDiscarded(node) {
                    if (node.$onBeforeNodeDiscarded) {
                        throw new Error('Duplicate oonBeforeNodeDiscarded for: ' + serializeNode(node));
                    }

                    node.$onBeforeNodeDiscarded = true;
                },
                function onNodeDiscarded(node) {
                    if (node.$onNodeDiscarded) {
                        throw new Error('Duplicate onNodeDiscarded for: ' + serializeNode(node));
                    }

                    node.$onNodeDiscarded = true;
                },
                function onBeforeElChildrenUpdated(node) {
                    if (node.$onBeforeElChildrenUpdated) {
                        throw new Error('Duplicate onBeforeElChildrenUpdated for: ' + serializeNode(node));
                    }

                    node.$onBeforeElChildrenUpdated = true;
                });


            var actualHTML = serializeNode(morphedNode);
            helpers.compare(actualHTML, '.html');

            var elLookupAfter = buildElLookup(morphedNode);

            Object.keys(elLookupBefore).forEach(function(elId) {
                var afterEl =  elLookupAfter[elId];
                if (afterEl) {
                    var beforeEl = elLookupBefore[elId];
                    if (afterEl.tagName === beforeEl.tagName) {
                        expect(afterEl).to.equal(beforeEl);
                    }
                }
            });

            allFromNodes.forEach(function(node) {
                if (node.$onNodeDiscarded && isNodeInTree(node, morphedNode)) {
                    throw new Error('"from" node was reported as being discarded, but it still in the final DOM tree. Node: ' + serializeNode(node));
                }

                if (node.nodeType === 1 && node.$onNodeDiscarded !== true) {
                    if (!node.$onBeforeElUpdated) {
                        throw new Error('"from" element was not reported as being discarded, but it was not morphed. Node: ' + serializeNode(node));
                    }
                }

                // if (isNodeInTree(node, morphedNode)) {
                //     if (node.$testOnFromNodeRemovedFlag) {
                //         throw new Error('onFromNodeRemoved(node) called for node that is in the final DOM tree: ' + node);
                //     }
                // } else {
                //     if (!node.$testOnFromNodeRemovedFlag) {
                //         throw new Error('"from" node was removed but onFromNodeRemoved(node) was not called: ' + node);
                //     }
                // }
            });

            return done();
        });

});
