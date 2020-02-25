import path from "path";
import loader from "marko/src/taglib/taglib-loader";
import finder from "marko/src/taglib/taglib-finder";
import TaglibLookup from "marko/src/taglib/taglib-lookup/TaglibLookup";

export { excludeDir, excludePackage } from "marko/src/taglib/taglib-finder";

let lookupCache = Object.create(null);
const coreTaglibs = ["html", "svg", "math"].map(name =>
  loader.loadTaglibFromFile(path.join(__dirname, name, "marko.json"))
);

export function buildLookup(dirname, translator = "default") {
  const translatorTaglibs = Array.isArray(translator)
    ? translator
    : require(`@marko/translator-${translator}`).taglibs;
  const taglibsForDir = finder.find(
    dirname,
    coreTaglibs.concat(translatorTaglibs)
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

export function clearCaches() {
  loader.clearCache();
  finder.clearCache();
  lookupCache = Object.create(null);
}
