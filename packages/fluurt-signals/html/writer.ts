import { Writable } from "stream";
import { Renderer } from "../common/types";

type MaybeFlushable = Writable & { flush?(): void };

let buffer: string = "";
let out: MaybeFlushable | null = null;
let flush: typeof flushToStream | null = null;
let promises: Array<Promise<unknown> & { isPlaceholder?: true }> | null = null;

export function createRenderer(renderer: Renderer) {
  type Input = Parameters<Renderer>[0];
  return async (input: Input, stream: MaybeFlushable) => {
    out = stream;
    flush = flushToStream;

    try {
      let renderedPromises: typeof promises;
      try {
        renderer(input);
      } finally {
        renderedPromises = promises;
        flush();
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
  const currentPromises = promises;
  let currentFlush = flush!;
  let resolved = false;
  currentFlush();
  out = currentOut;

  let bufferedAfter: string = "";
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      bufferedAfter += buffer;
      cleanup();
    }
  };

  promises = currentPromises || [];
  promises.push(
    promise.then(
      async result => {
        buffer = "";
        resolved = true;
        out = currentOut;
        flush = currentFlush;

        try {
          renderResult(result);
        } finally {
          buffer += bufferedAfter;
          const previousFlush = currentFlush;
          const childPromises = promises;
          currentFlush = flush;
          flush();

          if (childPromises) {
            await Promise.all(childPromises);
          }

          currentFlush = previousFlush;
        }
      },
      err => {
        resolved = true;
        out = currentOut;
        buffer = bufferedAfter;
        currentFlush();
        throw err;
      }
    )
  );
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

          try {
            renderError(asyncErr);
            return promises && Promise.all(promises);
          } finally {
            flush();
          }
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
  const currentOut = out!;
  const currentBuffer = buffer;
  const currentFlush = flush!;
  let resolved = false;
  let tryContent = "";
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      tryContent += buffer;
      cleanup();
    }
  };

  const currentPromises = promises;
  promises = null;
  buffer = "";
  renderBody();
  const renderedPromises: typeof currentPromises = promises;
  flush();
  out = currentOut;
  flush = currentFlush;
  buffer = currentBuffer;

  if (renderedPromises) {
    const contentPromises: Array<Promise<unknown>> = [];
    const placeholderPromises: Array<
      Promise<unknown> & { isPlaceholder: true }
    > = [];
    for (const promise of renderedPromises!) {
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
      promises = promises || [];
      promises.push(
        Object.assign(
          Promise.all(contentPromises).then(() => {
            resolved = true;
            out = currentOut;
            buffer = tryContent;
            currentFlush();
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

  cleanup();
}

function cleanup() {
  out = flush = promises = null;
  buffer = "";
}
