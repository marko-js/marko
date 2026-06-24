# Empirical dead-server-code elimination study (Marko 6 / runtime-tags)

Reproducible measurements of the **client (DOM) bundle** for representative page
shapes, built with the repo's rolldown harness (`createServerRunner`,
`optimize: true`, tree-shaking on). Sizes include the runtime. Run with:

```
node -r ~ts experiments/dce/floor.ts      # zero-island / runtime floor
node -r ~ts experiments/dce/sweep.ts       # ESM vs CJS across shapes
node -r ~ts experiments/dce/sweep3.ts      # static <for> list
```

## Headline numbers

| Page shape                         | format | min    | brotli | surviving fixture modules             |
| ---------------------------------- | ------ | ------ | ------ | ------------------------------------- |
| fully static (no island)           | ESM    | 0      | 0      | — (no client JS emitted at all)       |
| 1 button island                    | ESM    | 3,418  | 1,700  | Counter                               |
| button + 8 server-only `${input}`  | ESM    | 6,463  | 2,939  | Dashboard (reactive texts pruned)     |
| static `<for>` list + button       | ESM    | 3,418  | 1,697  | (only button; `_for_of` not bundled)  |
| deep static Layout (Nav/Sidebar/…) | ESM    | 3,418  | 1,699  | Counter                               |
| 1 button island                    | CJS    | 30,591 | 11,090 | Header, Counter, Footer, page         |
| deep static Layout                 | CJS    | 31,253 | 11,216 | Nav, Sidebar, Footer, Counter, Layout |
| island-only page                   | CJS    | 29,326 | 10,763 | Counter, islandonly                   |

"CJS" = the compiled Marko output passed through `@babel/preset-env`
(`modules: "commonjs"`) before bundling — i.e. a pipeline that downlevels ESM or
strips `@__PURE__` before the bundler sees it.

## What the data shows

1. **Whole-page elimination is already compiler-driven and perfect.** A page
   with no interactivity emits **0 bytes** of client JS. This is decided by the
   entry builder (`entry-builder.ts`: `state.init` stays false → no runtime
   import), _not_ by tree-shaking. This is exactly the "let the compiler / page
   entry control the output" model — and it gives the cleanest possible result.

2. **Mixed pages: ESM tree-shaking already eliminates all dead server code at the
   template level.** Static children, deep static layouts, static `<for>` loops,
   and server-only reactive bindings (`${input.*}` never mutated on the client)
   are all removed. Only modules containing a real interactive anchor
   (`_script`/`_resume`/event registration, which self-registers on module eval)
   survive. The `_for_of` / branch helpers aren't even pulled into the runtime
   when unused.

3. **The whole strategy hinges on untouched ESM + intact `@__PURE__` reaching the
   bundler.** Downleveling to CJS (or stripping pure comments) collapses DCE
   ~6–9x. The regression has two parts:
   - the **runtime** stops tree-shaking entirely (~26 KB ships regardless of how
     little is used — island-only CJS keeps only 2 tiny fixture modules yet is
     29 KB), and
   - every static template module ships.

4. **`sideEffects: false` on the runtime package is NOT a safe shortcut.** The
   HTML runtime contains load-bearing module-level monkeypatches, e.g.
   `html/dynamic-tag.ts:238` (`_dynamic_tag = (…)(_dynamic_tag)` executed at
   import). A sideEffects-aware bundler told the package is pure could drop that
   statement and break dynamic tags. This is why the flag is (correctly) absent.

## Conclusion / ranked recommendations

Template-level DCE is effectively solved under realistic ESM bundling. The
highest-value real-world work is therefore **robustness and the runtime floor**,
not a new elimination mechanism:

1. **Protect the ESM + `@__PURE__` invariant end-to-end** (highest ROI). Ensure
   the loader/plugin feeds untouched ESM to the bundler; warn when Marko output
   is detected as CJS or has pure annotations stripped. This single cliff is
   worth ~6–9x.
2. **Push the compiler's page-entry authority downward** (the "rely less on
   tree-shaking" path). The entry builder already produces the ideal (0 bytes)
   for fully-static pages by _deciding_ rather than shaking. Extending that to
   per-interactive-module include-lists / per-section interactivity makes the
   mixed case robust even when `@__PURE__` is degraded. Note: under clean ESM
   this does not change the byte count — tree-shaking already reaches the same
   result — so it is a _robustness_ investment, not an ESM byte win.
3. **Attack the runtime floor.** With template DCE solved, the dominant
   reducible cost is the per-island runtime baseline and control-flow machinery
   (a single `<if>` adds ~1.2 KB brotli). Finer-grained resume/runtime entry
   points would trim pages that use only a subset of features.
