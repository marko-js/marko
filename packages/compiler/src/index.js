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
import getTagsDir from "./util/get-tags-dir";
import throwAggregateError from "./util/merge-errors";
import scanTemplateApi from "./util/scan-template-api";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export { version } from "../package.json";
export { taglib, types };

const hasBabel = !!(
  markoModules.pkg &&
  (markoModules.pkg.dependencies?.["@babel/core"] ||
    markoModules.pkg.devDependencies?.["@babel/core"])
);
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

export function getTemplateApi(filename, requestedTranslator) {
  const translator = tryLoadTranslator(requestedTranslator);

  // The Tags API runtime (marko@6) only ever produces Tags API templates, so
  // we can answer synchronously without touching the file system.
  if (translator.preferAPI === "tags") {
    return "tags";
  }

  // Otherwise this is an interop translator (marko@5) that supports both the
  // Class API and the Tags API. Detect which is used, doing the least amount
  // of work possible and only parsing the template as a last resort.
  const lookup = taglib.buildLookup(path.dirname(filename), translator);

  // 1. A template inside a `tags/` directory uses the Tags API, unless that
  //    directory was explicitly registered as a manual taglib.
  const tagsDir = getTagsDir(filename);
  if (tagsDir && !lookup.manualTagsDirs?.has(tagsDir)) {
    return "tags";
  }

  // 2. Parse the template (parsing is not cached, so this avoids the
  //    transform/translate phases entirely) and scan it for a feature that is
  //    exclusive to one of the two APIs.
  const { ast } = compileFileSync(filename, {
    translator,
    output: "source",
    ast: true,
    code: false,
  });
  const detected = scanTemplateApi(ast.program.body);
  if (detected) {
    return detected;
  }

  // 3. Nothing API-specific was found, so fall back to the taglib's
  //    tag-discovery configuration: when tags are discovered exclusively from
  //    `tags/` directories the project is using the Tags API.
  return lookup.exclusiveTagDiscoveryDirs === "tags" ? "tags" : "class";
}

export function getRuntimeEntryFiles(output, requestedTranslator) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (translator && translator.getRuntimeEntryFiles) {
    return translator.getRuntimeEntryFiles(output, shouldOptimize());
  }

  return [];
}

export function getRuntimeVersion(requestedTranslator) {
  return tryLoadTranslator(requestedTranslator)?.version ?? "0.0.0";
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
  return shouldResolveBabelConfig(config)
    ? (await loadPartialConfigAsync(baseBabelConfig)).options
    : baseBabelConfig;
}

function loadBabelConfigSync(filename, config) {
  const baseBabelConfig = getBaseBabelConfig(filename, config);
  return shouldResolveBabelConfig(config)
    ? loadPartialConfig(baseBabelConfig).options
    : baseBabelConfig;
}

function shouldResolveBabelConfig(config) {
  return !!(
    config.babelrc ||
    config.configFile ||
    config.browserslistConfigFile
  );
}

function getBaseBabelConfig(filename, { babelConfig, ...markoConfig }) {
  const isTranslated = isTranslatedOutput(markoConfig.output);
  const loadConfig = isTranslated && hasBabel;
  const requiredPlugins = [[corePlugin, markoConfig]];
  const baseBabelConfig = {
    filenameRelative: filename
      ? path.relative(markoModules.cwd, filename)
      : undefined,
    sourceRoot: filename ? path.dirname(filename) : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    babelrc: loadConfig,
    configFile: loadConfig,
    browserslistConfigFile: loadConfig,
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
