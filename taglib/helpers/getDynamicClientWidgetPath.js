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


var raptorModulesUtil = require('raptor-modules/util');

var dynamicClientWidgetPathCache = {};

module.exports = function getDynamicClientWidgetPath(targetModuleFile) {
    if (!targetModuleFile) {
        return null;
    }

    var clientPath = dynamicClientWidgetPathCache[targetModuleFile];
    if (!clientPath) {
        var resolved = raptorModulesUtil.getPathInfo(targetModuleFile);
        clientPath = dynamicClientWidgetPathCache[targetModuleFile] = resolved.logicalPath;
    }
    return clientPath;
};