$_mod.def("/browser-refresh-taglib$1.1.0/refresh-tag", function(require, exports, module, __filename, __dirname) { var process=require("process"); var url = require('/url$0.10.3/url'/*'url'*/);

var scriptUrl = process.env.BROWSER_REFRESH_URL;
if (!scriptUrl) {
    var port = process.env.BROWSER_REFRESH_PORT;
    if (port) {
        scriptUrl = 'http://localhost:' + port + '/browser-refresh.js';
    }
}

var enabled = scriptUrl != null;
var parsedUrl;

if (enabled) {
    parsedUrl = url.parse(scriptUrl);
    delete parsedUrl.host;
}

function getHostName(out) {
    var req = out.global && out.global.req;

    if (!req) {
        // out.stream will be `res` if rendering directly to `res`
        req = out.stream && out.stream.req;
    }

    return req && req.hostname;
}

/**
 * Updates the browser refresh URL to use the host name
 * associated with the incoming request instead of the
 * default "localhost"
 */
function resolveUrl(out) {
    var hostname = getHostName(out);
    if (!hostname) {
        // If we could not determine the hostname then just
        // return the default browser refresh script URL
        return scriptUrl;
    }

    // Mutate the parsed URL to use the incoming hostname
    parsedUrl.hostname = hostname;

    // Convert the parsed URL back into a string URL with the new hostname
    return url.format(parsedUrl);
}

exports.render = function(input, out) {
    if (enabled && input.enabled !== false) {
        out.write('<script src="' + resolveUrl(out) + '"></script>');
    }
};
});