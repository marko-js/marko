import { ROOT_SCOPE_ID } from "../../common/meta";
import { type OneMany, type Opt, toArray } from "../../common/opt";
import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RenderDataProp,
  type Scope,
} from "../../common/types";
import {
  abortRun,
  pendingEffects,
  rendering,
  run,
  runEffects,
  startRun,
} from "../queue";
import {
  curRenders,
  type RenderData,
  _resumed,
  type SerializeContext,
} from "../resume";
import type { Signal, SignalFn } from "../signals";

// What a patch of each kind carries, declared beside the patcher that
// reads it.
export interface PatchValues {}
type PatchKind = PatchKey.Value;
export type Patcher<K extends PatchKind = PatchKind> = (
  scope: Scope,
  accessor: string,
  value: K extends keyof PatchValues ? PatchValues[K] : unknown,
) => void;
// Fills keyed by `templateId:ordinal`. A key's joins chain, and its declaration's fill
// replaces them whichever registers first: what derives from it reaches what they would.
export const patchFills: Record<string, Signal<unknown> & { _?: SignalFn }> =
  {};
export const patchers: { [K in PatchKind]?: Patcher<K> } = {};
// The patchers of a setup envelope (`PatchKey.Setup`), which applies only to a
// scope its flush created.
export const setupPatchers: typeof patchers = {};
// Structural patchers recurse back through here, so no scope is addressed by
// id. Debug entry keys are `PatchKind:…`, optimized ones a single character.
export const patchScope = (
  patch: Scope | undefined,
  live: Scope,
  kinds = patchers,
) => {
  for (const key in patch) {
    if (MARKO_DEBUG) {
      const kind = key.slice(0, key.indexOf(":") + 1);
      if (!kinds[kind as PatchKind]) {
        throw new Error(
          `No patcher applies "${key}": the live page has no "${kind}" feature.`,
        );
      }
      kinds[kind as PatchKind]!(
        live,
        key.slice(kind.length),
        patch[key as keyof Scope],
      );
    } else {
      kinds[key[0] as PatchKind]!(
        live,
        key.slice(1),
        patch[key as keyof Scope],
      );
    }
  }
};
// The render a flush is applying against (set by `runFlush`); its response
// marks a change, which counts for all of that response's flushes.
export let patchRender!: RenderData;
// Set while a patch applies to a tree a shell's walk just created: fresh
// scopes met then have no renderer to set them up (see `PatchKey.Setup`).
export let creating = 0;
export function withCreating<A, B>(fn: (a: A, b: B) => unknown, a?: A, b?: B) {
  creating++;
  try {
    fn(a!, b!);
  } finally {
    creating--;
  }
}

// Installed by `patches/ready`: every flush passes it, so a flush naming lazy
// modules (and every later one of its response) waits for them.
let holdFlush:
  | ((
      renderId: string,
      response: object,
      flush: string,
      apply: ApplyFlush,
      done: FlushDone,
    ) => void)
  | undefined;
// Flush shells ahead of the scope tree (`id;walks;template` strings),
// registered by the patch feature that understands them.
let onPatchShell: ((entry: string) => void) | undefined;
export const installPatchShells = (handler: NonNullable<typeof onPatchShell>) =>
  (onPatchShell = handler);
/** Whether a flush applied: truthy when it did. */
export type Applied = 0 | 1;
/** A flush's outcome, reported once: at its first failure, else when it and
 * everything it left waiting (a module, a streaming body) applied. */
export type FlushDone = (applied: Applied) => void;
type ApplyFlush = (flush: string, done: FlushDone) => void;
// The flush being applied: a wait it starts reports through the flush's done.
export let flushWait: () => (applied: unknown) => void;

// A scope's link from its parent: a child accessor, or a loop item's index
// with its key when that differs.
export type PatchHop = string | [accessor: string, at: LoopItemAt];
export type LoopItemAt = number | [index: number, key: unknown];

// `_(path, id, content or locals?)` in a flush: a registration bound to the
// scope `path` reaches from the page root, resolved by `patches/bind`.
let bindRef:
  | ((root: Scope, path: PatchHop[], id: string, bound?: 1 | Scope) => unknown)
  | undefined;
export function installBindRef(resolve: NonNullable<typeof bindRef>) {
  bindRef = resolve;
}

// A loop's live item: the one where it rendered while its key still matches
// there (the reconciler's own check), else found by key.
export function getLoopItem(
  scope: Scope,
  accessor: string,
  at: LoopItemAt,
): Scope | undefined {
  const items = toArray(
    scope[AccessorPrefix.BranchScopes + accessor] as Opt<Scope>,
  );
  let index = at as number;
  let key: unknown = at;
  if (typeof at === "object") [index, key] = at;
  const item = items[index];
  return item && (item[AccessorProp.LoopKey] ?? index) === key
    ? item
    : (items.find(
        (item, i) => ((item as Scope)[AccessorProp.LoopKey] ?? i) === key,
      ) as Scope | undefined);
}

