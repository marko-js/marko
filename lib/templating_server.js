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
/**
 *
 * @extension Server
 *
 */
'use strict';
var strings = require('raptor-strings');
var resources = require('raptor-resources');
var File = require('raptor-files/File');
var templateInfoByName = {};
var logger = require('raptor-logging').logger('raptor/templating_server');
require('raptor-util').extend(require('raptor-templates'), {
    findTemplate: function (name) {
        var path = name;
        var resource;
        var templatePath;
        var templateFile = name instanceof File ? name : new File(name);
        if (templateFile.exists() && templateFile.isFile()) {
            resource = resources.createFileResource(templateFile.getAbsolutePath());
            name = templateFile.getAbsolutePath();
        } else if (name instanceof File) {
            return;
        } else {
            templatePath = path;
            if (!strings.startsWith(templatePath, '/')) {
                templatePath = '/' + templatePath;
            }
            if (!strings.endsWith(templatePath, '.rhtml')) {
                templatePath += '.rhtml';
            }
            resource = resources.findResource(templatePath);
        }
        if (!resource || !resource.exists()) {
            templatePath = path;
            if (!strings.startsWith(templatePath, '/')) {
                templatePath = '/' + templatePath;
            }
            var lastSlash = templatePath.lastIndexOf('/');
            if (lastSlash != -1) {
                resource = resources.findResource(templatePath + templatePath.substring(lastSlash) + '.rhtml');
            }
        }
        if (resource && resource.exists()) {
            templateInfoByName[name] = {
                resource: resource,
                filePath: resource.isFileResource() ? resource.getFilePath() : null,
                name: name
            };
            require('raptor-templates/compiler').compileAndLoadResource(resource, { templateName: name });
        }
    },
    unloadFile: function (path) {
        for (var curName in templateInfoByName) {
            if (templateInfoByName.hasOwnProperty(curName)) {
                var templateInfo = templateInfoByName[curName];
                if (templateInfo.filePath === path) {
                    this.unload(curName);
                }
            }
        }
    },
    getTemplateInfo: function (name) {
        return templateInfoByName[name] || { templateName: name };
    },
    renderToFile: function (templateName, data, outputFile, context) {
        if (typeof outputFile === 'string') {
            outputFile = new File(outputFile);
        }
        return this.renderToStringAsync(templateName, data, context).then(function (html) {
            outputFile.writeAsString(html);
        }, function (e) {
            logger.error(e);
        });
    }
});