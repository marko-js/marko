import fs from "fs";
import { loadPartialConfig, transformAsync, transformSync } from "@babel/core";
import corePlugin from "./babel-plugin";
import defaultOptions from "./config";
import * as taglib from "./taglib";

export { taglib };

let globalConfig = Object.assign({}, defaultOptions);
export function configure(newConfig = {}) {
  globalConfig = Object.assign({}, defaultOptions, newConfig);
}

export async function compile(src, filename, options) {
  const babelConfig = loadBabelConfig(filename, options);
  const babelResult = await transformAsync(src, babelConfig);
  return buildResult(babelResult);
}

export function compileSync(src, filename, options) {
  const babelConfig = loadBabelConfig(filename, options);
  const babelResult = transformSync(src, babelConfig);
  return buildResult(babelResult);
}

export async function compileFile(filename, options) {
  const src = await fs.promises.readFile(filename, "utf-8");
  return compile(src, filename, options);
}

export function compileFileSync(filename, options) {
  const src = fs.readFileSync(filename, "utf-8");
  return compileSync(src, filename, options);
}

function loadBabelConfig(filename, options) {
  const markoConfig = Object.assign({}, globalConfig);

  if (options) {
    Object.assign(markoConfig, options);
  }

  const requiredPlugins = [[corePlugin, markoConfig]];
  const baseBabelConfig = {
    filename: filename,
    sourceFileName: filename,
    sourceType: "module",
    sourceMaps: markoConfig.sourceMaps
  };

  if (markoConfig.babelConfig) {
    Object.assign(baseBabelConfig, markoConfig.babelConfig);
    baseBabelConfig.plugins = requiredPlugins.concat(
      baseBabelConfig.plugins || []
    );
  }

  return loadPartialConfig(baseBabelConfig).options;
}

function buildResult(babelResult) {
  const {
    map,
    code,
    metadata: { marko: meta }
  } = babelResult;
  return { map, code, meta };
}
