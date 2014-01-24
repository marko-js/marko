var TaglibCollection = require('./TaglibCollection');
var fs = require('fs');
var nodePath = require('path');

exports.taglibs = new TaglibCollection();

function getTaglibCollection() {
    return exports.taglibs;
}

function addTaglib(taglib) {
    getTaglibCollection().add(taglib);
}

function hasTaglib(uri) {
    return getTaglibCollection().isTaglib(uri);
}

function loadTaglibXml(taglibXml, path) {
    var TaglibXmlLoader = require('./TaglibXmlLoader');
    var taglib = TaglibXmlLoader.load(taglibXml, path);
    addTaglib(taglib);
    return taglib;
}

function loadTaglibFromFile(path) {
    var src = fs.readFileSync(path, {encoding: 'utf8'});
    loadTaglibXml(src, path);
}

loadTaglibFromFile(nodePath.join(__dirname, '../../taglibs/core/core.rtld'));

exports.addTaglib = addTaglib;
exports.hasTaglib = hasTaglib;
exports.loadTaglibXml = loadTaglibXml;
exports.getTaglibCollection = getTaglibCollection;