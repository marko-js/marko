import { getTagDef, getTagDefForTagName } from "@marko/compiler/babel-utils";
import { types as t } from "@marko/compiler/internal/babel";

import { enter, exit } from "../util/plugin-hooks";

/**
 * Applies custom transformers on tags.
 */
export const visitor = {
  MarkoTag: {
    enter(path) {
      const transformers = getTransformersForTag(path);
      const { node } = path;

      for (const transformer of transformers) {
        enter(transformer, path, t);
        if (path.node !== node) break; // Stop if node is replaced.
      }
    },
    exit(path) {
      const transformers = getTransformersForTag(path);
      const { node } = path;

      for (const transformer of transformers) {
        exit(transformer, path, t);
        if (path.node !== node) break; // Stop if node is replaced.
      }
    },
  },
};

function getTransformersForTag(path) {
  const {
    hub: { file },
  } = path;
  const { watchFiles } = file.metadata.marko;
  const tagName = path.get("name.value").node || "*";
  const TRANSFORMER_CACHE = (file.TRANSFORMER_CACHE =
    file.TRANSFORMER_CACHE || Object.create(null));

  let transformers = TRANSFORMER_CACHE[tagName];

  if (!transformers) {
    transformers = TRANSFORMER_CACHE[tagName] = [];
    const addTransformers = (tagDef) => {
      if (tagDef && tagDef.transformers) {
        for (const transformer of tagDef.transformers) {
          if (transformer.path) {
            watchFiles.push(transformer.path);
          }
          transformers.push(transformer.hook.default || transformer.hook);
        }
      }
    };

    addTransformers(getTagDef(path));

    if (tagName !== "*") {
      addTransformers(getTagDefForTagName(file, "*"));
    }
  }

  return transformers;
}
