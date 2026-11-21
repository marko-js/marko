import type { types as t, MarkoMeta } from "@marko/compiler";
import type { TagDefinition } from "@marko/compiler/babel-utils";

import type { CompileFile } from "../util/compile-file";

const SEEN_TAGS_KEY = Symbol();

type SeenMeta = MarkoMeta & {
  [SEEN_TAGS_KEY]?: Set<TagDefinition>;
};

export function getTaglibLookup(file: t.BabelFile) {
  return (file as CompileFile).___taglibLookup;
}

export function getTagDefForTagName(file: t.BabelFile, tagName: string) {
  const tagDef = getTaglibLookup(file).getTag(tagName);

  if (tagDef) {
    const meta = file.metadata.marko as SeenMeta;
    let seen = meta[SEEN_TAGS_KEY];
    if (!seen) {
      seen = meta[SEEN_TAGS_KEY] = new Set();
    }

    if (!seen.has(tagDef)) {
      seen.add(tagDef);
      const { filePath } = tagDef;
      const len = filePath.length;

      if (filePath[len - 14] === "m" && filePath.endsWith("marko-tag.json")) {
        file.metadata.marko.watchFiles.push(filePath);
      }
    }
  }
  return tagDef;
}
