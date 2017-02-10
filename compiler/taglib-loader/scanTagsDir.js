'use strict';

var nodePath = require('path');
var fs = require('fs');
var stripJsonComments = require('strip-json-comments');
var tagDefFromCode = require('./tag-def-from-code');
var loaders = require('./loaders');
var fsReadOptions = { encoding: 'utf8' };
var extend = require('raptor-util/extend');
var types = require('./types');

var tagFileTypes = [
    'template',
    'renderer',
    'transformer',
    'code-generator',
    'node-factory',
];

var searchFiles = [
    { name:'index.marko', type:'template' },
    { name:'renderer', type:'renderer' },
    { name:'index', type:'renderer' },
    { name:'template.marko', type:'template' },
    { name:'template.html', type:'template' },
    { name:'code-generator', type:'code-generator' },
    { name:'node-factory', type:'node-factory' },
    { name:'transformer', type:'transformer' },
];

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

function getFileMap(dirname) {
    var fileMap = {};
    var files = fs.readdirSync(dirname);

    files.forEach(file => {
        var extName = nodePath.extname(file);
        var baseName = file.slice(0, -1*extName.length);
        var fullPath = nodePath.join(dirname, file);
        fileMap[baseName] = fileMap[baseName] || {};
        fileMap[baseName][extName] = fullPath;
        fileMap[file] = fileMap[file] || {};
        fileMap[file].__path = fullPath;
    });

    return fileMap;
}

function getPath(filename, fileMap) {
    var file = fileMap[filename];

    if(!file) return;
    if(file.__path) return file.__path;
    if(file.js) return file['.js'];

    return file[Object.keys(file)[0]];
}

function findAndSetFile(tagDef, tagDirname) {
    if(!fs.statSync(tagDirname).isDirectory()) {
        return;
    }

    var fileMap = getFileMap(tagDirname);

    for(var i = 0; i < searchFiles.length; i++) {
        var name = searchFiles[i].name;
        var type = searchFiles[i].type;
        var path = getPath(name, fileMap);

        if(path) {
            tagDef[type] = path;
            return true;
        }
    }
}

function hasFile(tagDef) {
    for(var i = 0; i < tagFileTypes.length; i++) {
        if(tagDef[tagFileTypes[i]]) return true;
    }
    return false;
}

/**
 * @param {String} tagsConfigPath path to tag definition file
 * @param {String} tagsConfigDirname path to directory of tags config file (should be path.dirname(tagsConfigPath))
 * @param {String|Object} dir the path to directory to scan
 * @param {String} taglib the taglib that is being loaded
 */
module.exports = function scanTagsDir(tagsConfigPath, tagsConfigDirname, dir, taglib, dependencyChain) {
    var prefix;

    if (typeof dir === 'object') {
        prefix = dir.prefix;
        dir = dir.path;
    }

    if (prefix == null) {
        // no prefix by default
        prefix = '';
    }

    dir = nodePath.resolve(tagsConfigDirname, dir);
    var children = fs.readdirSync(dir);

    var rendererJSFile;

    for (var i=0, len=children.length; i<len; i++) {
        rendererJSFile = null;
        var childFilename = children[i];
        if (childFilename === 'node_modules') {
            continue;
        }

        var tagName = prefix + childFilename;
        var tagDirname = nodePath.join(dir, childFilename);
        var tagJsonPath = nodePath.join(tagDirname, 'marko-tag.json');
        var tagDef = null;

        var hasTagJson = false;
        if (fs.existsSync(tagJsonPath)) {
            hasTagJson = true;
            // marko-tag.json exists in the directory, use that as the tag definition
            try {
                tagDef = JSON.parse(stripJsonComments(fs.readFileSync(tagJsonPath, fsReadOptions)));
            } catch(e) {
                throw new Error('Unable to parse JSON file at path "' + tagJsonPath + '". Error: ' + e);
            }
        } else {
            tagJsonPath = null;
            tagDef = createDefaultTagDef();
        }

        if (!hasFile(tagDef)) {
            var fileWasSet = findAndSetFile(tagDef, tagDirname);
            if(!fileWasSet) {
                if (hasTagJson) {
                    throw new Error('Invalid tag file: ' + tagJsonPath + '. Neither a renderer or a template was found for tag. ' + JSON.stringify(tagDef, null, 2));
                } else {
                    // Skip this directory... there doesn't appear to be anything in it
                    continue;
                }
            }
        }

        if (!hasTagJson && (tagDef.renderer || tagDef.template)) {
            let templateCode = fs.readFileSync(tagDef.renderer || tagDef.template, fsReadOptions);
            let extractedTagDef = tagDefFromCode.extractTagDef(templateCode);
            if (extractedTagDef) {
                extend(tagDef, extractedTagDef);
            }
        }

        let tagDependencyChain;

        if (tagJsonPath) {
            tagDependencyChain = dependencyChain.append(tagJsonPath);
        } else {
            tagDependencyChain = dependencyChain.append(tagDirname);
        }


        var tag = new types.Tag(tagJsonPath || tagDirname);
        loaders.loadTagFromProps(tag, tagDef, tagDependencyChain);
        tag.name = tag.name || tagName;
        taglib.addTag(tag);
    }
};