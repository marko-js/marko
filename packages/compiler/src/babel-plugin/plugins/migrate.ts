import { getTagDef, getTagDefForTagName } from "@marko/compiler/babel-utils";
import type { TagDefinition } from "@marko/compiler/babel-utils";
import { types as t } from "@marko/compiler/internal/babel";

import type { CompileFile } from "../../util/compile-file";
import { enter, exit, type HookModule } from "../util/plugin-hooks";

/**
 * Applies custom migrators on tags.
 */
export const visitor: t.Visitor = {
  MarkoTag: {
    enter(path) {
      const migrators = getMigratorsForTag(path);
      const { node } = path;
      for (const migrator of migrators) {
        enter(migrator, path, t);
        if (path.node !== node) break; // Stop if node is replaced.
      }
    },
    exit(path) {
      const migrators = getMigratorsForTag(path);
      const { node } = path;
      for (const migrator of migrators) {
        exit(migrator, path, t);
        if (path.node !== node) break; // Stop if node is replaced.
      }
    },
  },
};

function getMigratorsForTag(path: t.NodePath<t.MarkoTag>) {
  const file = path.hub.file as CompileFile;
  const { watchFiles } = file.metadata.marko;
  const { name } = path.node;
  // A dynamic tag has no definition, so it takes no hooks.
  const tagName = (name.type === "StringLiteral" && name.value) || "*";
  const MIGRATOR_CACHE = (file.MIGRATOR_CACHE =
    file.MIGRATOR_CACHE || Object.create(null));

  let migrators = MIGRATOR_CACHE[tagName];

  if (!migrators) {
    migrators = MIGRATOR_CACHE[tagName] = [];
    const addMigrators = (tagDef: TagDefinition | null | undefined) => {
      if (tagDef && tagDef.migrators) {
        for (const migrator of tagDef.migrators) {
          if (migrator.path) {
            watchFiles.push(migrator.path);
          }
          migrators.push(
            ((migrator.hook as HookModule).default ||
              migrator.hook) as HookModule,
          );
        }
      }
    };

    addMigrators(getTagDef(path));

    if (tagName !== "*") {
      addMigrators(getTagDefForTagName(file, "*"));
    }
  }

  return migrators;
}
