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
  // Generation: 0 destroyed, 1 resumed from SSR, `runId` created this run,
  // else live from an earlier run. See CONTEXT.md › Generation.
  [AccessorProp.Gen]: number;
  [AccessorProp.AbortControllers]:
    | Record<string | number, AbortController | void>
    | undefined;
  [AccessorProp.ClosestBranch]: BranchScope | undefined;
  [AccessorProp.ClosestBranchId]: number | undefined;
  [AccessorProp.Subscriptions]: Set<Scope>[] | undefined;
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
  renderPatch(input?: Input): RenderedTemplate;
}

export interface MountedTemplate {
  value: unknown;
  update(input: unknown): void;
  destroy(): void;
}

export type RenderedTemplate = PromiseLike<string> &
  AsyncIterable<string> & {
    toReadable(): ReadableStream<Uint8Array<ArrayBufferLike>>;
    pipe(stream: {
      write(chunk: string): unknown;
      end(): unknown;
      flush?(): void;
      destroy?(): void;
      emit?(name: PropertyKey, ...args: unknown[]): unknown;
    }): void;
    toString(): string;
    catch<T = never>(
      onrejected?: ((reason: unknown) => T | PromiseLike<T>) | undefined | null,
    ): Promise<string | T>;
    finally(onfinally?: (() => void) | undefined | null): Promise<string>;
  };

type ControlledType = ControlledType.Value;
export { ControlledType };
