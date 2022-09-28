"use strict";

const compiler = require(".");
const shouldOptimize = require("./util/should-optimize").default;
const requiredOptions = { modules: "cjs" };
const isDev = !shouldOptimize();

module.exports = register;
register();

function register({ extensions = require.extensions, ...options } = {}) {
  extensions[".marko"] = (module, filename) =>
    module._compile(
      compiler.compileFileSync(
        filename,
        Object.assign(
          {
            meta: true,
            hot: process.env.BROWSER_REFRESH_URL !== undefined,
            // eslint-disable-next-line no-constant-condition
            sourceMaps: isDev ? "inline" : false
          },
          options,
          requiredOptions
        )
      ).code,
      filename
    );
  return extensions;
}
