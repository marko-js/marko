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
  ___client: boolean;
  _: Scope | undefined;
} & T;

// TODO: SECTION_SIBLING that is both a SECTION_START and a SECTION_END (<for> siblings)
//       NODE that doesn't have a sectionId and uses the previous sectionId
export const enum HydrateSymbols {
  SECTION_START = "^",
  SECTION_END = "/",
  NODE = "#",
  PLACEHOLDER_START = "",
  PLACEHOLDER_END = "",
  REPLACEMENT_ID = "",
  VAR_HYDRATE = "$h",
  VAR_REORDER_RUNTIME = "$r",
}
