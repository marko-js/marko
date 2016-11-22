'use strict';

const nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    let template = marko.load(nodePath.join(__dirname, 'template.marko'));

    template.render({
        name: 'John'
    }).then((result) => {
        expect(result.toString()).to.equal('Hello John!');
        done();
    }).catch((err) => {
        done(err);
    });
};