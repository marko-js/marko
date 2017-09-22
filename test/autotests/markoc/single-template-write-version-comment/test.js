function removeMarkoVersionComment(str) {
    return str.replace(/^.*\n/, '');
}

exports.test = function(helpers) {
    helpers.spawnSync(['template.marko']);

    var compiledFile = helpers.readSync('template.marko.js').toString();
    compiledFile = compiledFile.replace(/marko\/dist\//g, 'marko/src/');
    helpers.compare(removeMarkoVersionComment(compiledFile), '.js');
};
