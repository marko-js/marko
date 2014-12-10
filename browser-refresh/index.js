var enabled = false;

exports.enable = function() {
    if (enabled) {
        return;
    }

    enabled = true;

    if (process.env.BROWSER_REFRESH_URL) {
        var modifiedEvent = 'marko.fileModified';

        process.send({
            type: 'browser-refresh.specialReload',
            pattern: '*.marko marko-taglib.json marko-tag.json',
            modifiedEvent: modifiedEvent
        });

        var hotReload = require('../hot-reload');
        hotReload.enable();

        process.on('message', function(m) {
            if (typeof m === 'object' && m.type === modifiedEvent) {
                hotReload.handleFileModified(m.path);
            }
        });
    }
};