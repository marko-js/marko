export * as types from "./babel-types";
import * as babel from "@babel/core";
import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
export { taglib };

let globalConfig = { ...defaultConfig };
export function configure(newConfig) {
  globalConfig = { ...defaultConfig, ...newConfig };
}

export async function compile(src, filename, config) {
  const babelConfig = loadBabelConfig(filename, config);
  const babelResult = await babel.transformAsync(src, babelConfig);
  scheduleDefaultClear(config);
  return buildResult(babelResult);
}

export function compileSync(src, filename, config) {
  const babelConfig = loadBabelConfig(filename, config);
  const babelResult = babel.transformSync(src, babelConfig);
  scheduleDefaultClear(config);
  return buildResult(babelResult);
}

export async function compileFile(filename, config) {
  return new Promise((resolve, reject) => {
    getFs(config).readFile(filename, "utf-8", (err, src) => {
      if (err) {
        return reject(err);
      }

      return resolve(compile(src, filename, config));
    });
  });
}

export function compileFileSync(filename, config) {
  const src = getFs(config).readFileSync(filename, "utf-8");
  return compileSync(src, filename, config);
}

function loadBabelConfig(filename, config) {
  const markoConfig = { ...globalConfig, ...config, babelConfig: undefined };
  const requiredPlugins = [[corePlugin, markoConfig]];
  const baseBabelConfig = {
    filename: filename,
    sourceFileName: filename,
    sourceType: "module",
    sourceMaps: markoConfig.sourceMaps,
    ...(config && config.babelConfig)
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
function scheduleDefaultClear(config) {
  if (!scheduledClear) {
    clearingDefaultCache = isDefaultCache(config);
    clearingDefaultFs = isDefaultFS(config);

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

function isDefaultCache(config) {
  return !config.cache || config.cache === globalConfig.cache;
}

function isDefaultFS(config) {
  return getFs(config) === globalConfig.fileSystem;
}

function getFs(config) {
  return config.fileSystem || globalConfig.fileSystem;
}
