import type { Renderer as ClientRenderer } from "../dom/renderer";

export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type ScopeContext = Record<string, [Scope, number | string]>;

export type Scope<
  T extends { [x: string | number]: unknown } = {
    [x: string | number]: unknown;
  }
> = [...unknown[]] & {
  ___attrs: unknown;
  ___startNode: (Node & ChildNode) | Accessor | undefined;
  ___endNode: (Node & ChildNode) | Accessor | undefined;
  ___cleanup: Set<number | string | Scope> | undefined;
  ___client: boolean;
  ___bound: Map<unknown, unknown> | undefined;
  ___renderer: ClientRenderer | undefined;
  ___context: ScopeContext | undefined;
  _: Scope | undefined;
  [x: string | number]: any;
} & T;

// TODO: SECTION_SIBLING that is both a SECTION_START and a SECTION_END (<for> siblings)
//       NODE that doesn't have a sectionId and uses the previous sectionId
export const enum ResumeSymbols {
  SECTION_START = "^",
  SECTION_END = "/",
  SECTION_SINGLE_NODES_END = "|",
  NODE = "#",
  PLACEHOLDER_START = "",
  PLACEHOLDER_END = "",
  REPLACEMENT_ID = "",
  VAR_RESUME = "$h",
  VAR_REORDER_RUNTIME = "$r",
}

export const enum AccessorChars {
  DYNAMIC = "?",
  MARK = "#",
  STALE = "&",
  SUBSCRIBERS = "*",
  CLEANUP = "-",
  TAG_VARIABLE = "/",
  COND_SCOPE = "!",
  LOOP_SCOPE_ARRAY = "!",
  COND_CONTEXT = "^",
  LOOP_CONTEXT = "^",
  COND_RENDERER = "(",
  LOOP_SCOPE_MAP = "(",
  LOOP_VALUE = ")",
  CONTEXT_VALUE = ":",
  PREVIOUS_ATTRIBUTES = "~",
}

export type Accessor = string | number;
