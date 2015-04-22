var ok = require('assert').ok;
var nodePath = require('path');
var handleAttributes = require('./handleAttributes');
var scanTagsDir = require('./scanTagsDir');
var resolve = require('../../util/resolve'); // NOTE: different implementation for browser
var propertyHandlers = require('property-handlers');
var Taglib = require('../Taglib');
var taglibReader = require('./taglib-reader');
var loader = require('./loader');

function exists(path) {
    try {
        require.resolve(path);
        return true;
    } catch(e) {
        return false;
    }
}

function handleTag(taglibHandlers, tagName, path) {
    var taglib = taglibHandlers.taglib;
    var dirname = taglibHandlers.dirname;

    ok(path, 'Invalid tag definition for "' + tagName + '"');

    var tagObject;

    var tagDirname;

    if (typeof path === 'string') {
        path = nodePath.resolve(dirname, path);
        taglib.addInputFile(path);

        tagDirname = nodePath.dirname(path);
        if (!exists(path)) {
            throw new Error('Tag at path "' + path + '" does not exist. Taglib: ' + taglib.id);
        }

        try {
            tagObject = require(path);
        } catch(e) {
            throw new Error('Unable to parse tag JSON for tag at path "' + path + '"');
        }
    } else {
        tagDirname = dirname; // Tag is in the same taglib file
        tagObject = path;
        path = '<' + tagName + '> tag in ' + taglib.id;
    }


    var tag = loader.tagLoader.loadTag(tagObject, path, taglib, tagDirname);
    if (tag.name === undefined) {
        tag.name = tagName;
    }
    taglib.addTag(tag);
}

function TaglibHandlers(taglib, path) {
    ok(taglib);
    ok(path);

    this.taglib = taglib;
    this.path = path;
    this.dirname = nodePath.dirname(path);
}

TaglibHandlers.prototype = {
    attributes: function(value) {
        var taglib = this.taglib;
        var path = this.path;

        handleAttributes(value, taglib, path);
    },
    tags: function(tags) {
        for (var tagName in tags) {
            if (tags.hasOwnProperty(tagName)) {
                handleTag(this, tagName, tags[tagName]);
            }
        }
    },
    tagsDir: function(dir) {
        var taglib = this.taglib;
        var path = this.path;
        var dirname = this.dirname;

        if (Array.isArray(dir)) {
            for (var i = 0; i < dir.length; i++) {
                scanTagsDir(path, dirname, dir[i], taglib);
            }
        } else {
            scanTagsDir(path, dirname, dir, taglib);
        }
    },

    taglibImports: function(imports) {
        var taglib = this.taglib;
        var dirname = this.dirname;

        if (imports && Array.isArray(imports)) {
            for (var i=0; i<imports.length; i++) {
                var curImport = imports[i];
                if (typeof curImport === 'string') {
                    var basename = nodePath.basename(curImport);
                    if (basename === 'package.json') {
                        var packagePath = resolve(curImport, dirname);
                        var pkg = require(packagePath);
                        var dependencies = pkg.dependencies;
                        if (dependencies) {
                            var dependencyNames = Object.keys(dependencies);
                            for (var j=0; j<dependencyNames.length; j++) {
                                var dependencyName = dependencyNames[j];
                                var importPath;

                                try {
                                    importPath = require('resolve-from')(dirname, dependencyName + '/marko-taglib.json');
                                } catch(e) {}

                                if (importPath) {
                                    taglib.addImport(importPath);
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    textTransformer: function(value) {
        var taglib = this.taglib;
        var path = this.path;
        var dirname = this.dirname;

        var transformer = new Taglib.Transformer();

        if (typeof value === 'string') {
            value = {
                path: value
            };
        }

        propertyHandlers(value, {
            path: function(value) {
                var path = resolve(value, dirname);
                transformer.path = path;
            }

        }, 'text-transformer in ' + path);

        ok(transformer.path, '"path" is required for transformer');

        taglib.addTextTransformer(transformer);
    },
    '*': function(name, value) {
        var taglib = this.taglib;
        var path = this.path;

        if (name.startsWith('<')) {
            handleTag(this, name.slice(1, -1), value);
        } else if (name.startsWith('@')) {
            var attrName = name.substring(1);

            var attr = loader.attributeLoader.loadAttribute(
                attrName,
                value,
                '"' + attrName + '" attribute as part of ' + path);

            taglib.addAttribute(attr);
        } else {
            return false;
        }
    }
};

exports.loadTaglib = function(path) {
    var taglibProps = taglibReader.readTaglib(path);

    var taglib = new Taglib(path);
    taglib.addInputFile(path);

    var taglibHandlers = new TaglibHandlers(taglib, path);

    propertyHandlers(taglibProps, taglibHandlers, path);

    taglib.id = taglib.path = path;
    return taglib;
};