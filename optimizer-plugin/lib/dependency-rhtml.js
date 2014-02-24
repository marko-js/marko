var raptorTemplatesCompiler = require('../../compiler');
var nodePath = require('path');

function reader(path, context, callback) {
    raptorTemplatesCompiler.compileFile(path, callback);
}

module.exports = {
    properties: {
        'path': 'string'
    },

    init: function() {
        if (!this.path) {
            throw new Error('"path" is required for a Raptor Templates dependency');
        }
        
        this.path = this.resolvePath(this.path);
    },
    
    getDependencies: function() {
        /*
        You may be wondering why we return a set of dependencies instead of
        just providing a "read" method. By piggy backing off the "require"
        dependency type we can automatically have our compiled CommonJS module
        inspected for additional dependencies.
         */
        return [
            {
                type: 'require',
                resolvedPath: this.path,
                reader: reader
            }
        ];
    },

    getDir: function() {
        return nodePath.dirname(this.path);
    }
};