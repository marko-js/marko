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
'use strict';

var nodePath = require('path');
var fs = require('fs');
var stripJsonComments = require('strip-json-comments');
var tagDefFromCode = require('./tag-def-from-code');
var loader = require('./loader');
var fsReadOptions = { encoding: 'utf8' };
var extend = require('raptor-util/extend');

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

function scanRequireExtensions(baseFilename) {
    // .js is the most common case so check that first
    var path = baseFilename + '.js';

    if (fs.existsSync(path)) {
        return path;
    }

    for (var extension in require.extensions) {
        if (extension === '.js') {
            // We already checked .js above
            continue;
        }
        path = baseFilename + extension;
        if (fs.existsSync(path)) {
            return path; // short circuit loop
        }
    }
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
        var tagFilePath = nodePath.join(tagDirname, 'marko-tag.json');
        var tag = null;

        var rendererFile = scanRequireExtensions(nodePath.join(tagDirname, 'renderer'));
        var indexFile = scanRequireExtensions(nodePath.join(tagDirname, 'index'));
        var templateFile = nodePath.join(tagDirname, 'template.marko');
        var templateFileAlt = nodePath.join(tagDirname, 'template.html');
        var templateFileAlt2 = nodePath.join(tagDirname, 'template.marko.html');
        var codeGeneratorFile = scanRequireExtensions(nodePath.join(tagDirname, 'code-generator'));
        var nodeFactoryFile = scanRequireExtensions(nodePath.join(tagDirname, 'node-factory'));
        var tagDef = null;

        var hasTagFile = false;
        if (fs.existsSync(tagFilePath)) {
            hasTagFile = true;
            // marko-tag.json exists in the directory, use that as the tag definition
            try {
                tagDef = JSON.parse(stripJsonComments(fs.readFileSync(tagFilePath, fsReadOptions)));
            } catch(e) {
                throw new Error('Unable to parse JSON file at path "' + tagFilePath + '". Error: ' + e);
            }
        } else {
            tagFilePath = null;
            tagDef = createDefaultTagDef();
        }

        if (!tagDef.renderer && !tagDef.template && !tagDef['code-generator'] && !tagDef['node-factory'] && !tagDef.transformer) {
            if (rendererFile) {
                tagDef.renderer = rendererFile;
            } else if (indexFile) {
                tagDef.renderer = indexFile;
            } else if (fs.existsSync(templateFile)) {
                tagDef.template = templateFile;
            } else if (fs.existsSync(templateFileAlt)) {
                tagDef.template = templateFileAlt;
            } else if (fs.existsSync(templateFileAlt2)) {
                tagDef.template = templateFileAlt2;
            } else if (fs.existsSync(codeGeneratorFile)) {
                tagDef['code-generator'] = codeGeneratorFile;
            } else if (fs.existsSync(nodeFactoryFile)) {
                tagDef['node-factory'] = nodeFactoryFile;
            } else {
                if (hasTagFile) {
                    throw new Error('Invalid tag file: ' + tagFilePath + '. Neither a renderer or a template was found for tag. ' + JSON.stringify(tagDef, null, 2));
                } else {
                    // Skip this directory... there doesn't appear to be anything in it
                    continue;
                }
            }
        }

        if (!hasTagFile && (tagDef.renderer || tagDef.template)) {
            let templateCode = fs.readFileSync(tagDef.renderer || tagDef.template, fsReadOptions);
            let extractedTagDef = tagDefFromCode.extractTagDef(templateCode);
            if (extractedTagDef) {
                extend(tagDef, extractedTagDef);
            }
        }

        let tagDependencyChain;

        if (tagFilePath) {
            tagDependencyChain = dependencyChain.append(tagFilePath);
        } else {
            tagDependencyChain = dependencyChain.append(tagDirname);
        }

        tag = loader.tagLoader.loadTag(tagDef, tagFilePath || tagDirname, tagDependencyChain);
        tag.name = tag.name || tagName;
        taglib.addTag(tag);
    }
};
