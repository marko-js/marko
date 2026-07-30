import { types as t } from "@marko/compiler";

import * as ResumeSymbol from "../../common/constants/resume-symbol";
import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { generateUidIdentifier } from "./generate-uid";
import { isOutputHTML, isPersisted } from "./marko-config";
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
const [getWrites] = createSectionState<Write[]>("writes", () => [""]);

const [getTrailerWrites] = createSectionState<(string | t.Expression)[]>(
  "trailerWrites",
  () => [""],
);

// The values-free structure of a section, accumulated alongside the writes and
// deliberately not cleared by `consumeHTML`: a shell spans a whole section while
// the writes are flushed in pieces.
const [getShellWrites] = createSectionState<string[]>("shellWrites", () => []);

/** Stands in for the runtime comment prefix, which a shell cannot know. */
const SHELL_PREFIX = "\0";

export function getSectionShell(section: Section) {
  return getShellWrites(section).join("");
}

/** Records structure that a value-carrying expression stands in for. */
export function appendShell(path: t.NodePath<any>, str: string) {
  getShellWrites(getSection(path)).push(str);
}

// An interpolated write is structure when it is already known to be a string:
// a static tag name or attribute. Anything else is a value the shell omits.
function shellPart(write: Write) {
  if (typeof write === "string") return write;
  if (typeof write !== "function" && t.isStringLiteral(write)) {
    return write.value;
  }
}

export function writeTo(path: t.NodePath<any>, trailer?: boolean) {
  const section = getSection(path);
  const get = trailer ? getTrailerWrites : getWrites;
  return (strs: TemplateStringsArray, ...exprs: Write[]): void => {
    const exprsLen = exprs.length;
    const writes = get(section);
    const shell = trailer ? undefined : getShellWrites(section);
    appendLiteral(writes, strs[0]);
    shell?.push(strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
      if (shell) {
        const part = shellPart(exprs[i]);
        if (part !== undefined) shell.push(part);
        shell.push(strs[i + 1]);
      }
    }
  };
}

export function consumeHTML(path: t.NodePath<any>) {
  const section = getSection(path);
  const writes = getWrites(section);
  const trailers = getTrailerWrites(section);
  const writeResult = normalizeStringExpression(writes.map(unwrapWrite));
  const trailerResult = normalizeStringExpression(trailers);
  writes.length = 0;
  writes[0] = "";
  trailers.length = 0;
  trailers[0] = "";

  if (writeResult && trailerResult) {
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
        [writePrefix, ...writes.map(unwrapWrite), writePostfix],
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
    // A hole needs its node marked. Only the root section: marking inside a
    // branch would retain that branch's renderer, which must stay tree-shaken.
    if (isPersisted() && !getSection(path).parent) {
      reason = true;
      // The shell carries the marker with the comment prefix and scope id
      // elided; a constructing client supplies both.
      appendShell(
        path,
        `<!--${SHELL_PREFIX}${ResumeSymbol.Node}${
          getScopeAccessorLiteral(nodeBinding).value
        }-->`,
      );
    }
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

function unwrapWrite(write: Write) {
  return typeof write === "function" ? write() || "" : write;
}
