export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  string, // hydrate function id
  Scope, // scope
  number // offset
];

export type Scope<
  T extends { [x: number]: unknown } = { [x: number]: unknown }
> = [...unknown[]] & {
  ___id: number;
  ___startNode: (Node & ChildNode) | number | undefined;
  ___endNode: (Node & ChildNode) | number | undefined;
  ___cleanup: Set<number | Scope> | undefined;
  _: Scope | undefined;
} & T;

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
