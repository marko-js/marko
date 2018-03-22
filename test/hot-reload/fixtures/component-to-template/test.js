var fs = require("fs");
var nodePath = require("path");

var tempDir = nodePath.join(__dirname, "temp");

function copyFiles(dir) {
    var files = fs.readdirSync(dir);
    files.forEach(file => {
        var src = fs.readFileSync(nodePath.join(dir, file));
        fs.writeFileSync(nodePath.join(tempDir, file), src);
    });
}

exports.check = function(marko, hotReload, expect, snapshot) {
    try {
        fs.mkdirSync(nodePath.join(__dirname, "temp"));
    } catch (e) {
        /* ignore error */
    }

    try {
        fs.unlinkSync(nodePath.join(__dirname, "temp/component.js"));
    } catch (e) {
        /* ignore error */
    }

    try {
        fs.unlinkSync(nodePath.join(__dirname, "temp/index.marko"));
    } catch (e) {
        /* ignore error */
    }

    try {
        fs.unlinkSync(nodePath.join(__dirname, "temp/index.marko.js"));
    } catch (e) {
        /* ignore error */
    }

    var tempTemplatePath = nodePath.join(__dirname, "temp/index.marko");

    copyFiles(nodePath.join(__dirname, "a"));
    var component = require(tempTemplatePath);

    snapshot(component.renderToString({ name: "Frank" }), ".html");

    try {
        fs.unlinkSync(nodePath.join(__dirname, "temp/component.js"));
    } catch (e) {
        /* ignore error */
    }

    hotReload.handleFileModified(tempTemplatePath);

    copyFiles(nodePath.join(__dirname, "b"));

    snapshot(component.renderToString({ name: "Jane" }), ".html");
};
