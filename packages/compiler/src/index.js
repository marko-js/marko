export * as types from "./babel-types";
import path from "path";
import * as babel from "@babel/core";
import cjsPlugin from "@babel/plugin-transform-modules-commonjs";
import tsSyntaxPlugin from "@babel/plugin-syntax-typescript";
import tsTransformPlugin from "@babel/plugin-transform-typescript";
import { DiagnosticType } from "@marko/babel-utils";
import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
import { buildCodeFrameError } from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
export { taglib };

const CWD = process.cwd();

let globalConfig = { ...defaultConfig };
export function configure(newConfig) {
  globalConfig = { ...defaultConfig, ...newConfig };
}

export async function compile(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = loadBabelConfig(filename, markoConfig);
  const babelResult = await babel.transformAsync(src, babelConfig);
  scheduleDefaultClear(markoConfig);
  return buildResult(src, filename, markoConfig.errorRecovery, babelResult);
}

export function compileSync(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = loadBabelConfig(filename, markoConfig);
  const babelResult = babel.transformSync(src, babelConfig);
  scheduleDefaultClear(markoConfig);
  return buildResult(src, filename, markoConfig.errorRecovery, babelResult);
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

function loadMarkoConfig(config) {
  const markoConfig = { ...globalConfig, ...config };

  if (markoConfig.stripTypes === undefined) {
    markoConfig.stripTypes = isTranslatedOutput(markoConfig.output);
  }

  return markoConfig;
}

function loadBabelConfig(filename, { babelConfig, ...markoConfig }) {
  const isTranslated = isTranslatedOutput(markoConfig.output);
  const requiredPlugins = [
    [corePlugin, markoConfig],
    [
      markoConfig.stripTypes ? tsTransformPlugin : tsSyntaxPlugin,
      {
        isTSX: false,
        allowNamespaces: true,
        allowDeclareFields: true,
        optimizeConstEnums: true,
        onlyRemoveTypeImports: true,
        disallowAmbiguousJSXLike: false
      }
    ]
  ];
  const baseBabelConfig = {
    filenameRelative: filename ? path.relative(CWD, filename) : undefined,
    sourceRoot: filename ? path.dirname(filename) : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    configFile: isTranslated,
    babelrc: isTranslated,
    ...babelConfig,
    filename,
    sourceType: "module",
    sourceMaps: markoConfig.sourceMaps,
    code: markoConfig.code,
    ast: markoConfig.ast,
    plugins:
      babelConfig && babelConfig.plugins
        ? requiredPlugins.concat(babelConfig.plugins)
        : requiredPlugins
  };

  if (isTranslated) {
    if (markoConfig.modules === "cjs") {
      baseBabelConfig.plugins.push([cjsPlugin, { loose: true }]);
    }

    return babel.loadPartialConfig(baseBabelConfig).options;
  }

  return baseBabelConfig;
}

function buildResult(src, filename, errorRecovery, babelResult) {
  const {
    ast,
    map,
    code,
    metadata: { marko: meta }
  } = babelResult;

  if (!errorRecovery) {
    const errors = [];

    for (const diag of meta.diagnostics) {
      if (diag.type === DiagnosticType.Error) {
        errors.push(buildCodeFrameError(filename, src, diag.loc, diag.label));
      }
    }

    throwAggregateError(errors);
  }

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

function isTranslatedOutput(output) {
  return output !== "source" && output !== "migrate";
}
