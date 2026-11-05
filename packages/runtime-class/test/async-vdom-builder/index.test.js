require("../__util__/test-init");
var assert = require("assert/strict");
var AsyncVDOMBuilder = require("marko/src/runtime/vdom/AsyncVDOMBuilder");
var VElement = require("marko/src/runtime/vdom/VElement");

function getChildNodes(parentNode) {
  var childNodes = [];

  var curChild = parentNode.___firstChild;
  while (curChild) {
    childNodes.push(curChild);
    curChild = curChild.___nextSibling;
  }

  return childNodes;
}
describe("AsyncVDOMBuilder", function () {
  it("emits an error and ends", function (done) {
    var out = new AsyncVDOMBuilder();
    var seen;
    out.on("error", function (err) {
      seen = err;
    });
    out.on("finish", function () {
      assert.ok(seen instanceof Error);
      assert.equal(seen.message, "boom");
      done();
    });
    assert.equal(out.error(new Error("boom")), out);
  });

  it("refuses to go async once in sync mode", function () {
    var out = new AsyncVDOMBuilder();
    out.sync();
    assert.throws(function () {
      out.beginAsync();
    }, /sync mode/);
  });

  it("creates a sibling out sharing the same global", function () {
    var global = { a: 1 };
    var out = new AsyncVDOMBuilder(global);
    var next = out.createOut();
    assert.notEqual(next, out);
    assert.equal(next.global, out.global);
  });

  it("routes on/once for last through onLast", function (done) {
    var out = new AsyncVDOMBuilder();
    var calls = 0;
    out.on("last", function () {
      calls++;
    });
    out.once("last", function () {
      calls++;
    });

    var lastOut = out.beginAsync({ last: true });
    out.on("finish", function () {
      assert.equal(calls, 2);
      done();
    });
    out.end();
    lastOut.end();
  });

  it("removes a listener it added", function (done) {
    var out = new AsyncVDOMBuilder();
    var calls = 0;
    var onFinish = function () {
      calls++;
    };
    out.on("finish", onFinish);
    assert.equal(out.removeListener("finish", onFinish), out);
    out.on("finish", function () {
      assert.equal(calls, 0);
      done();
    });
    out.end();
  });

  it("catches a rejected render", function () {
    var out = new AsyncVDOMBuilder();
    var caught = out.catch(function (err) {
      return err.message;
    });
    out.error(new Error("nope"));
    return caught.then(function (message) {
      assert.equal(message, "nope");
    });
  });

  it("rejects a promise attached after an error", function () {
    var out = new AsyncVDOMBuilder();
    out.on("error", function () {});
    out.error(new Error("nope"));
    return out.then(
      function () {
        throw new Error("resolved after an error");
      },
      function (err) {
        assert.equal(err.message, "nope");
      },
    );
  });

  it("sync", function () {
    var out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    var tree = out.___getOutput();
    assert.equal(getChildNodes(tree).length, 1);
  });

  it("end, then listen for finish", function (done) {
    var out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    out.end();
    out.on("finish", function (result) {
      assert.equal(getChildNodes(result.getOutput()).length, 1);
      done();
    });
  });

  it("async", function (done) {
    var out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    var asyncOut = out.beginAsync();

    setTimeout(function () {
      asyncOut.element("span", {}, 0);
      asyncOut.end();
    }, 10);

    out.element("section", {}, 0);

    out.end();
    out.on("finish", function (result) {
      var tree = result.getOutput();
      assert.equal(getChildNodes(tree).length, 3);
      assert.equal(tree.___firstChild.___nodeName, "div");
      assert.equal(tree.___firstChild.___nextSibling.___nodeName, "span");
      assert.equal(
        tree.___firstChild.___nextSibling.___nextSibling.___nodeName,
        "section",
      );
      done();
    });
  });

  it("promise", function (done) {
    const out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    out
      .end()
      .then((result) => {
        assert.equal(getChildNodes(result.getOutput()).length, 1);
        done();
      })
      .catch(done);
  });

  it("async flush", function (done) {
    var out = new AsyncVDOMBuilder();
    out.on("update", function (result) {
      assert.equal(getChildNodes(result.getOutput()).length, 1);
    });
    out.once("finish", function (result) {
      assert.equal(getChildNodes(result.getOutput()).length, 2);
      done();
    });

    out.element("div", {}, 0);
    out.flush();

    var asyncOut = out.beginAsync();

    setTimeout(function () {
      asyncOut.element("span", {}, 0);
      asyncOut.end();
    }, 10);

    out.end();
  });

  it("for loop", function (done) {
    var out = new AsyncVDOMBuilder();
    out.once("finish", function (result) {
      var tree = result.getOutput();
      var childNodes = getChildNodes(tree);
      var header = childNodes[0];
      var list = childNodes[1];
      var paragraph = childNodes[2];
      assert.equal(header.___nodeName, "h1");
      assert.equal(list.___nodeName, "ul");
      assert.equal(getChildNodes(list).length, 10);
      assert.equal(paragraph.___nodeName, "p");
      done();
    });

    out.element("h1", {}, 0);

    out.beginElement("ul", {});

    for (var i = 0; i < 10; i++) {
      out.element("li", {}, 1).t(i);
    }

    out.endElement();

    out.element("p", {}, 0);

    out.end();
  });

  it("staticNode, comment", function (done) {
    var staticNode = new VElement("div", {}, 0, "f891ea3");
    var out = new AsyncVDOMBuilder();

    out.node(staticNode);
    out.text("Hello <em>World</em>");
    out.end();

    out.once("finish", function (result) {
      var tree = result.getOutput();
      var childNodes = getChildNodes(tree);
      assert.equal(childNodes[0].___nodeName, "div");
      assert.equal(childNodes[1].___nodeValue, "Hello <em>World</em>");
      done();
    });
  });

  // it('should handle timeouts correctly');
  //
  // it('should handle sync errors correctly');
  //
  // it('should handle timeout errors correctly');
  //
  // it('should avoid writes after end');
  //
  // it('globals');
});
