"use strict";

const shouldOptimize = require("./util/should-optimize").default;
const compiler = require(".");
const requiredOptions = { modules: "cjs" };
const isDev = !shouldOptimize();

module.exports = register;
register();

function register({ extensions = require.extensions, ...options } = {}) {
  // Node maps stack traces through the inline source map each template carries.
  if (isDev) process.setSourceMapsEnabled(true);

  extensions[".marko"] = (module, filename) => {
    const compiled = compiler.compileFileSync(
      filename,
      Object.assign(
        {
          meta: true,
          hot: process.env.BROWSER_REFRESH_URL !== undefined,
          sourceMaps: isDev ? "inline" : false,
        },
        options,
        requiredOptions,
      ),
    );

    return module._compile(compiled.code, filename);
  };

  return extensions;
}
