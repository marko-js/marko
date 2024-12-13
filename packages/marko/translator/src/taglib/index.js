import coreTaglib from "./core";
import migrateTaglib from "./migrate";
export const optionalTaglibs = ["marko-widgets", "@marko/compat-v4"];
export default [
  ["marko/core", coreTaglib],
  ["marko/migrate", migrateTaglib],
];
