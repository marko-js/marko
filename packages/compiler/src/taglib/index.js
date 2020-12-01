let loader, finder, registeredTaglibs, TaglibLookup;

if (
  (process.env.MARKO_DEBUG != null &&
    (process.env.MARKO_DEBUG !== "false" || process.env.MARKO_DEBUG !== "0")) ||
  process.env.NODE_ENV == null ||
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "dev"
) {
  loader = require("marko/src/taglib/taglib-loader");
  finder = require("marko/src/taglib/taglib-finder");
  registeredTaglibs = require("marko/src/taglib/taglib-lookup")
    .registeredTaglibs;
  TaglibLookup = require("marko/src/taglib/taglib-lookup/TaglibLookup");
} else {
  loader = require("marko/dist/taglib/taglib-loader");
  finder = require("marko/dist/taglib/taglib-finder");
  registeredTaglibs = require("marko/dist/taglib/taglib-lookup")
    .registeredTaglibs;
  TaglibLookup = require("marko/dist/taglib/taglib-lookup/TaglibLookup");
}

export const excludeDir = finder.excludeDir;
export const excludePackage = finder.excludePackage;

const loadedTranslatorsTaglibs = new Map();
let lookupCache = Object.create(null);

register(require.resolve("./html/marko.json"), require("./html/marko.json"));
register(require.resolve("./svg/marko.json"), require("./svg/marko.json"));
register(require.resolve("./math/marko.json"), require("./math/marko.json"));

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
    lookup = lookupCache[cacheKey] = new TaglibLookup();
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

function loadTaglib(id, props) {
  return loader.loadTaglibFromProps(loader.createTaglib(id), props);
}
