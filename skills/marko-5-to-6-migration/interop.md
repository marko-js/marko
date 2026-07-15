# Marko 5 ↔ 6 Interop (Incremental Migration)

How one Marko 5 app runs Class API and Tags API files together, and how to migrate through that state without regressing. Official doc: <https://markojs.com/docs/guide/marko-5-interop.md>. Source of truth for classification: `packages/runtime-tags/src/translator/interop/feature-detection.ts` in the marko repo.

## Mental model

- The interop is a **coexistence layer, not a converter**. The compiler classifies each `.marko` file as Class or Tags, compiles it with the matching translator, and inserts a runtime compat shim wherever a component of one API is rendered from a file of the other.
- Classification is **per file** and all-or-nothing. A file cannot mix APIs; conflicting signals are a **compile error** ("Cannot mix Tags API and Class API features in the same file", with code frames pointing at both offending features). The heuristics are not a precedence list that picks a winner.
- Pages that contain both APIs ship **both runtimes** and hydrate twice (a Marko 6 `init` and a Marko 5 `init`). Each Class↔Tags boundary also serializes extra scope-mapping data. This is fine as a transition state and wrong as an end state — keep boundaries few, and prefer converting whole subtrees.

## Enabling

Nothing to configure. Modern `marko@5` (5.39+) depends on `@marko/runtime-tags` and its `marko/translator` entry wraps the Class translator with the interop translator. An app whose only Marko runtime dependency is `marko` (v5) gets interop automatically; an app that depends only on `@marko/runtime-tags`/`marko@6` gets **no** Class support.

Lazy tag imports (`with { load: ... }`) additionally rely on the `linkAssets` compiler option, which the bundler integrations (`@marko/vite`, `@marko/run`, `@marko/webpack`) provide — not something to set by hand. Lasso works with both APIs but does not provide `linkAssets`, so on it a `with { load }` import compiles as a normal eager import rather than code-splitting.

## File classification rules

Evaluated per file:

1. **`tags/` directory seed.** A file under a `tags/` directory is seeded as Tags API — unless a `components/` directory sits _between_ the `tags/` dir and the file (`tags/components/x.marko` is _not_ seeded; this is the escape hatch for vendored Class code inside a tags tree), or that `tags/` dir is declared as a manual `tagsDir` in a `marko.json`.
2. **Body scan.** The whole template (including nested tag bodies and attribute tags) is scanned in document order; every signal found is recorded, and signals from both APIs anywhere in one file are the mixing compile error.
   - **Class signals**: a `// use class` / `<!-- use class -->` comment (exact trimmed match); a non-`static` `$ scriptlet;`; a `class {}` block; a `style { ... }` / `style.ext { ... }` block; any attribute _argument_ (`onClick("handler")`, `no-update-if(x)`); one of these tags: `<await-reorderer>` `<class>` `<include-html>` `<include-text>` `<init-components>` `<macro>` `<module-code>` `<while>`.
   - **Tags signals**: a `// use tags` / `<!-- use tags -->` comment; any tag variable (`<div/el>`); any bound attribute (`:=`); one of these tags: `<const>` `<debug>` `<define>` `<id>` `<let>` `<lifecycle>` `<log>` `<return>` `<try>`.
   - `static`, `server`, and `client` statements and plain `<style>` elements are neutral — they force nothing and work in both APIs (`server`/`client` were backported to Marko 5.38+).
3. **Ambiguous fallback.** A file with no signals (pure markup) is Tags **only if** every tag-discovery directory visible from it is a `tags/` dir; if even one `components/` dir exists anywhere in scope, ambiguous files default to **Class**. In a typical migrating app (which still has `components/` dirs), every ambiguous file is Class — so converted-but-signal-free files silently compile as Class. Pin such files with `// use tags`.

Practical rules that follow:

- Put every new/converted Tags file under a `tags/` directory, or make sure it contains a real Tags signal, or add `// use tags`.
- When converting a file, convert it **completely** — one leftover `$ scriptlet` or `key="x"` handler argument next to a new `<let>` is a build break, and one leftover neutral file is a silent Class fallback.
- Route files (`+page.marko`, `+layout.marko`, express-rendered page templates) are frequently ambiguous — pin them explicitly in both directions during the transition.

## Crossing the boundary

### Tags parent → Class child

Use the Class tag like any custom tag. The compat shim translates automatically:

- Attributes pass through as the child's `input`.
- The Tags body becomes the child's `input.renderBody`.
- `onFoo=fn` / `onFoo(){}` / `on-foo(){}` attributes are converted to Class custom-event subscriptions: the child's `this.emit("foo", a, b)` invokes the function with `(a, b)`. (`onClick` → event `"click"`, `on-Foo` → event `"Foo"` preserving case.)
- Tag parameters work: `<class-layout|a, b|>` receives what the Class child passes via `<${input.renderBody}(a, b)/>`.
- Split components (`component-browser.js`) hydrate and stay interactive.
- A Class child with _no_ component (no `class {}`, no state, no handlers — an "inert" template) costs almost nothing: it renders on the server and is dropped from client bundles unless a Tags-side update forces re-render (in which case the compat morphs its DOM in place).

