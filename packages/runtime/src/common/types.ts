export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  string, // hydrate function id
  Scope, // scope
  number // offset
];

export type Scope = [
  string, // ID
  Node | number | undefined, // START_NODE
  Node | number | undefined, // END_NODE
  Set<number | Scope> | undefined, // CLEANUP
  Scope | undefined, // OWNER_SCOPE
  number | undefined, // OWNER_OFFSET
  ...unknown[]
] & {
  ___insertBefore: (
    this: Scope,
    parent: Node & ParentNode,
    nextSibling: Node | null
  ) => void;
  ___remove: (this: Scope) => void;
  ___getParentNode: (this: Scope) => Node & ParentNode;
  ___getAfterNode: (this: Scope) => Node | null;
  ___getFirstNode: (this: Scope) => Node & ChildNode;
  ___getLastNode: (this: Scope) => Node & ChildNode;
};

export const enum ScopeOffsets {
  ID = 0,
  START_NODE = 1,
  END_NODE = 2,
  CLEANUP = 3,
  OWNER_SCOPE = 4,
  OWNER_OFFSET = 5,
  BEGIN_DATA = 6,
}

export const enum HydrateSymbols {
  SCOPE_START = "^",
  SCOPE_END = "/",
  SCOPE_OFFSET = "#",
  PLACEHOLDER_START = "",
  PLACEHOLDER_END = "",
  REPLACEMENT_ID = "",
  VAR_HYDRATE = "$h",
  VAR_REORDER_RUNTIME = "$r",
}
