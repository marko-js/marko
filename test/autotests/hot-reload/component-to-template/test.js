var fs = require('fs');
var nodePath = require('path');

var tempDir = nodePath.join(__dirname, 'temp');

function copyFiles(dir) {
    var files = fs.readdirSync(dir);
    files.forEach((file) => {
        var src = fs.readFileSync(nodePath.join(dir, file));
        fs.writeFileSync(nodePath.join(tempDir, file), src);
    });
}

exports.check = function(marko, hotReload, expect) {
    try {
        fs.mkdirSync(nodePath.join(__dirname, 'temp'));
    } catch(e) {}

    try {
        fs.unlinkSync(nodePath.join(__dirname, 'temp/component.js'));
    } catch(e) {}

    try {
        fs.unlinkSync(nodePath.join(__dirname, 'temp/index.marko'));
    } catch(e) {}

    try {
        fs.unlinkSync(nodePath.join(__dirname, 'temp/index.marko.js'));
    } catch(e) {}

    var tempTemplatePath = nodePath.join(__dirname, 'temp/index.marko');

    copyFiles(nodePath.join(__dirname, 'a'));
    var component = require(tempTemplatePath);
    expect(component.renderToString({ name: 'Frank' })).to.contain('<div class="a">Hello Frank</div>');

    try {
        fs.unlinkSync(nodePath.join(__dirname, 'temp/component.js'));
    } catch(e) {}

    hotReload.handleFileModified(tempTemplatePath);

    copyFiles(nodePath.join(__dirname, 'b'));
    expect(component.renderToString({ name: 'Jane' })).to.equal('<div class="b">Hello Jane</div>');
};
