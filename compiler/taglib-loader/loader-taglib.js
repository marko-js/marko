'use strict';

var ok = require('assert').ok;
var nodePath = require('path');
var handleAttributes = require('./handleAttributes');
var scanTagsDir = require('./scanTagsDir');
var resolve = require('../util/resolve'); // NOTE: different implementation for browser
var propertyHandlers = require('property-handlers');
var types = require('./types');
var jsonFileReader = require('./json-file-reader');
var tryRequire = require('try-require');
var resolveFrom = tryRequire('resolve-from', require);
var DependencyChain = require('./DependencyChain');
var createError = require('raptor-util/createError');
var tagLoader = require('./loader-tag');
var attributeLoader = require('./loader-attribute');

function exists(path) {
    try {
        require.resolve(path);
        return true;
    } catch(e) {
        return false;
    }
}

/**
 * We load a taglib definion using this class. Properties in the taglib
 * definition (which is just a JavaScript object with properties)
 * are mapped to handler methods in an instance of this type.
 *
 *
 * @param {Taglib} taglib The initially empty Taglib instance that we will populate
 * @param {String} path The file system path to the taglib that we are loading
 */
class TaglibLoader {
    constructor(dependencyChain) {
        ok(dependencyChain instanceof DependencyChain, '"dependencyChain" is not valid');

        this.dependencyChain = dependencyChain;

        this.taglib = null;
        this.filePath = null;
        this.dirname = null;
    }


    _load(filePath, taglib) {
        ok(typeof filePath === 'string', '"filePath" should be a string');

        this.filePath = filePath;
        this.dirname = nodePath.dirname(filePath);

        var taglibProps = jsonFileReader.readFileSync(filePath);

        taglib = this.taglib = taglib || new types.Taglib(filePath);

        propertyHandlers(taglibProps, this, this.dependencyChain.toString());

        if (!taglib.id) {
            // Fixes #73
            // See if there is a package.json in the same directory as the taglib file.
            // If so, and if that package.json file has a "name" property then we will
            // use the the name as the "taglib ID". The taglib ID is used to uniquely
            // identity a taglib (ignoring version) and it is used to prevent the same
            // taglib from being loaded multiple times.
            //
            // Using the file path as the taglib ID doesn't work so well since we might find
            // the same taglib multiple times in the Node.js module search path with
            // different paths.
            var dirname = nodePath.dirname(filePath);
            var packageJsonPath = nodePath.join(dirname, 'package.json');


            try {
                var pkg = jsonFileReader.readFileSync(packageJsonPath);
                taglib.id = pkg.name;
            } catch(e) {}

            if (!taglib.id) {
                taglib.id = filePath;
            }
        }

        return taglib;
    }

    _handleTag(tagName, value, dependencyChain) {
        var tagObject;
        var tagFilePath = this.filePath;

        if (typeof value === 'string') {
            tagFilePath = nodePath.resolve(this.dirname, value);

            if (!exists(tagFilePath)) {
                throw new Error('Tag at path "' + tagFilePath + '" does not exist. (' + dependencyChain + ')');
            }

            tagObject = jsonFileReader.readFileSync(tagFilePath);
            dependencyChain = dependencyChain.append(tagFilePath);
        } else {
            tagObject = value;
        }

        var tag = tagLoader.loadTag(tagObject, tagFilePath, dependencyChain);

        if (tag.name === undefined) {
            tag.name = tagName;
        }

        this.taglib.addTag(tag);
    }

    // We register a wildcard handler to handle "@my-attr" and "<my-tag>"
    // properties (shorthand syntax)
    '*'(name, value) {
        var taglib = this.taglib;
        var filePath = this.filePath;

        if (name.startsWith('<')) {
            let tagName = name.slice(1, -1);
            this._handleTag(tagName, value, this.dependencyChain.append(name));
        } else if (name.startsWith('@')) {
            var attrName = name.substring(1);

            var attr = attributeLoader.loadAttribute(
                attrName,
                value,
                this.dependencyChain.append('@' + attrName));

            attr.filePath = filePath;

            taglib.addAttribute(attr);
        } else {
            return false;
        }
    }

