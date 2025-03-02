import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type { RenderResult, Template, TemplateInput } from "../common/types";
import { registerContent } from "./dynamic-tag";
import {
  Boundary,
  Chunk,
  flushChunk,
  offTick,
  prepareChunk,
  queueTick,
  State,
} from "./writer";

export type ServerRenderer = ((...args: unknown[]) => unknown) & {
  ___id?: string;
};

export const createTemplate = (
  templateId: string,
  renderer: ServerRenderer,
) => {
  (renderer as unknown as Template).render = render;
  (renderer as unknown as any)._ = renderer; // This is added exclusively for the compat layer, maybe someday it can be removed.

  if (MARKO_DEBUG) {
    (renderer as unknown as Template).mount = () => {
      throw new Error(
        `mount() is not implemented for the HTML compilation of a Marko template`,
      );
    };
  }

  return registerContent(templateId, renderer) as unknown as Template;
};

function render(this: Template & ServerRenderer, input: TemplateInput = {}) {
  let { $global } = input;
  if ($global) {
    ({ $global, ...input } = input);
    $global = {
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
      ...$global,
    };
  } else {
    $global = {
      runtimeId: DEFAULT_RUNTIME_ID,
      renderId: DEFAULT_RENDER_ID,
    };
  }

  const head = new Chunk(
    new Boundary(new State($global as State["$global"]), $global.signal),
    null,
    null,
  );
  head.render(this, input);
  return new ServerRenderResult(head);
}

class ServerRenderResult implements RenderResult {
  #head: Chunk | null;
  #cachedPromise: Promise<string> | null = null;
  constructor(head: Chunk) {
    this.#head = head;
  }

  [Symbol.asyncIterator]() {
    type Iter = { value: string; done: boolean };
    let resolve: (value: Iter) => void;
    let reject: (reason: unknown) => void;
    let value = "";
    let done = false;
    let aborted = false;
    let reason: unknown;
    const boundary = this.#read(
      (html) => {
        value += html;
        if (resolve) {
          resolve({ value, done });
          value = "";
        }
      },
      (err) => {
        aborted = true;
        reason = err;

        if (reject) {
          reject(err);
        }
      },
      () => {
        done = true;
        if (resolve) {
          resolve({ value, done: !value });
          value = "";
        }
      },
    );

    return {
      next() {
        if (aborted) {
          return Promise.reject(reason);
        } else if (value) {
          const result = { value, done: false };
          value = "";
          return Promise.resolve(result);
        } else if (done) {
          return Promise.resolve({ value: "", done });
        } else {
          return new Promise(exec);
        }
      },
      throw(error: unknown) {
        if (!(done || aborted)) {
          boundary?.abort(error);
        }

        return Promise.resolve({
          value: "",
          done: true,
        } as const);
      },
      return(value: unknown) {
        if (!(done || aborted)) {
          boundary?.abort(new Error("Iterator returned before consumed."));
        }

        return Promise.resolve({
          value,
          done: true,
        } as const);
      },
    };

    function exec(_resolve: typeof resolve, _reject: typeof reject) {
      resolve = _resolve;
      reject = _reject;
    }
  }

  pipe(stream: {
    write: (chunk: string) => void;
    end: () => void;
    flush?: () => void;
    emit?: (eventName: PropertyKey, ...args: any[]) => any;
  }) {
    this.#read(
      (html) => {
        stream.write(html);
      },
      (err) => {
        const socket = ("socket" in stream && stream.socket) as
          | Record<PropertyKey, unknown>
          | undefined
          | false;
        if (socket && typeof socket.destroySoon === "function") {
          socket.destroySoon();
        }

        if (!stream.emit?.("error", err)) {
          throw err;
        }
      },
      () => {
        stream.end();
      },
    );
  }

  toReadable() {
    return new ReadableStream({
      start: (ctrl) => {
        this.#read(
          (html) => {
            ctrl.enqueue(html);
          },
          (err) => {
            ctrl.error(err);
          },
          () => {
            ctrl.close();
          },
        );
      },
    });
  }

  then<TResult1 = string, TResult2 = never>(
    onfulfilled?:
      | ((value: string) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Promise<TResult1 | TResult2> {
    return this.#promise().then(onfulfilled, onrejected);
  }

  catch<TResult = never>(
    onrejected?:
      | ((reason: unknown) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Promise<string | TResult> {
    return this.#promise().catch(onrejected);
  }

  finally(onfinally?: (() => void) | undefined | null): Promise<string> {
    return this.#promise().finally(onfinally);
  }

  #promise() {
    return (this.#cachedPromise ||= new Promise<string>((resolve, reject) => {
      let head = this.#head!;
      this.#head = null;

      if (!head) {
        return reject(new Error("Cannot read from a consumed render result"));
      }

      const { boundary } = head;
      (boundary.onNext = () => {
        if (boundary.signal.aborted) {
          boundary.onNext = NOOP;
          reject(boundary.signal.reason);
        } else if (boundary.done) {
          head = prepareChunk(head);
          // `prepareChunk` will call the serializer which could
          // have new promises, the boundary may no longer be `done`.
          if (boundary.done) {
            resolve(flushChunk(head, true));
          }
        }
      })();
    }));
  }

  #read(
    onWrite: (html: string) => void,
    onAbort: (err: unknown) => void,
    onClose: () => void,
  ) {
    let tick = true;
    let head = this.#head!;
    this.#head = null;

    if (!head) {
      onAbort(new Error("Cannot read from a consumed render result"));
      return;
    }

    const { boundary } = head;
    const onNext = (boundary.onNext = (write?: boolean) => {
      if (boundary.signal.aborted) {
        if (!tick) offTick(onNext);
        boundary.onNext = NOOP;
        onAbort(boundary.signal.reason);
      } else {
        if (write || boundary.done) {
          head = prepareChunk(head);
        }

        // `prepareChunk` will call the serializer which could
        // have new promises, the boundary may no longer be `done`.
        if (write || boundary.done) {
          const html = flushChunk(head, boundary.done);
          if (html) onWrite(html);
          if (boundary.done) {
            if (!tick) offTick(onNext);
            onClose();
          } else {
            tick = true;
          }
        } else if (tick) {
          tick = false;
          queueTick(onNext);
        }
      }
    });

    onNext();
    return boundary;
  }

  toString() {
    const head = this.#head;
    if (!head) throw new Error("Cannot read from a consumed render result");
    if (head.next) throw new Error("Cannot fork in sync mode");
    this.#head = null;
    return flushChunk(prepareChunk(head), true);
  }
}

function NOOP() {}
