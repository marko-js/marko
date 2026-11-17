"use strict";

const shouldOptimize = require("./util/should-optimize").default;
const compiler = require(".");
const requiredOptions = { modules: "cjs", reportsChanges: true };
const isDev = !shouldOptimize();

module.exports = register;
register();

function register({ extensions = require.extensions, ...options } = {}) {
  // Node maps stack traces through the inline source map each template carries.
  if (isDev) process.setSourceMapsEnabled(true);

  let revalidated = false;
  extensions[".marko"] = (module, filename) => {
    // No watcher reports changes, so what was read is checked against disk
    // once per tick of requires (as a test rerun makes).
    if (!revalidated) {
      revalidated = true;
      setImmediate(() => (revalidated = false));
      compiler.taglib.revalidate(options.cache, options.fileSystem);
    }
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
