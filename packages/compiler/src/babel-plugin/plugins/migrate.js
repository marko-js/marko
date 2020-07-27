import { types as t } from "@marko/babel-types";
import { getTagDef } from "@marko/babel-utils";
import markoModules from "../../../modules";
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
    }
  }
};

function getMigratorsForTag(path) {
  const {
    hub: { file }
  } = path;
  const { _lookup } = file;
  const tagName = path.get("name.value").node;
  const MIGRATOR_CACHE = (_lookup.MIGRATOR_CACHE =
    _lookup.MIGRATOR_CACHE || {});

  let migrators = MIGRATOR_CACHE[tagName];

  if (!migrators) {
    const tagDef = getTagDef(path);

    migrators = MIGRATOR_CACHE[tagName] = [
      ...(tagDef ? tagDef.migratorPaths : []),
      ...(_lookup.getTag("*") || { migratorPaths: [] }).migratorPaths
    ].map(path => markoModules.require(path));
  }

  return migrators;
}
