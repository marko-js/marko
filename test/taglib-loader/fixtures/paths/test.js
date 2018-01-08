var nodePath = require('path');

exports.check = function (taglibLoader, expect) {
    var taglib = taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, 'marko.json'));

    expect(taglib != null).to.equal(true);

    expect(taglib.filePath).to.equal(nodePath.join(__dirname, 'marko.json'));

    var helloTagScanned = taglib.tags['test-hello-scanned'];
    expect(helloTagScanned.filePath).to.equal(nodePath.join(__dirname, 'tags/test-hello-scanned/marko-tag.json'));
    expect(helloTagScanned.dir).to.equal(nodePath.join(__dirname, 'tags/test-hello-scanned'));
    expect(helloTagScanned.attributes.name.filePath).to.equal(nodePath.join(__dirname, 'tags/test-hello-scanned/marko-tag.json'));

    var helloTag = taglib.tags['test-hello'];
    expect(helloTag.filePath).to.equal(nodePath.join(__dirname, 'marko.json'));
    expect(helloTag.dir).to.equal(__dirname);
    expect(helloTag.attributes.name.filePath).to.equal(nodePath.join(__dirname, 'marko.json'));
};