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

    var hotReload = require('./hot-reload');
    hotReload.enable();

    browserRefreshClient
        .enableSpecialReload('*.marko marko.json marko-tag.json')
        .onFileModified(function(path) {
            hotReload.handleFileModified(path);
        });
};
