const LOOKUPS = new WeakMap();
const SEEN_TAG_DEFS = new WeakMap();

export function ___setTaglibLookup(file, lookup) {
  LOOKUPS.set(file, lookup);
  SEEN_TAG_DEFS.set(file, new Set());
}

export function getTaglibLookup(file) {
  return LOOKUPS.get(file);
}

export function getTagDefForTagName(file, tagName) {
  const tagDef = getTaglibLookup(file).getTag(tagName);

  if (tagDef) {
    const seen = SEEN_TAG_DEFS.get(file);

    if (!seen.has(tagDef)) {
      seen.add(tagName);
      const { filePath } = tagDef;
      const len = filePath.length;

      if (filePath[len - 14] === "m" && filePath.endsWith("marko-tag.json")) {
        file.metadata.marko.watchFiles.add(filePath);
      }
    }
  }
  return tagDef;
}
