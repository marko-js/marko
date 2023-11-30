import {
  Context,
  popContext,
  pushContext,
  setContext,
} from "../common/context";
import { type Accessor, type Renderer, ResumeSymbols } from "../common/types";
import reorderRuntime from "./reorder-runtime";
import { Serializer } from "./serializer";

const runtimeId = ResumeSymbols.DEFAULT_RUNTIME_ID;
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

type PartialScope = Record<string | number, unknown> | unknown[];

export interface Writable {
  write(data: string): void;
  end(): void;
  flush?(): void;
  emit(name: string, data: unknown): void;
}

interface Buffer {
  stream?: Writable;
  pending: boolean;
  flushed: boolean;
  disabled: boolean;
  next: Buffer | null;
  prev: Buffer | null;
  content: string;
  calls: string;
  scopes: Record<string, PartialScope> | null;
  onAsync?: (complete: boolean, isPlaceholder?: boolean) => void;
  onReject?: (err: Error) => void;
}

interface StreamData {
  scopeId: number;
  tagId: number;
  placeholderId: number;
  scopeLookup: Map<number, PartialScope>;
  runtimeFlushed: boolean;
  serializer?: Serializer;
}

let $_buffer: Buffer | null = null;
export let $_streamData: StreamData | null = null;

export function createRenderFn(renderer: Renderer) {
  type Input = Parameters<Renderer>[0];
  return (
    stream: Writable,
    input: Input = {},
    context: Record<string, unknown> = {},
    streamState: Partial<StreamData> = {}
  ) => {
    let remainingChildren = 1;

    const originalBuffer = $_buffer;
    const originalStreamState = $_streamData;
    const reject = (err: Error) => {
      stream.emit("error", err);
    };
    const async = (complete: boolean) => {
      remainingChildren += complete ? -1 : 1;
      if (!remainingChildren) {
        setImmediate(() => stream.end());
      }
    };

    $_buffer = createInitialBuffer(stream);
    $_streamData = createStreamState(streamState);
    pushContext("$", context);

    $_buffer.onReject = reject;
    $_buffer.onAsync = async;

    try {
      scheduleFlush();
      renderer(input);
      async(true);
    } catch (err) {
      reject(err as Error);
    } finally {
      $_buffer = originalBuffer;
      $_streamData = originalStreamState;
      popContext();
    }
  };
}

export function write(data: string) {
  $_buffer!.content += data;
}

const TARGET_BUFFER_SIZE = 64000;
export function maybeFlush() {
  if (!$_buffer!.prev && $_buffer!.content.length > TARGET_BUFFER_SIZE) {
    // TODO: figure out if we can do this
    // The idea is to flush in a `<for>` if the buffer gets too large.
    //
    // However, a synchronous flush will break the owner scope reference
    //   as things are currently implemented: the owner scope object will
    //   not have been created if you flush in a scope that closes over it
    // However, a scheduled flush will be too late:
    //   the entire contents of the `<for>` will have been written
    //   by the time the flush occurs defeating the purpose
    // Additionally, because we aren't eagerly merging buffers,
    //   buffer.content.length isn't necessarily 100% accurate
  }
}

export function scheduleFlush() {
  const buffer = $_buffer!;
  const streamState = $_streamData!;
  if (!buffer.prev) {
    setImmediate(() => flushToStream(buffer, streamState));
  }
}

function flushToStream(buffer: Buffer, streamState: StreamData) {
  while (buffer.prev) buffer = buffer.prev;
  if (buffer.disabled) return;

  const stream = buffer.stream!;

  let { content, calls, scopes } = buffer;
  buffer.flushed = true;
  while (!buffer.pending && buffer.next) {
    // TODO: we shouldn't need to clear here
    clearBuffer(buffer);
    buffer = buffer.next;
    buffer.prev = null;
    buffer.flushed = true;
    content += buffer.content;
    calls += buffer.calls;
    if (buffer.scopes) {
      if (scopes) {
        Object.assign(scopes, buffer.scopes);
      } else {
        scopes = buffer.scopes;
      }
    }
  }
  const data = content + getResumeScript(calls, scopes, streamState);

  if (data) {
    stream.write(data);
    stream.flush?.();
  }

  // TODO: we should only have to call clearBuffer if the buffer is pending
  // (which means it will flush again in the future). Otherwise, it can just
  // be garbage collected.
  clearBuffer(buffer);
}

function createStreamState(state: Partial<StreamData>): StreamData {
  state.scopeId ??= 0;
  state.tagId ??= 0;
  state.placeholderId ??= 0;
  state.scopeLookup ??= new Map();
  state.runtimeFlushed ??= false;
  return state as StreamData;
}

function createNextBuffer(prevBuffer: Buffer): Buffer {
  const newBuffer = {
    stream: prevBuffer.stream,
    pending: false,
    flushed: false,
    disabled: false,
    prev: prevBuffer,
    next: prevBuffer?.next ?? null,
    content: "",
    calls: "",
    scopes: null,
    onReject: prevBuffer.onReject,
    onAsync: prevBuffer.onAsync,
  };
  if (prevBuffer.next) {
    prevBuffer.next.prev = prevBuffer;
  }
  prevBuffer.next = newBuffer;
  return newBuffer;
}

