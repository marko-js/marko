import type { types as t } from "@marko/compiler";
import { getSection } from "./sections";
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    visits?: number;
  }

  export interface MarkoTagBodyExtra {
    visits?: number;
  }

  export interface MarkoTagExtra {
    visitIndex?: number;
  }

  export interface MarkoPlaceholderExtra {
    visitIndex?: number;
  }
}

export function visitNativeTag(tag: t.NodePath<t.MarkoTag>) {
  if (tag.has("var") || tag.get("attributes").some(isNotComputed)) {
    visit(tag);
  }
}

export function visitPlaceholder(placeholder: t.NodePath<t.MarkoPlaceholder>) {
  if (isNotComputed(placeholder)) {
    visit(placeholder);
  }
}

function isNotComputed(
  attr: t.NodePath<
    t.MarkoAttribute | t.MarkoSpreadAttribute | t.MarkoPlaceholder
  >
) {
  const extra = attr.node.extra;
  return !(extra && "computed" in extra);
}

function visit(path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>) {
  const extra = (path.node.extra ??= {} as typeof path.node.extra);
  extra.visitIndex = getSection(path).visits++;
}
