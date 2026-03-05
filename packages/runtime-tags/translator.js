/**
 * This file exists for tools which do not support the
 * package.json `exports` field (eg old versions of jest).
 *
 * This allows `require("marko/translator")` without issues
 * in those environments.
 */
module.exports = require("./dist/translator");
