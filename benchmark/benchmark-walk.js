window.registerBenchmark('walk', function(app) {
    var Suite = window.Benchmark.Suite;
    var MarkoVDOM = window.MarkoVDOM;

    var suite = new Suite('walk');

    var todomvcDOM = document.getElementById('todoapp');
    var todomvcDOMVirtual = MarkoVDOM.virtualize(todomvcDOM);

    function toHTML(node) {

        // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
        // BAD: return (new XMLSerializer()).serializeToString(node);
        var html = '';
        function serializeHelper(node, indent) {
            if (node.nodeType === 1) {
                serializeElHelper(node, indent);
            } else if (node.nodeType === 3) {
                serializeTextHelper(node, indent);
            } else if (node.nodeType === 8) {
                serializeCommentHelper(node, indent);
            } else {
                console.log('Invalid node:', node);
                html += indent + `INVALID NODE TYPE ${node.nodeType}\n`;
                // throw new Error('Unexpected node type');
            }
        }

        function serializeElHelper(el, indent) {
            var tagName = el.nodeName;

            if (el.namespaceURI === 'http://www.w3.org/2000/svg') {
                tagName = 'svg:' + tagName;
            } else if (el.namespaceURI === 'http://www.w3.org/1998/Math/MathML') {
                tagName = 'math:' + tagName;
            }

            html += indent + '<' + tagName;

            var attributes = el.attributes;
            var attributesArray = [];

            for (var i=0; i<attributes.length; i++) {
                var attr = attributes[i];
                var attrName = attr.name;
                if (attr.namespaceURI) {
                    attrName = attr.namespaceURI + ':' + attrName;
                }
                attributesArray.push(' ' + attrName + '="' + attr.value + '"');
            }

            attributesArray.sort();

            html += attributesArray.join('');

            html += '>\n';

            if (tagName.toUpperCase() === 'TEXTAREA') {
                html += indent + '  VALUE: ' + JSON.stringify(el.value) + '\n';
            } else {
                var curChild = el.firstChild;
                while(curChild) {
                    serializeHelper(curChild, indent + '  ');
                    curChild = curChild.nextSibling;
                }
            }
        }

        function serializeTextHelper(node, indent) {
            html += indent + JSON.stringify(node.nodeValue) + '\n';
        }

        function serializeCommentHelper(node, indent) {
            html += indent + '<!--' + JSON.stringify(node.nodeValue) + '-->\n';
        }

        serializeHelper(node, '');

        return html;
    }

    // add tests
    suite.add('real DOM', function() {
        return toHTML(todomvcDOM);
    });

    suite.add('marko-vdom', function() {
        return toHTML(todomvcDOMVirtual);
    });

    return function() {
        return app.runSuite(suite);
    };
});