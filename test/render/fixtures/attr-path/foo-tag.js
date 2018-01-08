var fs = require('fs');

module.exports = function (input, out) {
    out.write('File: ' + fs.readFileSync(input.file, { encoding: 'utf8' }));
};