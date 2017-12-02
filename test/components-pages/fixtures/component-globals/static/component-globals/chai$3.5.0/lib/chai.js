$_mod.def("/chai$3.5.0/lib/chai", function(require, exports, module, __filename, __dirname) { /*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = []
  , exports = module.exports = {};

/*!
 * Chai version
 */

exports.version = '3.5.0';

/*!
 * Assertion Error
 */

exports.AssertionError = require('/assertion-error$1.0.2/index'/*'assertion-error'*/);

/*!
 * Utils for plugins (not exported)
 */

var util = require('/chai$3.5.0/lib/chai/utils/index'/*'./chai/utils'*/);

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(this, util);
    used.push(fn);
  }

  return this;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = require('/chai$3.5.0/lib/chai/config'/*'./chai/config'*/);
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = require('/chai$3.5.0/lib/chai/assertion'/*'./chai/assertion'*/);
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = require('/chai$3.5.0/lib/chai/core/assertions'/*'./chai/core/assertions'*/);
exports.use(core);

/*!
 * Expect interface
 */

var expect = require('/chai$3.5.0/lib/chai/interface/expect'/*'./chai/interface/expect'*/);
exports.use(expect);

/*!
 * Should interface
 */

var should = require('/chai$3.5.0/lib/chai/interface/should'/*'./chai/interface/should'*/);
exports.use(should);

/*!
 * Assert interface
 */

var assert = require('/chai$3.5.0/lib/chai/interface/assert'/*'./chai/interface/assert'*/);
exports.use(assert);

});