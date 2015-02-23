var fs ;
var req = require;

try {
    fs = req('fs');
} catch(e) {

}

var ok = require('assert').ok;
var nodePath = require('path');
var Taglib = require('./Taglib');
var cache = {};
var forEachEntry = require('raptor-util').forEachEntry;
var raptorRegexp = require('raptor-regexp');
var tagDefFromCode = require('./tag-def-from-code');
var resolve = require('../util/resolve'); // NOTE: different implementation for browser
var propertyHandlers = require('property-handlers');

var safeVarName = /^[A-Za-z_$][A-Za-z0-9_]*$/;
var bodyFunctionRegExp = /^([A-Za-z_$][A-Za-z0-9_]*)(?:\(([^)]*)\))?$/;

function exists(path) {
    try {
        require.resolve(path);
        return true;
    } catch(e) {
        return false;
    }
}

function createDefaultTagDef() {
    return {
            attributes: {
                '*': {
                    type: 'string',
                    targetProperty: null,
                    preserveName: false
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
        },
        description: function() {

        },
        setFlag: function(value) {
            attr.setFlag = value;
        },
        ignore: function(value) {
            if (value === true) {
                attr.ignore = true;
            }
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
        } else if (typeof attrProps === 'string') {
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

    if (tagObject.attributes == null) {
        // allow any attributes if no attributes are declared
        tagObject.attributes = {
            '*': 'string'
        };
    }

    propertyHandlers(tagObject, {
        name: function(value) {
            tag.name = value;
        },

        renderer: function(value) {
            var path = resolve(value, dirname);

            tag.renderer = path;
        },
        template: function(value) {
            var path = nodePath.resolve(dirname, value);
            if (!exists(path)) {
                throw new Error('Template at path "' + path + '" does not exist.');
            }

            tag.template = path;
        },
        attributes: function(value) {
            handleAttributes(value, tag, path);
        },
        nodeClass: function(value) {
            var path = resolve(value, dirname);

            tag.nodeClass = path;
        },
        preserveWhitespace: function(value) {
            tag.preserveWhitespace = !!value;
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
        bodyFunction: function(value) {
            var parts = bodyFunctionRegExp.exec(value);
            if (!parts) {
                throw new Error('Invalid value of "' + value + '" for "body-function". Expected value to be of the following form: <function-name>([param1, param2, ...])');
            }

            var functionName = parts[1];
            var params = parts[2];
            if (params) {
                params = params.trim().split(/\s*,\s*/);
                for (var i=0; i<params.length; i++) {
                    if (params[i].length === 0) {
                        throw new Error('Invalid parameters for body-function with value of "' + value + '"');
                    } else if (!safeVarName.test(params[i])) {
                        throw new Error('Invalid parameter name of "' + params[i] + '" for body-function with value of "' + value + '"');
                    }
                }
            } else {
                params = [];
            }

            tag.setBodyFunction(functionName, params);
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
    var rendererJSFile;

    for (var i=0, len=children.length; i<len; i++) {
        rendererJSFile = null;
        var childFilename = children[i];
        if (childFilename === 'node_modules') {
            continue;
        }
        var tagDirname = nodePath.join(dir, childFilename);
        var tagFile = nodePath.join(dir, childFilename, 'marko-tag.json');
        var tag = null;
        var rendererFile = nodePath.join(dir, childFilename, 'renderer.js');
        var indexFile = nodePath.join(dir, childFilename, 'index.js');
        var templateFile = nodePath.join(dir, childFilename, 'template.marko');
        var tagDef = null;

        // Record dependencies so that we can check if a template is up-to-date
        taglib.addInputFile(tagFile);
        taglib.addInputFile(rendererFile);

        if (fs.existsSync(tagFile)) {
            // marko-tag.json exists in the directory, use that as the tag definition
            tagDef = JSON.parse(fs.readFileSync(tagFile, {encoding: 'utf8'}));
            if (!tagDef.renderer && !tagDef.template) {
                if (fs.existsSync(rendererFile)) {
                    tagDef.renderer = rendererFile;
                } else if (fs.existsSync(indexFile)) {
                    tagDef.renderer = indexFile;
                } else if (fs.existsSync(templateFile)) {
                    tagDef.template = templateFile;
                } else if (fs.existsSync(templateFile + ".html")) {
                    tagDef.template = templateFile + ".html";
                } else {
                    throw new Error('Invalid tag file: ' + tagFile + '. Neither a renderer or a template was found for tag.');
                }
            }

            tag = buildTag(tagDef, tagsConfigPath, taglib, tagDirname);
            tag.name = childFilename;
            taglib.addTag(tag);
        } else {
            // marko-tag.json does *not* exist... checking for a 'renderer.js'


            if (fs.existsSync(rendererFile)) {
                rendererJSFile = rendererFile;
            } else if (fs.existsSync(indexFile)) {
                rendererJSFile = indexFile;
            } else {
                var exTemplateFile;
                if (fs.existsSync(templateFile)) {
                    exTemplateFile = templateFile;
                }
                else if (fs.existsSync(templateFile + ".html")){
                    exTemplateFile = templateFile + ".html";
                }
                if(exTemplateFile){
                    var templateCode = fs.readFileSync(exTemplateFile, {encoding: 'utf8'});
                    tagDef = tagDefFromCode.extractTagDef(templateCode);
                    if (!tagDef) {
                        tagDef = createDefaultTagDef();
                    }

                    tagDef.template = exTemplateFile;
                }
            }

            if (rendererJSFile) {
                var rendererCode = fs.readFileSync(rendererJSFile, {encoding: 'utf8'});
                tagDef = tagDefFromCode.extractTagDef(rendererCode);
                if (!tagDef) {
                     tagDef = createDefaultTagDef();
                }

                tagDef.renderer  = rendererJSFile;
                tag = buildTag(tagDef, tagsConfigPath, taglib, tagDirname);
                tag.name = childFilename;
                taglib.addTag(tag);
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

    var taglibObject;

    try {
        taglibObject = require(path);
    } catch(e) {
        throw new Error('Unable to parse taglib JSON at path "' + path + '". Exception: ' + e);
    }

    var taglib = new Taglib(path);
    taglib.addInputFile(path);
    var dirname = nodePath.dirname(path);

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
                    transformer.path = path;
                }

            }, 'text-transformer in ' + path);

            ok(transformer.path, '"path" is required for transformer');

            taglib.addTextTransformer(transformer);
        }
    }, path);

    taglib.id = taglib.path = path;

    cache[path] = taglib;

    return taglib;
}

exports.load = load;
