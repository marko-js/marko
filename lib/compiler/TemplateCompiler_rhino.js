define.extend('raptor/templating/compiler/TemplateCompiler', function(require, target) {
    "use strict";
    
    return {
        _eval: function(compiledSrc, resource) {
            var filePath;
            if (resource) {
                if (typeof resource === 'string') {
                    filePath = resource;
                }
                else if (require('raptor/resources').isResource(resource)) {
                    filePath = resource.getURL();
                }
            }
            
            __rhinoHelpers.runtime.evaluateString(compiledSrc, filePath || null);
        }
    };
});