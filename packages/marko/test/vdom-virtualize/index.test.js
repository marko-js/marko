"use strict";

require("../__util__/test-init");
var fs = require("fs");
var { JSDOM } = require("jsdom");
var virtualize = require("marko/runtime/vdom/vdom").___virtualize;
var autotest = require("mocha-autotest").default;
var toHTML = require("../__util__/toHTML");

autotest("fixtures", (fixture) => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    var inputPath = resolve("input.html");
    if (fs.existsSync(inputPath)) {
      var inputHtml = fs.readFileSync(inputPath, { encoding: "utf8" });
      var domNode = JSDOM.fragment(inputHtml).firstChild;
      var vdomNode = virtualize(domNode);
      var vdomHTML = toHTML(vdomNode);
      snapshot(vdomHTML, {
        ext: ".html",
        name: "virtualized",
      });
    }
  });
});