function createDetatchedBuffer(parentBuffer: Buffer): Buffer {
  return {
    stream: parentBuffer.stream,
    pending: false,
    flushed: false,
    disabled: true,
    prev: null,
    next: null,
    content: "",
    calls: "",
    scopes: null,
    onReject: parentBuffer.onReject,
    onAsync: parentBuffer.onAsync,
  };
}

function createInitialBuffer(stream: Writable): Buffer {
  return {
    stream,
    pending: false,
    flushed: false,
    disabled: false,
    prev: null,
    next: null,
    content: "",
    calls: "",
    scopes: null,
    onReject: undefined,
    onAsync: undefined,
  };
}

export async function fork<T>(
  promise: Promise<T>,
  renderResult: (result: T) => void
) {
  const originalBuffer = $_buffer!;
  const originalStreamState = $_streamData!;
  const originalContext = Context;

  scheduleFlush();
  $_buffer!.pending = true;
  $_buffer!.onAsync?.(false);
  $_buffer = createNextBuffer($_buffer!);

  try {
    let result;
    try {
      result = await promise;
      originalBuffer!.pending = false;
    } finally {
      $_buffer = originalBuffer;
      $_streamData = originalStreamState;
      setContext(originalContext);
      scheduleFlush();
    }
    renderResult(result);
  } catch (err) {
    $_buffer!.onReject?.(err as Error);
  } finally {
    $_buffer!.onAsync?.(true);
    clearScope();
  }
}

export function tryCatch(
  renderBody: () => void,
  renderError: (err: Error) => void
) {
  const id = nextPlaceholderId();
  let err: Error | null = null;

  const originalBuffer = $_buffer!;
  const tryBuffer = createDetatchedBuffer(originalBuffer);
  let finalTryBuffer: Buffer;

  tryBuffer.onReject = (asyncErr) => {
    const errorBuffer = createDetatchedBuffer(originalBuffer);
    $_buffer = errorBuffer;
    renderError(asyncErr);
    const finalErrorBuffer = $_buffer;
    replaceBuffers(
      id,
      tryBuffer,
      finalTryBuffer,
      errorBuffer,
      finalErrorBuffer
    );
  };

  try {
    $_buffer = tryBuffer;
    renderBody();
  } catch (_err) {
    err = _err as Error;
  } finally {
    if (err) {
      $_buffer = originalBuffer;
      renderError(err);
    } else {
      tryBuffer.disabled = false;
      originalBuffer.next = tryBuffer;
      tryBuffer.prev = originalBuffer;
      if ($_buffer !== tryBuffer) {
        tryBuffer.content = `<!${marker(id)}>` + tryBuffer.content;
        markReplaceEnd(id);
        finalTryBuffer = $_buffer!;
        $_buffer = createNextBuffer(finalTryBuffer);
      }
      $_buffer.onReject = originalBuffer.onReject;
    }
  }
}

export function tryPlaceholder(
  renderBody: () => void,
  renderPlaceholder: () => void
) {
  const originalBuffer = $_buffer!;
  const asyncBuffer = createDetatchedBuffer(originalBuffer);
  let id: number,
    placeholderBuffer: Buffer,
    finalPlaceholderBuffer: Buffer,
    finalAsyncBuffer: Buffer;
  let remainingChildren = 0;
  let remainingPlaceholders = 0;

  asyncBuffer.onAsync = (complete: boolean, isPlaceholder?: boolean) => {
    const delta = complete ? -1 : 1;
    if (isPlaceholder) {
      remainingPlaceholders += delta;
    } else {
      remainingChildren += delta;
    }
    if (!remainingChildren) {
      if (!isPlaceholder) {
        // last child has finished, replace the placeholder
        // however, the replacement content may contain its own placeholder(s)
        replaceBuffers(
          id,
          placeholderBuffer,
          finalPlaceholderBuffer,
          asyncBuffer,
          finalAsyncBuffer
        );
      }
      if (!remainingPlaceholders) {
        // all async content under this placeholder is complete
        originalBuffer.onAsync?.(true, true);
      }
    }
  };

  $_buffer = asyncBuffer;
  renderBody();

  if ($_buffer === asyncBuffer) {
    originalBuffer.next = asyncBuffer;
    asyncBuffer.prev = originalBuffer;
    asyncBuffer.disabled = false;
    asyncBuffer.onAsync = originalBuffer.onAsync;
  } else {
    id = nextPlaceholderId();
    placeholderBuffer = createNextBuffer(originalBuffer);
    finalAsyncBuffer = $_buffer;
    $_buffer = placeholderBuffer;
    markReplaceStart(id);
    renderPlaceholder();
    markReplaceEnd(id);
    finalPlaceholderBuffer = $_buffer;
    $_buffer = createNextBuffer(finalPlaceholderBuffer);
    originalBuffer.onAsync?.(false, true);
  }
}

