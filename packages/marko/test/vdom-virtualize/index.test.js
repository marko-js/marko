"use strict";

require("../__util__/test-init");
var virtualize = require("marko/runtime/vdom/vdom").___virtualize;
var fs = require("fs");
var toHTML = require("../__util__/toHTML");
var createBrowser = require("jsdom-context-require");
var autotest = require("../autotest");

autotest("fixtures", fixture => {
    let test = fixture.test;
    let resolve = fixture.resolve;
    let snapshot = fixture.snapshot;
    test(() => {
        var inputPath = resolve("input.html");
        if (fs.existsSync(inputPath)) {
            var inputHtml = fs.readFileSync(inputPath, { encoding: "utf8" });

            var document = createBrowser({
                dir: __dirname,
                html: "<html><body>" + inputHtml + "</body></html>"
            }).window.document;
            var domNode = document.body.firstChild;
            var vdomNode = virtualize(domNode);
            var vdomHTML = toHTML(vdomNode);
            snapshot(vdomHTML, {
                ext: ".html",
                name: "virtualized"
            });
        }
    });
});
