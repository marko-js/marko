---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/sections.ts › getSectionRegisterReasons
---

# Narrow dynamic-tag content registration to statically known renderers

`getSectionRegisterReasons` returns `true` for any content section with no `downstreamBinding`, so every body handed to a dynamic tag registers unconditionally: `<${input.layout}>static</>` emits `_content_resume` (html and dom) for a body of pure static text, keeping the renderer registered and the register id in both outputs even when no possible target serializes it. Known tags avoid this because `setTagDownstream` records the child's input binding plus the call site's `KnownExprs`, letting the register decision dereference the child's actual serialize reasons. When the dynamic tag's value is statically enumerable (a `<const>` ternary over imported templates, resolvable via `util/evaluate.ts`), the union of the candidates' prop trees could populate `downstreamBinding` the same way, reserving the unconditional `true` for genuinely unknowable values. A patch page needs no registration for this: content a patch names but the client cannot resolve ships as a shell (`contentNeedsShell` in `translator/util/shell.ts`), as a string-named dynamic tag's body already does.

Check: `pnpm run compile -- -o html -d` on a template containing only `<${input.layout}>static</>` emits `_content_resume(...)` for the static body.