    attributes(value) {
        // The value of the "attributes" property will be an object
        // where each property maps to an attribute definition. Since these
        // attributes are on the taglib they will be "global" attribute
        // defintions.
        //
        // The property key will be the attribute name and the property value
        // will be the attribute definition. Example:
        // {
        //     "attributes": {
        //         "foo": "string",
        //         "bar": "expression"
        //     }
        // }
        var taglib = this.taglib;
        var path = this.filePath;

        handleAttributes(value, taglib, path);
    }
    tags(tags) {
        // The value of the "tags" property will be an object
        // where each property maps to an attribute definition. The property
        // key will be the tag name and the property value
        // will be the tag definition. Example:
        // {
        //     "tags": {
        //         "foo": {
        //             "attributes": { ... }
        //         },
        //         "bar": {
        //             "attributes": { ... }
        //         },
        //     }
        // }

        for (var tagName in tags) {
            if (tags.hasOwnProperty(tagName)) {
                this._handleTag(tagName, tags[tagName], this.dependencyChain.append('tags.' + tagName));
            }
        }
    }
    tagsDir(dir) {
        // The "tags-dir" property is used to supporting scanning
        // of a directory to discover custom tags. Scanning a directory
        // is a much simpler way for a developer to create custom tags.
        // Only one tag is allowed per directory and the directory name
        // corresponds to the tag name. We only search for directories
        // one level deep.
        var taglib = this.taglib;
        var path = this.filePath;
        var dirname = this.dirname;

        if (Array.isArray(dir)) {
            for (var i = 0; i < dir.length; i++) {
                scanTagsDir(path, dirname, dir[i], taglib, this.dependencyChain.append(`tags-dir[${i}]`));
            }
        } else {
            scanTagsDir(path, dirname, dir, taglib, this.dependencyChain.append(`tags-dir`));
        }
    }

    taglibImports(imports) {
        if (!resolveFrom) {
            return;
        }
        // The "taglib-imports" property allows another taglib to be imported
        // into this taglib so that the tags defined in the imported taglib
        // will be part of this taglib.
        //
        // NOTE: If a taglib import refers to a package.json file then we read
        //       the package.json file and automatically import *all* of the
        //       taglibs from the installed modules found in the "dependencies"
        //       section
        var taglib = this.taglib;
        var dirname = this.dirname;
        var importPath;

        if (imports && Array.isArray(imports)) {
            for (var i=0; i<imports.length; i++) {
                var curImport = imports[i];
                if (typeof curImport === 'string') {
                    var basename = nodePath.basename(curImport);
                    if (basename === 'package.json') {
                        var packagePath = resolve(curImport, dirname);
                        var packageDir = nodePath.dirname(packagePath);
                        var pkg = jsonFileReader.readFileSync(packagePath);
                        var dependencies = pkg.dependencies;
                        if (dependencies) {
                            var dependencyNames = Object.keys(dependencies);
                            for (var j=0; j<dependencyNames.length; j++) {
                                var dependencyName = dependencyNames[j];

                                importPath = resolveFrom(packageDir, dependencyName + '/marko.json');

                                if (importPath) {
                                    taglib.addImport(importPath);
                                }
                            }
                        }
                    } else {
                        importPath = resolveFrom(dirname, curImport);
                        if (importPath) {
                            taglib.addImport(importPath);
                        } else {
                            throw new Error('Import not fount: ' + curImport + ' (from ' + dirname + ')');
                        }
                    }
                }
            }
        }
    }

    textTransformer(value) {
        // Marko allows a "text-transformer" to be registered. The provided
        // text transformer will be called for any static text found in a template.
        var taglib = this.taglib;
        var dirname = this.dirname;

        var transformer = new types.Transformer();

        if (typeof value === 'string') {
            value = {
                path: value
            };
        }

        propertyHandlers(value, {
            path(value) {
                var path = resolve(value, dirname);
                transformer.path = path;
            }

        }, this.dependencyChain.append('textTransformer').toString());

        ok(transformer.path, '"path" is required for transformer');

        taglib.addTextTransformer(transformer);
    }

    /**
     * Allows an ID to be explicitly assigned to a taglib.
     * The taglib ID is used to prevent the same taglib  (even if different versions)
     * from being loaded multiple times.
     *
     * NOTE: Introduced as part of fix for #73
     *
     * @param  {String} value The taglib ID
     */
    taglibId(value) {
        var taglib = this.taglib;
        taglib.id = value;
    }

    transformer(value) {
        // Marko allows a "text-transformer" to be registered. The provided
        // text transformer will be called for any static text found in a template.
        var taglib = this.taglib;
        var dirname = this.dirname;

        var transformer = new types.Transformer();

        if (typeof value === 'string') {
            value = {
                path: value
            };
        }

        propertyHandlers(value, {
            path(value) {
                var path = resolve(value, dirname);
                transformer.path = path;
            }

        }, this.dependencyChain.append('transformer').toString());

        ok(transformer.path, '"path" is required for transformer');

        taglib.addTransformer(transformer);
    }
}

exports.loadTaglib = function(filePath, taglib, dependencyChain) {
    if (!dependencyChain) {
        dependencyChain = new DependencyChain([filePath]);
    }

    var taglibLoader = new TaglibLoader(dependencyChain);

    try {
        return taglibLoader._load(filePath, taglib);
    } catch(err) {
        throw createError('Unable to load taglib (' + dependencyChain + '): ' + err, err);
    }
};