/** The live page's `$global`: names its render and holds its document's nonce. */
export type PatchGlobal = { renderId: string; cspNonce?: string };

/** The page's side of `template.patch`, for a same-origin request's response.
 * @experimental The patch protocol may change in a minor release. */
export function patch(
  $global: PatchGlobal,
  signal: AbortSignal,
  replay?: unknown,
) {
  if (MARKO_DEBUG && signal.aborted) {
    throw new Error(
      "A patch was started with an aborted signal: start it before its navigation stops.",
    );
  }
  // Indexed as the server counts trees, so a later flush can reference an
  // earlier one's; with an id, `data` is the path to a bound registration.
  const trees: unknown[] = [];
  let root: Scope;
  let commit: (() => void | Promise<unknown>) | undefined;
  // What the caller's commit returned: a promise when the browser commits later.
  let committing: void | Promise<unknown>;
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  const responseCtx = ((
    data: number | PatchHop[],
    id?: string,
    bound?: 1 | Scope,
  ) =>
    id
      ? bindRef!(root, data as PatchHop[], id, bound)
      : trees[data as number]) as SerializeContext;
  responseCtx._ = _resumed;
  // The signal, a failure or the next `patch()` stops the response at once:
  // it stops reading, and nothing it left waiting applies or reports.
  const render = curRenders[$global.renderId];
  const stop = (_?: Event) => {
    if (render[RenderDataProp.StopPatch] === stop) {
      render[RenderDataProp.StopPatch] = undefined;
      // A body the fetch's own abort or a network error ended rejects this.
      reader?.cancel().catch((_) => 0);
    }
  };
  render[RenderDataProp.StopPatch]?.();
  render[RenderDataProp.StopPatch] = stop;
  signal.addEventListener("abort", stop);
  // The caller commits once, before the first line; a promise (a commit the
  // browser completes later) holds each line, and a stopped response applies none.
  const committed = (then: () => void) => {
    if (commit) ((committing = commit()), (commit = undefined));
    const go = (_?: unknown) =>
      render[RenderDataProp.StopPatch] === stop && then();
    if (committing) committing.then(go);
    else go();
  };
  const apply: ApplyFlush = (flush, done) =>
    committed((_?: never) => applyCommitted(flush, done));
  const applyCommitted: ApplyFlush = (flush, done) => {
    // A response whose shells changed what the page holds ends with `;` and its
    // token, which the next request sends; a replayed (kept) response's is older.
    if (flush[0] === ";") {
      if (!replay) render[RenderDataProp.HeldShells] = flush;
      return done(1);
    }
    // Re-shipped globals land on the globals object, so `$global` reads never go
    // stale; a page with `$global` joins installed its own (`_fill_global_join`).
    patchers[PatchKey.Globals] ||= (live, _key, value) =>
      Object.assign(live[AccessorProp.Global], value);
    // Reports once: at the first failure, else when the last wait applies.
    let waits = 1;
    const settle = (applied: unknown) =>
      waits && (applied ? --waits || done(1) : done((waits = 0)));
    flushWait = (_?: never) => (waits++, settle);
    settle(
      runFlush(render, (_?: never) => {
        // Trusted resume data from the server that rendered the document, run
        // as its resume scripts are: a script carrying the page's nonce.
        const script = document.createElement("script") as HTMLScriptElement & {
          f?: (ctx: SerializeContext) => OneMany<string | Scope>;
        };
        script.nonce = $global.cspNonce!;
        // `$`, the serializer's `undefined`, is the parameter left unpassed.
        script.text = "document.currentScript.f=(_,$)=>(" + flush + ")";
        document.head.appendChild(script).remove();
        if (MARKO_DEBUG && !script.f && !warnedRefusedFlush) {
          warnedRefusedFlush = true;
          console.warn(
            `A patch flush's script did not run. If this page's Content Security Policy blocked it, its script-src must allow the document's nonce, $global.cspNonce (${JSON.stringify($global.cspNonce)}).`,
          );
        }
        render.r = [
          (ctx: SerializeContext) => {
            root = ctx(ROOT_SCOPE_ID) as Scope;
            // `[...shells, tree]` or the bare tree; a flush the page's CSP refused
            // has no thunk, so this throws and the flush rejects.
            for (const item of toArray(script.f!(responseCtx))) {
              if (typeof item === "string") {
                onPatchShell!(item);
              } else {
                trees.push(item);
                patchScope(item, root);
              }
            }
          },
        ] as RenderData["r"];
      }),
    );
  };
  const applyLine: ApplyFlush = holdFlush
    ? (flush, done) => holdFlush!($global.renderId, stop, flush, apply, done)
    : apply;
  return [
    // The build the document named, then the render's token once a response
    // issued one (none before: the server reads it as holding nothing).
    {
      "x-marko-patch":
        render[RenderDataProp.PatchBuild] +
        (render[RenderDataProp.HeldShells] || ";"),
    },
    // Applies the response's lines as they stream in, until it ends, fails
    // or stops.
    async (
      response: Response,
      onCommit: () => void | Promise<unknown>,
      onApplied: () => void,
      onEnd: () => void,
      onFail: () => void,
    ) => {
      let ended: unknown;
      let waiting = 0;
      const fail = (why?: string) => {
        if (render[RenderDataProp.StopPatch] === stop) {
          if (MARKO_DEBUG) console.warn(`A patch rejected: ${why}.`);
          stop();
          onFail();
        }
      };
      // Each flush reports once it (and anything it waited on) applied; the end
      // once the body ended and every flush applied.
      const done: FlushDone = (applied) =>
        applied
          ? render[RenderDataProp.StopPatch] === stop &&
            (onApplied(), --waiting || (ended && onEnd()))
          : MARKO_DEBUG
            ? fail("a flush did not apply")
            : fail();
      commit = onCommit;
      // A server marks a patch with its build; anything else (another build's,
      // or its refusal) is a document the caller loads; a stopped one is not read.
      if (
        render[RenderDataProp.StopPatch] !== stop ||
        response.headers.get("x-marko-patch") !==
          render[RenderDataProp.PatchBuild]
      ) {
        response.body?.cancel();
        return MARKO_DEBUG
          ? fail(
              response.status === 412 || response.headers.has("x-marko-patch")
                ? "the server runs another build than this page's"
                : "the response is not a patch",
            )
          : fail();
      }
      reader = response.body!.getReader();
      const decoder = new TextDecoder();
      // The flush read so far: each chunk is searched once, and a flush
      // spanning chunks joins at its newline.
      let partial = "";
      try {
        for (let read; !(read = await reader.read()).done;) {
          const text = decoder.decode(read.value, { stream: true });
          let start = 0,
            at;
          while (
            render[RenderDataProp.StopPatch] === stop &&
            ~(at = text.indexOf("\n", start))
          ) {
            waiting++;
            applyLine(partial + text.slice(start, at), done);
            partial = "";
            start = at + 1;
          }
          partial += text.slice(start);
        }
      } catch {
        return MARKO_DEBUG ? fail("the stream was cut short") : fail();
      }
      if (render[RenderDataProp.StopPatch] === stop) {
        ended = 1;
        // The server ends each flush with a newline: a remainder was cut short.
        if (partial + decoder.decode()) {
          MARKO_DEBUG ? fail("the stream was cut short") : fail();
        } else if (!waiting) {
          // A response with no flush to apply still commits, once.
          committed(onEnd);
        }
      }
    },
  ] as const;
}

