import { types as t } from "@marko/compiler";

import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { generateUidIdentifier } from "./generate-uid";
import { isOptimize, isOutputHTML } from "./marko-config";
import normalizeStringExpression, {
  appendLiteral,
} from "./normalize-string-expression";
import {
  type Binding,
  BindingType,
  getScopeAccessorLiteral,
} from "./references";
import { callRuntime } from "./runtime";
import { getSerializeGuard } from "./serialize-guard";
import type { SerializeReason } from "./serialize-reasons";
import { createSectionState } from "./state";
import { getWalkString } from "./walks";

type Write = string | t.Expression | (() => undefined | string | t.Expression);
// Segment barriers: open-tag sources stay ordered; raw forces its own write.
const OPEN = Symbol("open");
const RAW = Symbol("raw");
const RUNTIME = Symbol("runtime");
type OpenMarker = { [OPEN]: string | undefined };
type RawMarker = { [RAW]: string | undefined; value: t.Expression };
type RuntimeMarker = { [RUNTIME]: true };
type WriteOrMarker = Write | OpenMarker | RawMarker | RuntimeMarker;

const [getWrites] = createSectionState<WriteOrMarker[]>("writes", () => [""]);
const [getTrailerWrites] = createSectionState<(string | t.Expression)[]>(
  "trailerWrites",
  () => [""],
);

export function writeTo(path: t.NodePath<any>, trailer?: boolean) {
  const section = getSection(path);
  const get = trailer ? getTrailerWrites : getWrites;
  return (strs: TemplateStringsArray, ...exprs: Write[]): void => {
    const exprsLen = exprs.length;
    const writes = get(section);
    appendLiteral(writes, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
    }
  };
}

export function recordOpenTag(path: t.NodePath<any>) {
  if (!isOutputHTML() || isOptimize()) return;
  const loc = internLoc(path);
  if (loc === undefined) return;
  getWrites(getSection(path)).push({ [OPEN]: loc });
}

// Next write is runtime-injected markup (no template source).
export function writeRuntimeHTML(path: t.NodePath<any>) {
  return (strs: TemplateStringsArray, ...exprs: Write[]): void => {
    if (isOutputHTML() && !isOptimize()) {
      getWrites(getSection(path)).push({ [RUNTIME]: true });
    }
    writeTo(path)(strs, ...exprs);
  };
}

// Unescaped raw HTML as its own `_html` segment (value is not mixed into neighbors).
export function writeRawHTML(path: t.NodePath<any>, value: t.Expression) {
  const section = getSection(path);
  const writes = getWrites(section);
  if (isOutputHTML() && !isOptimize()) {
    writes.push({ [RAW]: internLoc(path), value });
  } else {
    writes.push(value, "");
  }
}

export function consumeHTML(path: t.NodePath<any>) {
  const section = getSection(path);
  const writes = getWrites(section);
  const trailers = getTrailerWrites(section);
  const trailerResult = normalizeStringExpression(trailers);
  const track = isOutputHTML() && !isOptimize();
  let htmlCalls: t.Expression[] | undefined;

  if (track) {
    htmlCalls = [];
    let parts: Write[] = [];
    let opens: (string | undefined)[] = [];
    let runtime = false;

    const flush = () => {
      const result = normalizeStringExpression(parts.map(unwrapWrite));
      parts = [];
      if (!result) {
        opens = [];
        runtime = false;
        return;
      }
      if (runtime || !opens.length) {
        htmlCalls!.push(callRuntime("_html", result));
      } else {
        htmlCalls!.push(
          callRuntime("_html_opens", ...opens.map(locLiteral)),
          callRuntime("_html", result),
        );
      }
      opens = [];
      runtime = false;
    };

    for (const write of writes) {
      if (isOpenMarker(write)) {
        if (runtime) flush();
        opens.push(write[OPEN]);
      } else if (isRawMarker(write)) {
        flush();
        htmlCalls!.push(
          callRuntime(
            "_html_raw",
            write[RAW] === undefined ? undefined : t.stringLiteral(write[RAW]),
          ),
          callRuntime("_html", write.value),
        );
      } else if (isRuntimeMarker(write)) {
        flush();
        runtime = true;
      } else {
        parts.push(write);
      }
    }
    flush();
  }

  const writeResult = track
    ? undefined
    : normalizeStringExpression((writes as Write[]).map(unwrapWrite));
  writes.length = 0;
  writes[0] = "";
  trailers.length = 0;
  trailers[0] = "";

  if (htmlCalls?.length) {
    const calls = trailerResult
      ? [...htmlCalls, callRuntime("_trailers", trailerResult)]
      : htmlCalls;
    return t.expressionStatement(
      calls.length === 1 ? calls[0] : t.sequenceExpression(calls),
    );
  } else if (writeResult && trailerResult) {
    return t.expressionStatement(
      t.sequenceExpression([
        callRuntime("_html", writeResult),
        callRuntime("_trailers", trailerResult),
      ]),
    );
  } else if (writeResult) {
    return t.expressionStatement(callRuntime("_html", writeResult));
  } else if (trailerResult) {
    return t.expressionStatement(callRuntime("_trailers", trailerResult));
  }
}

