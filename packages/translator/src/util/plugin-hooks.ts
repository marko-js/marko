import { types as t } from "@marko/compiler";
import type {
  Plugin,
  FunctionPlugin,
  EnterExitPlugin,
  ModulePlugin,
} from "@marko/babel-utils";

export function enter<T extends t.Node>(
  modulePlugin: Plugin | void,
  path: t.NodePath<T>
) {
  if (!modulePlugin) {
    return false;
  }

  const { node } = path;
  const plugin = isModulePlugin(modulePlugin)
    ? modulePlugin.default
    : modulePlugin;

  if (isFunctionPlugin(plugin)) {
    plugin(path, t);
  } else if (plugin.enter) {
    plugin.enter(path, t);
  }

  return node !== path.node;
}

export function exit<T extends t.Node>(
  modulePlugin: Plugin | void,
  path: t.NodePath<T>
) {
  if (!modulePlugin) {
    return false;
  }

  const { node } = path;
  const plugin = isModulePlugin(modulePlugin)
    ? modulePlugin.default
    : modulePlugin;

  if (!isFunctionPlugin(plugin) && plugin.exit) {
    plugin.exit(path, t);
  }

  return node !== path.node;
}

function isModulePlugin(plugin: Plugin): plugin is ModulePlugin {
  return Boolean((plugin as ModulePlugin).default);
}

function isFunctionPlugin(
  plugin: EnterExitPlugin | FunctionPlugin
): plugin is FunctionPlugin {
  return typeof plugin === "function";
}
