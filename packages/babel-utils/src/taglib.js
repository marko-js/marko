const SEEN_TAGS_KEY = Symbol();

export function getTaglibLookup(file) {
  return file.___taglibLookup;
}

export function getTagDefForTagName(file, tagName) {
  const tagDef = getTaglibLookup(file).getTag(tagName);

  if (tagDef) {
    let seen = file.metadata.marko[SEEN_TAGS_KEY];
    if (!seen) {
      seen = file.metadata.marko[SEEN_TAGS_KEY] = new Set();
    }

    if (!seen.has(tagDef)) {
      seen.add(tagName);
      const { filePath } = tagDef;
      const len = filePath.length;

      if (filePath[len - 14] === "m" && filePath.endsWith("marko-tag.json")) {
        file.metadata.marko.watchFiles.push(filePath);
      }
    }
  }
  return tagDef;
}
