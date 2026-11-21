// Utilities for executing multi step compiler hooks (migrators & transformers).
import type { types as t } from "@marko/compiler";

type TagPath = t.NodePath<t.MarkoTag>;
type HookFn = (path: TagPath, types: typeof t) => void;

/** A hook as a taglib provides it: a function, or `{ enter, exit }`, either maybe a module's default. */
export interface HookModule {
  enter?: HookFn;
  exit?: HookFn;
  default?: HookModule & HookFn;
}

export function enter(hook: HookModule, path: TagPath, types: typeof t) {
  const fn =
    (hook &&
      (hook.enter || (hook.default && hook.default.enter) || hook.default)) ||
    hook;
  if (typeof fn === "function") {
    fn(path, types);
  }
}

export function exit(hook: HookModule, path: TagPath, types: typeof t) {
  const fn =
    hook && (hook.exit || (hook.default ? hook.default.exit : undefined));
  if (typeof fn === "function") {
    fn(path, types);
  }
}
