import { Writable } from "stream";
import { Renderer } from "../common/types";

type MaybeFlushable = Writable & { flush?(): void };

let out: MaybeFlushable | null = null;
let buffer: string | null = null;
let flush: typeof flushToStream | null = null;
let promises: Array<Promise<unknown>> | null = null;

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

function flushToStream() {
  out!.write(buffer);
  if (out!.flush) {
    out!.flush();
  }
  buffer = "";
}

function allSettled() {
  if (promises) {
    const promise = Promise.all(promises!.map(toSuccessfulPromise));
    promises = null;
    return promise;
  }
}

function toSuccessfulPromise(promise: Promise<unknown>): Promise<void> {
  return promise.then(noop, noop);
}

function noop() {}
