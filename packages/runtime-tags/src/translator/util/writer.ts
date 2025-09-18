import { types as t } from "@marko/compiler";

import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { isOutputHTML } from "./marko-config";
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
import { getSetup } from "./signals";
import { createSectionState } from "./state";
import { getWalkString } from "./walks";

const [getWrites] = createSectionState<(string | t.Expression)[]>(
  "writes",
  () => [""],
);

const [getTrailerWrites] = createSectionState<(string | t.Expression)[]>(
  "trailerWrites",
  () => [""],
);

export function writeTo(path: t.NodePath<any>, trailer?: boolean) {
  const section = getSection(path);
  const get = trailer ? getTrailerWrites : getWrites;
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ): void => {
    const exprsLen = exprs.length;
    const writes = get(section);
    appendLiteral(writes, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
    }
  };
}

export function consumeHTML(path: t.NodePath<any>) {
  const section = getSection(path);
  const writes = getWrites(section);
  const trailers = getTrailerWrites(section);
  const writeResult = normalizeStringExpression(writes);
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

export function getSectionMeta(section: Section) {
  const writePrefix =
    section.content?.startType === ContentType.Dynamic ? "<!>" : "";
  const writePostfix =
    section.content?.endType === ContentType.Dynamic ? "<!>" : "";
  const writes = getWrites(section);
  return {
    setup: getSetup(section),
    walks: getWalkString(section),
    writes: normalizeStringExpression([writePrefix, ...writes, writePostfix]),
  };
}

export function markNode(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  nodeBinding: Binding,
  reason: undefined | false | SerializeReason,
) {
  if (nodeBinding.type !== BindingType.dom) {
    throw path.buildCodeFrameError(
      "POTENTIAL MARKO BUG: Tried to mark a node that was not determined to need a mark during analyze.",
    );
  }

  if (isOutputHTML()) {
    if (reason) {
      const section = getSection(path);
      writeTo(path)`${callRuntime(
        "_el_resume",
        getScopeIdIdentifier(section),
        getScopeAccessorLiteral(nodeBinding),
        getSerializeGuard(reason, true),
      )}`;
    }
  }
}
