import type { PendingRender } from "../dom/queue";
import type { Renderer as ClientRenderer, Renderer } from "../dom/renderer";
import type { AccessorProp } from "./accessor.debug";
import * as ControlledType from "./constants/controlled-type";
import * as NodeType from "./constants/node-type";
import * as ResumeSymbol from "./constants/resume-symbol";
import * as WalkCode from "./constants/walk-code";
import * as WalkRangeSize from "./constants/walk-range-size";
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
    | Record<string | number, AbortController | void>
    | undefined;
  [AccessorProp.ClosestBranch]: BranchScope | undefined;
  [AccessorProp.ClosestBranchId]: number | undefined;
  [x: `___${string}`]: never;
  [x: string | number]: any;
}

type ResumeSymbol = ResumeSymbol.Value;
export { ResumeSymbol };

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

type NodeType = NodeType.Value;
export { NodeType };

// Reserved character codes: 0-31 [control chars], 34 " [double quote],
// 39 ' [single quote], 92 \ [backslash], 96 ` [backtick]
type WalkCode = WalkCode.Value;
export { WalkCode };

type WalkRangeSize = WalkRangeSize.Value;
export { WalkRangeSize };

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

/** @internal Per-render options kept separate from user `$global`. */
export interface RenderOptions {
  persisted?: PersistedRender;
}

/** @internal Persisted request facts normalized by the router. */
export interface PersistedRender {
  patch?: PersistedPatch;
  /** Maps a wire identity (a value group or region key) to the opaque token
   * that stands in for it, so application keys never leave the server. The
   * router owns the secret; marko only asks for a stable mapping within a
   * build. Absent means identities ship verbatim. */
  token?: (identity: string) => string;
  /** Called exactly once, at successful patch completion, with the post-cap
   * value feedback the response actually carried ("" when every claim held).
   * The router uses it to name the store this response induces client-side;
   * an aborted render never fires it. */
  onFeedback?: (delta: string) => void;
}

/** @internal An enhanced navigation within one persisted build. */
export type PersistedPatch = {
  fromRoute: string;
  targetRoute: string;
  /** Shell ids the client provably holds — the target route's static chunk
   * closure plus anything it echoed. A held shell ships no wire entry; the
   * client constructs from its own chunk registration. */
  heldShells?: (id: string) => boolean;
  /** The request echo's value section, verbatim: the previous response's
   * `//E1:` feedback the carrier committed after apply. The codec is
   * marko-owned (see html/patch-groups); the router only transports it. */
  echoValues?: string;
  /** The digest the client's echo asserts for a region identity, if any. A
   * byte-identical region ships its fill alone; the client verifies its
   * live range and falls back to a document navigation on any mismatch, so
   * a stale echo can only re-ship or re-navigate, never corrupt. */
  heldRegions?: (token: string) => string | undefined;
};
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

type ControlledType = ControlledType.Value;
export { ControlledType };
