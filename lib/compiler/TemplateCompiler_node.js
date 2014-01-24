var createError = require('raptor-util').createError;
'use strict';
var nodeRequire = require;
var target = require('./TemplateCompiler');
var vm = require('vm');
require('raptor-util').extend(target, {
    _eval: function (compiledSrc, resource) {
        var filePath;
        if (resource) {
            if (typeof resource === 'string') {
                filePath = resource;
            } else if (require('raptor-resources').isResource(resource)) {
                filePath = resource.isFileResource() ? resource.getFilePath() : resource.getURL();
            }
        }
        try {
            if (filePath && require('raptor-files').exists(filePath)) {
                //This is a hack, but line numbers for SyntaxErrors are getting lost if we don't use require
                delete nodeRequire.cache[filePath];
                nodeRequire(filePath);
            } else {
                vm.runInThisContext(compiledSrc, filePath || null);
            }
        } catch (e) {
            throw createError(new Error('Unable to load compile templated at path "' + filePath + '". Exception: ' + e), e);
        }
    }
});