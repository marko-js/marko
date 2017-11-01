const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const pluginPath = require.resolve('../../../../scripts/babel-plugin-marko-debug');

exports.check = function(expect, helpers, done) {
    const input = fs.readFileSync(path.join(__dirname, 'input.js'), 'utf-8');
    const expected = fs.readFileSync(path.join(__dirname, 'expected.js'), 'utf-8').trim();
    const actual = babel.transform(input, { plugins: [pluginPath] }).code;

    expect(expected).to.equal(actual);
    done();
};
