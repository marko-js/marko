"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;
var expect = chai.expect;

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
    expect(result.toString()).to.equal("<p>hi</p>");
    expect(result.getOutput()).to.equal("<p>hi</p>");
  });

  it("refuses to list components before it is inserted", function () {
    expect(function () {
      rendered().getComponents();
    }).to.throw("Not added to DOM");
  });

  it("reports no component once inserted without one", function () {
    var result = rendered("<p>hi</p>").afterInsert();
    expect(result.___components).to.equal(null);
    expect(function () {
      result.getComponents();
    }).to.throw("No component");
  });

  it("returns itself from afterInsert so it can be chained", function () {
    var result = rendered();
    expect(result.afterInsert()).to.equal(result);
  });

  describe("deprecated accessors", function () {
    // `complain` prints once per call site, so both getters are read here.
    it("html returns the same string toString does", function () {
      var result = rendered("<p>hi</p>");
      expect(result.html).to.equal(result.toString());
    });

    it("context returns the out", function () {
      var result = rendered();
      expect(result.context).to.equal(result.out);
    });
  });
});
