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
    expect(component.renderSync({ name: 'Frank' }).toString())
        .to.have.string('Hello Frank')
        .and.to.have.string('class="a"');

    hotReload.handleFileModified(tempTemplatePath);

    copyFiles(nodePath.join(__dirname, 'b'));
    expect(component.renderSync({ name: 'Jane' }).toString())
        .to.have.string('Hello Jane')
        .and.to.have.string('class="b"');
};
