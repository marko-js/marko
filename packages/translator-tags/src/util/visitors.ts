import type { types as t } from "@marko/compiler";

import { isOutputHTML } from "./marko-config";
import * as hooks from "./plugin-hooks";

export type VisitorType = "migrate" | "transform" | "analyze" | "translate";
export type TemplateVisitor<T extends t.Node> = Partial<
  Record<VisitorType, t.VisitNode<unknown, T>>
>;

export function extractVisitors<
  Visitors extends Partial<Record<keyof t.Visitor, TemplateVisitor<any>>>,
>(visitors: Visitors) {
  const result: Record<VisitorType, t.Visitor> = {
    migrate: {},
    transform: {},
    analyze: {},
    translate: {},
  };

  for (const _name in visitors) {
    const name = _name as any;
    const value = visitors[name]!;
    if (value.migrate) result.migrate[name] = value.migrate;
    if (value.transform) result.transform[name] = value.transform;
    if (value.analyze) result.analyze[name] = value.analyze;
    if (value.translate) result.translate[name] = value.translate;
  }
  return result;
}

export function translateByTarget<T extends t.Node>({
  html,
  dom,
}: {
  dom: t.VisitNode<unknown, T>;
  html: t.VisitNode<unknown, T>;
}) {
  return {
    enter(path: t.NodePath<T>) {
      hooks.enter(isOutputHTML() ? html : dom, path);
    },
    exit(path: t.NodePath<T>) {
      hooks.exit(isOutputHTML() ? html : dom, path);
    },
  } as const;
}
