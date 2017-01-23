require('./stream');
require('./dependencies');

if (!process.env.BUNDLE) {
    if (process.env.MARKO_HOT_RELOAD) {
        require('../hot-reload').enable();
    }

    // If process was launched with browser refresh then automatically
    // enable browser-refresh
    require('../browser-refresh').enable();
}

function fixFlush() {
    try {
        var OutgoingMessage = require('http').OutgoingMessage;
        if (OutgoingMessage.prototype.flush && OutgoingMessage.prototype.flush.toString().indexOf('deprecated') !== -1) {
            // Yes, we are monkey-patching http. This method should never have been added and it was introduced on
            // the iojs fork. It was quickly deprecated and I'm 99% sure no one is actually using it.
            // See:
            // - https://github.com/marko-js/async-writer/issues/3
            // - https://github.com/nodejs/node/issues/2920
            //
            // This method causes problems since marko looks for the flush method and calls it found.
            // The `res.flush()` method is introduced by the [compression](https://www.npmjs.com/package/compression)
            // middleware, but, otherwise, it should typically not exist.
            delete require('http').OutgoingMessage.prototype.flush;
        }
    } catch(e) {}
}

fixFlush();