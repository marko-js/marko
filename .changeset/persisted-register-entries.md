---
"@marko/runtime-tags": minor
---

Slim hydration for persisted builds: the main persisted dom module no
longer carries the registry registrations updates resolve signals, branch
content, and renderers from — a new `persisted: "register"` compile (the
`?register` virtual module, statically imported by the generated
`?update` entry) does, deferring that graph to the first persisted
navigation so hydration bundles tree-shake what resume doesn't reference.
Module identity stays sound across the pair: module-scope client
statements are single-instance (the main module exports each scriptlet's
bindings and the register module imports them; side-effect statements are
not re-run), and register builds never re-register main-registered ids
(`writeRegisteredFns` keeps declarations but skips the `_resume` calls;
effects compile through the new non-registering `_script_shared`
wrapper) — so payload effect entries and change handlers keep resolving
the copies resume wired. Slim main modules emit `_enable_branches()` at
module init since branch-machinery construction no longer runs there.
Requires the paired `@marko/vite` that resolves `?register` imports.
