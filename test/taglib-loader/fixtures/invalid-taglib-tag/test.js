var nodePath = require('path');

exports.check = function (taglibLoader, expect) {
    var taglibPath = nodePath.join(__dirname, 'marko.json');

    expect(function () {
        taglibLoader.loadTaglibFromFile(taglibPath);
    }).to.throw(`Invalid option: INVALID ([${taglibPath} → <test-hello>])`);
};