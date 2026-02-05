import { getTagDef, getTagDefForTagName } from "@marko/compiler/babel-utils";
import { types as t } from "@marko/compiler/internal/babel";

import { enter, exit } from "../util/plugin-hooks";

/**
 * Applies custom migrators on tags.
 */
export const visitor = {
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

function getMigratorsForTag(path) {
  const {
    hub: { file },
  } = path;
  const { watchFiles } = file.metadata.marko;
  const tagName = path.get("name.value").node || "*";
  const MIGRATOR_CACHE = (file.MIGRATOR_CACHE =
    file.MIGRATOR_CACHE || Object.create(null));

  let migrators = MIGRATOR_CACHE[tagName];

  if (!migrators) {
    migrators = MIGRATOR_CACHE[tagName] = [];
    const addMigrators = (tagDef) => {
      if (tagDef && tagDef.migrators) {
        for (const migrator of tagDef.migrators) {
          if (migrator.path) {
            watchFiles.push(migrator.path);
          }
          migrators.push(migrator.hook.default || migrator.hook);
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
