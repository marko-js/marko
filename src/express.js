require('./');

var assign = require('object-assign');
var express = module.parent.require('express');
patchResponse(express.response);
delete require.cache[__filename];

module.exports = function markoAppMiddleware() {
    var sacrificialApp = express();

    sacrificialApp.once('mount', function onmount(parent) {
        // Patch the response
        patchResponse(parent.response);

        // Remove sacrificial express app
        parent._router.stack.pop();
    });

    return sacrificialApp;
};

function patchResponse(response) {
    response.marko = response.marko || function(template, data) {
        if(typeof template === 'string') {
            throw new Error(
                'res.marko does not take a template name or path like res.render.  ' +
                'Instead you should use `require(\'./path/to/template.marko\')` ' +
                'and pass the loaded template to this function.'
            );
        }

        var res = this;
        var req = res.req;
        var app = res.app;
        var $global = assign({ app, req, res }, app.locals, res.locals);

        if (data) {
            data = assign(data, {
                $global: assign($global, data.$global)
            });
        } else {
            data = { $global };
        }

        res.set({ 'content-type': 'text/html; charset=utf-8' });

        return template.render(data, res);
    };
}
