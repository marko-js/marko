declare global {
  var __RESOLVE_STATE__: {
    lastId: number;
    promises: Map<number, Promise<number>>;
  };
}

const state = (globalThis.__RESOLVE_STATE__ ||= {
  lastId: 0,
  promises: new Map(),
});

export function resetResolveState() {
  state.lastId = 0;
  state.promises = new Map();
}

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

export function after(id: number) {
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

export const flush = Object.assign(() => {}, {
  flush: true,
});

export function throws(fn: (...args: any[]) => void) {
  return Object.assign(fn, { throws: true });
}

export function isWait(value: any): value is typeof wait {
  return typeof value === "function" && value.wait;
}

export function isFlush(value: any): value is typeof flush {
  return typeof value === "function" && value.flush;
}

export function isThrows(value: any): value is ReturnType<typeof throws> {
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
    state.promises.set(id, (promise = getSharedPromise(id - 1).then(tick)));
  }
  return promise;
}

function tick() {
  return new Promise<number>((r) => {
    setTimeout(() => {
      setImmediate(() => {
        setTimeout(() => {
          r(++state.lastId);
        });
      });
    });
  });
}
