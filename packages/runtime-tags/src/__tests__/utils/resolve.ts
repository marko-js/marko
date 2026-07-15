import type { PersistedRender } from "../../common/types";

declare global {
  var __RESOLVE_STATE__: {
    generation: number;
    lastId: number;
    promises: Map<number, Promise<number>>;
  };
}

const state = (globalThis.__RESOLVE_STATE__ ||= {
  generation: 0,
  lastId: 0,
  promises: new Map(),
});

export function resetResolveState() {
  // Bump the generation so still-pending tick() chains are seen as stale.
  state.generation++;
  state.lastId = 0;
  state.promises = new Map();
}

export type Wait = typeof wait;
export const wait = Object.assign(
  async () => {
    let id: number;
    let nextId: number | undefined;
    do {
      id = await getSharedPromise(nextId);
      await new Promise((r) => setImmediate(r));
      nextId = state.promises.size;
    } while (id !== nextId);
  },
  {
    wait: true,
  },
);

export function after(id: number): Wait {
  return Object.assign(
    async () => {
      await getSharedPromise(id);
      await new Promise((r) => setImmediate(r));
    },
    {
      wait: true,
    },
  );
}

export type FlushType = "stream" | "raf" | "idle" | "visible" | "media";
export type Flush = { flushType: FlushType };

export const flush = Object.assign(() => {}, {
  flushType: "stream" as const,
});

export const flushRAF = Object.assign(() => {}, {
  flushType: "raf" as const,
});

export const flushIdle = Object.assign(() => {}, {
  flushType: "idle" as const,
});

export const flushVisible = Object.assign(() => {}, {
  flushType: "visible" as const,
});

export const flushMedia = Object.assign(() => {}, {
  flushType: "media" as const,
});

export type Throws = ReturnType<typeof throws>;
export function throws(fn: (...args: any[]) => void) {
  return Object.assign(fn, { throws: true });
}

/**
 * A persisted-pages navigation step: the root template receives new input.
 * In ssr mode the harness renders a patch server-side (main.test.ts's
 * `onNavigate` passes `persistedPatchFrom`'s facts to `render()`) and applies
 * it to the live document through the fixture's generated `?update` entry;
 * in csr mode it is a plain input update -- the same semantics the patch is
 * meant to reproduce.
 */
export type Navigate = {
  navigateInput: Record<string, unknown>;
  /**
   * ssr-mode only: runs after each streamed update frame applies except the
   * last, so a fixture can drive a client mutation (a click, a state write)
   * while a later async frame is still pending -- pins CSR/SSR interleaving
   * mid-navigation. There is no frame concept in csr mode (a navigation is
   * one atomic input update), so this never runs there.
   */
  betweenFrames?: (container: Element, frameIndex: number) => unknown;
  /**
   * ssr-mode only: apply only the first N streamed frames and drop the
   * rest -- models the run router aborting a superseded navigation between
   * frames (its per-frame `signal.aborted` check stops applying, and the
   * dropped frames never touch the page). Later steps run against the
   * truncated state.
   */
  abortAfterFrame?: number;
  /**
   * ssr-mode only: rewrites the patch response's frames before any of them
   * apply, so a fixture can pin how the applier behaves against a corrupted
   * or replayed wire payload (drop a fragment entry, duplicate a
   * boundary-body frame, break a scope reference). Receives the frame
   * strings the server flushed (see designs/persisted-pages-wire-format.md,
   * "Frame grammar") and returns the frames to apply.
   */
  mutateFrames?: (frames: string[]) => string[];
  /**
   * ssr-mode only: rewrites the possession echo (the `x-marko-have` JSON,
   * see designs/persisted-pages-wire-format.md, "Possession echo") before
   * the patch render reads it -- models a lost echo (the run router omits
   * oversized values) or a stale/corrupt claim about what the live page
   * holds. Return "" to omit the echo entirely.
   */
  mutateHave?: (have: string) => string;
  /**
   * ssr-mode only: the apply MUST throw (a pairing-integrity protocol
   * failure -- the marko-side contract the run router turns into a full
   * document navigation). The harness catches the error and logs it with
   * any mutation records from the failing frame, so the snapshot pins both
   * the message and that the failure committed nothing. Fixtures using this
   * skip csr (a csr navigation is a plain input update and cannot fail this
   * way).
   */
  expectError?: boolean;
};
export type NavigateOptions = Omit<Navigate, "navigateInput">;
export function navigate(
  input: Record<string, unknown>,
  optsOrBetweenFrames?: NavigateOptions | Navigate["betweenFrames"],
  abortAfterFrame?: number,
): Navigate {
  return typeof optsOrBetweenFrames === "object"
    ? { navigateInput: input, ...optsOrBetweenFrames }
    : {
        navigateInput: input,
        betweenFrames: optsOrBetweenFrames,
        abortAfterFrame,
      };
}

export function isNavigate(value: any): value is Navigate {
  return (
    typeof value === "object" && value !== null && "navigateInput" in value
  );
}

/**
 * Build persisted request facts from a fixture's ergonomic `$global` flags
 * (`persisted` / `persistedCrossRoute`) to pass as `render()`'s second
 * argument -- the same translation @marko/run's `initializePersisted`
 * (runtime/internal.ts) does from its negotiation headers. Fixtures keep the
 * readable flags; the mode never touches `$global`. Undefined when not
 * persisted.
 */
export function persistedRenderFrom(
  $global: Record<string, unknown> | undefined,
): PersistedRender | undefined {
  return $global?.persisted ? {} : undefined;
}

/**
 * Patch facts for a `navigate()` step. `$global.persistedCrossRoute` marks
 * the navigation cross-route (`fromRoute !== targetRoute`), which selects
 * fresh-structure delivery (`State.freshStructure`); without it the patch
 * renders same-route.
 */
export function persistedPatchFrom(
  $global: Record<string, unknown> | undefined,
): PersistedRender {
  return {
    patch: {
      fromRoute: $global?.persistedCrossRoute ? "previous" : "current",
      targetRoute: "current",
    },
  };
}

export function isWait(value: any): value is Wait {
  return typeof value === "function" && value.wait;
}

export function isFlush(value: any): value is Flush {
  return typeof value === "function" && value.flushType !== undefined;
}

export function isThrows(value: any): value is Throws {
  return typeof value === "function" && value.throws;
}

export function resolveAfter<T>(value: T, id?: number) {
  const promise = getSharedPromise(id);
  return Object.assign(
    promise.then(() => {
      return value;
    }),
    { value },
  );
}
export function rejectAfter<T extends Error>(value: T, id?: number) {
  const promise = getSharedPromise(id);
  return Object.assign(
    promise.then(() => {
      throw value;
    }),
    { value },
  );
}

function getSharedPromise(id: number = state.lastId + 1): Promise<number> {
  if (id < 1) {
    return Promise.resolve(0);
  }

  let promise = state.promises.get(id);
  if (!promise) {
    const { generation } = state;
    promise = getSharedPromise(id - 1).then(() => tick(generation));
    state.promises.set(id, promise);
  }
  return promise;
}

function tick(generation: number) {
  return new Promise<number>((r) => {
    setTimeout(() => {
      setImmediate(() => {
        setTimeout(() => {
          // A tick still pending from an earlier generation must not advance
          // lastId, or the next phase's wait() would never converge.
          r(generation === state.generation ? ++state.lastId : state.lastId);
        });
      });
    });
  });
}
