import { Writable } from "stream";
import { Renderer } from "../common/types";

type MaybeFlushable = Writable & { flush?(): void };

let out: MaybeFlushable | null = null;
let buffer: string | null = null;
let flush: typeof flushToStream | null = null;
let promises: Array<Promise<unknown> & { isPlaceholder?: true }> | null = null;

export function createRenderer(renderer: Renderer) {
  type Input = Parameters<Renderer>[0];
  return async (input: Input, stream: MaybeFlushable) => {
    out = stream;
    buffer = "";
    flush = flushToStream;
    renderer(input);
    flush();
    out = null;
    flush = null;
    await allSettled();
    stream.end();
  };
}

export function write(data: string) {
  buffer += data;
}

export function fork<T extends unknown>(
  promise: Promise<T>,
  renderResult: (result: T) => void,
  renderError?: (err: Error) => void
) {
  const currentOut = out!;
  let currentFlush = flush!;
  let resolved = false;
  currentFlush();

  let bufferedAfter: string = "";
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      bufferedAfter += buffer;
      buffer = "";
    }
  };

  promises = promises || [];
  promises.push(
    promise.then(
      result => {
        return run(renderResult, result);
      },
      err => {
        if (renderError) {
          return run(renderError, err);
        } else {
          currentOut.emit("error", err);
          // return allSettled();
        }
      }
    )
  );

  async function run<Body extends (arg: unknown) => void>(
    renderBody: Body,
    data: Parameters<Body>[0]
  ) {
    resolved = true;
    out = currentOut;
    buffer = "";
    flush = currentFlush;
    renderBody(data);
    buffer += bufferedAfter;
    const previousFlush = currentFlush;
    currentFlush = flush;
    flush();
    out = null;
    flush = null;
    await allSettled();
    currentFlush = previousFlush;
  }
}

export function tryRender(
  renderBody: () => void,
  renderPlaceholder: () => void,
  renderError?: null | (() => void)
);
export function tryRender(
  renderBody: () => void,
  renderPlaceholder: null | (() => void),
  renderError: () => void
);
export function tryRender(
  renderBody: () => void,
  renderPlaceholder: null | (() => void),
  renderError: null | (() => void)
) {
  let err: Error;
  if (renderError) {
    try {
      renderBody();
    } catch (_err) {
      err = _err;
    }
  } else if (renderPlaceholder) {
    const currentBuffer = buffer;
    const currentFlush = flush!;
    let tryContent = "";
    buffer = "";
    flush = () => {
      tryContent += buffer;
      buffer = "";
    };

    const currentPromises = promises;
    promises = null;
    renderBody();
    flush();
    flush = currentFlush;
    buffer = currentBuffer;

    if (promises) {
      const contentPromises: Array<Promise<unknown>> = [];
      const placeholderPromises: Array<
        Promise<unknown> & { isPlaceholder: true }
      > = [];
      for (const promise of promises!) {
        if (promise.isPlaceholder) {
          placeholderPromises.push(promise as Promise<unknown> & {
            isPlaceholder: true;
          });
        } else {
          contentPromises.push(promise);
        }
      }

      if (placeholderPromises.length) {
        (promises = currentPromises || []).push(...placeholderPromises);
      } else {
        promises = currentPromises;
      }

      if (contentPromises.length) {
        const currentOut = out;
        promises = promises || [];
        promises.push(
          Object.assign(
            Promise.all(contentPromises).then(() => {
              out = currentOut;
              buffer = tryContent;
              currentFlush();
              out = null;
            }),
            { isPlaceholder: true } as const
          )
        );
        renderPlaceholder();
        return;
      }
    }

    promises = currentPromises;
    buffer += tryContent;
  } else {
  }
}

function flushToStream() {
  out!.write(buffer);
  if (out!.flush) {
    out!.flush();
  }
  buffer = "";
}

function allSettled() {
  if (promises) {
    const promise = Promise.all(promises.map(toSuccessfulPromise));
    promises = null;
    return promise;
  }
}

function nonPlaceholders(
  tryPromises: Array<Promise<unknown> & { isPlaceholder?: true }> | null
) {
  if (tryPromises) {
    return tryPromises.filter(p => !p.isPlaceholder);
  } else {
    return [];
  }
}

function toSuccessfulPromise(promise: Promise<unknown>): Promise<void> {
  return promise.then(noop, noop);
}

function noop() {}
