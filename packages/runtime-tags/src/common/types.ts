import type { Renderer as ClientRenderer } from "../dom/renderer";
import type { AccessorProp } from "./accessor.debug";
export type Falsy = undefined | null | false | 0 | "";
export type CommentWalker = TreeWalker & Record<string, Comment>;
export interface BranchScope extends Scope {
  [AccessorProp.StartNode]: ChildNode;
  [AccessorProp.EndNode]: ChildNode;
  [AccessorProp.ParentBranch]: BranchScope | undefined;
  [AccessorProp.Destroyed]: 1 | undefined;
  [AccessorProp.AbortScopes]: Set<Scope> | undefined;
  [AccessorProp.BranchScopes]: Set<BranchScope> | undefined;
  [AccessorProp.Renderer]: ClientRenderer | string;
  [AccessorProp.AwaitCounter]: AwaitCounter | undefined;
  [AccessorProp.PendingEffects]: unknown[] | undefined;
}
export interface Scope {
  [AccessorProp.Owner]: Scope | undefined;
  [AccessorProp.Global]: Record<string, unknown>;
  [AccessorProp.Id]: number;
  [AccessorProp.Creating]: 1 | 0 | undefined;
  [AccessorProp.AbortControllers]:
    | Record<string | number, AbortController | void>
    | undefined;
  [AccessorProp.ClosestBranch]: BranchScope | undefined;
  [AccessorProp.ClosestBranchId]: number | undefined;
  [x: `___${string}`]: never;
  [x: string | number]: any;
}

export enum ResumeSymbol {
  Node = "*",
  BranchStart = "[",
  BranchEnd = "]",
  BranchEndNativeTag = "'",
  BranchEndSingleNode = "|",
  BranchEndOnlyChildInParent = ")",
  BranchEndSingleNodeOnlyChildInParent = "}",
}

export interface AwaitCounter {
  d?: 1;
  i: number;
  c: () => void;
}

export { AccessorPrefix, AccessorProp } from "./accessor.debug";

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
  BeginChildWithVar = 48,
  DynamicTagWithVar = 49,

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

export type Accessor = string;

export type EncodedAccessor = number | string;

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
  ): MountedTemplate;
  render(input?: Input): RenderedTemplate;
}

export interface MountedTemplate {
  value: unknown;
  update(input: unknown): void;
  destroy(): void;
}

export type RenderedTemplate = PromiseLike<string> &
  AsyncIterable<string> & {
    toReadable(): ReadableStream<Uint8Array<ArrayBufferLike>>;
  };

export enum ControlledType {
  InputChecked,
  InputCheckedValue,
  InputValue,
  SelectValue,
  DetailsOrDialogOpen,
  None,
}
