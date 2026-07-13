import type { PersistedRenderMode } from "../../common/types";

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
 * In ssr mode the harness renders an update payload (`$global.persisted =
 * "update"`) server-side and applies it to the live document through the
 * fixture's generated `?update` entry; in csr mode it is a plain input
 * update -- the same semantics the patch is meant to reproduce.
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
};
export function navigate(
  input: Record<string, unknown>,
  betweenFrames?: (container: Element, frameIndex: number) => unknown,
  abortAfterFrame?: number,
): Navigate {
  return { navigateInput: input, betweenFrames, abortAfterFrame };
}

export function isNavigate(value: any): value is Navigate {
  return (
    typeof value === "object" && value !== null && "navigateInput" in value
  );
}

/**
 * Extract the persisted render mode from a fixture's ergonomic `$global` flags
 * (`persisted` / `persistedFragment`) to pass as `render()`'s
 * second argument — the same translation @marko/run's context render does from
 * its request-derived flags. Fixtures keep the readable flags; the mode never
 * touches `$global`. Undefined when not persisted.
 */
export function persistedModeFrom(
  $global: Record<string, unknown> | undefined,
): PersistedRenderMode | undefined {
  const persisted = $global?.persisted;
  if (!persisted) return undefined;
  const update = persisted === "update";
  const fragment = update && !!$global!.persistedFragment;
  return {
    update,
    // Cross-route fragments always need their fresh state seeded. Keeping one
    // fixture flag mirrors @marko/run's single `"fragment"` render mode.
    seed: fragment,
    fragment,
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
