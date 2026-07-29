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

/** A server patch in SSR tests and a plain input update in CSR tests. */
export type Navigate = {
  navigateInput: Record<string, unknown>;
  /** Runs between streamed SSR frames. */
  betweenFrames?: (container: Element, frameIndex: number) => unknown;
  /** Applies only the first N SSR frames. */
  abortAfterFrame?: number;
  /** Rewrites SSR frames before application. */
  mutateFrames?: (frames: string[]) => string[];
  /** Observes the raw wire exchange: the apply frames, the trailing `//E1:`
   * feedback line (stripped before apply), and the claims this request
   * echoed — what privacy fixtures assert over. */
  inspectWire?: (wire: {
    frames: string[];
    feedback?: string;
    echoed?: string;
  }) => void;
  /** Requires the SSR apply to throw. */
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

/** Builds `render()`'s persisted request facts from the fixture's `$global`
 * flags, as @marko/run does from its negotiation headers; undefined when off. */
export function persistedRenderFrom(
  $global: Record<string, unknown> | undefined,
): PersistedRender | undefined {
  return $global?.persisted ? { token: tokenFor($global) } : undefined;
}

// Stands in for the router's per-build secret: stable across the requests of
// one fixture run, exactly as a build-scoped mapping is across a session.
const buildTokens = new Map<string, string>();
/** Opaque identities, opted into with `$global.persistedToken`. */
function tokenFor($global: Record<string, unknown> | undefined) {
  if (!$global?.persistedToken) return undefined;
  return (identity: string) => {
    let token = buildTokens.get(identity);
    if (!token) buildTokens.set(identity, (token = "t" + buildTokens.size));
    return token;
  };
}

/** Patch facts for a `navigate()` step; `$global.persistedCrossRoute` marks it
 * cross-route (a hop whose target diverges from the live page), and
 * `$global.persistedHeldShells` stands in for the router's manifest floor —
 * `true` holds every shell, an array holds the listed ids. Under
 * `$global.persistedHeldRegions` the harness echoes `regionDigests` (the
 * client's own live snapshot, taken at request time, as the carrier will). */
export function persistedPatchFrom(
  $global: Record<string, unknown> | undefined,
  regionDigests?: Record<string, string>,
  echoValues?: string,
): PersistedRender {
  const held = $global?.persistedHeldShells as true | string[] | undefined;
  return {
    patch: {
      fromRoute: $global?.persistedCrossRoute ? "previous" : "current",
      targetRoute: "current",
      heldShells: held && ((id: string) => held === true || held.includes(id)),
      heldRegions: regionDigests && ((token) => regionDigests[token]),
      echoValues,
    },
    token: tokenFor($global),
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
