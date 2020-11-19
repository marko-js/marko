import * as babel from "@babel/core";
import corePlugin from "./babel-plugin";
import defaultOptions from "./config";
import * as taglib from "./taglib";

export { taglib };

let globalConfig = { ...defaultOptions };
export function configure(newConfig) {
  globalConfig = { ...defaultOptions, ...newConfig };
}

export async function compile(src, filename, options) {
  const babelConfig = loadBabelConfig(filename, options);
  const babelResult = await babel.transformAsync(src, babelConfig);
  scheduleDefaultClear(options);
  return buildResult(babelResult);
}

export function compileSync(src, filename, options) {
  const babelConfig = loadBabelConfig(filename, options);
  const babelResult = babel.transformSync(src, babelConfig);
  scheduleDefaultClear(options);
  return buildResult(babelResult);
}

export async function compileFile(filename, options) {
  return new Promise((resolve, reject) => {
    getFs(options).readFile(filename, "utf-8", (err, src) => {
      if (err) {
        return reject(err);
      }

      return resolve(compile(src, filename, options));
    });
  });
}

export function compileFileSync(filename, options) {
  const src = getFs(options).readFileSync(filename, "utf-8");
  return compileSync(src, filename, options);
}

function loadBabelConfig(filename, options) {
  const markoConfig = { ...globalConfig, ...options, babelConfig: undefined };
  const requiredPlugins = [[corePlugin, markoConfig]];
  const baseBabelConfig = {
    filename: filename,
    sourceFileName: filename,
    sourceType: "module",
    sourceMaps: markoConfig.sourceMaps,
    ...(options && options.babelConfig)
  };

  if (markoConfig.modules === "cjs") {
    requiredPlugins.push([
      require.resolve("@babel/plugin-transform-modules-commonjs"),
      { loose: true }
    ]);
  }

  baseBabelConfig.plugins = requiredPlugins.concat(
    baseBabelConfig.plugins || []
  );

  return babel.loadPartialConfig(baseBabelConfig).options;
}

function buildResult(babelResult) {
  const {
    map,
    code,
    metadata: { marko: meta }
  } = babelResult;
  return { map, code, meta };
}

let scheduledClear = false;
let clearingDefaultFs = false;
let clearingDefaultCache = false;
function scheduleDefaultClear(options) {
  if (!scheduledClear) {
    clearingDefaultCache = isDefaultCache(options);
    clearingDefaultFs = isDefaultFS(options);

    if (clearingDefaultCache || clearingDefaultFs) {
      scheduledClear = true;
      setImmediate(clearDefaults);
    }
  }
}

function clearDefaults() {
  if (clearingDefaultCache) {
    clearingDefaultCache = false;
    globalConfig.cache.clear();
  }

  if (clearingDefaultFs) {
    clearingDefaultFs = false;
    globalConfig.fileSystem.purge();
  }
  scheduledClear = false;
}

function isDefaultCache(options) {
  return !options.cache || options.cache === globalConfig.cache;
}

function isDefaultFS(options) {
  return getFs(options) === globalConfig.fileSystem;
}

function getFs(options) {
  return options.fileSystem || globalConfig.fileSystem;
}
