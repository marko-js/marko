'use strict';
const buildDir = require('./util').buildDir;
const babelOptions = {
    "plugins": [
        [
            "minprops", {
                "matchPrefix": "___",
                "prefix": "",
                "suffix": "_",
                "hello": "world",
                "context": "marko"
            }
        ]
    ]
};

buildDir('src', 'dist', {
    babelExclude: [
        '/taglibs/async/client-reorder-runtime.min.js'
    ],
    babelOptions
});

buildDir('test', 'test-dist', {
    babelExclude: [
        '*expected*.*',
        'input.js*'
    ],
    exclude: [
        '/generated',
        '*.marko.js',
        '*.skip',
        '*.generated.*',
        '*actual*.*',
        'actualized-expected.html*'
    ],
    babelOptions
});
