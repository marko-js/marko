# Reducing reliance on tree-shaking for server-only dead-code elimination

> Status: exploration / design notes. No runtime or translator behavior is
> changed by this document.
>
> **Empirical update (ESM):** the directions in §2–§4 below were the original
> hypothesis. Measuring them with a reproducible rolldown harness
> (`experiments/dce/`, `RESULTS.md`) **overturned that hypothesis**: under ESM
> (the only in-scope target), Marko's dead-server-code elimination is already
> _essentially complete_, so B/C/D produce no byte savings. A fully static page
> ships **0** client bytes; static children, static `<for>` loops, and
> server-only reactive bindings are all eliminated; and `$setup` itself is
> tree-shaken for resumed roots, so even a static `<const>` computed from a heavy
> import does not ship. The only residual client leak is third-party _dependency
> hygiene_, not Marko's output. See §5 for the corrected conclusion; §2–§4 are
> kept as the original (now superseded) design exploration.

## 1. How it works today

Marko 6 compiles each `.marko` file **twice** — once for `output: "html"` (the
SSR module) and once for `output: "dom"` (the client module). Because the page
is rendered and resumed (not re-rendered) on the client, the only client code
that should ever ship is the code needed to make the already-rendered HTML
_interactive_. Everything else is "server-only" and must be eliminated from the
client bundle.

Today that elimination is achieved almost entirely through **bundler
tree-shaking**, driven by two compiler outputs:

### 1a. `@__PURE__` annotations on structural runtime calls

`callRuntime()` tags a fixed allow-list of DOM runtime helpers with a leading
`@__PURE__` comment:

- `packages/runtime-tags/src/translator/util/runtime.ts:21` — `pureDOMFunctions`
  (`_template`, `_content`, `_if`, `_for_*`, `_let`, `_const`, closures, …)
- `packages/runtime-tags/src/translator/util/runtime.ts:67` — the annotation is
  only added when `isOutputDOM()`.

So the structural scaffolding a template emits on the client
(`export default _template(id, template, walks, setup, input)` in
`visitors/program/dom.ts:213`) is _advisory-pure_: a minifier may drop it if its
result is unused.

### 1b. Interactivity is a per-program boolean

A template is flagged interactive when it contains a genuine client anchor:

| Source of interactivity                  | Location                          |
| ---------------------------------------- | --------------------------------- |
| `<script>` effect                        | `core/script.ts:82`               |
| event/change handler on a native tag     | `visitors/tag/native-tag.ts:208`  |
| `<lifecycle>`                            | `core/lifecycle.ts:60`            |
| client `<script>`/scriptlet (`$ client`) | `visitors/scriptlet.ts:25`        |
| dynamic tag with handlers/spread         | `visitors/tag/dynamic-tag.ts:135` |
| registered (resumed) function            | `visitors/function.ts:203`        |

These anchors emit **non-pure** statements (effect `setup`, `_resume(...)`,
`_on(...)`) that reference the scope/walks, so the bundler must keep them — and
transitively the structural code they depend on. A template with none of these
emits an **empty** `setup` arrow (`visitors/program/dom.ts:180`) and an
all-`@__PURE__` body, so the whole client module can shake away.

### 1c. The page entry decides init-vs-nothing

`entry-builder.ts` is the one place the compiler already _acts on its own
knowledge_ instead of delegating. For a DOM page entry it walks the whole tag
tree (`analyzedTags`) transitively and:

- if **any** template in the tree is `isInteractive`, sets `state.init = true`
  and emits `import { init }`, a bare `import "./page.marko"`, and `init(...)`
  (`entry-builder.ts:36`–`81`);
- otherwise emits **only the collected CSS/asset imports** and no runtime import
  at all (`entry-builder.ts:82`–`97`).

So at the _page_ granularity the compiler is already the linker. Below that, the
per-template body is left to tree-shaking.

## 2. Why leaning on tree-shaking is fragile

1. **`@__PURE__` is advisory and bundler-specific.** esbuild, Rollup/Terser and
   webpack each treat purity and cross-module retention differently. The
   compiler _knows_ the answer at build time but ships a hint instead of a
   guarantee.

