import type { Renderer as ClientRenderer } from "../dom/renderer";

export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type Scope<
  T extends { [x: string | number]: unknown } = {
    [x: string | number]: unknown;
  },
> = [...unknown[]] & {
  ___args: unknown;
  ___startNode: (Node & ChildNode) | Accessor | undefined;
  ___endNode: (Node & ChildNode) | Accessor | undefined;
  ___cleanup: Set<Scope> | undefined;
  ___client: boolean;
  ___bound: Map<unknown, unknown> | undefined;
  ___renderer: ClientRenderer | undefined;
  ___abortControllers: Map<string | number, AbortController> | undefined;
  $global: Record<string, unknown>;
  _: Scope | undefined;
  [x: string | number]: any;
} & T;

// TODO: SECTION_SIBLING that is both a SECTION_START and a SECTION_END (<for> siblings)
//       NODE that doesn't have a sectionId and uses the previous sectionId
export const enum ResumeSymbols {
  DEFAULT_RUNTIME_ID = "M",
  SECTION_START = "[",
  SECTION_END = "]",
  SECTION_SINGLE_NODES_END = "|",
  NODE = "*",
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
  LIFECYCLE_ABORT_CONTROLLER = "-",
  TAG_VARIABLE = "/",
  COND_SCOPE = "!",
  LOOP_SCOPE_ARRAY = "!",
  COND_RENDERER = "(",
  LOOP_SCOPE_MAP = "(",
  LOOP_VALUE = ")",
  PREVIOUS_ATTRIBUTES = "~",
}

export type Accessor = string | number;
export type Input = Record<string, unknown>;
export type Context = Record<string, unknown>;

export interface Template {
  _: unknown;
  mount(
    input: Input,
    reference: ParentNode & Node,
    position?: InsertPosition,
  ): TemplateInstance;
  render(input?: Input): RenderResult;
}

export interface TemplateInstance {
  update(input: unknown): void;
  destroy(): void;
}

export type RenderResult = Promise<string> &
  AsyncIterable<string> & {
    toReadable(): ReadableStream;
  };
