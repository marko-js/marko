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
 * @extension Rhino
 */
define.extend(
    "raptor/templating/compiler",
    function(require, compiler) {
        "use strict";
        
        var java = require("raptor/java");
        
        var convertJavaOptions = function(javaOptions) {
            var options = {};
            options.templateName = javaOptions.templateName;
            return options;
        };
        
        return {
            /**
             * 
             * @param src
             * @param path
             * @param javaOptions
             * @returns
             */
            rhinoCompile: function(src, path, javaOptions) {
                return this.compile(src, path, convertJavaOptions(javaOptions));
            },
            
            /**
             * 
             * @param path
             * @param javaOptions
             * @returns
             */
            rhinoCompileResource: function(path, javaOptions) {
                return this.compileResource(path, convertJavaOptions(javaOptions));
            },
            
            /**
             * 
             * @param path
             * @param javaOptions
             * @returns
             */
            rhinoCompileAndLoadResource: function(path, javaOptions) {
                return this.compileAndLoadResource(path, convertJavaOptions(javaOptions));
            }
        };
    });