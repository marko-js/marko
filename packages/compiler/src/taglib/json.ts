import type { FileSystem } from "../util/fs";
import { LookupDependencies } from "./dependencies";
import { stripComments } from "./strip-comments";

/** Props read from a taglib or tag JSON file. */
export type Props = Record<string, unknown>;

export function isProps(value: unknown): value is Props {
  return value !== null && typeof value === "object";
}

/** Reads a taglib or tag JSON file, which may have comments, recording it in `deps`. */
export function readJSON(
  fs: FileSystem,
  path: string,
  deps: LookupDependencies | undefined,
): Props {
  // Recorded first, so one that cannot be read is read again once it changes.
  if (deps) LookupDependencies.addFile(deps, path);
  const json = fs.readFileSync(path, "utf8");

  try {
    return JSON.parse(stripComments(json));
  } catch (cause) {
    throw new Error(
      `Unable to parse JSON file at path "${path}": ${(cause as Error).message}`,
      { cause },
    );
  }
}
