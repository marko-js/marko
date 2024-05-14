import type {
  Context,
  Template,
  Input,
  TemplateInstance,
  Renderer,
  RenderResult,
} from "../common/types";
import { type Writable, createRenderFn, register } from "./writer";

export const createTemplate = (renderer: Renderer, id = "") =>
  register(new ServerTemplate(renderer), id);

interface Deferred<T> {
  promise: Promise<T>;
  resolve(value: T): void;
  reject(reason?: any): void;
}

function deferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void;
  let reject!: (reason?: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

async function stringFromAsync(
  iterable: AsyncIterable<string>,
): Promise<string> {
  let str = "";
  for await (const part of iterable) {
    str += part;
  }
  return str;
}

class ServerRenderResult implements RenderResult {
  #iterable: AsyncIterableIterator<string>;
  #promise: Promise<string> | undefined;

  constructor(iterable: AsyncIterableIterator<string>) {
    this.#iterable = iterable;
  }

  [Symbol.asyncIterator]() {
    return this.#iterable;
  }

  [Symbol.toStringTag] = "RenderResult";

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
    return (this.#promise ||= stringFromAsync(this.#iterable)).then(
      onfulfilled,
      onrejected,
    );
  }

  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Promise<string | TResult> {
    return this.then(undefined, onrejected);
  }

  finally(onfinally?: (() => void) | undefined | null): Promise<string> {
    return this.then(undefined, undefined).finally(onfinally);
  }

  toReadable() {
    return new ReadableStream({
      start: async (controller) => {
        try {
          for await (const chunk of this.#iterable) {
            if (chunk) {
              controller.enqueue(chunk);
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });
  }
}

export class ServerTemplate implements Template {
  #writeTo: (writable: Writable, input?: Input, context?: Context) => void;

  public _: Renderer;

  constructor(renderer: Renderer) {
    this._ = renderer;
    this.#writeTo = createRenderFn(renderer);
  }

  mount(): TemplateInstance {
    throw new Error(
      `mount() is not implemented for the HTML compilation of a Marko template`,
    );
  }

  render(templateInput: Input = {}): RenderResult {
    const { $global, ...input } = templateInput;
    let buffer = "";
    let done = false;
    let pending = deferred<IteratorResult<string>>();

    this.#writeTo(
      {
        write(data: string) {
          buffer += data;
        },
        flush() {
          pending.resolve({
            value: buffer,
            done: false,
          });
          buffer = "";
          pending = deferred();
        },
        emit(name, error: Error) {
          if (name === "error") {
            pending.reject(error);
          }
        },
        end() {
          done = true;
          pending.resolve({
            value: "",
            done,
          });
        },
      },
      input,
      $global as Context,
    );

    return new ServerRenderResult({
      [Symbol.asyncIterator]() {
        return this;
      },
      async next() {
        if (buffer || done) {
          const value = buffer;
          buffer = "";
          return { value, done };
        }
        return pending.promise;
      },
    });
  }
}
