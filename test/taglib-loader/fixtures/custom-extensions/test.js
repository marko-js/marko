var nodePath = require('path');

exports.check = function (taglibLoader, expect) {
    var taglib = taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, 'marko.json'));

    expect(taglib != null).to.equal(true);
    expect(taglib).to.have.deep.property("tags.test-declared-attributes.renderer").to.have.string('renderer.js');
};