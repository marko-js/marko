import { ROOT_SCOPE_ID } from "../../common/meta";
import { type Opt, toArray } from "../../common/opt";
import {
  type Accessor,
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
  runId,
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
// reads it; an integer key (`PatchKey.Var`) is its own kind.
export interface PatchValues {}
type PatchKind = PatchKey.Value | number;
export type Patcher<K extends PatchKind = PatchKind> = (
  scope: Scope,
  key: string,
  value: K extends keyof PatchValues ? PatchValues[K] : unknown,
) => void;
// Value signals for live server/client intersections keyed by
// `templateId:ordinal`, retained exactly when a consuming join is.
export const patchFills: Record<string, Signal<unknown> & { _?: SignalFn }> =
  {};
export const patchers: { [K in PatchKind]?: Patcher<K> } = {};
// The patchers of a setup envelope (`PatchKey.Setup`), which applies only to a
// scope its flush created.
export const createPatchers: typeof patchers = {};
// Structural patchers recurse back through here, so no scope is addressed by
// id. Debug entry keys are `PatchKind:…`, optimized ones a single character.
export const patchScope = (patch: Scope, live: Scope, kinds = patchers) => {
  for (const key in patch) {
    if (MARKO_DEBUG) {
      const kind =
        key.indexOf(":") > 0 ? key.slice(0, key.indexOf(":") + 1) : key[0];
      if (!kinds[kind as PatchKind]) {
        throw new Error(
          `No patcher applies "${key}": the live page has no "${kind}" feature.`,
        );
      }
    }
    kinds[
      (MARKO_DEBUG && key.indexOf(":") > 0
        ? key.slice(0, key.indexOf(":") + 1)
        : key[0]) as PatchKind
    ]!(live, key, patch[key as keyof Scope]);
  }
  // A created scope renders its setup once its entry has patched its child
  // scopes, and mounts its effects after theirs (envelopes: `createPatchers`).
  if (kinds === patchers) {
    if (live[AccessorProp.SetupRenders]) {
      live[AccessorProp.SetupRenders]();
      live[AccessorProp.SetupRenders] = 0;
    }
    if (live[AccessorProp.SetupEffects]) {
      pendingEffects.push(...live[AccessorProp.SetupEffects]);
      live[AccessorProp.SetupEffects] = 0;
    }
  }
};
// A setup patcher whose renders may reach the created scope's child scopes,
// which their own entries set up first.
export const afterChildScopes =
  <K extends PatchKind>(patcher: Patcher<K>): Patcher<K> =>
  (scope, key, value) => {
    const prev = scope[AccessorProp.SetupRenders];
    scope[AccessorProp.SetupRenders] = () => {
      prev?.();
      patcher(scope, key, value);
    };
  };
// The render a flush is applying against (set by `beginPatch`).
export let patchRender!: RenderData;
// A flush's creations all happen in its own run (a held patch applies in
// a fresh one), so a scope with the current run's `Gen` is the flush's own.
export function beginPatch(render: RenderData) {
  patchRender = render;
  // A page with no effects never wrote a walk call; pairing into resumed
  // branches needs the walked links, so finish the resume before patching.
  render.w();
}
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

// Installed by `patches/ready`: every frame passes it, so a frame naming lazy
// modules (and every later one of its response) waits for them.
let holdFrame:
  | ((
      renderId: string,
      response: object,
      frame: string,
      apply: ApplyFrame,
      done: FrameDone,
    ) => void)
  | undefined;
// Flush shells ahead of the scope tree (`id;walks;template` strings),
// registered by the patch feature that understands them.
let onPatchShell: ((entry: string) => void) | undefined;
export const installPatchShells = (handler: NonNullable<typeof onPatchShell>) =>
  (onPatchShell = handler);
/** Whether a flush applied: truthy when it did. */
export type Applied = 0 | 1;
/** A frame's outcome, reported once: at its first failure, else when it and
 * everything it left waiting (a module, a streaming body) applied. */
export type FrameDone = (applied: Applied) => void;
type ApplyFrame = (frame: string, done: FrameDone) => void;
// The frame being applied: a wait it starts reports through the frame's done.
export let frameWait: () => (applied: unknown) => void;

// A scope's link from its parent: a child accessor, or a loop item's index
// with its key when that differs.
export type PatchHop = string | [accessor: string, at: LoopItemAt];
export type LoopItemAt = number | [index: number, key: unknown];

// `_(path, id, content or locals?)` in a frame: a registration bound to the
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
    scope[(AccessorPrefix.BranchScopes + accessor) as Accessor] as Opt<Scope>,
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

/** The page's side of `template.patch`: a request's headers and its response's apply.
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
  let commit: (() => void) | undefined;
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
  const stop = () => {
    if (render[RenderDataProp.PatchResponse] === stop) {
      render[RenderDataProp.PatchResponse] = undefined;
      // A body the fetch's own abort or a network error ended rejects this.
      reader?.cancel().catch((_) => 0);
    }
  };
  render[RenderDataProp.PatchResponse]?.();
  render[RenderDataProp.PatchResponse] = stop;
  signal.addEventListener("abort", stop);
  const apply: ApplyFrame = (flush, done) => {
    // A response whose shells changed what the page holds ends with `;` and its
    // token, which the next request sends; a replayed (kept) response's is older.
    if (flush[0] === ";") {
      if (!replay) render[RenderDataProp.PatchToken] = flush;
      return done(1);
    }
    // Registered here so this module stays tree-shakable; a page with
    // `$global` joins installed its own (`_fill_global_join`).
    patchers[PatchKey.Globals] ||= applyGlobals;
    // The page changes now: the caller commits (its history) first, once.
    commit &&= void commit();
    // Reports once: at the first failure, else when the last wait applies.
    let waits = 1;
    const settle = (applied: unknown) =>
      waits && (applied ? --waits || done(1) : done((waits = 0)));
    frameWait = () => (waits++, settle);
    settle(
      applyFlush(render, () => {
        // Trusted resume data from the server that rendered the document, run
        // as its resume scripts are: a script carrying the page's nonce.
        const script = document.createElement("script") as HTMLScriptElement & {
          f?: (ctx: SerializeContext) => unknown;
        };
        script.nonce = $global.cspNonce!;
        // `$`, the serializer's `undefined`, is the parameter left unpassed.
        script.text = "document.currentScript.f=(_,$)=>(" + flush + ")";
        document.head.appendChild(script).remove();
        if (MARKO_DEBUG && !script.f && !warnedRefusedFrame) {
          warnedRefusedFrame = true;
          console.warn(
            `A patch frame's script did not run. If this page's Content Security Policy blocked it, its script-src must allow the document's nonce, $global.cspNonce (${JSON.stringify($global.cspNonce)}).`,
          );
        }
        render.r = [
          (ctx: SerializeContext) => {
            root = ctx(ROOT_SCOPE_ID) as Scope;
            // A frame the page's CSP refused has no thunk: this call throws
            // and the flush rejects, as any failure does.
            const value = script.f!(responseCtx);
            // `[...shells, tree]` or the bare tree, rooted at the page
            // root; a flush of only shells keys no tree.
            const flush = Array.isArray(value) ? value : [value];
            let i = 0;
            while (typeof flush[i] === "string") onPatchShell!(flush[i++]);
            const tree = flush[i];
            if (tree && typeof tree === "object") {
              trees.push(tree);
              patchScope(tree, root);
            }
          },
        ] as RenderData["r"];
      }),
    );
  };
  const applyLine: ApplyFrame = holdFrame
    ? (frame, done) => holdFrame!($global.renderId, stop, frame, apply, done)
    : apply;
  return [
    // The build the document named, then the render's token once a response
    // issued one (none before: the server reads it as holding nothing).
    {
      "x-marko-patch":
        render[RenderDataProp.PatchBuild] +
        (render[RenderDataProp.PatchToken] || ";"),
    },
    // Applies the response's lines as they stream in, until it ends, fails
    // or stops.
    async (
      response: Response,
      onCommit: () => void,
      onApplied: () => void,
      onEnd: () => void,
      onFail: () => void,
    ) => {
      let ended: unknown;
      let waiting = 0;
      const fail = (why?: string) => {
        if (render[RenderDataProp.PatchResponse] === stop) {
          if (MARKO_DEBUG) console.warn(`A patch rejected: ${why}.`);
          stop();
          onFail();
        }
      };
      // Each frame reports once it (and anything it waited on) applied; the end
      // once the body ended and every frame applied.
      const done: FrameDone = (applied) =>
        applied
          ? render[RenderDataProp.PatchResponse] === stop &&
            (onApplied(), --waiting || (ended && onEnd()))
          : MARKO_DEBUG
            ? fail("a frame did not apply")
            : fail();
      commit = onCommit;
      // A server marks a patch with its build; anything else (another build's,
      // or its refusal) is a document the caller loads; a stopped one is not read.
      if (
        render[RenderDataProp.PatchResponse] !== stop ||
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
      let buffered = "";
      try {
        for (let read; !(read = await reader.read()).done;) {
          buffered += decoder.decode(read.value, { stream: true });
          let start = 0,
            at;
          while (
            render[RenderDataProp.PatchResponse] === stop &&
            (at = buffered.indexOf("\n", start)) >= 0
          ) {
            waiting++;
            applyLine(buffered.slice(start, at), done);
            start = at + 1;
          }
          buffered = buffered.slice(start);
        }
      } catch {
        return MARKO_DEBUG ? fail("the stream was cut short") : fail();
      }
      if (render[RenderDataProp.PatchResponse] === stop) {
        ended = 1;
        // The server ends every frame with a newline: a remainder was cut short.
        if (buffered + decoder.decode()) {
          MARKO_DEBUG ? fail("the stream was cut short") : fail();
        } else if (!waiting) onEnd();
      }
    },
  ] as const;
}

let warnedRefusedFrame = false;

// A plain patched write; a changed value is marked with the flush's epoch
// (`patches/effect`, `patches/global`).
export function patchWrite(scope: Scope, accessor: Accessor, value: unknown) {
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[AccessorProp.PatchChanged] ??= {})[accessor] = runId;
  }
}

// Re-shipped globals land as plain writes on the globals object (scope 0),
// so `$global` reads never go stale.
export function applyGlobals(live: Scope, _key: string, value: unknown) {
  for (const key in value as Record<string, unknown>) {
    patchWrite(
      live[AccessorProp.Global] as unknown as Scope,
      key as Accessor,
      (value as Record<string, unknown>)[key],
    );
  }
}

export function installPatchReady(hold: NonNullable<typeof holdFrame>) {
  holdFrame = hold;
}

// Applies data a frame left waiting on a streaming body, the waits it starts
// counted by that frame's `wait` (its `frameWait`).
export function applyInFrame(
  wait: typeof frameWait,
  render: RenderData,
  apply: () => void,
) {
  frameWait = wait;
  return applyFlush(render, apply);
}

// Applies flush data (a response's frame, or one left waiting on a module or a
// streaming body) as its own flush run.
function applyFlush(render: RenderData, apply: () => void): Applied {
  if (MARKO_DEBUG && rendering) {
    throw new Error(
      "A patch flush applied inside a render instead of its own run.",
    );
  }
  let rendered: unknown;
  // First of the run's effects, so it runs once every render is done; queued
  // before the flush queues anything, the shift moves nothing.
  pendingEffects.unshift(() => (rendered = 1), 0);
  try {
    beginPatch(render);
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
    queueMicrotask(() => {
      throw error;
    });
  } finally {
    // A rejected flush must not read as page data on a later walk; the
    // array stays, a still-streaming page pushes into it.
    render.r!.length = 0;
  }
  return 1;
}
