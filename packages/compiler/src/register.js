"use strict";

const shouldOptimize = require("./util/should-optimize").default;
const compiler = require(".");
const requiredOptions = { modules: "cjs" };
const isDev = !shouldOptimize();
let setSourceMap = (filename, map) => {
  const sourceMaps = new Map([[filename, map]]);
  require("source-map-support").install({
    handleUncaughtExceptions: false,
    environment: "node",
    retrieveSourceMap(source) {
      const map = sourceMaps.get(source);
      if (map) {
        return { url: null, map };
      }
      return null;
    },
  });

  setSourceMap = (filename, map) => {
    sourceMaps.set(filename, map);
  };
};

module.exports = register;
register();

function register({ extensions = require.extensions, ...options } = {}) {
  extensions[".marko"] = (module, filename) => {
    const compiled = compiler.compileFileSync(
      filename,
      Object.assign(
        {
          meta: true,
          hot: process.env.BROWSER_REFRESH_URL !== undefined,
          // eslint-disable-next-line no-constant-condition
          sourceMaps: isDev ? "both" : false,
        },
        options,
        requiredOptions,
      ),
    );

    if (compiled.map) {
      setSourceMap(filename, compiled.map);
    }

    return module._compile(compiled.code, filename);
  };

  return extensions;
}
