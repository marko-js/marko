// Utilities for executing multi step compiler hooks (code generators in this package).

export function enter(plugin, ...args) {
  const fn =
    (plugin &&
      (plugin.enter ||
        (plugin.default && plugin.default.enter) ||
        plugin.default)) ||
    plugin;
  if (typeof fn === "function") {
    fn(...args);
  }
}

export function exit(plugin, ...args) {
  const fn =
    plugin &&
    (plugin.exit || (plugin.default ? plugin.default.exit : undefined));
  if (typeof fn === "function") {
    fn(...args);
  }
}
