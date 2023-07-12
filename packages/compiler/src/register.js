"use strict";

const compiler = require(".");
const shouldOptimize = require("./util/should-optimize").default;
const requiredOptions = { modules: "cjs" };
const isDev = !shouldOptimize();
const sourceMaps = new Map();
let installSourceMaps = () => {
  installSourceMaps = () => {};
  require("source-map-support").install({
    handleUncaughtExceptions: false,
    environment: "node",
    retrieveSourceMap(source) {
      const map = sourceMaps.get(source);
      if (map) {
        return { url: null, map };
      }
      return null;
    }
  });
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
          sourceMaps: isDev ? "both" : false
        },
        options,
        requiredOptions
      )
    );

    if (compiled.map) {
      sourceMaps.set(filename, compiled.map);
      installSourceMaps();
    }

    return module._compile(compiled.code, filename);
  };

  return extensions;
}
