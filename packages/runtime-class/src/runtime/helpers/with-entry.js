"use strict";

var flushHereAndAfter = require("../../core-tags/core/__flush_here_and_after__");

exports.withEntry = function withEntry(template, runtime, assetId) {
  var render = template._;
  var printBeforeInput = { renderBody: printBefore };
  var printAfterInput = { renderBody: printAfter };
  template._ = function renderWithEntry(input, out) {
    runtime.add(out.global, assetId);
    flushHereAndAfter(printBeforeInput, out);
    render.call(this, input, out);
    flushHereAndAfter(printAfterInput, out);
  };

  return template;

  function printBefore(out) {
    var g = out.global;
    out.write(
      runtime.print(g, "head-prepend") +
        runtime.print(g, "head") +
        runtime.print(g, "body-prepend"),
    );
  }

  function printAfter(out) {
    out.write(runtime.print(out.global, "body"));
  }
};

exports.withAssets = function withAssets(template, runtime, assetId) {
  var render = template._;
  template._ = function renderWithAssets(input, out) {
    runtime.add(out.global, assetId);
    render.call(this, input, out);
  };
  return template;
};
