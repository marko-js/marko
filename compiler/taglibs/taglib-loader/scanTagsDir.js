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

var nodePath = require('path');
var fs = require('fs');
var jsonminify = require('jsonminify');
var tagDefFromCode = require('./tag-def-from-code');
var loader = require('./loader');
var fsReadOptions = { encoding: 'utf8' };

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
module.exports = function scanTagsDir(tagsConfigPath, tagsConfigDirname, dir, taglib) {
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
        var tagFile = nodePath.join(tagDirname, 'marko-tag.json');
        var tag = null;
        var rendererFile = scanRequireExtensions(nodePath.join(tagDirname, 'renderer'));
        var indexFile = scanRequireExtensions(nodePath.join(tagDirname, 'index'));
        var templateFile = nodePath.join(tagDirname, 'template.marko');
        var tagDef = null;

        // Record dependencies so that we can check if a template is up-to-date
        taglib.addInputFile(tagFile);
        taglib.addInputFile(rendererFile);
        taglib.addInputFile(templateFile);

        if (fs.existsSync(tagFile)) {
            // marko-tag.json exists in the directory, use that as the tag definition
            try {
                tagDef = JSON.parse(jsonminify(fs.readFileSync(tagFile, fsReadOptions)));
            } catch(e) {
                throw new Error('Unable to parse JSON file at path "' + tagFile + '". Error: ' + e);
            }

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

            tag = loader.tagLoader.loadTag(tagDef, tagsConfigPath, taglib, tagDirname);
            tag.name = tag.name || tagName;
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
                    var templateCode = fs.readFileSync(exTemplateFile, fsReadOptions);
                    tagDef = tagDefFromCode.extractTagDef(templateCode);
                    if (!tagDef) {
                        tagDef = createDefaultTagDef();
                    }

                    tagDef.template = exTemplateFile;
                }
            }

            if (rendererJSFile) {
                var rendererCode = fs.readFileSync(rendererJSFile, fsReadOptions);
                tagDef = tagDefFromCode.extractTagDef(rendererCode);
                if (!tagDef) {
                     tagDef = createDefaultTagDef();
                }

                tagDef.renderer  = rendererJSFile;
                tag = loader.tagLoader.loadTag(tagDef, tagsConfigPath, taglib, tagDirname);
                tag.name = tagName;
                taglib.addTag(tag);
            }

            if (tagDef) {
                tag = loader.tagLoader.loadTag(tagDef, tagsConfigPath, taglib, tagDirname);
                tag.name = tagName;
                taglib.addTag(tag);
            }
        }
    }
};