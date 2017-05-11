'use strict';
const { buildDir } = require('./util');

buildDir('test', 'test-dist', {
    babelExclude: {
        'taglibs/async/client-reorder-runtime.min.js': true
    },
    babelOptions: {
        "plugins": [
            [
                "minprops", {
                    "matchPrefix": "___",
                    "prefix": "",
                    "suffix": "_"
                }
            ]
        ]
    }
});