export function flushBefore(path: t.NodePath<any>) {
  const expr = consumeHTML(path);
  if (expr) {
    path.insertBefore(expr)[0].skip();
  }
}

export function flushInto(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>,
) {
  const target = (path.isProgram() ? path : path.get("body")) as t.NodePath<
    t.Program | t.MarkoTagBody
  >;
  const expr = consumeHTML(target);
  if (expr) {
    target.node.body.push(expr as any);
  }
}

interface SectionMeta {
  walks: t.Expression | undefined;
  writes: t.Expression | undefined;
  decls: t.VariableDeclarator[] | undefined;
}

export const [getSectionMeta] = createSectionState<SectionMeta>(
  "SectionMeta",
  (section) => {
    const writePrefix =
      section.content?.startType === ContentType.Dynamic ? "<!>" : "";
    const writePostfix =
      section.content?.endType === ContentType.Dynamic ? "<!>" : "";
    const writes = getWrites(section);
    const meta = {
      walks: getWalkString(section),
      writes: normalizeStringExpression(
        [
          writePrefix,
          ...writes.filter((w): w is Write => !isMarker(w)).map(unwrapWrite),
          writePostfix,
        ],
        true,
      ),
      decls: undefined,
    };
    return meta;
  },
);

const sectionMetaIsIds = new WeakSet<SectionMeta>();
export function getSectionMetaIdentifiers(section: Section) {
  const meta = getSectionMeta(section);
  if (!sectionMetaIsIds.has(meta)) {
    sectionMetaIsIds.add(meta);
    const { walks, writes } = meta;
    const decls: t.VariableDeclarator[] = [];

    if (walks) {
      meta.walks = generateUidIdentifier(`${section.name}__walks`);
      decls.push(t.variableDeclarator(meta.walks, walks));
    }
    if (writes) {
      meta.writes = generateUidIdentifier(`${section.name}__template`);
      decls.push(t.variableDeclarator(meta.writes, writes));
    }

    if (decls.length) {
      meta.decls = decls;
    }
  }

  return meta;
}

export function markNode(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  nodeBinding: Binding,
  reason: undefined | false | SerializeReason,
  deferred?: boolean,
) {
  if (nodeBinding.type !== BindingType.dom) {
    throw path.buildCodeFrameError(
      "POTENTIAL MARKO BUG: Tried to mark a node that was not determined to need a mark during analyze.",
    );
  }

  if (isOutputHTML()) {
    if (reason) {
      const section = getSection(path);
      // Deferred markers ride the stream trailer alongside a deferred end tag
      // (html/body), keeping the marker adjacent to the element it resumes.
      writeTo(path, deferred)`${callRuntime(
        "_el_resume",
        getScopeIdIdentifier(section),
        getScopeAccessorLiteral(nodeBinding),
        getSerializeGuard(section, reason, true),
      )}`;
    }
  }
}

export function formatNodeSource(path: t.NodePath<any>) {
  const { loc } = path.node;
  if (!loc) return;
  const file =
    (path.hub.file.opts.filenameRelative as string) ||
    (path.hub.file.opts.filename as string);
  return `${file}:${loc.start.line}:${loc.start.column + 1}`;
}

function internLoc(path: t.NodePath<any>) {
  return formatNodeSource(path);
}

// A position is referenced once, so a lookup table would never dedupe anything.
function locLiteral(source: string | undefined) {
  return source === undefined ? t.numericLiteral(0) : t.stringLiteral(source);
}

function unwrapWrite(write: Write) {
  return typeof write === "function" ? write() || "" : write;
}

function isOpenMarker(write: WriteOrMarker): write is OpenMarker {
  return typeof write === "object" && write !== null && OPEN in write;
}

function isRawMarker(write: WriteOrMarker): write is RawMarker {
  return typeof write === "object" && write !== null && RAW in write;
}

function isRuntimeMarker(write: WriteOrMarker): write is RuntimeMarker {
  return typeof write === "object" && write !== null && RUNTIME in write;
}

function isMarker(write: WriteOrMarker) {
  return isOpenMarker(write) || isRawMarker(write) || isRuntimeMarker(write);
}
