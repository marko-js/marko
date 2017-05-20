require('./');

exports.c = require('./defineComponent'); // Referenced by compiled templates
exports.r = require('./renderer'); // Referenced by compiled templates
exports.rc = require('./registry').___register;  // Referenced by compiled templates
