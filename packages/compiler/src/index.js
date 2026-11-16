import path from "path";

import { DiagnosticType } from "@marko/compiler/babel-utils";
import {
  createConfigItem,
  pluginTransformModulesCommonjs,
  transformAsync,
  transformSync,
  types,
} from "@marko/compiler/internal/babel";
import markoModules from "@marko/compiler/modules";

import pkg from "../package.json" with { type: "json" };
import corePlugin from "./babel-plugin";
import { configure, globalConfig, translatorConflict } from "./config";
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
  const markoConfig = loadMarkoConfig(config);
  const { translator } = markoConfig;
  try {
    const babelResult = await transformAsync(
      src,
      getBabelConfig(filename, markoConfig),
    );
    return buildResult(src, filename, markoConfig, translator, babelResult);
  } catch (err) {
    throw appendAgentFixGuide(err, translator);
  }
}

export function compileSync(src, filename, config) {
  const markoConfig = loadMarkoConfig(config);
  const { translator } = markoConfig;
  try {
    const babelResult = transformSync(
      src,
      getBabelConfig(filename, markoConfig),
    );
    return buildResult(src, filename, markoConfig, translator, babelResult);
  } catch (err) {
    // Errors pass through as thrown, so nesting deep enough to overflow Babel's
    // traversal surfaces as a bare `RangeError`; such templates are pathological.
    throw appendAgentFixGuide(err, translator);
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

// Babel sets a plugin up once per config item and caches the descriptors of a
// plugins array by its identity, so compiles share one array per user plugins.
const pluginsByUserPlugins = new WeakMap();
const noUserPlugins = [];
let corePluginItem;
let commonjsPluginItem;

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

function getBabelConfig(filename, markoConfig) {
  loadTranslator(markoConfig);
  markoConfig.optimize ??= shouldOptimize();
  const { babelConfig } = markoConfig;
  const loadConfig = isTranslatedOutput(markoConfig.output) && hasBabel;
  return {
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
    // The core plugin is set up once, without options; each compile hands it
    // its own as options of the parser the plugin overrides.
    parserOpts: { ...babelConfig?.parserOpts, markoOpts: markoConfig },
    plugins: getPlugins(markoConfig),
  };
}

// Replaces the translator as given (which the agent fix guide reads) with the
// translator it names.
function loadTranslator(markoConfig) {
  const translator = (markoConfig.translator = tryLoadTranslator(
    markoConfig.translator,
  ));

  if (!translator && translatorConflict) {
    const [first, second] = translatorConflict;
    throw new Error(
      `@marko/compiler: no translator was detected since package.json depends on both "${first}" and "${second}"; set the "translator" option (eg "${first}/translator").`,
    );
  }

  if (!translator || !translator.translate) {
    throw new Error(
      "@marko/compiler: translator must provide a translate visitor object",
    );
  }

  if (
    markoConfig.output === "hydrate" &&
    typeof markoConfig.resolveVirtualDependency !== "function"
  ) {
    throw new Error(
      `@marko/compiler: the "resolveVirtualDependency" option must be supplied when output is "hydrate".`,
    );
  }
}

function getPlugins({ babelConfig, modules, output }) {
  const userPlugins = babelConfig?.plugins || noUserPlugins;
  const cjs = modules === "cjs" && isTranslatedOutput(output);
  let lists = pluginsByUserPlugins.get(userPlugins);
  if (!lists) pluginsByUserPlugins.set(userPlugins, (lists = []));
  return (lists[+cjs] ||= createPlugins(userPlugins, cjs));
}

function createPlugins(userPlugins, cjs) {
  const plugins = [
    (corePluginItem ||= createConfigItem(corePlugin, { type: "plugin" })),
  ].concat(userPlugins);

  if (cjs) {
    plugins.push(
      (commonjsPluginItem ||= createConfigItem(
        [pluginTransformModulesCommonjs, { loose: true }],
        { type: "plugin" },
      )),
    );
  }

  return plugins;
}

function buildResult(src, filename, markoConfig, translator, babelResult) {
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
    const guide = agentFixGuide(translator);
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
