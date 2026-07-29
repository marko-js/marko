import * as inlinedRuntimes from "@marko/runtime-tags/html/inlined-runtimes";

export interface PayloadSpans {
  markup: number;
  marker: number;
  reorder: number;
  runtime: number;
  resume: number;
}

export interface PayloadIds {
  runtimeId: string;
  renderId: string;
}

/**
 * Splits an SSR payload into disjoint byte spans that tile it exactly, so every
 * byte is attributed to the thing that asked for it.
 */
export function attributePayload(
  html: string,
  { runtimeId, renderId }: PayloadIds,
): PayloadSpans {
  const spans: PayloadSpans = {
    markup: 0,
    marker: 0,
    reorder: 0,
    runtime: 0,
    resume: 0,
  };
  const commentPrefix = runtimeId + renderId;
  const runtimePrefix = runtimeId + "." + renderId;
  const markerOpen = "<!--" + commentPrefix;
  const reorderOpen = "<t hidden " + commentPrefix + "=";
  let markupEnd = 0;
  let reorderDepth = 0;
  let i = 0;

  while (i < html.length) {
    const lt = html.indexOf("<", i);
    if (lt === -1) break;

    if (html.startsWith("<!--", lt)) {
      const end = indexAfter(html, "-->", lt);
      if (html.startsWith(markerOpen, lt)) take("marker", lt, end);
      i = end;
    } else if (html.startsWith(reorderOpen, lt)) {
      const end = indexAfter(html, ">", lt);
      take("reorder", lt, end);
      reorderDepth++;
      i = end;
    } else if (reorderDepth && html.startsWith("</t>", lt)) {
      take("reorder", lt, lt + 4);
      reorderDepth--;
      i = lt + 4;
    } else if (
      reorderDepth &&
      (html.startsWith("<t>", lt) || html.startsWith("<t ", lt))
    ) {
      reorderDepth++;
      i = lt + 1;
    } else {
      i = takeResumeScript(lt) ?? lt + 1;
    }
  }

  takeMarkupBefore(html.length);
  reconcile(spans, html);
  return spans;

  function takeResumeScript(start: number) {
    if (!html.startsWith("<script", start)) return;
    const contentStart = indexAfter(html, ">", start);
    if (!/^<script(?: nonce=[^>]*)?>$/.test(html.slice(start, contentStart))) {
      return;
    }

    const closeStart = html.indexOf("</script>", contentStart);
    const contentEnd = closeStart === -1 ? html.length : closeStart;
    const content = html.slice(contentStart, contentEnd);
    if (!content.startsWith(runtimePrefix) && !startsWithRuntime(content)) {
      return;
    }

    take("resume", start, contentStart);
    takeRuntimeCode(contentStart, contentEnd);
    const end =
      closeStart === -1 ? html.length : closeStart + "</script>".length;
    take("resume", contentEnd, end);
    return end;
  }

  function takeRuntimeCode(start: number, end: number) {
    let at = start;
    for (
      let found = nextRuntimeCode(html, at, end);
      found;
      found = nextRuntimeCode(html, at, end)
    ) {
      take("resume", at, found.start);
      take("runtime", found.start, found.end);
      at = found.end;
    }

    take("resume", at, end);
  }

  function take(span: keyof PayloadSpans, start: number, end: number) {
    if (end <= start) return;
    takeMarkupBefore(start);
    spans[span] += Buffer.byteLength(html.slice(start, end));
    markupEnd = end;
  }

  function takeMarkupBefore(start: number) {
    if (start <= markupEnd) return;
    spans.markup += Buffer.byteLength(html.slice(markupEnd, start));
    markupEnd = start;
  }
}

const RUNTIME_CODES = [
  inlinedRuntimes.WALKER_RUNTIME_CODE,
  inlinedRuntimes.REORDER_RUNTIME_CODE,
];

function reconcile(spans: PayloadSpans, html: string) {
  let attributed = 0;
  for (const span of Object.values(spans)) attributed += span;
  const total = Buffer.byteLength(html);
  if (attributed !== total) {
    throw new Error(
      `payload attribution does not reconcile: ${attributed} of ${total} bytes`,
    );
  }
}

function startsWithRuntime(content: string) {
  return RUNTIME_CODES.some((code) => content.startsWith(code));
}

function nextRuntimeCode(html: string, from: number, limit: number) {
  let found: { start: number; end: number } | undefined;
  for (const code of RUNTIME_CODES) {
    const start = html.indexOf(code, from);
    if (start === -1 || start + code.length > limit) continue;
    if (!found || start < found.start) {
      found = { start, end: start + code.length };
    }
  }

  return found;
}

function indexAfter(html: string, search: string, from: number) {
  const found = html.indexOf(search, from);
  return found === -1 ? html.length : found + search.length;
}
