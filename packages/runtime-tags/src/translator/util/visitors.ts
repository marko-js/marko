import { types as t } from "@marko/compiler";
import type {
  EnterExitPlugin,
  FunctionPlugin,
  ModulePlugin,
  Plugin,
} from "@marko/compiler/babel-utils";

import { isOutputHTML } from "./marko-config";

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
      enterHook(isOutputHTML() ? html : dom, path);
    },
    exit(path: t.NodePath<T>) {
      exitHook(isOutputHTML() ? html : dom, path);
    },
  } as const;
}

export function enterHook<T extends t.Node>(
  modulePlugin: Plugin | void,
  path: t.NodePath<T>,
) {
  if (modulePlugin) {
    const plugin = getPlugin(modulePlugin);
    if (isFunctionPlugin(plugin)) {
      plugin(path, t);
    } else if (plugin.enter) {
      plugin.enter(path, t);
    }
  }
}

export function exitHook<T extends t.Node>(
  modulePlugin: Plugin | void,
  path: t.NodePath<T>,
) {
  if (modulePlugin) {
    const plugin = getPlugin(modulePlugin);
    if (!isFunctionPlugin(plugin) && plugin.exit) {
      plugin.exit(path, t);
    }
  }
}

function getPlugin(modulePlugin: Plugin) {
  return isModulePlugin(modulePlugin) ? modulePlugin.default : modulePlugin;
}

function isModulePlugin(plugin: Plugin): plugin is ModulePlugin {
  return Boolean((plugin as ModulePlugin).default);
}

function isFunctionPlugin(
  plugin: EnterExitPlugin | FunctionPlugin,
): plugin is FunctionPlugin {
  return typeof plugin === "function";
}
