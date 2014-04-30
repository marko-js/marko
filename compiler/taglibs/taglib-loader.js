var fs = require('fs');
var ok = require('assert').ok;
var nodePath = require('path');
var Taglib = require('./Taglib');
var cache = {};
var forEachEntry = require('raptor-util').forEachEntry;
var raptorRegexp = require('raptor-regexp');
var tagDefFromCode = require('./tag-def-from-code');
var resolve = require('raptor-modules/resolver').serverResolveRequire;
var propertyHandlers = require('property-handlers');

function createDefaultTagDef() {
    return {
            attributes: {
                '*': {
                    type: 'string',
                    targetProperty: null
                }
            }
         };
}

function buildAttribute(attr, attrProps, path) {


    propertyHandlers(attrProps, {
        type: function(value) {
            attr.type = value;
        },
        targetProperty: function(value) {
            attr.targetProperty = value;
        },
        defaultValue: function(value) {
            attr.defaultValue = value;
        },
        pattern: function(value) {
            if (value === true) {
                var patternRegExp = raptorRegexp.simple(attr.name);
                attr.pattern = patternRegExp;
            }
        },
        allowExpressions: function(value) {
            attr.allowExpressions = value;
        },
        preserveName: function(value) {
            attr.preserveName = value;
        },
        required: function(value) {
            attr.required = value === true;
        },
        removeDashes: function(value) {
            attr.removeDashes = value === true;
        }
    }, path);

    return attr;
}

function handleAttributes(value, parent, path) {
    forEachEntry(value, function(attrName, attrProps) {
        var attr = new Taglib.Attribute(attrName);

        if (attrProps == null) {
            attrProps = {
                type: 'string'
            };
        }
        else if (typeof attrProps === 'string') {
            attrProps = {
                type: attrProps
            };
        }

        buildAttribute(attr, attrProps, '"' + attrName + '" attribute as part of ' + path);

        parent.addAttribute(attr);
    });
}

function buildTag(tagObject, path, taglib, dirname) {
    ok(tagObject);
    ok(typeof path === 'string');
    ok(taglib);
    ok(typeof dirname === 'string');

    var tag = new Taglib.Tag(taglib);

    propertyHandlers(tagObject, {
        name: function(value) {
            tag.name = value;
        },

        renderer: function(value) {
            var path = resolve(value, dirname);
            if (!fs.existsSync(path)) {
                throw new Error('Renderer at path "' + path + '" does not exist.');
            }

            tag.renderer = path;
        },
        template: function(value) {
            var path = nodePath.resolve(dirname, value);
            if (!fs.existsSync(path)) {
                throw new Error('Template at path "' + path + '" does not exist.');
            }

            tag.template = path;
        },
        attributes: function(value) {
            handleAttributes(value, tag, path);
        },
        nodeClass: function(value) {
            var path = resolve(value, dirname);
            if (!fs.existsSync(path)) {
                throw new Error('Node module at path "' + path + '" does not exist.');
            }

            tag.nodeClass = path;
        },
        transformer: function(value) {
            var transformer = new Taglib.Transformer();

            if (typeof value === 'string') {
                value = {
                    path: value
                };
            }

            propertyHandlers(value, {
                path: function(value) {
                    var path = resolve(value, dirname);
                    if (!fs.existsSync(path)) {
                        throw new Error('Transformer at path "' + path + '" does not exist.');
                    }

                    transformer.path = path;
                },

                priority: function(value) {
                    transformer.priority = value;
                },

                name: function(value) {
                    transformer.name = value;
                },

                properties: function(value) {
                    var properties = transformer.properties || (transformer.properties = {});
                    for (var k in value) {
                        if (value.hasOwnProperty(k)) {
                            properties[k] = value[k];
                        }
                    }
                }

            }, 'transformer in ' + path);

            ok(transformer.path, '"path" is required for transformer');

            tag.addTransformer(transformer);
        },

        'var': function(value) {
            tag.addNestedVariable({
                name: value
            });
        },
        vars: function(value) {
            if (value) {
                value.forEach(function(v, i) {
                    var nestedVariable;

                    if (typeof v === 'string') {
                        nestedVariable = {
                            name: v
                        };
                    } else {
                        nestedVariable = {};

                        propertyHandlers(v, {
                            
                            name: function(value) {
                                nestedVariable.name = value;
                            },

                            nameFromAttribute: function(value) {
                                nestedVariable.nameFromAttribute = value;
                            }

                        }, 'var at index ' + i);

                        if (!nestedVariable.name && !nestedVariable.nameFromAttribute) {
                            throw new Error('The "name" or "name-from-attribute" attribute is required for a nested variable');
                        }
                    }

                    tag.addNestedVariable(nestedVariable);
                });
            }
        },
        importVar: function(value) {
            forEachEntry(value, function(varName, varValue) {
                var importedVar = {
                    targetProperty: varName
                };

                var expression = varValue;

                if (!expression) {
                    expression = varName;
                }
                else if (typeof expression === 'object') {
                    expression = expression.expression;
                }

                if (!expression) {
                    throw new Error('Invalid "import-var": ' + require('util').inspect(varValue));
                }

                importedVar.expression = expression;
                tag.addImportedVariable(importedVar);
            });
        }
    }, path);

    return tag;
}

/**
 * @param {String} tagsConfigPath path to tag definition file
 * @param {String} tagsConfigDirname path to directory of tags config file (should be path.dirname(tagsConfigPath))
 * @param {String} dir the path to directory to scan
 * @param {String} taglib the taglib that is being loaded
 */
