import path from "path";

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

import pkg from "../package.json" with { type: "json" };
import corePlugin from "./babel-plugin";
import defaultConfig from "./config";
import * as taglib from "./taglib";
import appendAgentFixGuide, { agentFixGuide } from "./util/agent-fix-guide";
import { buildCodeFrameError } from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export const version = pkg.version;
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
  try {
    const babelConfig = await loadBabelConfig(filename, markoConfig);
    const babelResult = await transformAsync(src, babelConfig);
    return buildResult(src, filename, markoConfig, babelResult);
  } catch (err) {
    throw appendAgentFixGuide(err, markoConfig.translator);
  }
}

export function compileSync(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  try {
    const babelConfig = loadBabelConfigSync(filename, markoConfig);
    const babelResult = transformSync(src, babelConfig);
    return buildResult(src, filename, markoConfig, babelResult);
  } catch (err) {
    throw appendAgentFixGuide(err, markoConfig.translator);
  }
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

export function getRuntimeVersion(requestedTranslator) {
  return tryLoadTranslator(requestedTranslator)?.version ?? "0.0.0";
}

const outputValues = new Set(["html", "dom", "source", "migrate", "hydrate"]);

function loadMarkoConfig(config) {
  const markoConfig = { ...globalConfig, ...config };

  if (!outputValues.has(markoConfig.output)) {
    throw new Error(
      `Invalid Marko compiler option "output": ${JSON.stringify(markoConfig.output)}. Expected one of: ${[...outputValues].join(", ")}.`,
    );
  }

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
    // Trailing separator so Node's source-map join produces a real path.
    sourceRoot: filename
      ? path.join(path.dirname(filename), path.sep)
      : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    babelrc: loadConfig,
    configFile: loadConfig,
    browserslistConfigFile: loadConfig,
    ...babelConfig,
    filename,
    sourceType: "module",
    // An entry wrapper's own map is meaningless; the translator still keeps
    // extracted `<style>` maps off `markoConfig.sourceMaps` regardless.
    sourceMaps: isEntryOutput(markoConfig) ? false : markoConfig.sourceMaps,
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

function buildResult(src, filename, markoConfig, babelResult) {
  const {
    ast,
    map,
    code,
    metadata: { marko: meta },
  } = babelResult;

  if (markoConfig.errorRecovery) {
    // Recovery returns instead of throwing, so the guide the catch blocks put
    // on an error has to reach the diagnostic an agent reads instead. The
    // compile cache owns these diagnostics, so copy rather than append in place.
    const guide = agentFixGuide(markoConfig.translator);
    const i = guide
      ? meta.diagnostics.findIndex((d) => d.type === DiagnosticType.Error)
      : -1;
    if (i !== -1) {
      const diagnostics = meta.diagnostics.slice();
      diagnostics[i] = {
        ...diagnostics[i],
        label: diagnostics[i].label + guide,
      };
      return { ast, map, code, meta: { ...meta, diagnostics } };
    }
  } else {
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
  return config?.fileSystem || globalConfig.fileSystem;
}

function isTranslatedOutput(output) {
  return output !== "source" && output !== "migrate";
}

function isEntryOutput({ output, entry }) {
  return output === "hydrate" || entry != null;
}
