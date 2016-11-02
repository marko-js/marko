var open = require('open');
var path = require('path');

require('./codegen-create/run');
open(path.join(__dirname, 'index.html'));