2. **Cross-module purity has to cascade.** A static child pulled into an
   interactive page is the worst case. In `visitors/tag/custom-tag.ts:286`–`324`
   a parent references a child's structural exports at runtime:

   ```js
   write`${importNamed(file, relativePath, childExports.template, …)}`;
   walks.injectWalks(tag, tagName, importNamed(file, …, childExports.walks, …));
   ```

   Because the page is interactive, the parent's default export is _live_, so
   `Child_template` / `Child_walks` are genuinely referenced. Whether the static
   child's strings get dropped now depends on the minifier proving an entire
   chain of pure expressions dead across several modules. This is exactly where
   bundlers are least predictable, and the failure mode is **silent client-bundle
   bloat**.

3. **No `sideEffects` precision.** Neither `@marko/runtime-tags`'s `package.json`
   nor the generated `.marko` modules carry a `sideEffects: false` hint, so a
   single un-annotated expression anchors a whole module.

4. **Interactivity is whole-template, not per-section.** `isInteractive` is one
   boolean per program. A 500-line static template with a single
   `<button onClick>` anchors its _entire_ DOM scaffolding; tree-shaking cannot
   partially retain one module's internal signal graph.

The throughline: **the compiler already computes precise interactivity and
already walks the full dependency graph, but hands that knowledge to the bundler
as soft purity hints rather than emitting only what is needed.**

## 3. Directions that rely less on tree-shaking

Ordered from least to most invasive. They compose.

### Direction A — Harden the current model (baseline, still tree-shaking)

Emit a `sideEffects` signal for generated client modules (magic comment / plugin
metadata consumed by `@marko/vite`), and audit every client statement that is
not `@__PURE__`. Cheapest, but still trusts the bundler. Use as a safety net,
not the strategy.

### Direction B — Make the page entry an explicit interactive include-list

This is the highest-leverage change and the most in the spirit of the existing
`entry-builder`.

Split each template's client output into:

- **structural data** — `template`/`walks` strings and the pure signal graph;
- **interactive payload** — `setup` effects, `_resume`/`_on` registrations,
  client scriptlets — emitted into a compiler-minted **virtual module**
  (e.g. `Counter.marko.effects.js`) via `getMarkoOpts().resolveVirtualDependency`
  (already used for `load:` tags at `custom-tag.ts:398`–`419` and for `<style>`
  at `core/style.ts`).

The page entry — which the compiler fully controls — then imports the payload
**only for the templates it already determined are interactive** while walking
`analyzedTags`:

```js
import { init } from "@marko/runtime-tags/dom";
import "./Counter.marko.effects.js"; // compiler-selected, interactive only
import "./Layout.marko.effects.js";
init();
```

A server-only `<Footer>` simply never appears in the list. **The
include-decision moves from the bundler (via purity cascades) to the compiler
(via an explicit, authoritative import list).** No `@__PURE__` reasoning is
required to drop non-interactive templates — they are never referenced on the
client at all.

Open question to resolve: resumable hydration still needs an interactive
template's own `walks` to attach to the resumed DOM, so the effects module must
re-export / pull the structural pieces it needs. The point is that _non-included_
templates contribute nothing, deterministically.

### Direction C — Compiler-collapsed walks for static subtrees

Tree-shaking can never do this: when an interactive parent contains a fully
static child, the child's _internal_ walk codes only need to advance the cursor
past its DOM. The compiler (which knows the child is non-interactive) can replace
the child's walk contribution with a single skip/`over` (`util/walks.ts`,
`WalkCode.Over`) and inline the child's static HTML string at compile time
instead of importing `Child_template` / `Child_walks` at runtime
(`custom-tag.ts:286`). This removes the fragile cross-module reference from
§2.2 entirely — the static child stops being a client module dependency.

### Direction D — Per-section interactivity (island granularity)

