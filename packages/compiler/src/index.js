export * as types from "./babel-types";
import path from "path";
import color from "kleur";
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
import { buildCodeFrame, buildCodeFrameError } from "./util/build-code-frame";
export { taglib };

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
    markoConfig.stripTypes =
      markoConfig.output !== "source" && markoConfig.output !== "migrate";
  }

  return markoConfig;
}

function loadBabelConfig(filename, { babelConfig, ...markoConfig }) {
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
    filenameRelative: filename
      ? path.relative(process.cwd(), filename)
      : undefined,
    sourceFileName: filename ? path.basename(filename) : undefined,
    ...babelConfig,
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
        errors.push(diag);
      }
    }

    switch (errors.length) {
      case 0:
        break;
      case 1: {
        const [diag] = errors;
        throw buildCodeFrameError(filename, src, diag.loc, diag.label);
      }
      default: {
        let err;
        const message = `${color.red("AggregationError:")}\n${errors
          .map(diag => buildCodeFrame(filename, src, diag.loc, diag.label))
          .join("\n\n")
          .replace(/^(?!\s*$)/gm, "\t")}\n`;

        if (typeof AggregateError === "function") {
          err = new AggregateError(errors, message);
        } else {
          err = new Error(message);
          err.name = "AggregateError";
          err.errors = errors;
        }

        // Remove the stack trace from the error since it is not useful.
        err.stack = "";
        throw err;
      }
    }
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
