import loader from "./loader";
import finder from "./finder";
import Lookup from "./lookup";
import tryLoadTranslator from "../util/try-load-translator";

export const excludeDir = finder.excludeDir;
export const excludePackage = finder.excludePackage;

import markoHTMLTaglib from "./marko-html.json";
import markoSVGTaglib from "./marko-svg.json";
import markoMathTaglib from "./marko-math.json";

const registeredTaglibs = [];
const loadedTranslatorsTaglibs = new Map();
let lookupCache = Object.create(null);

register("marko/html", markoHTMLTaglib);
register("marko/svg", markoSVGTaglib);
register("marko/math", markoMathTaglib);

export function buildLookup(dirname, requestedTranslator) {
  const translator = tryLoadTranslator(requestedTranslator);
  if (!translator || !Array.isArray(translator.taglibs)) {
    throw new Error(
      "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)"
    );
  }

  if (!loadedTranslatorsTaglibs.has(translator)) {
    loadedTranslatorsTaglibs.set(
      translator,
      translator.taglibs.map(([id, props]) => loadTaglib(id, props))
    );
  }

  const taglibsForDir = finder.find(
    dirname,
    registeredTaglibs.concat(loadedTranslatorsTaglibs.get(translator))
  );

  const cacheKey = taglibsForDir.map(it => it.id).join();
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
