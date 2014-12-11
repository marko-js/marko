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

    var hotReload = require('../hot-reload');
    hotReload.enable();

    browserRefreshClient
        .enableSpecialReload('*.marko marko-taglib.json marko-tag.json')
        .onFileModified(function(path) {
            hotReload.handleFileModified(path);
        });
};