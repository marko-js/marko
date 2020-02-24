var types = require("./types");

function isSupportedAttributeProperty(propertyName) {
    return exports.loadAttributeFromProps.isSupportedProperty(propertyName);
}

function isSupportedTagProperty(propertyName) {
    return exports.loadTagFromProps.isSupportedProperty(propertyName);
}

function createTaglib(taglibPath) {
    return new types.Taglib(taglibPath);
}

exports.createTaglib = createTaglib;
exports.loadAttributeFromProps = require("./loadAttributeFromProps");
exports.loadTagFromProps = require("./loadTagFromProps");
exports.loadTagFromFile = require("./loadTagFromFile");
exports.loadTaglibFromProps = require("./loadTaglibFromProps");
exports.loadTaglibFromFile = require("./loadTaglibFromFile");
exports.loadAttributes = require("./loadAttributes");
exports.isSupportedAttributeProperty = isSupportedAttributeProperty;
exports.isSupportedTagProperty = isSupportedTagProperty;
