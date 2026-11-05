"use strict";

require("../__util__/test-init");

var assert = require("assert/strict");

var AsyncStream = require("marko/src/runtime/html/AsyncStream");
var RenderResult = require("marko/src/runtime/RenderResult");

function rendered(html) {
  var out = new AsyncStream();
  if (html) out.write(html);
  return new RenderResult(out);
}

describe("RenderResult", function () {
  it("reads the output through the out it wraps", function () {
    var result = rendered("<p>hi</p>");
    assert.equal(result.toString(), "<p>hi</p>");
    assert.equal(result.getOutput(), "<p>hi</p>");
  });

  it("refuses to list components before it is inserted", function () {
    assert.throws(function () {
      rendered().getComponents();
    }, /Not added to DOM/);
  });

  it("reports no component once inserted without one", function () {
    var result = rendered("<p>hi</p>").afterInsert();
    assert.equal(result.___components, null);
    assert.throws(function () {
      result.getComponents();
    }, /No component/);
  });

  it("returns itself from afterInsert so it can be chained", function () {
    var result = rendered();
    assert.equal(result.afterInsert(), result);
  });

  describe("deprecated accessors", function () {
    // `complain` prints once per call site, so both getters are read here.
    it("html returns the same string toString does", function () {
      var result = rendered("<p>hi</p>");
      assert.equal(result.html, result.toString());
    });

    it("context returns the out", function () {
      var result = rendered();
      assert.equal(result.context, result.out);
    });
  });
});
