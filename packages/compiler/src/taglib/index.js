import loader from "./loader";
import finder from "./finder";
import Lookup from "./lookup";

export const excludeDir = finder.excludeDir;
export const excludePackage = finder.excludePackage;

const registeredTaglibs = [];
const loadedTranslatorsTaglibs = new Map();
let lookupCache = Object.create(null);

register(require.resolve("./marko-html.json"), require("./marko-html.json"));
register(require.resolve("./marko-svg.json"), require("./marko-svg.json"));
register(require.resolve("./marko-math.json"), require("./marko-math.json"));

export function buildLookup(dirname, translator) {
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
    for (const taglib of taglibsForDir) {
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
