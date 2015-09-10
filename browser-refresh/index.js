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

var enabled = false;
var browserRefreshClient = require('browser-refresh-client');

exports.enable = function() {
    if (!browserRefreshClient.isBrowserRefreshEnabled()) {
        return;
    }

    if (enabled) {
        return;
    }

    enabled = true;

    // We set an environment variable so that _all_ marko modules
    // installed in the project will have browser refresh enabled.
    process.env.MARKO_BROWSER_REFRESH = 'true';

    var hotReload = require('../hot-reload');
    hotReload.enable();

    browserRefreshClient
        .enableSpecialReload('*.marko marko-taglib.json marko-tag.json')
        .onFileModified(function(path) {
            hotReload.handleFileModified(path);
        });
};