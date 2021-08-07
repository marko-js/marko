import { URL, pathToFileURL, fileURLToPath } from "url";
import { cwd } from "process";
import compiler from "@marko/compiler";

const baseURL = pathToFileURL(`${cwd()}/`).href;
const extensionRegex = /\.marko$/;
const format = { format: "module" };

export function resolve(specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context;
  return extensionRegex.test(specifier)
    ? {
        url: new URL(specifier, parentURL).href
      }
    : defaultResolve(specifier, context, defaultResolve);
}

export function getFormat(url, context, defaultGetFormat) {
  return extensionRegex.test(url)
    ? format
    : defaultGetFormat(url, context, defaultGetFormat);
}

export function transformSource(source, context, defaultTransformSource) {
  const { url } = context;

  return extensionRegex.test(url)
    ? {
        source: compiler.compileSync(source, fileURLToPath(url), {
          sourceMaps: "inline"
        }).code
      }
    : defaultTransformSource(source, context, defaultTransformSource);
}
