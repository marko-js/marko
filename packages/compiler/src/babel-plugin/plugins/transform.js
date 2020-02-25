import { types as t } from "@marko/babel-types";
import { getTagDef } from "@marko/babel-utils";
import { enter, exit } from "../util/plugin-hooks";

/**
 * Applies custom transformers on tags.
 */
export const visitor = {
  Program(path) {
    path.hub._componentDefIdentifier = path.scope.generateUidIdentifier(
      "component"
    );
  },
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
    }
  }
};

function getTransformersForTag(path) {
  const { hub } = path;
  const { lookup } = hub;
  const tagName = path.get("name.value").node || "*";
  const TRANSFORMER_CACHE = (lookup.TRANSFORMER_CACHE =
    lookup.TRANSFORMER_CACHE || {});

  let transformers = TRANSFORMER_CACHE[tagName];

  if (!transformers) {
    const tagDef = getTagDef(path);

    transformers = TRANSFORMER_CACHE[tagName] = (tagDef
      ? Object.values(tagDef.transformers)
      : []
    )
      .concat(
        Object.values((lookup.getTag("*") || { transformers: [] }).transformers)
      )
      .sort(comparePriority)
      .map(({ path }) => require(path));
  }

  return transformers;
}

function comparePriority(a, b) {
  a = a.priority || 0;
  b = b.priority || 0;

  return a - b;
}
