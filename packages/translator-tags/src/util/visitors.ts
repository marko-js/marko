import type { types as t } from "@marko/compiler";

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
