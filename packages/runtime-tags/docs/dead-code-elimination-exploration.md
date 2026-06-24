# Reducing reliance on tree-shaking for server-only dead-code elimination

> Status: exploration / design notes. No runtime or translator behavior is
> changed by this document.

## 1. How it works today

Marko 6 compiles each `.marko` file **twice** — once for `output: "html"` (the
SSR module) and once for `output: "dom"` (the client module). Because the page
is rendered and resumed (not re-rendered) on the client, the only client code
that should ever ship is the code needed to make the already-rendered HTML
*interactive*. Everything else is "server-only" and must be eliminated from the
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
`visitors/program/dom.ts:213`) is *advisory-pure*: a minifier may drop it if its
result is unused.

### 1b. Interactivity is a per-program boolean

A template is flagged interactive when it contains a genuine client anchor:

| Source of interactivity | Location |
| --- | --- |
| `<script>` effect | `core/script.ts:82` |
| event/change handler on a native tag | `visitors/tag/native-tag.ts:208` |
| `<lifecycle>` | `core/lifecycle.ts:60` |
| client `<script>`/scriptlet (`$ client`) | `visitors/scriptlet.ts:25` |
| dynamic tag with handlers/spread | `visitors/tag/dynamic-tag.ts:135` |
| registered (resumed) function | `visitors/function.ts:203` |

These anchors emit **non-pure** statements (effect `setup`, `_resume(...)`,
`_on(...)`) that reference the scope/walks, so the bundler must keep them — and
transitively the structural code they depend on. A template with none of these
emits an **empty** `setup` arrow (`visitors/program/dom.ts:180`) and an
all-`@__PURE__` body, so the whole client module can shake away.

### 1c. The page entry decides init-vs-nothing

`entry-builder.ts` is the one place the compiler already *acts on its own
knowledge* instead of delegating. For a DOM page entry it walks the whole tag
tree (`analyzedTags`) transitively and:

- if **any** template in the tree is `isInteractive`, sets `state.init = true`
  and emits `import { init }`, a bare `import "./page.marko"`, and `init(...)`
  (`entry-builder.ts:36`–`81`);
- otherwise emits **only the collected CSS/asset imports** and no runtime import
  at all (`entry-builder.ts:82`–`97`).

So at the *page* granularity the compiler is already the linker. Below that, the
per-template body is left to tree-shaking.

## 2. Why leaning on tree-shaking is fragile

1. **`@__PURE__` is advisory and bundler-specific.** esbuild, Rollup/Terser and
   webpack each treat purity and cross-module retention differently. The
   compiler *knows* the answer at build time but ships a hint instead of a
   guarantee.

2. **Cross-module purity has to cascade.** A static child pulled into an
   interactive page is the worst case. In `visitors/tag/custom-tag.ts:286`–`324`
   a parent references a child's structural exports at runtime:

   ```js
   write`${importNamed(file, relativePath, childExports.template, …)}`;
   walks.injectWalks(tag, tagName, importNamed(file, …, childExports.walks, …));
   ```

   Because the page is interactive, the parent's default export is *live*, so
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
   `<button onClick>` anchors its *entire* DOM scaffolding; tree-shaking cannot
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
import "./Counter.marko.effects.js";   // compiler-selected, interactive only
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
re-export / pull the structural pieces it needs. The point is that *non-included*
templates contribute nothing, deterministically.

### Direction C — Compiler-collapsed walks for static subtrees

Tree-shaking can never do this: when an interactive parent contains a fully
static child, the child's *internal* walk codes only need to advance the cursor
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
Today they are emitted *inline* in the template module, which anchors it.
Instead the registry could be assembled in the page entry / effects virtual
module from compiler knowledge, leaving template bodies free of side-effecting
anchors and therefore unconditionally droppable.

## 4. Recommendation

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
