import type { FileSystem } from "../util/fs";
import { stripComments } from "./strip-comments";

/** Props read from a taglib or tag JSON file. */
export type Props = Record<string, unknown>;

export function isProps(value: unknown): value is Props {
  return value !== null && typeof value === "object";
}

/** Reads a taglib or tag JSON file, which may have comments. */
export function readJSON(fs: FileSystem, path: string): Props {
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
