import path from "path";

import { DiagnosticType } from "@marko/compiler/babel-utils";
import {
  createConfigItem,
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
import { configure, globalConfig } from "./config";
import * as taglib from "./taglib";
import appendAgentFixGuide, { agentFixGuide } from "./util/agent-fix-guide";
import { buildCodeFrameError } from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export const version = pkg.version;
export { configure, globalConfig, taglib, types };

const hasBabel = !!(
  markoModules.pkg &&
  (markoModules.pkg.dependencies?.["@babel/core"] ||
    markoModules.pkg.devDependencies?.["@babel/core"])
);

export async function compile(src, filename, config) {
  const recent = loadMarkoConfig(config);
  try {
    const babelConfig = await loadBabelConfig(filename, recent);
    const babelResult = await transformAsync(src, babelConfig);
    return buildResult(src, filename, recent.config, babelResult);
  } catch (err) {
    throw appendAgentFixGuide(err, recent.config.translator);
  }
}

export function compileSync(src, filename, config) {
  const recent = loadMarkoConfig(config);
  try {
    const babelConfig = loadBabelConfigSync(filename, recent);
    const babelResult = transformSync(src, babelConfig);
    return buildResult(src, filename, recent.config, babelResult);
  } catch (err) {
    // Errors pass through as thrown, so nesting deep enough to overflow Babel's
    // traversal surfaces as a bare `RangeError`; such templates are pathological.
    throw appendAgentFixGuide(err, recent.config.translator);
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
    return translator.getRuntimeEntryFiles(
      output,
      globalConfig.optimize ?? shouldOptimize(),
    );
  }

  return [];
}

export function getRuntimeVersion(requestedTranslator) {
  return tryLoadTranslator(requestedTranslator)?.version ?? "0.0.0";
}

const outputValues = new Set(["html", "dom", "source", "migrate", "hydrate"]);

// Compiles with equal option values share a record, and with it one core
// plugin item, so Babel sets the plugin up once. The 8 most recent are kept.
const recentConfigs = new WeakMap();
let commonjsPluginItem;

function loadMarkoConfig(config) {
  const given = loadMarkoConfigValues(config);
  let recents = recentConfigs.get(given.cache);
  if (!recents) recentConfigs.set(given.cache, (recents = new Set()));
  let recent;
  for (const candidate of recents) {
    if (sameValues(candidate.given, given)) {
      recent = candidate;
      break;
    }
  }
  if (recent) {
    recents.delete(recent);
  } else {
    recent = { given, config: { ...given }, corePluginItem: undefined };
  }
  // A Set iterates in insertion order: the least recently used comes first.
  recents.add(recent);
  if (recents.size > 8) recents.delete(recents.values().next().value);
  return recent;
}

function sameValues(a, b) {
  let count = 0;
  for (const key in a) {
    if (a[key] !== b[key]) return false;
    count++;
  }
  for (const _ in b) count--;
  return count === 0;
}

function loadMarkoConfigValues(config) {
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

async function loadBabelConfig(filename, recent) {
  const baseBabelConfig = getBaseBabelConfig(filename, recent);
  return shouldResolveBabelConfig(recent.config)
    ? (await loadPartialConfigAsync(baseBabelConfig)).options
    : baseBabelConfig;
}

function loadBabelConfigSync(filename, recent) {
  const baseBabelConfig = getBaseBabelConfig(filename, recent);
  return shouldResolveBabelConfig(recent.config)
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

function getBaseBabelConfig(filename, recent) {
  const { babelConfig, ...markoConfig } = recent.config;
  const isTranslated = isTranslatedOutput(markoConfig.output);
  const loadConfig = isTranslated && hasBabel;
  recent.corePluginItem ||= createConfigItem([corePlugin, markoConfig], {
    type: "plugin",
  });
  const requiredPlugins = [recent.corePluginItem];
  const baseBabelConfig = {
    filenameRelative: filename
      ? path.relative(markoModules.cwd, filename)
      : undefined,
    sourceRoot: filename ? path.dirname(filename) + path.sep : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    babelrc: loadConfig,
    configFile: loadConfig,
    browserslistConfigFile: loadConfig,
    // A template never carries an input map, so Babel must not take one from a
    // `sourceMappingURL` comment inside it.
    inputSourceMap: false,
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
      baseBabelConfig.plugins.push(
        (commonjsPluginItem ||= createConfigItem(
          [pluginTransformModulesCommonjs, { loose: true }],
          { type: "plugin" },
        )),
      );
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
