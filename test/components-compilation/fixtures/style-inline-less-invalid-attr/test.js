var expect = require('chai').expect;

exports.compilerOptions = {
    meta: true
};

exports.checkError = function (err) {
    expect(err.toString()).to.contain('index.marko:1:0] Unsupported attribute on the component style tag: foo');
};