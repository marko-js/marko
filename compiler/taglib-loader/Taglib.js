'use strict';
var forEachEntry = require('raptor-util/forEachEntry');
var ok = require('assert').ok;
var path = require('path');
var loaders = require('./loaders');

function handleImport(taglib, importedTaglib) {
    var importsLookup = taglib.importsLookup || (taglib.importsLookup = {});
    if (importsLookup.hasOwnProperty(importedTaglib.path)) {
        return;
    }

    importsLookup[importedTaglib.path] = importedTaglib;

    if (!taglib.imports) {
        taglib.imports = [];
    }

    taglib.imports.push(importedTaglib);

    if (importedTaglib.imports) {
        importedTaglib.imports.forEach(function(nestedImportedTaglib) {
            handleImport(taglib, nestedImportedTaglib);
        });
    }
}

class Taglib {
    constructor(filePath) {
        ok(filePath, '"filePath" expected');
        this.filePath = this.path /* deprecated */ = this.id = filePath;
        this.dirname = path.dirname(this.filePath);
        this.tags = {};
        this.textTransformers = [];
        this.transformers = [];
        this.attributes = {};
        this.patternAttributes = [];
        this.inputFilesLookup = {};
        this.imports = null;
        this.importsLookup = null;
    }

    addAttribute(attribute) {
        ok(attribute.key, '"key" is required for global attributes');

        attribute.filePath = this.filePath;

        if (!attribute.pattern && !attribute.name) {
            throw new Error('Invalid attribute: ' + require('util').inspect(attribute));
        }

        this.attributes[attribute.key] = attribute;
    }
    getAttribute(name) {
        var attribute = this.attributes[name];
        if (!attribute) {
            for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
                var patternAttribute = this.patternAttributes[i];
                if (patternAttribute.pattern.test(name)) {
                    attribute = patternAttribute;
                }
            }
        }
        return attribute;
    }
    addTag(tag) {
        ok(arguments.length === 1, 'Invalid args');
        if (!tag.name) {
            throw new Error('"tag.name" is required: ' + JSON.stringify(tag));
        }
        this.tags[tag.name] = tag;
        tag.taglibId = this.id || this.path;
    }
    addTextTransformer(transformer) {
        this.textTransformers.push(transformer);
    }
    addTransformer(transformer) {
        this.transformers.push(transformer);
    }
    forEachTag(callback, thisObj) {
        forEachEntry(this.tags, function (key, tag) {
            callback.call(thisObj, tag);
        }, this);
    }

    addImport(path) {
        var importedTaglib = loaders.loadTaglibFromFile(path);
        handleImport(this, importedTaglib);
    }

    toJSON() {
        return {
            path: this.path,
            tags: this.tags,
            textTransformers: this.textTransformers,
            attributes: this.attributes,
            patternAttributes: this.patternAttributes,
            imports: this.imports
        };
    }
}

module.exports = Taglib;