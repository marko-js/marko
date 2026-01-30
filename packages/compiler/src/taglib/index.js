import markoModules from "@marko/compiler/modules";
import path from "path";

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

register(markoHTMLTaglib["taglib-id"], markoHTMLTaglib);
register(markoSVGTaglib["taglib-id"], markoSVGTaglib);
register(markoMathTaglib["taglib-id"], markoMathTaglib);

export function buildLookup(dirname, requestedTranslator, onError) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (!translator || !Array.isArray(translator.taglibs)) {
    throw new Error(
      "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)",
    );
  }

  let taglibsForDir = loadedTranslatorsTaglibs.get(translator);
  let exclusiveTagDiscoveryDirs = undefined;

  if (!taglibsForDir) {
    loadedTranslatorsTaglibs.set(
      translator,
      (taglibsForDir = registeredTaglibs.concat(
        resolveOptionalTaglibs(translator.optionalTaglibs || [], onError)
          .concat(translator.taglibs)
          .map(([id, props]) => loadTaglib(id, props)),
      )),
    );
  }

  runAndCatchErrors(() => {
    const foundMeta = finder.find._withMeta(
      dirname,
      taglibsForDir,
      translator.tagDiscoveryDirs,
    );
    taglibsForDir = foundMeta.taglibs;
    exclusiveTagDiscoveryDirs = foundMeta.exclusiveTagDiscoveryDirs;
  }, onError);

  const cacheKey = taglibsForDir
    .map((it) => it.id)
    .sort()
    .join();
  let lookup = lookupCache[cacheKey];

  if (!lookup) {
    lookup = lookupCache[cacheKey] = new Lookup();
    lookup.exclusiveTagDiscoveryDirs = exclusiveTagDiscoveryDirs;
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
    [id, props] = resolveTaglib(id);
  }
  registeredTaglibs.push(loadTaglib(id, props));
}

export function clearCaches() {
  loader.clearCache();
  finder.clearCache();
  lookupCache = Object.create(null);
}

export function resolveOptionalTaglibs(taglibIds, onError) {
  const resolvedTaglibs = [];
  for (const id of taglibIds) {
    if (hasRootDependency(id)) {
      runAndCatchErrors(() => {
        resolvedTaglibs.push(resolveTaglib(id));
      }, onError);
    }
  }

  return resolvedTaglibs;
}

// Used by legacy compiler api.
export const _loader = loader;
export const _finder = finder;

function runAndCatchErrors(fn, onError) {
  if (onError) {
    const prevOnError = taglibConfig.onError;
    taglibConfig.onError = onError;
    try {
      fn();
    } catch (err) {
      taglibConfig.onError(err);
    } finally {
      taglibConfig.onError = prevOnError;
    }
  } else {
    fn();
  }
}

function loadTaglib(id, props) {
  return loader.loadTaglibFromProps(loader.createTaglib(id), props);
}

function resolveTaglib(id) {
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

  const resolved = markoModules.resolve(id);
  return [resolved, markoModules.require(resolved)];
}

function hasRootDependency(id) {
  return !!(
    markoModules.pkg &&
    (markoModules.pkg.dependencies?.[id] ||
      markoModules.pkg.devDependencies?.[id])
  );
}
