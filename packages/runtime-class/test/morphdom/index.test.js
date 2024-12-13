"use strict";

require("../__util__/test-init");

const fs = require("fs");
const path = require("path");
var chai = require("chai");
const { JSDOM } = require("jsdom");
const morphdom = require("marko/runtime/vdom/morphdom");
var autotest = require("mocha-autotest").default;
chai.config.includeStack = true;

let doc;
before(() => (doc = new JSDOM("").window.document));
after(() => (doc = undefined));

autotest("fixtures", (fixture) => {
  let dir = fixture.dir;
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    var fromHTML = fs.readFileSync(resolve("from.html"), {
      encoding: "utf8",
    });
    var toHTML = fs.readFileSync(resolve("to.html"), {
      encoding: "utf8",
    });

    let fromNode = JSDOM.fragment(fromHTML);
    let realToNode = JSDOM.fragment(toHTML);
    var targetVEl = require("marko/runtime/vdom/vdom").___virtualize(
      realToNode,
    );
    var expectedHTML = serializeNode(realToNode);
    fs.writeFileSync(resolve("expected.html"), expectedHTML, {
      encoding: "utf8",
    });

    var toNode = targetVEl;
    var componentsContext = {
      ___preserved: {},
      ___preservedBodies: {},
      ___globalContext: {
        ___isHydrate: true,
      },
    };

    morphdom(fromNode, toNode, doc, componentsContext);

    var actualHTML = serializeNode(fromNode);
    snapshot(actualHTML, ".html");

    if (fs.existsSync(path.join(dir, "index.js"))) {
      require(dir).verify({ rootNode: fromNode }, chai.expect);
    }
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
    } else if (node.nodeType === 11) {
      var curChild = node.firstChild;
      while (curChild) {
        serializeHelper(curChild, indent);
        curChild = curChild.nextSibling;
      }
    } else {
      throw new Error("Unexpected node type: " + node.nodeType);
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

        if (nodeName === "INPUT") {
          if (qualifiedName === "checked" || qualifiedName === "value") {
            continue;
          }
        } else if (nodeName === "OPTION") {
          if (qualifiedName === "selected") {
            continue;
          }
        }

        if (attr.namespaceURI) {
          qualifiedName = attr.namespaceURI + ":" + qualifiedName;
        }
        attributesArray.push(" " + qualifiedName + '="' + attr.value + '"');
      }
    }

    if (nodeName === "INPUT") {
      if (el.checked) {
        attributesArray.push(' checked=""');
      }

      if (el.value) {
        if (
          el.value !== "on" ||
          (el.type !== "radio" && el.type !== "checkbox")
        ) {
          attributesArray.push(' value="' + el.value + '"');
        }
      }
    } else if (nodeName === "OPTION") {
      if (el.selected) {
        attributesArray.push(' selected=""');
      }
    }

    attributesArray.sort();

    html += attributesArray.join("");

    html += ">\n";

    if (nodeName === "TEXTAREA" && el.value) {
      html += indent + "  " + JSON.stringify(el.value) + "\n";
    } else {
      var childNodes = el.childNodes;

      if (childNodes && childNodes.length) {
        for (i = 0; i < childNodes.length; i++) {
          serializeHelper(childNodes[i], indent + "  ");
        }
      }
    }
  }

  function serializeTextHelper(node, indent) {
    html += indent + JSON.stringify(node.nodeValue) + "\n";
  }

  serializeHelper(node, "");

  return html;
}