let warnedRefusedFlush = false;

// Whether a write this flush made changed what an entry depends on: accessors, each
// behind a `>` per owner up, as shells' hops are written.
export function depChanged(
  scope: Scope,
  deps: string[],
  stop = patchRender[RenderDataProp.StopPatch],
) {
  for (const dep of deps) {
    let owner = scope;
    let i = 0;
    for (; dep[i] === ">"; i++) owner = owner[AccessorProp.Owner]!;
    if (owner[AccessorPrefix.PatchChanged + dep.slice(i)] === stop) {
      return 1;
    }
  }
}

export function installHoldFlush(hold: NonNullable<typeof holdFlush>) {
  holdFlush = hold;
}

// Applies data a flush left waiting on a streaming body, the waits it starts
// counted by that flush's `wait` (its `flushWait`).
export function applyInFlush(
  wait: typeof flushWait,
  render: RenderData,
  apply: () => void,
) {
  flushWait = wait;
  return runFlush(render, apply);
}

// Applies a flush (a response's line, or its data left waiting on a module or a
// streaming body) as its own run: a scope with that run's `Gen` is the flush's.
function runFlush(render: RenderData, apply: () => void): Applied {
  if (MARKO_DEBUG && rendering) {
    throw new Error(
      "A patch flush applied inside a render instead of its own run.",
    );
  }
  let rendered: unknown;
  // Ahead of effects a settled await queued outside a run, so their errors stay
  // the app's: it runs once every render is done.
  pendingEffects.unshift((_: 0) => (rendered = 1), 0);
  try {
    patchRender = render;
    // A page with no effects never wrote a walk call; pairing into resumed
    // branches needs the walked links, so finish the resume before patching.
    render.w();
    // Entries apply as a render does: a live `<let>` keeps its value, and a
    // fresh one takes its seed.
    startRun();
    apply();
    const effects = render.m!([]);
    run();
    runEffects(effects);
  } catch (error) {
    if (!rendered) {
      // The flush did not apply faithfully, so the caller navigates.
      if (MARKO_DEBUG) console.error(error);
      abortRun();
      return 0;
    }
    // An effect's error after every render is the app's, as on any client render.
    queueMicrotask((_?: never) => {
      throw error;
    });
  } finally {
    // A rejected flush must not read as page data on a later walk; the
    // array stays, a still-streaming page pushes into it.
    render.r!.length = 0;
  }
  return 1;
}
