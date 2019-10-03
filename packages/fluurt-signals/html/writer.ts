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

    try {
      let renderedPromises: typeof promises;
      try {
        renderer(input);
      } finally {
        flush();
        renderedPromises = promises;
        out = null;
        flush = null;
        promises = null;
      }

      if (renderedPromises) {
        await Promise.all(renderedPromises);
      }
    } catch (err) {
      stream.emit("error", err);
    } finally {
      stream.end();
    }
  };
}

export function write(data: string) {
  buffer += data;
}

export function fork<T extends unknown>(
  promise: Promise<T>,
  renderResult: (result: T) => void
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
        out = currentOut;
        buffer = bufferedAfter;
        currentFlush();
        out = null;
        resolved = true;
        throw err;
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

export function tryCatch(
  renderBody: () => void,
  renderError: (err: Error) => void
) {
  const currentOut = out!;
  const currentFlush = flush!;
  let err: Error | null = null;
  let currentPromises = promises;
  buffer += "<!--[ERROR_BOUNDARY]-->";

  try {
    promises = null;
    renderBody();
    if (promises) {
      currentPromises = currentPromises || [];
      currentPromises.push(
        Promise.all(promises).catch(asyncErr => {
          out = currentOut;
          flush = currentFlush;
          buffer = "";
          promises = null;
          renderError(asyncErr);
          flush();
          flush = null;
          out = null;
          return promises && Promise.all(promises);
        })
      );
    }
  } catch (_err) {
    err = _err;
  } finally {
    buffer += "<!--[END_ERROR_BOUNDARY]-->";
    promises = currentPromises;
    if (err) {
      renderError(err);
    }
  }
}

export function tryPlaceholder(
  renderBody: () => void,
  renderPlaceholder: () => void
) {
  const currentBuffer = buffer;
  const currentFlush = flush!;
  let resolved = false;
  let tryContent = "";
  buffer = "";
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      tryContent += buffer;
      buffer = "";
    }
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
            resolved = true;
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

function toSuccessfulPromise(promise: Promise<unknown>): Promise<void> {
  return promise.then(noop, noop);
}

function noop() {}
