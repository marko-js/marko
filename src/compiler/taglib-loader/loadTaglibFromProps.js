"use strict";

var ok = require("assert").ok;
var types = require("./types");
var nodePath = require("path");
var scanTagsDir = require("./scanTagsDir");
var markoModules = require("../modules"); // NOTE: different implementation for browser
var propertyHandlers = require("property-handlers");
var jsonFileReader = require("./json-file-reader");
var tryRequire = require("try-require");
var resolveFrom = tryRequire("resolve-from", require);
var DependencyChain = require("./DependencyChain");
var createError = require("raptor-util/createError");
var loaders = require("./loaders");

function exists(path) {
    try {
        markoModules.resolve(path);
        return true;
    } catch (e) {
        return false;
    }
}

function addTransformer(taglibLoader, value) {
    // Marko allows a "text-transformer" to be registered. The provided
    // text transformer will be called for any static text found in a template.
    const taglib = taglibLoader.taglib;
    const dirname = taglibLoader.dirname;

    const transformer = new types.Transformer();

    propertyHandlers(
        value,
        {
            path(value) {
                const path = markoModules.resolveFrom(dirname, value);
                transformer.path = path;
            }
        },
        taglibLoader.dependencyChain.append("transformer").toString()
    );

    ok(transformer.path, '"path" is required for transformer');

    taglib.addTransformer(transformer);
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
    constructor(taglib, dependencyChain) {
        ok(
            dependencyChain instanceof DependencyChain,
            '"dependencyChain" is not valid'
        );

        this.dependencyChain = dependencyChain;

        this.taglib = taglib;
        this.filePath = taglib.filePath;
        this.dirname = taglib.dirname;
    }

    load(taglibProps) {
        var taglib = this.taglib;

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
            var filePath = this.filePath;
            var dirname = this.dirname;

            var packageJsonPath = nodePath.join(dirname, "package.json");

            try {
                var pkg = jsonFileReader.readFileSync(packageJsonPath);
                taglib.id = pkg.name;
            } catch (e) {
                /* ignore error */
            }

            if (!taglib.id) {
                taglib.id = filePath;
            }
        }
    }

    _handleTag(tagName, value, dependencyChain) {
        var tagProps;
        var tagFilePath = this.filePath;

        var tag;

        if (typeof value === "string") {
            tagFilePath = nodePath.resolve(this.dirname, value);

            if (!exists(tagFilePath)) {
                throw new Error(
                    'Tag at path "' +
                        tagFilePath +
                        '" does not exist. (' +
                        dependencyChain +
                        ")"
                );
            }

            tag = new types.Tag(tagFilePath);

            tagProps = jsonFileReader.readFileSync(tagFilePath);
            dependencyChain = dependencyChain.append(tagFilePath);
        } else {
            tag = new types.Tag(this.filePath);
            tagProps = value;
        }

        loaders.loadTagFromProps(tag, tagProps, dependencyChain);

        if (tag.name === undefined) {
            tag.name = tagName;
        }

        this.taglib.addTag(tag);
    }

    // We register a wildcard handler to handle "@my-attr" and "<my-tag>"
    // properties (shorthand syntax)
    "*"(name, value) {
        var taglib = this.taglib;
        var filePath = this.filePath;

        if (name.startsWith("<")) {
            let tagName = name.slice(1, -1);
            this._handleTag(tagName, value, this.dependencyChain.append(name));
        } else if (name.startsWith("@")) {
            var attrKey = name.substring(1);

            var attr = loaders.loadAttributeFromProps(
                attrKey,
                value,
                this.dependencyChain.append("@" + attrKey)
            );

            attr.filePath = filePath;
            attr.key = attrKey;

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

        Object.keys(value).forEach(attrName => {
            var attrDef = value[attrName];

            var attr = loaders.loadAttributeFromProps(
                attrName,
                attrDef,
                this.dependencyChain.append("@" + attrName)
            );

            attr.key = attrName;

            taglib.addAttribute(attr);
        });
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
                this._handleTag(
                    tagName,
                    tags[tagName],
                    this.dependencyChain.append("tags." + tagName)
                );
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

        taglib.tagsDir = dir;

        if (dir != null) {
            if (Array.isArray(dir)) {
                for (var i = 0; i < dir.length; i++) {
                    scanTagsDir(
                        path,
                        dirname,
                        dir[i],
                        taglib,
                        this.dependencyChain.append(`tags-dir[${i}]`)
                    );
                }
            } else {
                scanTagsDir(
                    path,
                    dirname,
                    dir,
                    taglib,
                    this.dependencyChain.append(`tags-dir`)
                );
            }
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
            for (var i = 0; i < imports.length; i++) {
                var curImport = imports[i];
                if (typeof curImport === "string") {
                    var basename = nodePath.basename(curImport);
                    if (basename === "package.json") {
                        var packagePath = markoModules.resolveFrom(
                            dirname,
                            curImport
                        );
                        var packageDir = nodePath.dirname(packagePath);
                        var pkg = jsonFileReader.readFileSync(packagePath);
                        var dependencies = pkg.dependencies;
                        if (dependencies) {
                            var dependencyNames = Object.keys(dependencies);
                            for (var j = 0; j < dependencyNames.length; j++) {
                                var dependencyName = dependencyNames[j];

                                importPath = resolveFrom(
                                    packageDir,
                                    dependencyName + "/marko.json"
                                );

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
                            throw new Error(
                                "Import not found: " +
                                    curImport +
                                    " (from " +
                                    dirname +
                                    ")"
                            );
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

        if (typeof value === "string") {
            value = {
                path: value
            };
        }

        propertyHandlers(
            value,
            {
                path(value) {
                    var path = markoModules.resolveFrom(dirname, value);
                    transformer.path = path;
                }
            },
            this.dependencyChain.append("textTransformer").toString()
        );

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

    /**
     * If a custom tag has an associated transformer then the transformer
     * will be called on the compile-time Node. The transformer can manipulate
     * the AST using the DOM-like API to change how the code gets generated.
     */
    transformer(value) {
        if (typeof value === "string") {
            // The value is a simple string type
            // so treat the value as the path to the JS
            // module for the transformer
            value = {
                path: value
            };

            addTransformer(this, value);
        } else if (Array.isArray(value)) {
            value.forEach(transformerPath => {
                value = {
                    path: transformerPath
                };

                addTransformer(this, value);
            });
        } else {
            addTransformer(this, value);
        }
    }

    attributeGroups(value) {
        let taglib = this.taglib;
        let attributeGroups =
            taglib.attributeGroups || (taglib.attributeGroups = {});
        let dependencyChain = this.dependencyChain.append("attribute-groups");

        Object.keys(value).forEach(attrGroupName => {
            let attrGroup = (attributeGroups[attrGroupName] = {});
            let attrGroupDependencyChain = dependencyChain.append(
                attrGroupName
            );

            let rawAttrGroup = value[attrGroupName];

            Object.keys(rawAttrGroup).forEach(attrName => {
                var rawAttrDef = rawAttrGroup[attrName];

                let attr = loaders.loadAttributeFromProps(
                    attrName,
                    rawAttrDef,
                    attrGroupDependencyChain.append("@" + attrName)
                );

                attrGroup[attrName] = attr;
            });
        });
    }
}

function loadTaglibFromProps(taglib, taglibProps, dependencyChain) {
    ok(taglib, '"taglib" is required');
    ok(taglibProps, '"taglibProps" is required');
    ok(taglib.filePath, '"taglib.filePath" is required');

    if (!dependencyChain) {
        dependencyChain = new DependencyChain([taglib.filePath]);
    }

    var taglibLoader = new TaglibLoader(taglib, dependencyChain);

    try {
        taglibLoader.load(taglibProps);
    } catch (err) {
        throw createError(
            "Unable to load taglib (" + dependencyChain + "): " + err,
            err
        );
    }

    return taglib;
}

module.exports = loadTaglibFromProps;
