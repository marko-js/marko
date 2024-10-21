import type { Renderer as ClientRenderer } from "../dom/renderer";

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type Scope<
  T extends { [x: string | number]: unknown } = {
    [x: string | number]: unknown;
  },
> = [...unknown[]] & {
  ___args: unknown;
  ___startNode: Node & ChildNode;
  ___endNode: Node & ChildNode;
  ___cleanup: Set<Scope> | undefined;
  ___client: 1 | undefined;
  ___bound: Map<unknown, unknown> | undefined;
  ___renderer: ClientRenderer | undefined;
  ___abortControllers: Map<string | number, AbortController> | undefined;
  ___cleanupOwner: Scope | undefined;
  $global: Record<string, unknown>;
  _: Scope | undefined;
  [x: string | number]: any;
} & T;

// TODO: SectionSiblings that is both a SectionStart and a SectionEnd (<for> siblings)
//       NODE that doesn't have a sectionId and uses the previous sectionId
export enum ResumeSymbol {
  SectionStart = "[",
  SectionEnd = "]",
  SectionSingleNodesEnd = "|",
  Node = "*",
  Cleanup = "$",
}

export enum AccessorChar {
  Dynamic = "?",
  Mark = "#",
  Subscribers = "*",
  LifecycleAbortController = "-",
  DynamicPlaceholderLastChild = "-",
  TagVariable = "/",
  ConditionalScope = "!",
  ConditionalRenderer = "(",
  LoopScopeArray = "!",
  LoopScopeMap = "(",
  EventAttributes = "~",
}

export enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11,
}

// Reserved Character Codes
// 0-31 [control characters]
// 34 " [double quote]
// 39 ' [single quote]
// 92 \ [backslash]
// 96 ` [backtick]
export enum WalkCode {
  Get = 32,
  Inside = 36,
  Replace = 37,
  EndChild = 38,

  BeginChild = 47,

  Next = 67,
  NextEnd = 91,

  Over = 97,
  OverEnd = 106,

  Out = 107,
  OutEnd = 116,

  Multiplier = 117,
  MultiplierEnd = 126,
}

export enum WalkRangeSize {
  Next = 20, // 67 through 91
  Over = 10, // 97 through 106
  Out = 10, // 107 through 116
  Multiplier = 10, // 117 through 126
}

export type Accessor = string | number;
export interface $Global {
  [x: PropertyKey]: unknown;
  signal?: AbortSignal;
  cspNonce?: string;
  renderId?: string;
  runtimeId?: string;
}
export interface Input {
  [x: PropertyKey]: unknown;
}
export interface TemplateInput extends Input {
  $global?: $Global;
}

export interface Template {
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

export type RenderResult = PromiseLike<string> &
  AsyncIterable<string> & {
    toReadable(): ReadableStream;
  };
