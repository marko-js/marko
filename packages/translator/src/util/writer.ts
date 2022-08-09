import { types as t } from "@marko/compiler";
import { getSectionId, createSectionState } from "../util/sections";
import { callRuntime } from "./runtime";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { getWalkString } from "./walks";
import { getSetup } from "./apply-hydrate";
import { currentProgramPath } from "../visitors/program";

const [getRenderer] = createSectionState<t.Identifier>(
  "renderer",
  (sectionId: number) => {
    const name = currentProgramPath.node.extra.sectionNames![sectionId];
    return t.identifier(name);
  }
);

export { getRenderer };

const [getWrites] = createSectionState<(string | t.Expression)[]>(
  "writes",
  () => [""]
);

export function writeTo(path: t.NodePath<any>) {
  const sectionId = getSectionId(path);
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ): void => {
    const exprsLen = exprs.length;
    const writes = getWrites(sectionId);
    appendLiteral(writes, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
    }
  };
}

export function consumeHTML(path: t.NodePath<any>) {
  const writes = getWrites(getSectionId(path));
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
  const writes = getWrites(getSectionId(path));
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

export function getSectionMeta(sectionId: number) {
  const writes = getWrites(sectionId);
  return {
    apply: getSetup(sectionId),
    walks: getWalkString(sectionId),
    writes: toTemplateOrStringLiteral(writes) || t.stringLiteral(""),
  };
}
