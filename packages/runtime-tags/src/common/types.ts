import type { PendingRender } from "../dom/queue";
import type { Renderer as ClientRenderer, Renderer } from "../dom/renderer";
import type { AccessorProp } from "./accessor.debug";
export type Falsy = undefined | null | false | 0 | "";
export interface BranchScope extends Scope {
  [AccessorProp.StartNode]: ChildNode;
  [AccessorProp.EndNode]: ChildNode;
  [AccessorProp.ParentBranch]: BranchScope | undefined;
  [AccessorProp.AbortScopes]: Set<Scope> | undefined;
  [AccessorProp.BranchScopes]: Set<BranchScope> | undefined;
  [AccessorProp.Renderer]: ClientRenderer | string;
  [AccessorProp.AwaitCounter]: AwaitCounter | undefined;
  [AccessorProp.PendingEffects]: unknown[] | undefined;
  [AccessorProp.PlaceholderBranch]: BranchScope | undefined | 0;
  [AccessorProp.PendingRenders]: PendingRender[] | 0 | undefined;
  [AccessorProp.DetachedAwait]: Renderer | 0 | undefined;
  [AccessorProp.PendingScopes]: Scope[] | void;
}
export interface Scope {
  [AccessorProp.Owner]: Scope | undefined;
  [AccessorProp.Global]: Record<string, unknown>;
  [AccessorProp.Id]: number;
  [AccessorProp.Gen]: number;
  [AccessorProp.AbortControllers]:
    Record<string | number, AbortController | void> | undefined;
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
  m?: (effects: unknown[]) => unknown[];
  i: number;
  c: () => void | 1;
}

export {
  AccessorPrefix,
  AccessorProp,
  ClosureSignalProp,
  KeyedScopesProp,
  PendingRenderProp,
  RendererProp,
} from "./accessor.debug";

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

/**
 * @internal Per-render options — the second argument to `render()`, kept a
 * generic bag (not a positional persisted flag) so future render-time options
 * extend it without another signature change. Distinct from `$global`, which
 * is user/request data (in @marko/run `$global` _is_ the request context).
 */
export interface RenderOptions {
  persisted?: PersistedRenderMode;
}

/**
 * @internal The persisted render mode (single-page server-first updates),
 * carried on `RenderOptions.persisted` rather than smuggled through `$global`.
 * Omitted = the byte-identical non-persisted document.
 *
 * - `update`: an update (patch) response for an already-persisted page rather
 *   than a document — request-derived values (computed holes, conditional
 *   outcomes, branch lists) serialize so the client can merge them onto its
 *   live scope tree, and effects for matched scopes are suppressed.
 * - `seed`: the target subtree is created fresh on the client (a cross-route
 *   update), so state values serialize too — seeded only into scopes created
 *   during the apply (matched scopes' live state is never overwritten).
 * - `fragment`: the first content-hop branch renders as a fragment frame
 *   (resumable HTML inserted and resumed at the hop's anchor) instead of
 *   serializing for client-side construction. See
 *   designs/persisted-pages-architecture.md ("Fragment frames").
 */
export interface PersistedRenderMode {
  update: boolean;
  seed: boolean;
  fragment: boolean;
  /**
   * @internal The possession echo (`x-marko-have`): for each dynamic-hop site
   * the client holds, the site's build-stable id → the renderer id it
   * currently shows. The id is the compiler's per-site register id (stashed on
   * the hop scope so the client reads it back), not the runtime scope id --
   * scope ids drift between the document and update renders, this constant does
   * not. The server ships a fragment for a site whose target renderer differs
   * from what the client echoed (same-route dynamic swaps included) rather than
   * failing the apply. Absent map = no echo.
   */
  possessed?: { [siteId: string]: string };
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
  render(input?: Input, options?: RenderOptions): RenderedTemplate;
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
