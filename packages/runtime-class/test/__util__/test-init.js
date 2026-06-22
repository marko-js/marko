require("../../node-require").install({
  extensions: [".marko", ".html"],
});

// Compile a template through the `.marko` require hook before any test runs.
//
// In this monorepo `@marko/compiler` is reachable both directly and through
// workspace symlinks, so `node-require` (which resolves the compiler relative
// to each template) can end up loading a second copy of the compiler whose
// internal "current file" state is separate from the one the interop translator
// reads. The first real compile reconciles them; doing it here makes every test
// file self-sufficient so they can run in isolation / in parallel.
require("./warmup.marko");
