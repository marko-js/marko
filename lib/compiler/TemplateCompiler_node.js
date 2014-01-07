var nodeRequire = require;

define.extend('raptor/templating/compiler/TemplateCompiler', function(require, target) {
    "use strict";
    
    var vm = require('vm'),
        raptor = require('raptor');

    return {
        _eval: function(compiledSrc, resource) {
            
            var filePath;
            if (resource) {
                if (typeof resource === 'string') {
                    filePath = resource;
                }
                else if (require('raptor/resources').isResource(resource)) {
                    filePath = resource.isFileResource() ? resource.getFilePath() : resource.getURL();
                }
            }
            
            try
            {
                if (filePath && require('raptor/files').exists(filePath)) { //This is a hack, but line numbers for SyntaxErrors are getting lost if we don't use require
                    delete nodeRequire.cache[filePath];
                    nodeRequire(filePath);
                }
                else {
                    vm.runInThisContext(compiledSrc, filePath || null);    
                }
                
            }
            catch(e) {
                throw raptor.createError(new Error('Unable to load compile templated at path "' + filePath + '". Exception: ' + e), e);
            }
        }
    };
});