/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var ok = require('assert').ok;
var nodePath = require('path');
var handleAttributes = require('./handleAttributes');
var scanTagsDir = require('./scanTagsDir');
var resolve = require('../util/resolve'); // NOTE: different implementation for browser
var propertyHandlers = require('property-handlers');
var Taglib = require('./Taglib');
var taglibReader = require('./taglib-reader');
var loader = require('./loader');
var tryRequire = require('try-require');
var resolveFrom = tryRequire('resolve-from', require);

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
            throw new Error('Tag at path "' + path + '" does not exist. Taglib: ' + taglib.path);
        }

        try {
            tagObject = require(path);
        } catch(e) {
            throw new Error('Unable to parse tag JSON for tag at path "' + path + '"');
        }
    } else {
        tagDirname = dirname; // Tag is in the same taglib file
        tagObject = path;
        path = '<' + tagName + '> tag in ' + taglib.path;
    }

    var tag = loader.tagLoader.loadTag(tagObject, path, taglib, tagDirname);
    if (tag.name === undefined) {
        tag.name = tagName;
    }
    taglib.addTag(tag);
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
function TaglibHandlers(taglib, path) {
    ok(taglib);
    ok(path);

    this.taglib = taglib;
    this.path = path;
    this.dirname = nodePath.dirname(path);
}

TaglibHandlers.prototype = {
    attributes: function(value) {
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
        var path = this.path;

        handleAttributes(value, taglib, path);
    },
    tags: function(tags) {
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
                handleTag(this, tagName, tags[tagName]);
            }
        }
    },
    tagsDir: function(dir) {
        // The "tags-dir" property is used to supporting scanning
        // of a directory to discover custom tags. Scanning a directory
        // is a much simpler way for a developer to create custom tags.
        // Only one tag is allowed per directory and the directory name
        // corresponds to the tag name. We only search for directories
        // one level deep.
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
                        var pkg = require(packagePath);
                        var dependencies = pkg.dependencies;
                        if (dependencies) {
                            var dependencyNames = Object.keys(dependencies);
                            for (var j=0; j<dependencyNames.length; j++) {
                                var dependencyName = dependencyNames[j];

                                try {
                                    importPath = resolveFrom(dirname, dependencyName + '/marko.json');
                                } catch(e) {}

                                if (importPath) {
                                    taglib.addImport(importPath);
                                }
                            }
                        }
                    } else {
                        importPath = resolveFrom(dirname, curImport);
                        taglib.addImport(importPath);
                    }
                }
            }
        }
    },

    textTransformer: function(value) {
        // Marko allows a "text-transformer" to be registered. The provided
        // text transformer will be called for any static text found in a template.
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

        taglib.addInputFile(transformer.path);

        taglib.addTextTransformer(transformer);
    },

    /**
     * Allows an ID to be explicitly assigned to a taglib.
     * The taglib ID is used to prevent the same taglib  (even if different versions)
     * from being loaded multiple times.
     *
     * NOTE: Introduced as part of fix for #73
     *
     * @param  {String} value The taglib ID
     */
    taglibId: function(value) {
        var taglib = this.taglib;
        taglib.id = value;
    }
};

exports.loadTaglib = function(path, taglib) {
    var taglibProps = taglibReader.readTaglib(path);

    taglib = taglib || new Taglib(path);
    taglib.addInputFile(path);

    var taglibHandlers = new TaglibHandlers(taglib, path);

    // We register a wildcard handler to handle "@my-attr" and "<my-tag>"
    // properties (shorthand syntax)
    taglibHandlers['*'] = function(name, value) {
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
    };

    propertyHandlers(taglibProps, taglibHandlers, path);

    taglib.path = path;

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
        var dirname = nodePath.dirname(path);
        var packageJsonPath = nodePath.join(dirname, 'package.json');


        try {
            var pkg = require(packageJsonPath);
            taglib.id = pkg.name;
        } catch(e) {}

        if (!taglib.id) {
            taglib.id = path;
        }
    }

    return taglib;
};