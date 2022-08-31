export * as types from "./babel-types";
import path from "path";
import * as babel from "@babel/core";
import cjsPlugin from "@babel/plugin-transform-modules-commonjs";
import tsSyntaxPlugin from "@babel/plugin-syntax-typescript";
import tsPlugin from "@babel/plugin-transform-typescript";
import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
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

export function getRuntimeEntryFiles(output, requestedTranslator) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (translator && translator.getRuntimeEntryFiles) {
    return translator.getRuntimeEntryFiles(output, shouldOptimize());
  }

  return [];
}

function loadBabelConfig(filename, config) {
  const markoConfig = { ...globalConfig, ...config, babelConfig: undefined };

  if (markoConfig.stripTypes === undefined) {
    markoConfig.stripTypes =
      markoConfig.output !== "source" && markoConfig.output !== "migrate";
  }

  const requiredPlugins = [
    [corePlugin, markoConfig],
    [
      markoConfig.stripTypes ? tsPlugin : tsSyntaxPlugin,
      {
        isTSX: false,
        allowNamespaces: true,
        optimizeConstEnums: true,
        onlyRemoveTypeImports: true,
        disallowAmbiguousJSXLike: false
      }
    ]
  ];
  const baseBabelConfig = {
    filenameRelative: filename
      ? path.relative(process.cwd(), filename)
      : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    ...(config && config.babelConfig),
    filename,
    sourceType: "module",
    sourceMaps: markoConfig.sourceMaps,
    code: markoConfig.code,
    ast: markoConfig.ast
  };

  if (markoConfig.modules === "cjs") {
    requiredPlugins.push([cjsPlugin, { loose: true }]);
  }

  baseBabelConfig.plugins = requiredPlugins.concat(
    baseBabelConfig.plugins || []
  );

  return babel.loadPartialConfig(baseBabelConfig).options;
}

function buildResult(babelResult) {
  const {
    ast,
    map,
    code,
    metadata: { marko: meta }
  } = babelResult;
  return { ast, map, code, meta };
}

let clearingDefaultCache = false;
function scheduleDefaultClear(config) {
  if (
    !clearingDefaultCache &&
    (clearingDefaultCache = isDefaultCache(config))
  ) {
    setImmediate(_clearDefaults);
  }
}

export function _clearDefaults() {
  clearingDefaultCache = false;
  globalConfig.cache.clear();
}

function isDefaultCache(config) {
  return !config.cache || config.cache === globalConfig.cache;
}

function getFs(config) {
  return config.fileSystem || globalConfig.fileSystem;
}
