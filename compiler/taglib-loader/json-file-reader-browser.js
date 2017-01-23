exports.readFileSync = function (path) {
    var taglibProps;

    try {
        taglibProps = require(path);
    } catch(e) {
        throw new Error('Unable to parse taglib JSON at path "' + path + '". Exception: ' + e);
    }

    return taglibProps;
};