Promote `isInteractive` from a per-program boolean to per-section. Combined with
B, the compiler emits a virtual effects module scoped to just the interactive
section(s), so a mostly-static template with one island ships only that island's
signal graph. This is the partial-retention that single-module tree-shaking
fundamentally cannot express.

### Direction E — Entry-assembled resume registry

Resume registrations are already keyed by a stable `registerId`
(`getResumeRegisterId`, `_resume` in `visitors/program/html.ts:239`–`300`).
Today they are emitted _inline_ in the template module, which anchors it.
Instead the registry could be assembled in the page entry / effects virtual
module from compiler knowledge, leaving template bodies free of side-effecting
anchors and therefore unconditionally droppable.

## 4. Recommendation (theory)

Pursue **B + C first**:

- **B** converts the bulk win (dropping non-interactive templates) from a
  bundler heuristic into a compiler guarantee, reusing the existing
  `entry-builder` walk and `resolveVirtualDependency` plumbing.
- **C** eliminates the single most fragile pattern — a static child anchored
  into an interactive parent through runtime string imports.

**D** is the natural follow-up once interactivity is tracked per-section, and is
where Marko can beat any bundler (intra-module partial retention). **A** stays as
a defensive backstop, and **E** is a cleanup that falls out of B.

The unifying principle: the compiler already has perfect, build-time knowledge
of what is interactive and how templates compose. Treat the page entry plus
compiler-authored virtual modules as the **linker**, and reserve `@__PURE__`
tree-shaking for the genuinely local, single-expression cases — not as the
primary mechanism for whole-template/server-only elimination.

## 5. Corrected conclusion (ESM measurements — `experiments/dce/`)

The experiments overturned the §2 premise. Under ESM (the in-scope target),
tree-shaking + the compiler already achieve essentially complete dead-server-code
elimination, so the directions above are not needed for byte savings. Findings:

- **B/C/D produce no byte savings under ESM** — tree-shaking already reaches the
  ideal. Static children, deep static layouts, static `<for>` loops, and
  server-only reactive bindings all drop; a fully static page ships 0 client
  bytes (decided by the entry builder, not the bundler).

- **`$setup` is itself eliminated for resumed roots.** A resumed page restores
  state from the serialized payload and never calls a template's `$setup` on the
  client, so it is tree-shaken — including a static child's `$setup` and any
  static `<const>` initialization in it. Even `<const x=renderMarkdown(BIG)>`
  consumed only by static output does not ship Marko-side: the use is fully
  removed. (This refutes §2.2/§2.4: the "static child anchored into an
  interactive parent" case does _not_ leak under ESM.)

- **The only residual client leak is third-party dependency hygiene.** A
  server-only npm dep imported into a `.marko` file leaks only when it is not
  `sideEffects: false` (or has unprovable-pure top-level code), in which case the
  bundler correctly keeps its bare import edge. Marking the dep `sideEffects:
false` removes the leak. Marko emits no dead server code here.

- **`sideEffects: false` on the _runtime_ package is unsafe** as a blanket fix:
  the HTML runtime has load-bearing module-level monkeypatches
  (`html/dynamic-tag.ts:238`), which a sideEffects-aware bundler could drop.

### Where the real bytes are (ESM, ROI order)

1. **The runtime floor — the only large reducible cost.** `build:sizes` shows the
   `counter` bundle is 1,894 b brotli, of which **1,774 is runtime**. Once
   template DCE is done (it is), the per-island runtime baseline and control-flow
   machinery dominate (one `<if>` ≈ +1.2 KB brotli). Finer-grained resume/runtime
   entry points — so a page using only `_on` doesn't pull branch/await machinery
   — are where bytes actually live.
2. **Server-only dependency hygiene.** Document it; have the bundler plugin treat
   `.marko`-originated server-only imports as side-effect-free at the point of
   use; or keep heavy server work in `<server>`/server-only modules the compiler
   already strips from the dom output.
3. **Lean on `load:`** for large interactive subtrees — it already code-splits
   interactive code into separate chunks via compiler-minted virtual modules,
   keeping the main entry tiny (`lazy-tag*` fixtures: 62 b entries).
