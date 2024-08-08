import { types as t } from "@marko/compiler";

import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { isOutputHTML } from "./marko-config";
import {
  type Binding,
  BindingType,
  getScopeAccessorLiteral,
} from "./references";
import { callRuntime } from "./runtime";
import { getSetup } from "./signals";
import { createSectionState } from "./state";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { getWalkString } from "./walks";

const [getWrites] = createSectionState<(string | t.Expression)[]>(
  "writes",
  () => [""],
);

export function writeTo(path: t.NodePath<any>) {
  const section = getSection(path);
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ): void => {
    const exprsLen = exprs.length;
    const writes = getWrites(section);
    appendLiteral(writes, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
    }
  };
}

export function consumeHTML(path: t.NodePath<any>) {
  const writes = getWrites(getSection(path));
  const result = toTemplateOrStringLiteral(writes);

  writes.length = 0;
  writes[0] = "";

  if (result) {
    return t.expressionStatement(callRuntime("write", result));
  }
}

export function hasPendingHTML(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>,
) {
  const writes = getWrites(getSection(path));
  return Boolean(writes.length > 1 || writes[0]);
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
    target.pushContainer("body", expr)[0].skip();
  }
}

export function getSectionMeta(section: Section) {
  const writePrefix =
    section.startNodeContentType === ContentType.Dynamic ? "<!>" : "";
  const writePostfix =
    section.endNodeContentType === ContentType.Dynamic ? "<!>" : "";
  const writes = getWrites(section);
  return {
    setup: getSetup(section),
    walks: getWalkString(section),
    writes:
      toTemplateOrStringLiteral([writePrefix, ...writes, writePostfix]) ||
      t.stringLiteral(""),
  };
}

export function markNode(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  binding: Binding,
) {
  const section = getSection(path);

  if (binding.type !== BindingType.dom) {
    throw path.buildCodeFrameError(
      "Tried to mark a node that was not determined to need a mark during analyze.",
    );
  }

  if (isOutputHTML()) {
    writeTo(path)`${callRuntime(
      "markResumeNode",
      getScopeIdIdentifier(section),
      getScopeAccessorLiteral(binding),
    )}`;
  }
}
