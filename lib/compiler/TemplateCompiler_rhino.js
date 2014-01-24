'use strict';
var target = require('./TemplateCompiler');
require('raptor-util').extend(target, {
    _eval: function (compiledSrc, resource) {
        var filePath;
        if (resource) {
            if (typeof resource === 'string') {
                filePath = resource;
            } else if (require('raptor-resources').isResource(resource)) {
                filePath = resource.getURL();
            }
        }
        __rhinoHelpers.runtime.evaluateString(compiledSrc, filePath || null);
    }
});