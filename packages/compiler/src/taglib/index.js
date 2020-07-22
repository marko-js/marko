import loader from "marko/src/taglib/taglib-loader";
import finder from "marko/src/taglib/taglib-finder";
import { registeredTaglibs } from "marko/src/taglib/taglib-lookup";
import TaglibLookup from "marko/src/taglib/taglib-lookup/TaglibLookup";

export { excludeDir, excludePackage } from "marko/src/taglib/taglib-finder";

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
  const taglibsForDir = finder.find(
    dirname,
    registeredTaglibs.concat(translator.taglibs)
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
  registeredTaglibs.push(
    loader.loadTaglibFromProps(loader.createTaglib(id), props)
  );
}

export function clearCaches() {
  loader.clearCache();
  finder.clearCache();
  lookupCache = Object.create(null);
}
