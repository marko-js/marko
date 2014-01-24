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
'use strict';
var compiler = require('raptor-templates/compiler');
function convertJavaOptions(javaOptions) {
    var options = {};
    options.templateName = javaOptions.templateName;
    require('raptor-util').extend(compiler, options);
    return;
}
require('raptor-util').extend(compiler, {
    rhinoCompile: function (src, path, javaOptions) {
        return this.compile(src, path, convertJavaOptions(javaOptions));
    },
    rhinoCompileResource: function (path, javaOptions) {
        return this.compileResource(path, convertJavaOptions(javaOptions));
    },
    rhinoCompileAndLoadResource: function (path, javaOptions) {
        return this.compileAndLoadResource(path, convertJavaOptions(javaOptions));
    }
});