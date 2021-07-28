"use strict";

const compiler = require(".");
const requiredOptions = { modules: "cjs" };

module.exports = register;
register();

function register({ extensions = require.extensions, ...options } = {}) {
  extensions[".marko"] = (module, filename) =>
    module._compile(
      compiler.compileFileSync(
        filename,
        Object.assign(
          // eslint-disable-next-line no-constant-condition
          { sourceMaps: "MARKO_DEBUG" ? "inline" : false },
          options,
          requiredOptions
        )
      ).code,
      filename
    );
  return extensions;
}
