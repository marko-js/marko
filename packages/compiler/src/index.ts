import type nodeFS from "fs";
import path from "path";

import type { ConfigItem, PluginItem } from "@babel/core";
import type { CompileResult, Config, MarkoMeta } from "@marko/compiler";
import { DiagnosticType } from "@marko/compiler/babel-utils";
import {
  createConfigItem,
  transformAsync,
  transformSync,
  types,
} from "@marko/compiler/internal/babel";
import markoModules from "@marko/compiler/modules";

import pkg from "../package.json" with { type: "json" };
import corePlugin from "./babel-plugin";
import {
  configure,
  type Defaults,
  globalConfig,
  translatorConflict,
} from "./config";
import * as taglib from "./taglib";
import appendAgentFixGuide, { agentFixGuide } from "./util/agent-fix-guide";
import {
  buildCodeFrameError,
  type CompileError,
} from "./util/build-code-frame";
import throwAggregateError from "./util/merge-errors";
import shouldOptimize from "./util/should-optimize";
import tryLoadTranslator from "./util/try-load-translator";
export const version = pkg.version;
export { configure, globalConfig, taglib, types };

/** Babel's options, as its transforms take them. */
type TransformOptions = NonNullable<Parameters<typeof transformSync>[1]>;

/** Babel's options for a compile, which hand the core plugin its config. */
type BabelConfig = TransformOptions & {
  parserOpts: { markoOpts: Defaults };
};

/** Babel's result for a template, in Marko's types: Marko's plugin keeps its metadata. */
interface BabelResult {
  ast: CompileResult["ast"];
  map: CompileResult["map"];
  code: string | null;
  metadata: { marko: MarkoMeta };
}

const hasBabel = !!(
  markoModules.pkg &&
  ((markoModules.pkg.dependencies as Record<string, string> | undefined)?.[
    "@babel/core"
  ] ||
    (markoModules.pkg.devDependencies as Record<string, string> | undefined)?.[
      "@babel/core"
    ])
);

export async function compile(src: string, filename: string, config?: Config) {
  const markoConfig = loadDefaults(config);
  const { translator } = markoConfig;
  try {
    const babelResult = (await transformAsync(
      src,
      getBabelConfig(filename, markoConfig),
    )) as BabelResult;
    return buildResult(src, filename, markoConfig, translator, babelResult);
  } catch (err) {
    throw appendAgentFixGuide(err, translator);
  }
}

export function compileSync(src: string, filename: string, config?: Config) {
  const markoConfig = loadDefaults(config);
  const { translator } = markoConfig;
  try {
    const babelResult = transformSync(
      src,
      getBabelConfig(filename, markoConfig),
    ) as BabelResult;
    return buildResult(src, filename, markoConfig, translator, babelResult);
  } catch (err) {
    // Errors pass through as thrown, so nesting deep enough to overflow Babel's
    // traversal surfaces as a bare `RangeError`; such templates are pathological.
    throw appendAgentFixGuide(err, translator);
  }
}

export async function compileFile(
  filename: string,
  config?: Config,
): ReturnType<typeof compile> {
  return new Promise((resolve, reject) => {
    // The configured file system may be a sync one; `readFile` is Node's.
    (getFs(config) as typeof nodeFS).readFile(filename, "utf-8", (err, src) => {
      if (err) {
        return reject(err);
      }

      return resolve(compile(src, filename, config));
    });
  });
}

export function compileFileSync(filename: string, config?: Config) {
  const src = getFs(config).readFileSync(filename, "utf-8");
  return compileSync(src, filename, config);
}

export function getRuntimeEntryFiles(
  output: string,
  requestedTranslator?: unknown,
) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (translator && translator.getRuntimeEntryFiles) {
    return translator.getRuntimeEntryFiles(
      output,
      globalConfig.optimize ?? shouldOptimize(),
    );
  }

  return [];
}

export function getRuntimeVersion(requestedTranslator?: unknown) {
  return tryLoadTranslator(requestedTranslator)?.version ?? "0.0.0";
}

const outputValues = new Set(["html", "dom", "source", "migrate", "hydrate"]);

// Babel sets a plugin up once per config item and caches the descriptors of a
// plugins array by its identity, so compiles share one array per user plugins.
const pluginsByUserPlugins = new WeakMap<PluginItem[], PluginItem[]>();
const noUserPlugins: PluginItem[] = [];
let corePluginItem: ConfigItem | undefined;

function loadDefaults(config?: Config): Defaults {
  const markoConfig: Defaults = { ...globalConfig, ...config };

  if (!outputValues.has(markoConfig.output)) {
    throw new Error(
      `Invalid Marko compiler option "output": ${JSON.stringify(markoConfig.output)}. Expected one of: ${[...outputValues].join(", ")}.`,
    );
  }

  if (markoConfig.stripTypes === undefined) {
    markoConfig.stripTypes = isTranslatedOutput(markoConfig.output);
  } else if (
    !markoConfig.stripTypes &&
    markoConfig.modules === "cjs" &&
    isTranslatedOutput(markoConfig.output)
  ) {
    throw new Error(
      `Invalid Marko compiler options: CommonJS output ("modules": "cjs") can't keep TypeScript, so "stripTypes" can't be false.`,
    );
  }

  return markoConfig;
}

function getBabelConfig(filename: string, markoConfig: Defaults): BabelConfig {
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
    ...(babelConfig as TransformOptions | undefined),
    filename,
    sourceType: "module",
    // An entry wrapper's own map is meaningless; the translator still keeps
    // extracted `<style>` maps off `markoConfig.sourceMaps` regardless.
    sourceMaps: isEntryOutput(markoConfig) ? false : markoConfig.sourceMaps,
    code: markoConfig.code,
    ast: markoConfig.ast,
    // The core plugin is set up once, without options; each compile hands it
    // its own as options of the parser the plugin overrides.
    parserOpts: {
      ...(babelConfig?.parserOpts as object | undefined),
      markoOpts: markoConfig,
    },
    plugins: getPlugins(markoConfig),
  };
}

// Replaces the translator as given (which the agent fix guide reads) with the
// translator it names.
function loadTranslator(markoConfig: Defaults) {
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

function getPlugins({ babelConfig }: Defaults) {
  const userPlugins =
    (babelConfig?.plugins as PluginItem[] | undefined) || noUserPlugins;
  let plugins = pluginsByUserPlugins.get(userPlugins);
  if (!plugins) {
    pluginsByUserPlugins.set(
      userPlugins,
      (plugins = [
        (corePluginItem ||= createConfigItem(corePlugin, { type: "plugin" })),
        ...userPlugins,
      ]),
    );
  }
  return plugins;
}

function buildResult(
  src: string,
  filename: string,
  markoConfig: Defaults,
  translator: unknown,
  babelResult: BabelResult,
): Omit<CompileResult, "code"> & { code: string | null } {
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
    const errors: CompileError[] = [];

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

function getFs(config?: Config) {
  return config?.fileSystem || globalConfig.fileSystem;
}

function isTranslatedOutput(output: string) {
  return output !== "source" && output !== "migrate";
}

function isEntryOutput({ output, entry }: Defaults) {
  return output === "hydrate" || entry != null;
}
