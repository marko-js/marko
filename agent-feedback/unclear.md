# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

## Dynamic style values inside `<for>`/`<if>` are undocumented but load-bearing

`src/translator/core/style.ts:113` | 2026-07-09 | impact:low | effort:low

A `<style>` with `${...}` interpolations placed inside a `<for>` body gives
each iteration its own values (the emitted `<style class=sN>.sN~*{--x:v}`
shell precedes that iteration's siblings, and the latest preceding stylesheet
wins the tie), which is exactly what per-item styling wants — verified live
with 24 loop iterations resolving 24 distinct values. Nothing in the styling
docs says the feature composes with control flow, and two real traps sit next
to it: the emitted style ELEMENTS interleave with the loop's content, so
`nth-child` selectors over the siblings silently skip half their targets (use
`nth-of-type`), and any higher-specificity rule using the `animation:`
shorthand resets an interpolated `animation-delay` because the shorthand
implicitly sets delay to `0s`. A docs example of a dynamic style in a loop,
plus a note about element interleaving, would have saved the debugging session.

## Migration skill: warn that `<effect>`→`<script>` auto-fix drops returned cleanups

`skills/marko-5-to-6-migration/api-mapping.md:74` | 2026-07-12 | impact:high | effort:low

The `@marko/tags-api-preview` note says "`<effect>` → `<script>` … (the Marko 6 compiler auto-fixes these two)," presenting it as safe. The auto-fix is purely syntactic: `packages/runtime-tags/src/translator/core/effect.ts:26` migrates `<effect>` by renaming the tag to `<script>` and keeping the body verbatim, including any `return`. But `<script>` ignores a returned function — cleanup must go through `$signal`. Verified: compiling `@marko/tags-api-preview`'s `<effect>() { …; return () => cleanup() }` emits `_script($scope => { …; return () => cleanup() })`, and `dom/signals.ts:386` `_script` → `queueEffect` → `dom/queue.ts:127` `runEffects` calls the fn and discards its return. So an `<effect>` returning a teardown silently leaks after "auto-fix" (e.g. the marko website's `repl/components/match-media.marko`, whose effect returns `() => mq.removeEventListener("change", listener)`). The skill should state that effects with returned cleanups must be hand-rewritten to `$signal`; separately, the `<script>` translator arguably should warn on a discarded return value rather than silently no-op it.

## Migration skill: add a section for partially-migrated / tags-api-preview apps

`skills/marko-5-to-6-migration/SKILL.md:32` | 2026-07-12 | impact:med | effort:med

The skill targets a clean Class-API app, but a common real state is a partially-migrated app using `@marko/tags-api-preview` — the marko website itself is 12/56 files in preview syntax (`<attrs>`, `<effect>`, `<let>`, `<return>`, `<id>`, `<lifecycle>`). This state is covered only by one paragraph in `api-mapping.md:74`. Concretely: Step 1's inventory greps have no category for preview files, so they are invisible to work-sizing (counted as neither remaining nor done); Step 2 never lists "convert preview syntax" as a foundation step though it is interop-neutral and shippable; and preview `<return>`-value components and `<lifecycle>`-exposing-`this` need guidance the one paragraph omits. A short dedicated subsection (inventory grep + conversion notes for the preview tags) would serve preview adopters.

## Migration skill: cover sibling/global component coordination, not just parent→child

`skills/marko-5-to-6-migration/api-mapping.md:145` | 2026-07-12 | impact:med | effort:med

The `getComponent` guidance only covers parent → direct child (child `<return>`, parent tag variable). Marko-5-era apps frequently coordinate non-adjacent components, and the skill offers no pattern for it: the marko website uses `getComponentForEl(document.querySelector(".site-header"))` to reach an unrelated component (`src/components/code-block-marko/component-browser.js`), `getComponent("preview").forceUpdate()` across siblings (`try-online/.../root/index.marko`), and a shared module-level `EventEmitter` for header↔sidebar (`layout-header/events.js`). `getComponentForEl` is not mentioned anywhere in the skill. These all resolve to the same Marko 6 decision — lift to `$global` context, a shared external store, or callback props — but that pattern ("sibling/global coordination → lifted state") should be written down, including a note that module-singleton pub/sub must be redesigned. Minor adjacent gaps found while converting: `<log>`/`<debug>` are listed with no syntax (correct is `<log=expr>`, not `message=`), and side-effecting scriptlets like `$ if (!x) console.log(...)` are mapped only as derivations.

## Migration skill: name the gating prerequisites that block a full flip (compiles != runs)

`skills/marko-5-to-6-migration/SKILL.md:70` | 2026-07-12 | impact:med | effort:low

Per-file conversions can all compile while the app still can't complete a flip to `marko@6`. Three gating blockers, each verified by actually running the marko website (`markojs-website-v5`), deserve explicit callouts: (1) **Version floor** — the site is on `marko@5.37.53`; `require("marko/translator")` at 5.37 throws on a trivial `<let>` file (native interop lands at 5.39+), so Step 2.1's "upgrade marko@5 first" is a hard prerequisite, not a nicety — before it, the incremental interop path does not exist and preview apps rely on `@marko/tags-api-preview` as a stopgap. (2) **tags-api-preview taglib collision** — while `@marko/tags-api-preview` is installed, its `marko.json` taglib shadows the core `<let>`/`<const>`/`<effect>` tags, so compiling ANY `<let>` file with the Marko 6 translator fails ("Scriptlets are not supported when using the tags api"); files render only after the package is uninstalled. The skill says to remove the package but should state that leaving it installed breaks core tags wholesale (order matters). (3) **Build toolchain pins marko 5** — `@marko/build@4.3.2` (used via `@marko/serve@4.2.9`, the site's dev/build tools) has a hard `dependencies.marko: "^5.37.10"`, so the final `marko@^6` swap cannot take effect through these tools; the flip requires moving to `@marko/run` or a direct `@marko/vite`/`@marko/webpack` setup. Step 2.6 mentions modernizing the bundler generally but should call out that `@marko/build`/`@marko/serve` specifically block the flip. A short "before you can flip: version floor, remove preview package, toolchain that allows marko 6" checklist would prevent a migrator from converting every file only to find the app can't run on 6.
