import { Writable } from "stream";
import { Renderer } from "../common/types";
import reorderRuntime from "./reorder-runtime";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

interface ComponentEntry {
  markerId: number;
  componentId: string;
  input: Record<string, unknown>;
}

type MaybeFlushable = Writable & { flush?(): void };
let buffer: string = "";
let out: MaybeFlushable | null = null;
let flush: typeof flushToStream | null = null;
let promises: Array<Promise<unknown> & { isPlaceholder?: true }> | null = null;
let componentLookup: ComponentEntry[] = [];

const uids: WeakMap<MaybeFlushable, number> = new WeakMap();
const runtimeFlushed: WeakSet<MaybeFlushable> = new WeakSet();

export function nextId() {
  const id = uids.get(out!)! + 1 || 0;
  uids.set(out!, id);
  return id;
}

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

  // Child component lookup
  currentFlush();
  out = currentOut;

  let bufferedAfter: string = "";
  const bufferedComponents: ComponentEntry[] = [];
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      bufferedAfter += buffer;
      if (componentLookup.length > 0) {
        componentLookup.forEach(entry => {
          bufferedComponents.push(entry);
        });
      }
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
          if (bufferedComponents.length > 0) {
            bufferedComponents.forEach(entry => {
              componentLookup.push(entry);
            });
            bufferedComponents.length = 0;
          }
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
  const id = nextId();
  const currentOut = out!;
  const currentFlush = flush!;
  let err: Error | null = null;
  let currentPromises = promises;

  markReplaceStart(id);

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
            renderReplacement(renderError, asyncErr, id);
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
    markReplaceEnd(id);
    promises = currentPromises;
    if (err) {
      renderReplacement(renderError, err, id);
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
  const currentComponents = componentLookup;
  let resolved = false;
  let tryContent = "";
  const tryComponents: typeof componentLookup = [];
  flush = () => {
    if (resolved) {
      currentFlush();
    } else {
      tryContent += buffer;
      if (componentLookup.length) {
        componentLookup.forEach(entry => {
          tryComponents.push(entry);
        });
      }
      cleanup();
    }
  };

  const currentPromises = promises;
  componentLookup = [];
  promises = null;
  buffer = "";
  renderBody();
  const renderedPromises: typeof currentPromises = promises;
  flush();
  out = currentOut;
  flush = currentFlush;
  buffer = currentBuffer;
  componentLookup = currentComponents;

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
      const id = nextId();
      promises = promises || [];
      promises.push(
        Object.assign(
          Promise.all(contentPromises).then(() => {
            resolved = true;
            out = currentOut;
            if (tryComponents.length) {
              tryComponents.forEach(entry => {
                componentLookup.push(entry);
              });
            }
            renderReplacement(write, tryContent, id);
            currentFlush();
          }),
          { isPlaceholder: true } as const
        )
      );
      markReplaceStart(id);
      renderPlaceholder();
      markReplaceEnd(id);
      return;
    }
  }

  if (tryComponents.length) {
    tryComponents.forEach(entry => {
      componentLookup.push(entry);
    });
  }
  promises = currentPromises;
  buffer += tryContent;
}

export function markReplaceStart(id: number) {
  return (buffer += `<!${marker(id)}>`);
}

export function markReplaceEnd(id: number) {
  return (buffer += `<!${marker(id)}/>`);
}

export function addComponentToInit(
  id: number,
  inputValue: Record<string, unknown>,
  __filename: string
) {
  componentLookup.push({
    markerId: id,
    componentId: __filename,
    input: inputValue
  });
}

function flushToStream() {
  if (componentLookup.length > 0) {
    buffer += `<script>${JSON.stringify(componentLookup)}</script>`;
  }
  out!.write(buffer);
  if (out!.flush) {
    out!.flush();
  }

  cleanup();
}

function cleanup() {
  out = flush = promises = null;
  componentLookup.length = 0;
  buffer = "";
}

function renderReplacement<T>(render: (data: T) => void, data: T, id: number) {
  let runtimeCall = `${runtimeId}$r`;
  if (!runtimeFlushed.has(out!)) {
    runtimeCall = `(${runtimeCall}=${reorderRuntimeString})`;
    runtimeFlushed.add(out!);
  }
  buffer += `<t id="${marker(id)}">`;
  render(data);
  buffer += `</t><script>${runtimeCall}(${id})</script>`;
}

function marker(id: number) {
  return `${runtimeId}$${id}`;
}
