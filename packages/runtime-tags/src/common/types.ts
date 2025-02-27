import type { Renderer as ClientRenderer } from "../dom/renderer";
export type Falsy = undefined | null | false | 0 | "";
export type CommentWalker = TreeWalker & Record<string, Comment>;
export interface BranchScope extends Scope {
  ___startNode: ChildNode;
  ___endNode: ChildNode;
  ___parentBranch: BranchScope | undefined;
  ___destroyed: 1 | undefined;
  ___abortScopes: Set<Scope> | undefined;
  ___branchScopes: Set<BranchScope> | undefined;
  ___renderer: ClientRenderer | string;
}
export interface Scope {
  $global: Record<string, unknown>;
  _: Scope | undefined;
  ___id: number;
  ___args: unknown;
  ___pending: 1 | 0 | undefined;
  ___abortControllers:
    | Record<string | number, AbortController | void>
    | undefined;
  ___closestBranch: BranchScope | undefined;

  [x: string | number]: any;
}

export enum ResumeSymbol {
  Node = "*",
  BranchStart = "[",
  BranchEnd = "]",
  BranchSingleNode = "|",
  BranchSingleNodeOnlyChildInParent = "=",
  ClosestBranch = "$",
}

export enum AccessorChar {
  Dynamic = "?",
  Mark = "#",
  Subscribers = "*",
  LifecycleAbortController = "-",
  DynamicPlaceholderLastChild = "-",
  TagVariable = "/",
  TagVariableChange = "@",
  ConditionalScope = "!",
  ConditionalRenderer = "(",
  LoopScopeArray = "!",
  LoopScopeMap = "(",
  EventAttributes = "~",
  ControlledValue = ":",
  ControlledHandler = ";",
  ControlledType = "=",
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
  /** @internal */
  __flush__?($global: $Global, html: string): string;
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
    reference: Node,
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

export enum ControlledType {
  InputChecked,
  InputCheckedValue,
  InputValue,
  SelectValue,
  DetailsOrDialogOpen,
  None,
}
