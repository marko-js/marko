import { URL, pathToFileURL, fileURLToPath } from "url";
import { cwd } from "process";
import compiler from "@marko/compiler";

const baseURL = pathToFileURL(`${cwd()}/`).href;
const extensionRegex = /\.marko$/;

export function resolve(specifier, context, defaultResolve) {
  const { parentURL = baseURL } = context;
  return extensionRegex.test(specifier)
    ? {
        url: new URL(specifier, parentURL).href
      }
    : defaultResolve(specifier, context, defaultResolve);
}

export function load(url, context, defaultLoad) {
  return extensionRegex.test(url)
  ? {
      format: "module",
      source: compiler.compileFileSync(fileURLToPath(url), {
        sourceMaps: "inline"
      }).code
    }
  : defaultLoad(url, context, defaultLoad);
}
