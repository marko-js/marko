import { getTagDef, getTagDefForTagName } from "@marko/babel-utils";
import * as t from "../../babel-types";
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
  const { watchFiles } = file.metadata.marko;
  const tagName = path.get("name.value").node || "*";
  const MIGRATOR_CACHE = (file.MIGRATOR_CACHE =
    file.MIGRATOR_CACHE || Object.create(null));

  let migrators = MIGRATOR_CACHE[tagName];

  if (!migrators) {
    migrators = MIGRATOR_CACHE[tagName] = [];
    const addMigrators = tagDef => {
      if (tagDef && tagDef.migratorPaths) {
        for (let i = 0; i < tagDef.migratorPaths.length; i++) {
          const migratorPath = tagDef.migratorPaths[i];
          watchFiles.push(migratorPath);
          migrators.push(markoModules.require(migratorPath));
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
