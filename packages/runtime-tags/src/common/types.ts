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

// TODO: SectionSiblings that is both a SectionStart and a SectionEnd (<for> siblings)
//       NODE that doesn't have a sectionId and uses the previous sectionId
export enum ResumeSymbol {
  DefaultRuntimeId = "M",
  SectionStart = "[",
  SectionEnd = "]",
  SectionSingleNodesEnd = "|",
  Node = "*",
  PlaceholderStart = "",
  PlaceholderEnd = "",
  ReplacementId = "",
  VarResume = "$h",
  VarReorderRuntime = "$r",
}

export enum AccessorChar {
  Dynamic = "?",
  Mark = "#",
  Stale = "&",
  Subscribers = "*",
  LifecycleAbortController = "-",
  TagVariable = "/",
  ConditionalScope = "!",
  ConditionalRenderer = "(",
  LoopScopeArray = "!",
  LoopScopeMap = "(",
  LoopValue = ")",
  PreviousAttributes = "~",
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
