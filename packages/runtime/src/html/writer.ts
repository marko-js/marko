import type { Writable } from "stream";
import { Context, setContext } from "../common/context";
import { Renderer, Scope, ScopeOffsets, HydrateSymbols } from "../common/types";
import reorderRuntime from "./reorder-runtime";
import { Serializer } from "./serializer";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

type MaybeFlushable = Writable & { flush?(): void };
let $_buffer: Buffer | null = null;
let $_stream: MaybeFlushable | null = null;
let $_flush: typeof flushToStream | null = null;
let $_promises: Array<Promise<unknown> & { isPlaceholder?: true }> | null =
  null;

const uids: WeakMap<MaybeFlushable, number> = new WeakMap();
const runtimeFlushed: WeakSet<MaybeFlushable> = new WeakSet();
const streamSerializers: WeakMap<MaybeFlushable, Serializer> = new WeakMap();

export function nextId() {
  const id = uids.get($_stream!)! + 1 || 0;
  uids.set($_stream!, id);
  return id;
}

const nullScope = new Proxy([], {
  set() {
    return false;
  },
}) as any as Scope;

export function createRenderer(renderer: Renderer, hydrateRoot?: boolean) {
  type Input = Parameters<Renderer>[0];
  return async (input: Input, stream: MaybeFlushable) => {
    $_buffer = createBuffer();
    $_stream = stream;
    $_flush = flushToStream;

    try {
      let renderedPromises: typeof $_promises;
      try {
        const scope = hydrateRoot ? (["ROOT"] as any as Scope) : nullScope;
        hydrateRoot && write(markScopeStart(scope));
        renderer(input, scope, ScopeOffsets.BEGIN_DATA);
        hydrateRoot && write(markScopeEnd(scope));
      } finally {
        renderedPromises = $_promises;
        $_flush();
        clearScope();
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
  $_buffer!.content += data;
}

export function writeCall(fnId: string, offset: number, scopeId: string) {
  $_buffer!.calls += `"${fnId}",${offset},"${scopeId}",`;
}

export function writeScope(scope: Scope) {
  $_buffer!.scopes = $_buffer!.scopes || {};
  $_buffer!.scopes[scope[ScopeOffsets.ID]] = scope;
}

export function fork<T>(
  promise: Promise<T>,
  renderResult: (result: T) => void
) {
  $_flush!();

  let resolved = false;
  let targetFlush = $_flush!;
  const forkedBuffer = createBuffer();

  $_promises = $_promises || [];
  $_promises.push(
    resolveWithScope(
      promise,
      (result) => {
        resolved = true;
        try {
          renderResult(result);
        } finally {
          mergeBuffers(forkedBuffer, $_buffer!);
          if ($_promises) {
            const originalTargetFlush = targetFlush;
            targetFlush = $_flush!;
            Promise.all($_promises).then(
              () => (targetFlush = originalTargetFlush)
            );
          }
        }
      },
      (err) => {
        resolved = true;
        $_buffer = forkedBuffer;
        $_flush = targetFlush;
        throw err;
      }
    )
  );

  $_flush = () => {
    if (resolved) {
      targetFlush();
    } else {
      mergeBuffers($_buffer!, forkedBuffer);
    }
  };
}

export function tryCatch(
  renderBody: () => void,
  renderError: (err: Error) => void
) {
  const id = nextId();
  let err: Error | null = null;

  const originalPromises = $_promises;
  const originalBuffer = $_buffer!;
  const originalFlush = $_flush!;
  const tryBuffer = createBuffer();

  $_flush = () => {
    $_buffer = originalBuffer;
    $_flush = originalFlush;
    markReplaceStart(id);
    mergeBuffers(tryBuffer, $_buffer);
    $_flush();
  };

  try {
    $_buffer = tryBuffer;
    $_promises = null;
    renderBody();
  } catch (_err) {
    err = _err as Error;
  } finally {
    const childPromises = $_promises;
    $_promises = originalPromises;

    if (err) {
      $_buffer = originalBuffer;
      $_flush = originalFlush;
      renderError(err);
    } else if (!childPromises) {
      $_buffer = originalBuffer;
      $_flush = originalFlush;
      mergeBuffers(tryBuffer, $_buffer);
    } else {
      markReplaceEnd(id);
      $_promises = $_promises || [];
      $_promises.push(
        resolveWithScope(Promise.all(childPromises), null, (asyncErr) => {
          renderReplacement(renderError, asyncErr, id);
        })
      );
    }
  }
}

export function tryPlaceholder(
  renderBody: () => void,
  renderPlaceholder: () => void
) {
  const originalBuffer = $_buffer!;
  const originalPromises = $_promises;
  const originalFlush = $_flush!;
  const asyncBuffer = createBuffer();

  let resolved = false;
  const targetFlush = originalFlush;
  $_flush = () => {
    if (resolved) {
      targetFlush();
    } else {
      mergeBuffers($_buffer!, asyncBuffer);
    }
  };
  $_buffer = createBuffer();
  $_promises = null;

  renderBody();
  $_flush();

  const childPromises = $_promises!;
  $_buffer = originalBuffer;
  $_promises = originalPromises;
  $_flush = originalFlush;

  if (childPromises) {
    const contentPromises: Array<Promise<unknown>> = [];
    const placeholderPromises: Array<
      Promise<unknown> & { isPlaceholder: true }
    > = [];
    for (const promise of childPromises) {
      if (promise.isPlaceholder) {
        placeholderPromises.push(
          promise as Promise<unknown> & {
            isPlaceholder: true;
          }
        );
      } else {
        contentPromises.push(promise);
      }
    }

    if (placeholderPromises.length) {
      ($_promises = originalPromises || []).push(...placeholderPromises);
    } else {
      $_promises = originalPromises;
    }

    if (contentPromises.length) {
      const id = nextId();
      $_promises = $_promises || [];
      $_promises.push(
        Object.assign(
          resolveWithScope(Promise.all(contentPromises), () => {
            resolved = true;
            renderReplacement(mergeBuffers, asyncBuffer, id);
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

  mergeBuffers(asyncBuffer, originalBuffer);
}

const lastIndex = new WeakMap();
export function markScopeOffset(index: number, scope: Scope) {
  const offset = index - (lastIndex.get(scope) || 0);
  lastIndex.set(scope, index);
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    return `<!${runtimeId}${HydrateSymbols.SCOPE_OFFSET}${offset} ${
      scope[ScopeOffsets.ID]
    } ${index}>`;
  }
  return `<!${runtimeId}${HydrateSymbols.SCOPE_OFFSET}${offset}>`;
}

export function markScopeStart(scope: Scope) {
  return `<!${runtimeId}${HydrateSymbols.SCOPE_START}${
    scope[ScopeOffsets.ID]
  }>`;
}

export function markScopeEnd(scope: Scope) {
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    return `<!${runtimeId}${HydrateSymbols.SCOPE_END}${
      scope[ScopeOffsets.ID]
    }>`;
  }
  return `<!${runtimeId}${HydrateSymbols.SCOPE_END}>`;
}

export function markReplaceStart(id: number) {
  return ($_buffer!.content += `<!${marker(id)}>`);
}

export function markReplaceEnd(id: number) {
  return ($_buffer!.content += `<!${marker(id)}/>`);
}

function flushToStream() {
  if ($_buffer!.calls || $_buffer!.scopes) {
    let isFirstFlush;
    let serializer = streamSerializers.get($_stream!);
    if ((isFirstFlush = !serializer)) {
      streamSerializers.set($_stream!, (serializer = new Serializer()));
    }
    $_buffer!.content += `<script>${
      isFirstFlush
        ? `(${runtimeId + HydrateSymbols.VAR_HYDRATE}=[])`
        : runtimeId + HydrateSymbols.VAR_HYDRATE
    }.push(${serializer.stringify($_buffer!.scopes)},[${
      $_buffer!.calls
    }])</script>`;
  }
  $_stream!.write($_buffer!.content);
  if ($_stream!.flush) {
    $_stream!.flush();
  }
  clearBuffer($_buffer!);
}

function renderReplacement<T>(render: (data: T) => void, data: T, id: number) {
  let runtimeCall = runtimeId + HydrateSymbols.VAR_REORDER_RUNTIME;
  if (!runtimeFlushed.has($_stream!)) {
    runtimeCall = `(${runtimeCall}=${reorderRuntimeString})`;
    runtimeFlushed.add($_stream!);
  }
  $_buffer!.content += `<t id="${marker(id)}">`;
  render(data);
  $_buffer!.content += `</t><script>${runtimeCall}(${id})</script>`;
}

function marker(id: number) {
  return `${runtimeId}$${id}`;
}

interface Buffer {
  content: string;
  calls: string;
  scopes: Record<string, unknown[]> | null;
}

function createBuffer() {
  return {
    content: "",
    calls: "",
    scopes: null,
  } as Buffer;
}

function mergeBuffers(source: Buffer, target: Buffer = $_buffer!) {
  target.content += source.content;
  target.calls += source.calls;
  if (source.scopes) {
    if (target.scopes) {
      Object.assign(target.scopes, source.scopes);
    } else {
      target.scopes = source.scopes;
    }
  }
  clearBuffer(source);
}

function clearBuffer(buffer: Buffer) {
  buffer.content = "";
  buffer.calls = "";
  buffer.scopes = null;
}

function clearScope() {
  $_buffer = $_promises = $_stream = $_flush = null;
  setContext(null);
}

function resolveWithScope<T>(
  promise: Promise<T>,
  onResolve: null | ((r: T) => unknown),
  onReject?: (e: Error) => unknown
) {
  const originalStream = $_stream;
  const originalBuffer = $_buffer;
  const originalFlush = $_flush;
  const originalContext = Context;

  return promise.then(
    onResolve &&
      ((result) => {
        $_stream = originalStream;
        $_buffer = originalBuffer;
        $_flush = originalFlush;

        try {
          setContext(originalContext);
          onResolve(result);
          return $_promises && Promise.all($_promises);
        } finally {
          $_flush!();
          clearScope();
        }
      }),
    onReject &&
      ((error) => {
        $_stream = originalStream;
        $_buffer = originalBuffer;
        $_flush = originalFlush;

        try {
          setContext(originalContext);
          onReject(error);
          return $_promises && Promise.all($_promises);
        } finally {
          $_flush!();
          clearScope();
        }
      })
  );
}
