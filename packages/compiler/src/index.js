export * as types from "./babel-types";
import * as babel from "@babel/core";
import tsSyntaxPlugin from "@babel/plugin-syntax-typescript";
import cjsPlugin from "@babel/plugin-transform-modules-commonjs";
import tsTransformPlugin from "@babel/plugin-transform-typescript";
import { DiagnosticType } from "@marko/babel-utils";
import path from "path";

import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
import { buildCodeFrameError } from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export { taglib };

const CWD = process.cwd();

let globalConfig = { ...defaultConfig };
export function configure(newConfig) {
  globalConfig = { ...defaultConfig, ...newConfig };
}

export async function compile(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = await loadBabelConfig(filename, markoConfig);
  const babelResult = await babel.transformAsync(src, babelConfig);
  return buildResult(src, filename, markoConfig.errorRecovery, babelResult);
}

export function compileSync(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = loadBabelConfigSync(filename, markoConfig);
  const babelResult = babel.transformSync(src, babelConfig);
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

async function loadBabelConfig(filename, config) {
  const baseBabelConfig = getBaseBabelConfig(filename, config);
  return isTranslatedOutput(config.output)
    ? (await babel.loadPartialConfigAsync(baseBabelConfig)).options
    : baseBabelConfig;
}

function loadBabelConfigSync(filename, config) {
  const baseBabelConfig = getBaseBabelConfig(filename, config);
  return isTranslatedOutput(config.output)
    ? babel.loadPartialConfigSync(baseBabelConfig).options
    : baseBabelConfig;
}

function getBaseBabelConfig(filename, { babelConfig, ...markoConfig }) {
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
        disallowAmbiguousJSXLike: false,
      },
    ],
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
        : requiredPlugins,
  };

  if (isTranslated) {
    if (markoConfig.modules === "cjs") {
      baseBabelConfig.plugins.push([cjsPlugin, { loose: true }]);
    }
  }

  return baseBabelConfig;
}

function buildResult(src, filename, errorRecovery, babelResult) {
  const {
    ast,
    map,
    code,
    metadata: { marko: meta },
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

export function _clearDefaults() {
  globalConfig.cache.clear();
}

function getFs(config) {
  return config.fileSystem || globalConfig.fileSystem;
}

function isTranslatedOutput(output) {
  return output !== "source" && output !== "migrate";
}
