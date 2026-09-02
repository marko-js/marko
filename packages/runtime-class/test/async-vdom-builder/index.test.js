require("../__util__/test-init");
var expect = require("chai").expect;
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
      expect(seen).to.be.an("error");
      expect(seen.message).to.equal("boom");
      done();
    });
    expect(out.error(new Error("boom"))).to.equal(out);
  });

  it("refuses to go async once in sync mode", function () {
    var out = new AsyncVDOMBuilder();
    out.sync();
    expect(function () {
      out.beginAsync();
    }).to.throw(/sync mode/);
  });

  it("creates a sibling out sharing the same global", function () {
    var global = { a: 1 };
    var out = new AsyncVDOMBuilder(global);
    var next = out.createOut();
    expect(next).to.not.equal(out);
    expect(next.global).to.equal(out.global);
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
      expect(calls).to.equal(2);
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
    expect(out.removeListener("finish", onFinish)).to.equal(out);
    out.on("finish", function () {
      expect(calls).to.equal(0);
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
      expect(message).to.equal("nope");
    });
  });

  it("sync", function () {
    var out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    var tree = out.___getOutput();
    expect(getChildNodes(tree).length).to.equal(1);
  });

  it("end, then listen for finish", function (done) {
    var out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    out.end();
    out.on("finish", function (result) {
      expect(getChildNodes(result.getOutput()).length).to.equal(1);
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
      expect(getChildNodes(tree).length).to.equal(3);
      expect(tree.___firstChild.___nodeName).to.equal("div");
      expect(tree.___firstChild.___nextSibling.___nodeName).to.equal("span");
      expect(
        tree.___firstChild.___nextSibling.___nextSibling.___nodeName,
      ).to.equal("section");
      done();
    });
  });

  it("promise", function (done) {
    const out = new AsyncVDOMBuilder();
    out.element("div", {}, 0);
    out
      .end()
      .then((result) => {
        expect(getChildNodes(result.getOutput()).length).to.equal(1);
        done();
      })
      .catch(done);
  });

  it("async flush", function (done) {
    var out = new AsyncVDOMBuilder();
    out.on("update", function (result) {
      expect(getChildNodes(result.getOutput()).length).to.equal(1);
    });
    out.once("finish", function (result) {
      expect(getChildNodes(result.getOutput()).length).to.equal(2);
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
      expect(header.___nodeName).to.equal("h1");
      expect(list.___nodeName).to.equal("ul");
      expect(getChildNodes(list).length).to.equal(10);
      expect(paragraph.___nodeName).to.equal("p");
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
      expect(childNodes[0].___nodeName).to.equal("div");
      expect(childNodes[1].___nodeValue).to.equal("Hello <em>World</em>");
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
