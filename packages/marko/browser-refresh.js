// This is a noop in Marko 5 and should eventually be removed.
// In Marko 5 `browser-refresh` is automatically enabled if you use the require hook, and
// browser refresh is running. We still expose this API to simplify the upgrade process from
// Marko 4 to Marko 5.
exports.enable = () => {};
