var jsdom = require("jsdom").jsdom;
var fs = require("fs");
var path = require("path");

function generateCode(name, htmlFile, rootNode, html) {
    var generator = require("./codegen-" + name);

    var code = generator(rootNode, html);
    var wrappedCode = `window.createBenchmarks[${JSON.stringify(
        htmlFile + "-" + name
    )}]=function() {\n${code}\n}`;

    var generateInitCode = generator.generateInitCode;

    if (generateInitCode) {
        wrappedCode = `
(function() {
${generateInitCode(rootNode, html)}
${wrappedCode}
}())`;
    }
    fs.writeFileSync(
        path.join(__dirname, `benchmark-${htmlFile}-${name}.js`),
        wrappedCode,
        { encoding: "utf8" }
    );
}

var methods = ["dom", "dom-innerHTML", "marko-vdom", "react"];

var htmlFiles = fs.readdirSync(__dirname).filter(function(name) {
    return name.startsWith("html-");
});

htmlFiles.forEach(function(htmlFile) {
    var name = htmlFile.substring("html-".length).slice(0, 0 - ".html".length);
    var html = fs.readFileSync(path.join(__dirname, htmlFile), {
        encoding: "utf8"
    });

    var doc = jsdom(html);

    var rootNode = doc.body.firstChild;

    methods.forEach(function(methodName) {
        generateCode(methodName, name, rootNode, html);
    });
});
