---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/module-registrations.ts › finalizeRegistrations
---

# Register a Tags template passed to a hydrating Class component

A Tags template that passes another Tags template as an attribute value to a Class component that hydrates (one with a `class {}` block) renders nothing in its place on the client in optimized builds. The Class runtime serializes the component's input with the template by its registry id (`renderer: _._.<id>` in `m5i`), but the Tags compile gives that attribute no reason, so the template's `_template` registration stays pure and shakes out of the bundle, and a `load` import's `_load_template` with it. When the component renders on the client, the renderer resolves to `undefined` and the server's markup is replaced by an empty element. Direction: treat input passed to a hydrating Class component (the child `analyzeTagNameType` already marks `isInteractive` for) as serialized, so a template import among those values joins `registeredImports` and registers impurely, as a template the server writes does.

Check: a `fixtures-interop` fixture whose `template.marko` is `// use tags`, `import Lazy from "./tags/lazy.marko"`, `<class-host renderer=Lazy/>`, whose `components/class-host.marko` is `class {}` with `<div><${input.renderer} value="x"/></div>`, whose `tags/lazy.marko` is `// use tags` with `<let/n=0/>` and `<button onClick() { n++ }>${input.value} ${n}</button>`, and whose `test.ts` has `equivalent: false, skip_csr: true, steps: [{}, flushRAF, wait]`, fails `pnpm test -- --grep "translator-interop <name> "`: the optimized `render-ssr.md` is `<div />` where the debug one shows the button, and the optimized `dom.bundle.js` holds no `_template` for `tags/lazy.marko`. Importing it `with { load: "render" }` renders the same empty `<div>` in optimized builds.
