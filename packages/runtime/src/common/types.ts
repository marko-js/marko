export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  string, // hydrate function id
  Scope, // scope
  number // offset
];

export type Scope = [string, Node, Node, ...unknown[]];

export const enum ScopeOffsets {
  ID = 0,
  START_NODE = 1,
  END_NODE = 2,
  BEGIN_DATA = 3
}

export const enum HydrateSymbols {
  SCOPE_START = "^",
  SCOPE_END = "/",
  SCOPE_OFFSET = "#",
  PLACEHOLDER_START = "",
  PLACEHOLDER_END = "",
  REPLACEMENT_ID = "",
  VAR_HYDRATE = "$h",
  VAR_REORDER_RUNTIME = "$r"
}
