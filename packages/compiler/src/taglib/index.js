import path from "path";
import markoModules from "../../modules";
import tryLoadTranslator from "../util/try-load-translator";
import taglibConfig from "./config";
import finder from "./finder";
import loader from "./loader";
import Lookup from "./lookup";

export const excludeDir = finder.excludeDir;
export const excludePackage = finder.excludePackage;

import markoHTMLTaglib from "./marko-html.json";
import markoMathTaglib from "./marko-math.json";
import markoSVGTaglib from "./marko-svg.json";

const registeredTaglibs = [];
const loadedTranslatorsTaglibs = new Map();
let lookupCache = Object.create(null);

register("marko/html", markoHTMLTaglib);
register("marko/svg", markoSVGTaglib);
register("marko/math", markoMathTaglib);

export function buildLookup(dirname, requestedTranslator, onError) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (!translator || !Array.isArray(translator.taglibs)) {
    throw new Error(
      "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)",
    );
  }

  let taglibsForDir = loadedTranslatorsTaglibs.get(translator);

  if (!taglibsForDir) {
    loadedTranslatorsTaglibs.set(
      translator,
      (taglibsForDir = registeredTaglibs.concat(
        translator.taglibs.map(([id, props]) => loadTaglib(id, props)),
      )),
    );
  }

  if (onError) {
    const prevOnError = taglibConfig.onError;
    taglibConfig.onError = onError;
    try {
      taglibsForDir = finder.find(dirname, taglibsForDir);
    } catch (err) {
      taglibConfig.onError(err);
    } finally {
      taglibConfig.onError = prevOnError;
    }
  } else {
    taglibsForDir = finder.find(dirname, taglibsForDir);
  }

  const cacheKey = taglibsForDir
    .map((it) => it.id)
    .sort()
    .join();
  let lookup = lookupCache[cacheKey];

  if (!lookup) {
    lookup = lookupCache[cacheKey] = new Lookup();
    for (let i = taglibsForDir.length; i--; ) {
      const taglib = taglibsForDir[i];
      lookup.addTaglib(taglib);
      if (taglib.imports) {
        for (const importedTaglib of taglib.imports) {
          if (!lookup.hasTaglib(importedTaglib)) {
            lookup.addTaglib(importedTaglib);
          }
        }
      }
    }
  }

  return lookup;
}

export function register(id, props) {
  if (typeof props === "undefined") {
    switch (id[0]) {
      case ".":
      case "/":
      case "\\":
        break;
      default:
        if (!id.endsWith(".json")) {
          id = path.join(id, "marko.json");
        }
        break;
    }
    id = markoModules.require.resolve(id);
    props = markoModules.require(id);
  }

  registeredTaglibs.push(loadTaglib(id, props));
}

export function clearCaches() {
  loader.clearCache();
  finder.clearCache();
  lookupCache = Object.create(null);
}

// Used by legacy compiler api.
export const _loader = loader;
export const _finder = finder;

function loadTaglib(id, props) {
  return loader.loadTaglibFromProps(loader.createTaglib(id), props);
}
