require('./patch-module');
require('complain').log = function () {};
require('../../node-require').install({ compilerOptions: { writeToDisk: false } });
