export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  string, // hydrate function id
  Scope, // scope
  number // offset
];

export type Scope = [
  Scope | undefined, // OWNER_SCOPE
  number | undefined, // OWNER_OFFSET
  ...unknown[]
] & {
  ___id: string;
  ___startNode: Node | number | undefined;
  ___endNode: Node | number | undefined;
  ___cleanup: Set<number | Scope> | undefined;
} & {
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
  OWNER_SCOPE = 0,
  OWNER_OFFSET = 1,
  BEGIN_DATA = 2,
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
