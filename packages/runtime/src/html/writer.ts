import type { Writable } from "stream";
import { Context, setContext, pushContext } from "../common/context";
import { Renderer, HydrateSymbols } from "../common/types";
import reorderRuntime from "./reorder-runtime";
import { Serializer } from "./serializer";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

type MaybeFlushable = Writable & { flush?(): void };
type PartialScope = Record<string | number, unknown> | unknown[];
let $_buffer: Buffer | null = null;
let $_stream: MaybeFlushable | null = null;
let $_flush: typeof flushToStream | null = null;
let $_promises: Array<Promise<unknown> & { isPlaceholder?: true }> | null =
  null;

let $_ids: {
  scope: number;
  tag: number;
  placeholder: number;
} | null = null;

const runtimeFlushed = new WeakSet<MaybeFlushable>();
const streamSerializers = new WeakMap<MaybeFlushable, Serializer>();

export function nextTagId() {
  return "s" + $_ids!.tag++;
}

export function nextPlaceholderId() {
  return $_ids!.placeholder++;
}

export function createRenderer(renderer: Renderer) {
  type Input = Parameters<Renderer>[0];
  return async (
    input: Input = {},
    context: Record<string, unknown> = {},
    stream: MaybeFlushable
  ) => {
    $_buffer = createBuffer();
    $_stream = stream;
    $_flush = flushToStream;
    $_ids = { scope: 0, tag: 0, placeholder: 0 };
    pushContext("$", context);

    try {
      let renderedPromises: typeof $_promises;
      try {
        renderer(input);
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

const TARGET_BUFFER_SIZE = 64000;
export function maybeFlush() {
  if (
    $_flush === flushToStream &&
    $_buffer!.content.length > TARGET_BUFFER_SIZE
  ) {
    flushToStream();
  }
}

function flushToStream() {
  writeHydrateScript();
  $_stream!.write($_buffer!.content);
  if ($_stream!.flush) {
    $_stream!.flush();
  }
  clearBuffer($_buffer!);
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
  const id = nextPlaceholderId();
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
      const id = nextPlaceholderId();
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

/* Async */

export function markReplaceStart(id: number) {
  return ($_buffer!.content += `<!${marker(id)}>`);
}

export function markReplaceEnd(id: number) {
  return ($_buffer!.content += `<!${marker(id)}/>`);
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

/* Hydration */

export function nextScopeId() {
  return $_ids!.scope++;
}

export function writeHydrateCall(scopeId: number, fnId: string) {
  $_buffer!.calls += `"${fnId}",${scopeId},`;
}

export function writeHydrateScope(scopeId: number, scope: PartialScope) {
  $_buffer!.scopes = $_buffer!.scopes || {};
  $_buffer!.scopes[scopeId] = scope;
}

export function markHydrateNode(scopeId: number, index: number) {
  // TODO: can we only include the scope id when it differs from the prvious node marker?
  return `<!${runtimeId}${HydrateSymbols.NODE}${index} ${scopeId}>`;
}

export function markHydrateSectionStart(scopeId: number) {
  return `<!${runtimeId}${HydrateSymbols.SECTION_START}${scopeId}>`;
}

export function markHydrateSectionEnd(scopeId: number) {
  if (MARKO_DEBUG) {
    return `<!${runtimeId}${HydrateSymbols.SECTION_END}${scopeId}>`;
  }
  return `<!${runtimeId}${HydrateSymbols.SECTION_END}>`;
}

function writeHydrateScript() {
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
}

interface Buffer {
  content: string;
  calls: string;
  scopes: Record<string, PartialScope> | null;
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
  $_buffer = $_promises = $_stream = $_flush = $_ids = null;
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
  const originalIds = $_ids;
  const originalContext = Context;

  return promise.then(
    onResolve &&
      ((result) => {
        $_stream = originalStream;
        $_buffer = originalBuffer;
        $_flush = originalFlush;
        $_ids = originalIds;

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
        $_ids = originalIds;

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
