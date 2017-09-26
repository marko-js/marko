'use strict';

const nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    let template = marko.load(nodePath.join(__dirname, 'template.marko'));

    template.render({
        name: 'John'
    }).then((result) => {
        helpers.compare(result.toString());
        done();
    }).catch((err) => {
        done(err);
    });
};
