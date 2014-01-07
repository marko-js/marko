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


define.extend('raptor/templating', function(require) {
    "use strict";
    
    var strings = require('raptor/strings'),
        resources = require('raptor/resources'),
        files = require('raptor/files'),
        File = require('raptor/files/File'),
        templateInfoByName = {},
        logger = require('raptor/logging').logger('raptor/templating_server');

    return {
        /**
         * This method gets invoked if a template with a particular name has not been loaded/registered
         * and will then try to find it and load it.
         * 
         * This method will attempt to convert the template name to various
         * resource paths to try and find the template on disk. It assumes
         * that templates are named with a particular convention. In addition to 
         * trying the template as a file path, the following
         * conventions are supported:
         * 
         * <ol>
         *  <li>my/template --> /my/template.rhtml
         *  <li>my/template --> /my/template/template.rhtml
         * </ol>
         * 
         * @param name {String} The template name
         * @returns {void}
         */
        findTemplate: function(name) {
            var path = name,
                resource,
                templatePath,
                templateFile = name instanceof File ? name : new File(name);
            
            
            if (templateFile.exists() && templateFile.isFile()) {
                resource = resources.createFileResource(templateFile.getAbsolutePath());
                name = templateFile.getAbsolutePath();
            }
            else if (name instanceof File) {
                return;
            }
            else {
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
                    resource = resources.findResource(templatePath + templatePath.substring(lastSlash) + ".rhtml");
                }
            }
            
            if (resource && resource.exists()) {
                templateInfoByName[name] = {
                    resource: resource,
                    filePath: resource.isFileResource() ? resource.getFilePath() : null,
                    name: name
                };

                require('raptor/templating/compiler').compileAndLoadResource(resource, {templateName: name});
            }
        },

        unloadFile: function(path) {
            for (var curName in templateInfoByName) {
                if (templateInfoByName.hasOwnProperty(curName)) {
                    var templateInfo = templateInfoByName[curName];
                    if (templateInfo.filePath === path) {
                        this.unload(curName);
                    }
                }
            }
        },

        getTemplateInfo: function(name) {
            return templateInfoByName[name] || {templateName: name};
        },

        renderToFile: function(templateName, data, outputFile, context) {
            if (typeof outputFile === 'string') {
                outputFile = new File(outputFile);
            }

            return this.renderToStringAsync(templateName, data, context)
                .then(
                    function(html) {
                        outputFile.writeAsString(html);
                    },
                    function(e) {
                        logger.error(e);
                    });
        }
    };
});