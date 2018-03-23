"use strict";

const nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    let template = marko.load(nodePath.join(__dirname, "template.marko"));

    template
        .render({
            name: "John"
        })
        .then(result => {
            snapshot(result.toString());
            done();
        })
        .catch(err => {
            done(err);
        });
};