function clearBuffer(buffer: Buffer) {
  buffer.content = "";
  buffer.calls = "";
  buffer.scopes = null;
}

function clearScope() {
  $_buffer = $_streamData = null;
  setContext(null);
}

/* Async */

export function markReplaceStart(id: number) {
  return ($_buffer!.content += `<!${marker(id)}>`);
}

export function markReplaceEnd(id: number) {
  return ($_buffer!.content += `<!${marker(id)}/>`);
}

function replaceBuffers(
  id: number,
  placeholderStart: Buffer,
  placeholderEnd: Buffer,
  replacementStart: Buffer,
  replacementEnd: Buffer
) {
  if (placeholderStart.flushed) {
    addReplacementWrapper(id, replacementStart, replacementEnd);

    let next: Buffer | null = placeholderEnd.next;
    if (placeholderEnd.flushed) {
      while (next && !next.pending && next.flushed) {
        next = next.next;
      }
    } else {
      // TODO: ensure the remaining original content cannot flush
    }

    if (next) {
      replacementStart.next = next;
      next.prev = replacementEnd;
    }

    $_buffer = replacementStart;
    scheduleFlush();
  } else {
    const prev = placeholderStart.prev;
    const next = placeholderEnd.next;
    if (prev) {
      prev.next = replacementStart;
      replacementStart.prev = prev;
    }
    if (next) {
      next.prev = replacementEnd;
      replacementEnd.next = next;
    }
  }

  replacementStart.disabled = false;
}

function addReplacementWrapper(
  id: number,
  replacementStart: Buffer,
  replacementEnd: Buffer
) {
  let runtimeCall = runtimeId + ResumeSymbols.VAR_REORDER_RUNTIME;
  if (!$_streamData!.runtimeFlushed) {
    runtimeCall = `(${runtimeCall}=${reorderRuntimeString})`;
    $_streamData!.runtimeFlushed = true;
  }
  replacementStart.content =
    `<t id="${marker(id)}">` + replacementStart.content;
  replacementEnd.content += `</t><script>${runtimeCall}(${id})</script>`;
}

function marker(id: number) {
  return `${runtimeId}$${id}`;
}

/* Hydration */

export function nextTagId() {
  return "s" + $_streamData!.tagId++;
}

export function nextPlaceholderId() {
  return $_streamData!.placeholderId++;
}

export function nextScopeId() {
  return $_streamData!.scopeId++;
}

export function peekNextScopeId() {
  return $_streamData!.scopeId;
}

export function writeEffect(scopeId: number, fnId: string) {
  $_buffer!.calls += `${scopeId},"${fnId}",`;
}

export function writeScope(
  scopeId: number,
  scope: PartialScope,
  assignTo:
    | PartialScope
    | PartialScope[]
    | undefined = $_streamData!.scopeLookup.get(scopeId)
) {
  if (assignTo !== undefined) {
    if (Array.isArray(assignTo)) {
      assignTo.push(scope);
    } else {
      scope = Object.assign(assignTo, scope);
    }
  }
  $_buffer!.scopes = $_buffer!.scopes || {};
  $_buffer!.scopes[scopeId] = scope;
  $_streamData!.scopeLookup.set(scopeId, scope);
}

export function markResumeNode(scopeId: number, index: Accessor) {
  // TODO: can we only include the scope id when it differs from the prvious node marker?
  return `<!${runtimeId}${ResumeSymbols.NODE}${scopeId} ${index}>`;
}

export function markResumeScopeStart(scopeId: number, key?: string) {
  return `<!${runtimeId}${ResumeSymbols.SECTION_START}${scopeId}${
    key ? " " + key : ""
  }>`;
}

export function markResumeControlEnd(scopeId: number, index: Accessor) {
  return `<!${runtimeId}${ResumeSymbols.SECTION_END}${scopeId} ${index}>`;
}

export function markResumeControlSingleNodeEnd(
  scopeId: number,
  index: Accessor,
  childScopeIds?: number | number[]
) {
  return `<!${runtimeId}${
    ResumeSymbols.SECTION_SINGLE_NODES_END
  }${scopeId} ${index} ${childScopeIds ?? ""}>`;
}

function getResumeScript(
  calls: string,
  scopes: Buffer["scopes"],
  streamState: StreamData
) {
  if (calls || scopes) {
    let isFirstFlush;
    let serializer = streamState.serializer;
    if ((isFirstFlush = !serializer)) {
      serializer = streamState.serializer = new Serializer(
        streamState.scopeLookup
      );
    }
    return `<script>${
      isFirstFlush
        ? `(${runtimeId + ResumeSymbols.VAR_RESUME}=[])`
        : runtimeId + ResumeSymbols.VAR_RESUME
    }.push(${serializer.stringify(scopes)},[${calls}])</script>`;
  }
  return "";
}