function scanTagsDir(tagsConfigPath, tagsConfigDirname, dir, taglib) {
    dir = nodePath.resolve(tagsConfigDirname, dir);
    var children = fs.readdirSync(dir);

    for (var i=0, len=children.length; i<len; i++) {
        var childFilename = children[i];
        if (childFilename === 'node_modules') {
            continue;
        }
        var tagDirname = nodePath.join(dir, childFilename);
        var tagFile = nodePath.join(dir, childFilename, 'raptor-tag.json');
        var tag = null;
        var rendererFile = nodePath.join(dir, childFilename, 'renderer.js');
        var templateFile = nodePath.join(dir, childFilename, 'template.rhtml');
        var tagDef = null;

        // Record dependencies so that we can check if a template is up-to-date
        taglib.addInputFile(tagFile);
        taglib.addInputFile(rendererFile);

        if (fs.existsSync(tagFile)) {
            // raptor-tag.json exists in the directory, use that as the tag definition
            tagDef = JSON.parse(fs.readFileSync(tagFile, {encoding: 'utf8'}));
            if (!tagDef.renderer || !tagDef.template) {
                if (fs.existsSync(rendererFile)) {
                    tagDef.renderer = rendererFile;
                } else if (fs.existsSync(templateFile)) {
                    tagDef.template = templateFile;
                } else {
                    throw new Error('Invalid tag. Neither a renderer or a template was found for tag.');
                }
            }

            tag = buildTag(tagDef, tagsConfigPath, taglib, tagDirname);
            tag.name = childFilename;
            taglib.addTag(tag);
        } else {
            // raptor-tag.json does *not* exist... checking for a 'renderer.js'
            

            if (fs.existsSync(rendererFile)) {
                var rendererCode = fs.readFileSync(rendererFile, {encoding: 'utf8'});
                tagDef = tagDefFromCode.extractTagDef(rendererCode);
                if (!tagDef) {
                     tagDef = createDefaultTagDef();
                }

                tagDef.renderer  = rendererFile;
                tag = buildTag(tagDef, tagsConfigPath, taglib, tagDirname);
                tag.name = childFilename;
                taglib.addTag(tag);
            } else if (fs.existsSync(templateFile)) {
                var templateCode = fs.readFileSync(templateFile, {encoding: 'utf8'});
                tagDef = tagDefFromCode.extractTagDef(templateCode);
                if (!tagDef) {
                     tagDef = createDefaultTagDef();
                }

                tagDef.template = templateFile;
            }

            if (tagDef) {
                tag = buildTag(tagDef, tagsConfigPath, taglib, tagDirname);
                tag.name = childFilename;
                taglib.addTag(tag);
            }
        }
    }
}

function load(path) {
    if (cache[path]) {
        return cache[path];
    }

    var src = fs.readFileSync(path, {encoding: 'utf8'});
    var taglib = new Taglib(path);
    taglib.addInputFile(path);
    var dirname = nodePath.dirname(path);

    var taglibObject;

    try {
        taglibObject = JSON.parse(src);
    }
    catch(e) {
        throw new Error('Unable to parse taglib JSON at path "' + path + '". Exception: ' + e);
    }

    propertyHandlers(taglibObject, {
        attributes: function(value) {
            handleAttributes(value, taglib, path);
        },
        tags: function(tags) {
            forEachEntry(tags, function(tagName, path) {
                ok(path, 'Invalid tag definition for "' + tagName + '"');
                var tagObject;

                var tagDirname;

                if (typeof path === 'string') {
                    path = nodePath.resolve(dirname, path);
                    taglib.addInputFile(path);
                    
                    tagDirname = nodePath.dirname(path);
                    if (!fs.existsSync(path)) {
                        throw new Error('Tag at path "' + path + '" does not exist. Taglib: ' + taglib.id);
                    }

                    var tagJSON = fs.readFileSync(path, {encoding: 'utf8'});

                    try {
                        tagObject = JSON.parse(tagJSON);
                    }
                    catch(e) {
                        throw new Error('Unable to parse tag JSON for tag at path "' + path + '"');
                    }
                } else {
                    tagDirname = dirname; // Tag is in the same taglib file
                    tagObject = path;
                    path = '<' + tagName + '> tag in ' + taglib.id;
                }


                var tag = buildTag(tagObject, path, taglib, tagDirname);
                if (tag.name === undefined) {
                    tag.name = tagName;
                }
                taglib.addTag(tag);
            });
        },
        tagsDir: function(dir) {

            if (Array.isArray(dir)) {
                for (var i = 0; i < dir.length; i++) {
                    scanTagsDir(path, dirname, dir[i], taglib);
                }
            } else {
                scanTagsDir(path, dirname, dir, taglib);
            }
        },
        textTransformer: function(value) {
            var transformer = new Taglib.Transformer();

            if (typeof value === 'string') {
                value = {
                    path: value
                };
            }

            propertyHandlers(value, {
                path: function(value) {
                    var path = resolve(value, dirname);
                    if (!fs.existsSync(path)) {
                        throw new Error('Transformer at path "' + path + '" does not exist.');
                    }

                    transformer.path = path;
                }

            }, 'text-transformer in ' + path);

            ok(transformer.path, '"path" is required for transformer');

            taglib.addTextTransformer(transformer);
        }
    }, path);

    taglib.id = path;

    cache[path] = taglib;

    return taglib;
}

exports.load = load;
