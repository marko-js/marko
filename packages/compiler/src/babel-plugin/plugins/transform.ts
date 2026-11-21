import { getTagDef, getTagDefForTagName } from "@marko/compiler/babel-utils";
import type { TagDefinition } from "@marko/compiler/babel-utils";
import { types as t } from "@marko/compiler/internal/babel";

import type { CompileFile } from "../../util/compile-file";
import { enter, exit, type HookModule } from "../util/plugin-hooks";

/**
 * Applies custom transformers on tags.
 */
export const visitor: t.Visitor = {
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

function getTransformersForTag(path: t.NodePath<t.MarkoTag>) {
  const file = path.hub.file as CompileFile;
  const { watchFiles } = file.metadata.marko;
  const { name } = path.node;
  // A dynamic tag has no definition, so it takes no hooks.
  const tagName = (name.type === "StringLiteral" && name.value) || "*";
  const TRANSFORMER_CACHE = (file.TRANSFORMER_CACHE =
    file.TRANSFORMER_CACHE || Object.create(null));

  let transformers = TRANSFORMER_CACHE[tagName];

  if (!transformers) {
    transformers = TRANSFORMER_CACHE[tagName] = [];
    const addTransformers = (tagDef: TagDefinition | null | undefined) => {
      if (tagDef && tagDef.transformers) {
        for (const transformer of tagDef.transformers) {
          if (transformer.path) {
            watchFiles.push(transformer.path);
          }
          transformers.push(
            ((transformer.hook as HookModule).default ||
              transformer.hook) as HookModule,
          );
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
