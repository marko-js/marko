import { types as t } from "@marko/compiler";
import {
  type Section,
  createSectionState,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import { callRuntime } from "./runtime";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { getWalkString } from "./walks";
import { getSetup } from "./signals";
import { isOutputHTML } from "./marko-config";
import { ReserveType, getScopeAccessorLiteral } from "./reserve";

const [getRenderer] = createSectionState<t.Identifier>(
  "renderer",
  (section: Section) => t.identifier(section.name)
);

export { getRenderer };

const [getWrites] = createSectionState<(string | t.Expression)[]>(
  "writes",
  () => [""]
);

const [getRegisterRenderer, setRegisterRenderer] = createSectionState<boolean>(
  "registerRenderer",
  () => false
);

export { setRegisterRenderer };

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

export function writePrependTo(path: t.NodePath<any>) {
  const section = getSection(path);
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ): void => {
    const exprsLen = exprs.length;
    const writes = getWrites(section);
    writes[0] += strs[exprsLen];

    for (let i = 0; i < exprsLen; i++) {
      writes.unshift(strs[i], exprs[i]);
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
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
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
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
) {
  const target = path.isProgram() ? path : path.get("body");
  const expr = consumeHTML(target);
  if (expr) {
    target.pushContainer("body", expr)[0].skip();
  }
}

export function getSectionMeta(section: Section) {
  const writes = getWrites(section);
  return {
    setup: getSetup(section),
    walks: getWalkString(section),
    writes: toTemplateOrStringLiteral(writes) || t.stringLiteral(""),
    register: getRegisterRenderer(section),
  };
}

export function markNode(path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>) {
  const section = getSection(path);
  const { reserve } = path.node.extra;

  if (reserve?.type !== ReserveType.Visit) {
    throw path.buildCodeFrameError(
      "Tried to mark a node that was not determined to need a mark during analyze."
    );
  }

  if (isOutputHTML()) {
    writeTo(path)`${callRuntime(
      "markResumeNode",
      getScopeIdIdentifier(section),
      getScopeAccessorLiteral(reserve!)
    )}`;
  }
}
