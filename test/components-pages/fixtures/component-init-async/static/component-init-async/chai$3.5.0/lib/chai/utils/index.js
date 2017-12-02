$_mod.def("/chai$3.5.0/lib/chai/utils/index", function(require, exports, module, __filename, __dirname) { /*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Main exports
 */

var exports = module.exports = {};

/*!
 * test utility
 */

exports.test = require('/chai$3.5.0/lib/chai/utils/test'/*'./test'*/);

/*!
 * type utility
 */

exports.type = require('/type-detect$1.0.0/index'/*'type-detect'*/);

/*!
 * expectTypes utility
 */
exports.expectTypes = require('/chai$3.5.0/lib/chai/utils/expectTypes'/*'./expectTypes'*/);

/*!
 * message utility
 */

exports.getMessage = require('/chai$3.5.0/lib/chai/utils/getMessage'/*'./getMessage'*/);

/*!
 * actual utility
 */

exports.getActual = require('/chai$3.5.0/lib/chai/utils/getActual'/*'./getActual'*/);

/*!
 * Inspect util
 */

exports.inspect = require('/chai$3.5.0/lib/chai/utils/inspect'/*'./inspect'*/);

/*!
 * Object Display util
 */

exports.objDisplay = require('/chai$3.5.0/lib/chai/utils/objDisplay'/*'./objDisplay'*/);

/*!
 * Flag utility
 */

exports.flag = require('/chai$3.5.0/lib/chai/utils/flag'/*'./flag'*/);

/*!
 * Flag transferring utility
 */

exports.transferFlags = require('/chai$3.5.0/lib/chai/utils/transferFlags'/*'./transferFlags'*/);

/*!
 * Deep equal utility
 */

exports.eql = require('/deep-eql$0.1.3/index'/*'deep-eql'*/);

/*!
 * Deep path value
 */

exports.getPathValue = require('/chai$3.5.0/lib/chai/utils/getPathValue'/*'./getPathValue'*/);

/*!
 * Deep path info
 */

exports.getPathInfo = require('/chai$3.5.0/lib/chai/utils/getPathInfo'/*'./getPathInfo'*/);

/*!
 * Check if a property exists
 */

exports.hasProperty = require('/chai$3.5.0/lib/chai/utils/hasProperty'/*'./hasProperty'*/);

/*!
 * Function name
 */

exports.getName = require('/chai$3.5.0/lib/chai/utils/getName'/*'./getName'*/);

/*!
 * add Property
 */

exports.addProperty = require('/chai$3.5.0/lib/chai/utils/addProperty'/*'./addProperty'*/);

/*!
 * add Method
 */

exports.addMethod = require('/chai$3.5.0/lib/chai/utils/addMethod'/*'./addMethod'*/);

/*!
 * overwrite Property
 */

exports.overwriteProperty = require('/chai$3.5.0/lib/chai/utils/overwriteProperty'/*'./overwriteProperty'*/);

/*!
 * overwrite Method
 */

exports.overwriteMethod = require('/chai$3.5.0/lib/chai/utils/overwriteMethod'/*'./overwriteMethod'*/);

/*!
 * Add a chainable method
 */

exports.addChainableMethod = require('/chai$3.5.0/lib/chai/utils/addChainableMethod'/*'./addChainableMethod'*/);

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = require('/chai$3.5.0/lib/chai/utils/overwriteChainableMethod'/*'./overwriteChainableMethod'*/);

});