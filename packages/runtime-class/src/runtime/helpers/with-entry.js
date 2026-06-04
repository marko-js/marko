"use strict";

var flushHereAndAfter = require("../../core-tags/core/__flush_here_and_after__");

var kAssets = Symbol();
var kBlockIndex = Symbol();
var kDeferIndex = Symbol();
var assetFlush;

exports.withEntry = function withEntry(template, runtime, assetId) {
  assetFlush = runtime;
  var render = template._;
  var flushBeforeInput = { renderBody: flush };
  template._ = function renderWithEntry(input, out) {
    var hasAssets = !!out.global[kAssets];
    addAsset(out.global, assetId);
    if (hasAssets) {
      flush(out);
    } else {
      flushHereAndAfter(flushBeforeInput, out);
    }
    render(input, out);
  };
  return template;
};

exports.flushHead = function flushHead(out) {
  if (!out.global[kAssets]) return;
  flush(out);
};

exports.withAssets = function withAssets(template, assetId) {
  if (template[kAssets]) return template;
  var render = template._;
  template[kAssets] = 1;
  template._ = function renderWithAssets(input, out) {
    addAsset(out.global, assetId);
    flush(out);
    render(input, out);
  };
  return template;
};

function flush(out) {
  var g = out.global;
  var result = "";
  var assets = g[kAssets];
  var length = assets.length;
  var bi = g[kBlockIndex];
  var di = g[kDeferIndex];

  for (; bi < length; bi++) {
    result += assetFlush(g, "block", assets[bi]);
  }

  for (; di < length; di++) {
    result += assetFlush(g, "defer", assets[di]);
  }

  g[kBlockIndex] = bi;
  g[kDeferIndex] = di;
  out.write(result);
}

function addAsset(g, assetId) {
  var assets = g[kAssets];
  if (!assets) {
    g[kAssets] = [assetId];
    g[kBlockIndex] = g[kDeferIndex] = 0;
  } else if (!assets.includes(assetId)) {
    assets.push(assetId);
  }
}

// TODO: should add triggers (separate files).
