var fs = require('fs');
var jsonminify = require('jsonminify');
var fsReadOptions = { encoding: 'utf8' };

exports.readTaglib = function (path) {
    var json = fs.readFileSync(path, fsReadOptions);

    try {
        var taglibProps = JSON.parse(jsonminify(json));
        return taglibProps;
    } catch(e) {
        throw new Error('Unable to parse taglib at path "' + path + '". Error: ' + e);
    }
};