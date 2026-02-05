import { DiagnosticType } from "@marko/compiler/babel-utils";
import {
  loadPartialConfig,
  loadPartialConfigAsync,
  pluginTransformModulesCommonjs,
  transformAsync,
  transformSync,
  types,
} from "@marko/compiler/internal/babel";
import markoModules from "@marko/compiler/modules";
import path from "path";

import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
import { buildCodeFrameError } from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export { taglib, types };

export let globalConfig = { ...defaultConfig };
export function configure(newConfig) {
  globalConfig = { ...defaultConfig, ...newConfig };
}

export async function compile(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = await loadBabelConfig(filename, markoConfig);
  const babelResult = await transformAsync(src, babelConfig);
  return buildResult(src, filename, markoConfig.errorRecovery, babelResult);
}

export function compileSync(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const babelConfig = loadBabelConfigSync(filename, markoConfig);
  const babelResult = transformSync(src, babelConfig);
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
    ? (await loadPartialConfigAsync(baseBabelConfig)).options
    : baseBabelConfig;
}

function loadBabelConfigSync(filename, config) {
  const baseBabelConfig = getBaseBabelConfig(filename, config);
  return isTranslatedOutput(config.output)
    ? loadPartialConfig(baseBabelConfig).options
    : baseBabelConfig;
}

function getBaseBabelConfig(filename, { babelConfig, ...markoConfig }) {
  const isTranslated = isTranslatedOutput(markoConfig.output);
  const requiredPlugins = [[corePlugin, markoConfig]];
  const baseBabelConfig = {
    filenameRelative: filename
      ? path.relative(markoModules.cwd, filename)
      : undefined,
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
      baseBabelConfig.plugins.push([
        pluginTransformModulesCommonjs,
        { loose: true },
      ]);
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