You cannot use Class-only _syntax_ on the call site (it's a Tags file): no `on-foo("stringMethod")`, no `key=`-based `getComponent` into the child. If the parent needs to call into the child imperatively, that child is a good next conversion candidate (then expose `<return>`).

### Class parent → Tags child

Also plain custom-tag usage, with these rules:

- Attributes pass through as `input`; the Class body becomes the child's `input.content` (renamed from `renderBody` by the shim); attribute tags and tag parameters cross over.
- Pass event handlers as **function-valued attributes** — the Tags child just calls `input.onSelect(...)`. Both of these compile and work in a Class API file (verified):
  - `<tags-child onSelect(sel) { component.handleSelect(sel) }/>` (method shorthand — it is not a Class/Tags classification signal)
  - `<tags-child onSelect=component.handleSelect.bind(component)/>`
- **Do not use Class-style event bindings on Tags children.** `<tags-child on-select("handleSelect")/>` compiles without error but never fires: it registers a Class custom-event subscription, and Tags components call function props instead of emitting events. This is a silent dead binding — audit for it when converting a child that Class parents consume.
- Dynamic tags work, including conditional ones: `<${state.show && TagsChild}/>`.
- Hydration needs no explicit wiring: Marko 5 injects its init/reorderer boilerplate implicitly, and on mixed pages the interop entry emits both hydrate programs. Explicit `<init-components/>` / `<await-reorderer/>` tags in templates are redundant — delete them on sight (they are also Class-only classification signals, so they block converting the file they sit in).

### Hard limitations

- **No async across the seam.** A pending promise (an `<await>` still unresolved) crossing the compat boundary throws `Cannot serialize promise across tags/class compat layer` at render time. Keep each `<await>` and everything it feeds on one side of the boundary.
- **No shared component registry.** `getComponent`/`getComponents` cannot see Tags children; Tags tag variables cannot point at Class children (no `<return>` there). Communicate across the seam with attributes and function props only.
- **`$global` / `out.global` is shared** — that part crosses cleanly in both directions.
- Both runtimes ship while mixed; treat bundle size regressions during migration as expected and temporary, but budget them.

## Incremental order of work

1. **Foundation** (see SKILL.md Step 2): latest `marko@5`, modern bundler, deprecations cleared, legacy widgets rewritten, baseline recorded.
2. **Create `tags/` directories** next to existing `components/`. This is non-disruptive: ambiguous files still default to Class as long as any `components/` dir exists.
3. **Convert leaf components first** — inert/presentational ones are nearly free, then stateful leaves. Their Class parents keep consuming them through the shim without changes (though renamed events — `on-select` → `onSelect=` — do require touching call sites; do parent call-site edits in the same increment).
4. **Work subtree-by-subtree, bottom-up**, so that Tags components mostly reference Tags components. A good increment: one page's component cluster, converted leaves-to-root, parents last.
5. **Flip pages/layouts last.** Once a page's subtree is all Tags, convert the page file and pin it with `// use tags` if it ends up signal-free.
6. **Bridge unconverted third-party stragglers with [`patch-package`](https://github.com/ds300/patch-package)** when practical: convert the small blocking module inside `node_modules`, commit the patch, and upstream the change — this keeps the final flip unblocked without forking.
7. **Track the remaining Class surface** with the Step 1 inventory greps after each increment; the numbers only go down.
8. When zero Class files remain, run the full-migration finish line (swap to `marko@6`, rename `components/` → `tags/`, remove pin comments and interop-era workarounds).

During the whole period: new features are written Tags-first in `tags/`, and no new Class API code gets merged.

## Troubleshooting

| Symptom                                                                         | Cause                                                                                                                                                       | Fix                                                                                                                               |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Cannot mix Tags API and Class API features in the same file` (two code frames) | leftover Class syntax in a converted file (scriptlet, `style {}`, attribute argument, `<macro>`/`<while>`/...) or a Tags construct pasted into a Class file | finish the conversion; the two frames point at the exact conflicting features                                                     |
| Converted file renders but behaves like Class / new syntax rejected             | file is ambiguous and fell back to Class (a `components/` dir exists somewhere in scope)                                                                    | move under `tags/` or add `// use tags`                                                                                           |
| File under `tags/` refuses Tags syntax                                          | a `components/` segment between the `tags/` dir and the file, or that dir is a `marko.json` `tagsDir`                                                       | check the full path and `marko.json`s up the tree                                                                                 |
| `Cannot serialize promise across tags/class compat layer`                       | `<await>`/async content crossing the API boundary                                                                                                           | resolve the promise fully on one side; move the `<await>` into the same API as the content it wraps                               |
| Class child inside Tags parent renders but is dead (no events)                  | its hydration was skipped — often it looked inert (no serialize reason)                                                                                     | upgrade `marko` — this had fixes in 5.39.x; confirm the child actually has a component; report upstream if reproducible on latest |
| Tags child inside Class page doesn't hydrate                                    | bundler entry isn't the interop hydrate output (both `init` programs are emitted by the interop entry builder, not by any template-level tag)               | check the bundler integration is current and the page's hydrate entry is generated by it                                          |
| `with { load }` component loads eagerly instead of code-splitting               | no `linkAssets` (eg `@marko/vite` with `linked: false`, or lasso), so lazy loading degrades to an eager import                                              | use `@marko/vite` (linked)/`@marko/run`/`@marko/webpack` to code-split; the eager fallback is otherwise harmless                  |
| Duplicate/large client bundles                                                  | both runtimes on the page (expected while mixed); or boundaries scattered across many small islands                                                         | consolidate: convert whole subtrees; finish the migration                                                                         |
