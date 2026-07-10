# Comptime Marko

**Status:** Draft design (RFC); core implemented in `@marko/runtime-tags` (see below)
**Scope:** `@marko/compiler`, `@marko/runtime-tags` (translator), `htmljs-parser`, `@marko/vite`, `@marko/run`, editor tooling
**Audience:** Marko core contributors

> [!NOTE]
> **Implementation status.** The core of this design is implemented in the runtime-tags translator (`packages/runtime-tags/src/translator/comptime/`, statement parsing in `core/comptime.ts`):
>
> - Shipped: the `comptime` statement and `comptime import`; `<-if>`, `<-for>` (`of`/`in`/`from`/`to`/`until`/`step`), `<-const>`, `<-log>` (surfaced as compiler diagnostics), `<-debug>`; **userland comptime tags** (template macro expansion: taglib/import resolution, per-file comptime programs with `input` in the expansion's comptime scope, content fragments spliced at `<${input.content}/>` with parameter lowering, attribute-tag inputs, module splicing with hygiene, expansion traces, a fixed depth guard); `<-define>` snippets (attribute defaults, comptime params, snippet values flowing through comptime data) and `<-return>` (comptime tag results; inert when compiled as an entry); **comptime-born functions** crossing as capture-applied factories in a content-addressed virtual module via `resolveVirtualDependency` (inline emission without the hook); the comptime scope rules and diagnostics (statement-anchored code frames with the user error as `cause`, a dedicated `<else>`-after-`<-if>` error); the AST serializer (reference dedup, cycles, module-export function identity including default exports, own-`__proto__`-key safety, null-prototype round-tripping); subtree narrowing for non-primitive member reads; the build-`cache`-scoped module loader with `watchFiles` registration; hygiene renaming for runtime bindings in expanded bodies; attribute-tag routing out of comptime expansion; primitive reads folding to eagerly escaped static output; fixed unroll, depth, and evaluation-time guards; the reserved `$ct` identifier prefix; the `inert`/`isInert` untrusted-data airlock (`marko/comptime`); `meta.comptime`; preserve-without-evaluating under `errorRecovery`; `output: "source"` round-tripping. Fixtures live under `src/__tests__/fixtures/comptime-*` and `error-comptime-*`, with compile-level tests in `comptime-compile.test.ts`.
> - Not yet implemented from this document: `marko/comptime` `register` (explicit function registration), runtime `<return>` lowering inside comptime-expanded templates (a targeted error for now; `<-return>` covers the comptime case), the cross-template content-hash value store (module _instance_ identity across templates already holds through the shared `cache`), and the concise-mode `-` line-start parser rule (the HTML form works in both modes).

> [!TLDR]
>
> - A `-` prefix on any tag runs that tag **in the compiler**: `<-if>`, `<-for>`, `<-const>`, and any userland tag
> - A `comptime` statement prefix (beside `static`, `server`, `client`) runs module-level JS at compile time and lowers the result to `static`
> - Comptime expressions are **real JavaScript**, executed in the compiler's realm with its globals, imports, and modules
> - Userland tags invoked with `-` are **expanded as AST macros**: their template is evaluated against compile-time input and spliced into the caller
> - Comptime values reach runtime through a serializer aligned with the resume serializer (`html/serializer.ts`) — same reference dedup, cycles, and function-registration model — emitting AST (plus virtual modules) instead of a wire string
> - The output of comptime is ordinary Marko AST, indistinguishable from hand-written templates: analysis, reactivity, and code generation see nothing new

Marko already moves work from runtime to compile time wherever it can prove safety: statically-known `<show>` values collapse to plain markup, static native attribute values are inlined into template strings, and text-only conditionals are flattened. But all of that is best-effort and implicit. There is no way for a template author to _state_ that a value, a branch, or an entire subtree is compile-time known and have the compiler act on it with a guarantee.

Comptime makes that explicit. It is one prefix character and one statement keyword, both of which mean the same thing everywhere they appear: **this runs one stage earlier**.

The primary motivating use case is build-time content: tools like CMSs that want to compile optimized Marko template bundles on the fly from data that is fully known when the compiler runs. Today that requires string-templating `.marko` source or writing bespoke compiler transformers. With comptime it is just Marko.

---

## Table of contents

1. [Motivation](#motivation)
2. [Guiding principles](#guiding-principles)
3. [A tour](#a-tour)
4. [The comptime model](#the-comptime-model)
5. [Comptime scope](#comptime-scope)
6. [Crossing the boundary: the comptime handoff](#crossing-the-boundary-the-comptime-handoff)
7. [Tag reference](#tag-reference)
8. [The `comptime` statement](#the-comptime-statement)
9. [Userland comptime tags](#userland-comptime-tags)
10. [Syntax and parsing](#syntax-and-parsing)
11. [Compiler API](#compiler-api)
12. [Caching and invalidation](#caching-and-invalidation)
13. [Diagnostics](#diagnostics)
14. [Tooling](#tooling)
15. [Security](#security)
16. [Performance and output size](#performance-and-output-size)
17. [Implementation plan](#implementation-plan)
18. [Prior art](#prior-art)
19. [Alternatives considered](#alternatives-considered)
20. [Open questions](#open-questions)

---

## Motivation

### The compiler cannot be told what it cannot prove

The translator's existing evaluator (`packages/runtime-tags/src/translator/util/evaluate.ts`, backed by `computeNode` in `packages/compiler/src/babel-utils/compute.js`) folds literal-closed expressions only. It deliberately resolves no identifiers, no member expressions, no calls. So today, even this compiles to a runtime branch in the optimized output:

```marko
<if=false>
  <p>never</p>
</if>
<else>
  <p>always</p>
</else>
```

```js
// optimized html output today: the dead branch survives Marko's own compile
if (false) {
  const $scope1_id = _scope_id();
  _html("<p>never</p>");
} else {
  const $scope2_id = _scope_id();
  _html("<p>always</p>");
}
```

A downstream minifier may clean up the server side, but the client program, the reactivity analysis, the serialization decisions, and the walks string were all computed as if both branches exist. Feature-flagged debug panels, A/B variants, and per-tenant markup all pay for the branch they never render.

### Build-time content wants to be a template, not a code generator

A CMS that renders "blocks" today has two options, both unsatisfying:

- **Runtime rendering**: ship a `<for>` over block descriptors plus a `<${dynamicTag}>` dispatch table. Every page carries the dispatch machinery, every block type's component, and the block data as serialized state, even though the page's structure was fully decided at publish time.
- **Source generation**: string-concatenate `.marko` source from CMS data and feed it to the compiler. This works (it is what several production Marko sites do) but it is untyped, unhygienic string assembly that lives outside the language: no editor support, no composition with real tags, escaping bugs.

Comptime gives the CMS a third option: write ordinary tags, invoke them with a `-` prefix, and let the compiler evaluate them against CMS data during the build. The output bundle contains exactly the markup the published page needs, with interactivity preserved where the tags declared it.

### Marko 5 had a shape for this and Marko 6 removed it

Marko ≤5 shipped `<macro>` (removed in Marko 6; today it survives only as a Class API detection heuristic in `translator/interop/feature-detection.ts`). It was a runtime construct, but the appetite it served — reusable parameterized markup that costs nothing extra — is the same appetite. `<define>` covers the runtime half. Comptime covers the compile-time half, and does it for _every_ tag rather than a special one.

---

## Guiding principles

1. **One language, one grammar.** Comptime introduces no new expression syntax, no new attribute forms, no directive pragmas. A comptime tag takes attributes, a tag variable, parameters, body content, and attribute tags exactly like its runtime counterpart. The entire surface area is one leading `-` on tag names and one `comptime` statement prefix.

2. **The time ladder, with resume-style handoffs between rungs.** Marko statements already form a ladder of "when does this run": `static` (module load, both environments) and `server` / `client` (module load, one environment), then per-render code, then interactive updates. Comptime adds the rung above: compile time. Every comptime construct lowers onto the next rung down — `comptime const` becomes `static const`, `<-if>` becomes presence or absence, `<-for>` becomes repetition. Nothing lowers "sideways" into new runtime machinery. And Marko already ships one boundary crossing on this ladder — the server→client resume handoff, powered by `html/serializer.ts` — so comptime→runtime is specified as the same kind of handoff one rung earlier, sharing that serializer's architecture (see [Crossing the boundary](#crossing-the-boundary-the-comptime-handoff)).

3. **Real JavaScript, really executed.** Comptime expressions are evaluated by running them as JavaScript in the compiler's process, with the compiler's globals, real imports, and real semantics. There is no interpreter subset, no "constant expression" dialect, no surprise at `"a".repeat(5)` working but `[...Array(5)]` not. If it runs in Node, it runs in comptime.

4. **No residue.** After the comptime pass, the AST contains only constructs that existed before this proposal. Analysis (sections, bindings, signals), translation, and the runtimes are untouched. Comptime is unobservable downstream except as "somebody wrote a very specific template".

5. **Tags are dual-use by default.** `<pricing-table plans=x/>` renders at runtime; `<-pricing-table plans=PLANS/>` bakes the same tag at compile time. Authors do not write "a macro"; they write a tag, and the caller chooses the stage.

---

## A tour

### Compile-time branches

```marko
<-if=DEBUG_ENABLED>
  <debug-panel/>
</>
```

`DEBUG_ENABLED` is a global in the compiler's process (set by the build script; see [Compiler API](#compiler-api)). The condition is evaluated while compiling. When truthy, the body is kept in the AST as if the `<-if>` were never there; when falsy, body, imports it alone used, and all trace of `<debug-panel>` are gone from both the server and browser programs.

There is deliberately no `<-else>` or `<-else if>`. Comptime conditions are plain evaluated values, so alternatives are just complementary conditions, and skipping branch-chaining keeps the feature (and its mental model) smaller:

```marko
<-const/modern=FLAGS.newHeader/>
<-if=modern>
  <new-header/>
</>
<-if=!modern>
  <old-header/>
</>
```

### Compile-time statements

```marko
comptime const str = "a".repeat(5);

<p>${str}</p>
```

The statement runs while compiling. Because `str` is referenced from runtime code, its evaluated value is lowered to a `static` declaration; the compiled module contains the equivalent of:

```marko
static const str = "aaaaa";

<p>${str}</p>
```

(and the existing static-value inlining then folds `${str}` into the template text). A comptime binding used _only_ by other comptime code lowers to nothing at all.

### Compile-time loops

```marko
comptime import nav from "./nav.json";

<ul>
  <-for|item| of=nav.items>
    <li><a href=item.href>${item.label}</a></li>
  </>
</ul>
```

The `comptime import` loads the JSON into the compiler (a plain `import` belongs to the runtime program and is never executed at compile time), the loop is unrolled, and `item.href` / `item.label` are inlined as literals. The compiled template is exactly what a hand-written list of `<li>` tags would compile to: static HTML text on the server, no loop runtime and no serialized array on the client.

### One tag, both stages

```marko
/* tags/hero/index.marko */
<section class=`hero hero--${input.variant}`>
  <h1>${input.title}</h1>
  <${input.content}/>
</section>
```

```marko
/* page.marko */
// runtime: input flows per render
<hero variant="launch" title=input.pageTitle>
  <sign-up-form/>
</hero>

// comptime: baked while compiling
<-hero variant="launch" title="Meet Comptime">
  <sign-up-form/>
</-hero>
```

The comptime invocation macro-expands `tags/hero/index.marko` with `input` known at compile time: the `class` attribute becomes the literal `"hero hero--launch"`, the `<h1>` body becomes literal text, and the caller's `<sign-up-form/>` body is spliced where `<${input.content}/>` appeared — still a live, interactive runtime tag. Because `hero` reads `input` only from runtime expressions, the same file serves both call sites; the rules are in [Runtime `input` vs comptime `input`](#runtime-input-vs-comptime-input).

### Compile-time tag results

```marko
/* tags/design-token/index.marko */
comptime import tokens from "../../design/tokens.json";
<-return=tokens[input.name]/>
```

```marko
/* button.marko */
<-design-token/accent name="color-accent"/>
<button style=`background:${accent}`>${input.label}</button>
```

`<-return>` provides the comptime invocation's tag variable, so `accent` is a compile-time constant here; the `style` expression referencing it is inlined.

### A CMS page, end to end

```js
// build-page.mjs — runs per publish (or per request in an edge build service)
import * as compiler from "@marko/compiler";

globalThis.CMS = await fetchPublishedPage(pageId); // compile-time global

const { code } = await compiler.compileFile("./page.marko", {
  cache: new Map(), // fresh cache per revision; see "Caching and invalidation"
});
```

```marko
/* page.marko */
<-for|block| of=CMS.blocks>
  <-if=(block.type === "prose")>
    <cms-prose html=block.html/>
  </>
  <-if=(block.type === "carousel")>
    // a normal interactive tag, its configuration baked in
    <carousel images=block.images/>
  </>
</>
```

The published bundle contains only the block tags this page actually uses, with their configuration inlined. `<carousel>` keeps its client-side behavior; there is simply no dispatch table, no block-schema runtime, and no unused block component in the bundle.

---

## The comptime model

### Where it runs in the pipeline

The compiler pipeline is `parse → migrate → transform → analyze` (cached per template), then `translate` on a clone (`packages/compiler/src/babel-plugin/index.js`). The comptime pass is the **first step of `transform`**, before taglib transformers and before the translator's `preAnalyze` normalization.

That position is forced by two facts:

- It must run after `parse`/`migrate` so it operates on the final, normalized AST shape (and so `output: "source"`/`"migrate"` tooling, which stops before transform, round-trips comptime constructs untouched).
- It must finish before the end-of-transform `scope.crawl()` and before `analyze`, because analysis builds sections and reactive bindings from Babel scope (`translator/util/references.ts`, `translator/util/sections.ts`). Comptime expansion adds and removes tags, tag variables, and imports wholesale; analyze must only ever see the post-expansion tree.

Concretely, the pass is a new stage function in `babel-plugin/index.js` invoked between `migrate` and the existing transform visitors — after type-stripping, so evaluated code is always plain JS — and delegated to the translator (see [Implementation plan](#implementation-plan)). It is a stage rather than a Babel visitor so that its evaluation half can eventually be asynchronous (visitors cannot await; stages can).

### The comptime program

Per template, the compiler derives a **comptime program**: a synthetic ES module containing, in document order,

1. every `comptime import`, as a real import (plain `import`s belong to the runtime program and are **never** loaded into the compiler — the set of compile-time-loaded modules is lexically evident from the import block),
2. every other `comptime` statement, verbatim,
3. one arrow-function _thunk_ per comptime expression site — each `<-if>` value, `<-for>` collection, `<-const>` initializer, comptime attribute value, and so on — parameterized by the tree-scoped comptime bindings lexically in scope at that site.

Sketch, for the tour's nav example plus a loop-scoped condition:

```js
// derived comptime program (illustrative, never written to disk)
import nav from "./nav.json"; // from `comptime import nav from "./nav.json"`
export const thunks = {
  forOf$1: () => nav.items,
  ifValue$2: (item) => item.featured,
  attr$3: (item) => item.href,
  // ...
};
```

The module is evaluated once per template compile (lazily — templates with no comptime constructs pay nothing), then the comptime pass walks the template tree in document order, invoking thunks with the current binding values as it expands tags. Loop iterations call body thunks repeatedly with successive values; nested comptime inside expanded output is re-scanned, so macros can emit comptime tags (bounded by an expansion-depth guard).

Two properties fall out of "it is a real module":

- **Real semantics.** Closures, `Map`s, getters, exceptions, `import`ed libraries: everything behaves exactly as in Node, because it is Node. Thunks close over the module scope, so `comptime let seen = 0` and a later `<-const/n=seen++/>` interact with genuine JS ordering.
- **Real module identity.** `import.meta.url` is the template's file URL. A comptime-imported module is instantiated once per compiler process (normal ESM caching), so two templates that `comptime import` the same CMS SDK share its state — the same rule as any two modules in an app.

### Evaluation environment

Per the design decision for this proposal, comptime code executes **in the compiler's realm**: `globalThis` is the compiler process's global object. Whatever the build script, plugin, or test harness defined as a global before compilation is visible to every comptime expression. That is the whole configuration story for values like `DEBUG_ENABLED` — there is no parallel "define map" dialect:

```js
globalThis.DEBUG_ENABLED = process.env.NODE_ENV !== "production";
await compiler.compileFile(...);
```

(A `comptimeGlobals` config convenience that assigns onto the evaluation global for you is worth offering, but it is sugar over the same mechanism, not a sandbox.)

The module loader has two modes, matching the compiler's two entry points:

- **`compile` / `compileFile` (async):** modules are loaded with `vm.SourceTextModule` in the current realm, mirroring the machinery the test suite already uses (`runtime-tags/src/__tests__/utils/import-with-context.ts`; the repo already runs under `--experimental-vm-modules`). Resolution honors the compiler's `fileSystem` config where possible and falls back to real `import()` for `node_modules`.
- **`compileSync` / `compileFileSync`:** a synchronous CommonJS-style loader (lowering ESM/TS with the compiler's own Babel, the same trick as the repo's `~ts` register hook), with `createRequire` for packages.

**v1 is synchronous end to end**: a thunk or comptime statement that produces a pending promise is a compile error pointing here. This matches the primary use case — the CMS data is fetched _by the build orchestrator_ and is already in memory (globals or JSON modules) when the compiler runs — and it avoids restructuring the Babel pipeline in the first cut. The stage seam is designed so `compile`(async) can later await evaluation before the synchronous Babel traversal applies the results; top-level `await` support is tracked in [Open questions](#open-questions).

### Determinism contract

The compiler treats comptime output as a pure function of `(template source, comptime-imported modules, compiler-realm globals)`, held constant for the lifetime of a given `cache`. It may evaluate once and reuse the result across output targets (the html and dom compiles of one template must agree), across watch-mode rebuilds until invalidated, and in parallel workers independently. Side effects are permitted (`-log` exists precisely for one), but code whose _output_ depends on evaluation count or wall-clock time is out of contract; see [Caching and invalidation](#caching-and-invalidation).

---

## Comptime scope

Comptime bindings are introduced by:

| Construct                                                       | Binding                        |
| --------------------------------------------------------------- | ------------------------------ |
| `comptime const x = ...` / `comptime let` / `comptime function` | module comptime scope          |
| `comptime import x from "..."`                                  | module comptime scope          |
| `<-const/x=.../>` (destructuring allowed)                       | tree scope, from that point on |
| `<-for\|item, index\|>`                                         | body scope, per iteration      |
| `<-define/Name>`                                                | tree scope, from that point on |
| `<-some-tag/x .../>` (via the tag's `<-return>`)                | tree scope, from that point on |
| `input`, tag parameters — _inside a comptime-invoked template_  | that template's comptime scope |

### What comptime code can see

A comptime expression may reference, in resolution order: tree-scoped comptime bindings, module comptime bindings (including `comptime import` bindings), and the compiler realm's globals. It may **not** reference:

- **Plain `import` bindings.** A plain `import` belongs to the runtime program; reading one from a comptime expression is a compile error with a fix-it suggesting `comptime import`. This restriction is what makes compile-time module loading auditable — the set of modules the compiler will execute is exactly the `comptime import`s, visible in the import block, never a consequence of some deep expression.
- **Runtime bindings** — `<let>`/`<const>` tag variables, tag parameters, `input` of a template being compiled normally (see [Runtime `input` vs comptime `input`](#runtime-input-vs-comptime-input)), `$global`, `$signal`. No value exists yet to read.

Both are compile errors that name the binding and both locations:

```
page.marko:4:8: `count` is a runtime binding (declared by `<let/count>` at 2:6)
and cannot be read from the comptime expression `<-if=count>`.

page.marko:6:11: `formatPrice` is imported for runtime and cannot be read from a
comptime expression. Change the import on line 1 to `comptime import`.
```

Detection is static (identifier resolution against the two scope worlds), so the error is immediate and precise rather than a `ReferenceError` from the evaluator.

### What runtime code can see

Runtime expressions may freely reference comptime bindings; this is the bridge that makes comptime feel native rather than preprocessed. A comptime binding referenced from surviving runtime code is **materialized** as a static value:

- A module comptime binding lowers to a module-scope `static const name = <serialized value>` — the `comptime const str` ⇒ `static const str = "aaaaa"` rule.
- A tree-scoped binding (for example a `<-for>` parameter, which has a different value in each unrolled copy) is serialized per expansion copy; copies referencing it more than once share one hoisted `static` declaration under a generated unique name, and identical serialized values within a template are deduplicated.

Because the materialized value is a constant, downstream analysis already treats it optimally: it is never reactive, never serialized to the client as state, and constant-folds into template strings where the existing static-inlining applies.

### Document order, not hoisting

Runtime tag variables are hoisted — readable anywhere in the template. Comptime bindings are **not**: they exist from their declaration point onward, in document order, because evaluation is a single real execution pass. Reading a comptime binding above its declaration is a compile error (the comptime analogue of a TDZ violation). This is the one deliberate scoping divergence from the runtime language, and the error message says so explicitly.

Module `comptime` statements evaluate before the tree walk (they are module scope, like `static`), in source order among themselves.

### Hygiene

Macro expansion is hygienic. Spliced subtrees carry their own scopes: bindings declared inside an expanded tag are alpha-renamed on collision with caller bindings; the caller's body content spliced into a tag evaluates its expressions in the _caller's_ scope even though it lands inside the tag's markup. This mirrors how the runtime achieves the same thing with closures, and it is what makes `-` invocation safe on tags that were never written to be macros.

---

## Crossing the boundary: the comptime handoff

Marko already ships a boundary crossing on the time ladder: the **resume handoff**. The server serializes live render state through `html/serializer.ts` into the HTML stream, and the client resumes it — arbitrary object graphs, shared references, cycles, registered functions and all. Comptime→runtime is designed as **the same handoff, one rung earlier**: the compiler serializes comptime state _into the compiled program_, and the emitted module "resumes" it at load time.

This is an architectural requirement, not an implementation convenience. The comptime serializer keeps the resume serializer's value coverage, reference semantics, registration model, and error taxonomy, and differs only in its backend: where the resume serializer writes JS source text into a payload, the comptime serializer writes **AST** — hoisted `static` declarations, expressions at reference sites, and patch-up statements — and where the resume path resolves code through the runtime registry, the comptime path resolves it through the **module graph**.

| Resume serializer (`html/serializer.ts`)                                                             | Comptime handoff                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| writes JS text into the resume payload                                                               | writes AST into the compiled program                                                                                          |
| `Reference` graph; a value reused later claims an id (`ensureId`) and repeats as that binding        | shared values hoist to one `static const`; every reference site emits that binding                                            |
| cycles and forward references detected (`isCircular`) and deferred to trailing assignments           | cycles close in a `static { ... }` patch-up block after the declarations                                                      |
| long repeated strings dedup (`STRING_DEDUP_LENGTH`)                                                  | identical, as hoisted constants                                                                                               |
| well-known built-ins emit as global accesses (`KNOWN_FUNCTIONS` / `KNOWN_OBJECTS` / `KNOWN_SYMBOLS`) | same tables, emitted as global-access AST                                                                                     |
| registered values: `register(id, val, scope)` emits a registry access + serialized scope             | module-reachable values emit imports (real or virtual modules) + serialized captures                                          |
| render scopes short-circuit via `K_SCOPE_ID`                                                         | no render scopes exist yet; the structural analogues (content fragments, `<-define>` snippets, tag references) splice as AST  |
| debug locations via `setDebugInfo`; production silently drops what it cannot serialize               | same `Unable to serialize ... (reading x.y)` message shape with template locations; the build **always** takes the debug path |

Value coverage is therefore the resume serializer's, not a literal table: primitives including `bigint` and symbols (`Symbol.*` well-knowns, `Symbol.for` keys, identity-preserving fresh symbols), plain and null-prototype objects, iterable objects (the attribute-tag shape), arrays, `Date`, `RegExp`, `Map`, `Set`, typed arrays, `ArrayBuffer`, `Error`/`AggregateError`, `URL`, `URLSearchParams`, `Headers`, `FormData`, getters-turned-values, and so on. The async tail the resume serializer handles through flush channels — promises, `ReadableStream`, `Request`/`Response`, in-flight generators — is deferred: in sync v1 a pending promise crossing the boundary is an error saying to `await` it in comptime (see [Open questions](#open-questions)).

A worked example — CMS pricing where plans share a feature list and a formatter from a comptime-imported module:

```marko
comptime import { formatPrice } from "./format.js";

comptime const plans = buildPlans(CMS.pricing, formatPrice);
```

```marko
// conceptual lowering when `plans` is referenced at runtime
import { formatPrice } from "./format.js"; // re-emitted by the handoff (function route 1)
static const _v1 = ["priority support", "sso"];
static const plans = [
  { tier: "team", price: 12, format: formatPrice, features: _v1 },
  { tier: "business", price: 49, format: formatPrice, features: _v1 },
];
```

The shared `features` array serialized once and both plans reference it — identity preserved, exactly as it would be across the resume wire. Had `buildPlans` produced a cyclic structure (`plan.group.plans` pointing back), the cycle would close in a trailing `static { ... }` assignment instead of erroring.

### Primitive reads fold to static output

The serializer is the general mechanism; most reads never need it. When a runtime expression is just a member path rooted at a comptime binding — `${plan.name}`, `data-accent=theme.accent`, `colspan=cols.length` — and the value at the end of the path is a primitive, the compiler folds the expression to the value itself. The literal then takes the same road as hand-written static content: text is escaped at compile time and merged into the template string, attributes inline, and the containing object never crosses the boundary at all. Optional chains short-circuit exactly as they would at runtime, and a path that would throw at runtime (reading through `null` without `?.`) is left alone so the error keeps its runtime timing.

Folding applies only to reads. Write positions (assignment targets, `++`/`--`, `delete`, bound `:=` attributes) and callees (whose `this` binding a replacement would change) keep the reference handoff, which preserves identity (`a.self === a`) and the serializer's shared-value dedup. This is also the contract that makes folding sound: comptime values are compile-time constants, and runtime code that mutates one is out of contract — a folded read elsewhere has already baked the constant in.

A member read that lands on an _object_ narrows instead: only the accessed subtree serializes (`${JSON.stringify(page.meta)}` ships `meta`, not the whole `page`), with the serializer's reference dedup keeping identity intact against any wider use of the same binding. Reads rooted at a `comptime import` skip both folding and narrowing when the value is not primitive — re-emitting the import is already the smallest handoff. Null-prototype values (`inert` data) round-trip their missing prototype (`{ __proto__: null, ... }` in the emitted literal), so a folded inherited-property read agrees with what runtime code would see.

### Functions cross like they resume

The resume handoff never puts function _code_ on the wire. A function crosses because both sides load the module that defines it: the server serializes a registry id plus the function's captured scope, and the client's copy of the code picks that scope back up. The comptime handoff translates each piece:

1. **Module exports — the registry is the module graph.** The evaluator knows every module it loaded and their namespaces, so a comptime value that is reachable as an export (the imported `formatPrice` above, a component reference, a CMS SDK helper) serializes as an **import** of that module. Identity, not source text, crosses — the same function the compiler held is the one runtime calls.
2. **Functions born in comptime code — registered handlers, computed statically.** A function declared in the template's own comptime program (`comptime function`, an arrow inside a comptime expression) is code the compiler owns the AST for. It lowers by emitting that source into the compiled output (or a virtual module, below) with its captured comptime bindings materialized through this same serializer — the compile-time analogue of a registered handler plus its serialized scope, except captures are computed from the AST rather than runtime reflection, so nothing needs to be declared ahead of time.
3. **Explicit registration — the escape hatch, same as runtime.** For functions constructed dynamically (a validator compiled by a schema library, a curried formatter), `marko/comptime` exposes a `register` mirroring the runtime's `register(id, val, scope?)`: associate the value with a module-reachable factory and serializable arguments, and the serializer emits the corresponding import and call. Tag-library authors already know this pattern from making handlers resumable.

What still cannot cross: an opaque closure from a foreign module (`memoize(fn)` results, bound functions, natives outside the known tables) that is neither an export nor registered. The error is the resume error, one stage earlier:

```
page.marko:7:20: Unable to serialize `format` (reading plans[0].format): this
function is not an export of any module loaded at compile time and is not
registered. Export it, register it via `marko/comptime`, or declare it in
`comptime` code so its source is available.
```

### Virtual modules

Where the handoff must materialize code — comptime-born functions, registered factories — it emits a **virtual module** beside the template through the compiler's existing `resolveVirtualDependency` channel (the same machinery `<style>` uses for extracted CSS). The compiled program imports it like any module:

```js
import { _fn1 } from "./page.marko?comptime.js"; // emitted by the compiler
```

Virtual modules keep the emitted code first-class: bundler-visible, source-mapped back to the comptime code that defined it, tree-shakeable, and shared across the server and browser builds of the template so function identity agrees on both sides — which is what makes a comptime-created function safe to use in, say, a client event handler. Their ids are content-addressed so watch-mode and long-term caching behave (see [Caching and invalidation](#caching-and-invalidation)).

### Cross-template dedup through the build cache

Within one template, dedup falls out of the serializer's reference graph. The same graph lifts to the whole build by combining virtual modules with the compiler's `cache` — whose contract matters here: **the config `cache` is an arbitrary, build-scoped data store; one instance spans every template of a full build, across both the server and browser compilations.** (`@marko/vite` already wields it exactly this way: one `Map` shared by the `ssr` and `client` environments, cleared wholesale on invalidation.)

The comptime pass claims a namespaced entry in that store holding the build-wide analogue of the serializer's per-payload `refs` WeakMap — comptime value → emitted module — plus a content-hash index for values that are equal without being the same object.

- **Identity, one level up.** The evaluator is one realm per build, so two templates that read `CMS.nav` at compile time hold the _same object_. The first template to materialize it emits a shared virtual module through `resolveVirtualDependency` (with a content-hashed `virtualPath`, so the id is deterministic and the emission idempotent); the store records value → module id; every later reference — from any template, in either output target — lowers to an import of that module instead of an inline copy:

```marko
// any template referencing the shared value conceptually lowers to
import { _nav } from "./site-nav.marko?comptime-data.abc123.js";
```

- **Extraction is gated by size and kind.** Small values stay inline — an import costs more than it saves — mirroring the reasoning behind the serializer's `STRING_DEDUP_LENGTH`. Large values and all emitted function code extract; the content-hash key means even structurally-equal values produced independently (two templates each computing the same footer data) collapse to one module with no coordination.

What this buys, in order of importance:

1. **The browser pays once.** N pages baking the same nav, footer, or theme tokens ship one shared chunk instead of N inline copies; module dedup is the one thing every bundler already does perfectly, so cross-template dedup — punted on by the per-template design — becomes free.
2. **Server and client agree.** Both output targets consult the same store, so a comptime function used by a client handler and by server render resolves to the same module id in both bundles. This is precisely why the store must span the _full_ build rather than a single compile.
3. **Identity survives.** What was one object at comptime is one module export at runtime: `===` holds across templates, extending the reference graph's within-template guarantee build-wide.

Boundaries worth stating plainly: identity-keyed sharing needs the single-realm, single-store build — parallel worker processes fall back to the content-hash index, which still dedups the bytes; shared values must be treated as immutable, and debug builds freeze extracted values (the `MARKO_DEBUG` convention) so accidental mutation of now-shared data fails loudly in development; and the store lives and dies with the build — vite's `hotUpdate` clears the cache wholesale and the store rebuilds, with content-addressed ids keeping unchanged emissions byte-identical so module graphs and browser caches reuse them.

Two structural kinds cross the boundary without value-serialization at all, because they splice as AST:

- **Content fragments** (a comptime tag's body, `input.content` inside a comptime-invoked template, `<-define>` bodies) — see [Userland comptime tags](#userland-comptime-tags).
- **Tag references** (a `<-define>` binding used in tag-name position).

---

## Tag reference

Every core comptime tag mirrors its runtime namesake's surface (same attributes, same var/params rules, validated by the same style of `assert*` checks) minus what is meaningless at compile time. Userland tags are covered in [their own section](#userland-comptime-tags).

### `<-if>`

```marko
<-if=condition>
  ...kept only when `condition` is truthy...
</>
```

- Default (`value`) attribute is the condition, evaluated once at expansion. Truthy: body is spliced in place (then itself comptime-expanded). Falsy: the tag and body vanish.
- No tag variable, arguments, or parameters (as runtime `<if>`).
- **No `<-else>` / `<-else if>`** — deliberately omitted to keep the feature simple; write complementary `<-if>`s (share the condition via `<-const>`). A runtime `<else>` following a `<-if>` is a compile error with a targeted message (after expansion there is no `<if>` for it to attach to).
- May wrap **attribute tags**: `<-if>` directly inside a tag body may contain `<@column>`s etc.; surviving attribute tags attach to the enclosing tag as if written directly, so conditional attribute tags cost nothing at runtime:

```marko
<data-grid rows=input.rows>
  <@column key="name"/>
  <-if=FLAGS.audit>
    <@column key="modifiedBy"/>
  </>
</data-grid>
```

- May not wrap module statements (statements are root-only in the grammar already).

### `<-for>`

```marko
<-for|item, index| of=ITEMS> ... </>
<-for|key, value| in=CONFIG> ... </>
<-for|i| from=0 until=COLUMNS> ... </>   // and to= / step=, as runtime <for>
```

- Same attribute forms as runtime `<for>`: `of`; `in`; `to`/`from`/`step`; `until`/`from`/`step`. All are evaluated at expansion; `of` accepts any iterable, `in` any object.
- Parameters bind per-iteration comptime values; the body is cloned per iteration and recursively expanded with those bindings.
- `by` is a compile error: keying exists for runtime reconciliation, and an unrolled loop has nothing to reconcile.
- Guarded by a fixed `100_000`-iteration cap so a wrong collection fails the build loudly instead of hanging it.
- Zero iterations expand to nothing (which may in turn drop now-unused imports).

Note the choice this tag gives authors, which the docs should teach explicitly: `<-for>` bakes _structure_ (each iteration may expand different tags); when every iteration has the same shape, a **runtime `<for>` over a comptime array** is usually the better bundle (one body program plus inlined data, rather than N copies):

```marko
comptime const items = CMS.nav.items;
// static data, runtime loop: one body program in the bundle
<for|item| of=items> ... </for>
```

### `<-const>`

```marko
<-const/theme=CMS.theme/>
<-const/{ primary, accent }=THEME.colors/>
```

- Requires a tag variable (destructuring allowed) and a `value` attribute; no body, no other attributes — the runtime `<const>` contract.
- Binds a comptime constant visible from this point to the end of the enclosing body (document order; see [Comptime scope](#comptime-scope)).
- Referenced from runtime code, it materializes through the [comptime handoff](#crossing-the-boundary-the-comptime-handoff).

### `<-define>`

```marko
<-define/Badge|{ label }| tone="neutral">
  <span class=`badge badge--${tone}`>${label}</span>
</>

<-Badge label="Beta"/>
<-Badge label="Deprecated" tone="warn"/>
```

- Mirrors runtime `<define>`: tag variable (conventionally capitalized), optional body parameters, attributes captured alongside the content.
- The binding holds a **comptime snippet value** `{ ...attrs, content }`. Invoking it with the `-` prefix expands the content with the invocation's attributes/params bound in the snippet's comptime scope — an in-file macro, the comptime analogue of "define then render `<Name/>`".
- The snippet value may also be passed around by comptime code (into `<-for>` collections, other macros' inputs) like any value; it serializes **only** structurally (used as a tag), never as data.
- Without the `-` prefix, invoking the binding is an error (it is a comptime value; there is no runtime object to hand to `<${...}>`), pointing the author at runtime `<define>` instead.

### `<-return>`

```marko
/* inside a template that gets comptime-invoked */
<-return=computedValue/>
```

- Mirrors runtime `<return>`: open-tag-only, single `value` attribute, at most one per template, no `valueChange` (there is nothing to write back to at compile time — a `valueChange` attribute is a compile error).
- Sets the value bound by the _caller's_ tag variable on a comptime invocation: `<-my-tag/x .../>` gives comptime `x`.
- In a template compiled normally (runtime-invoked or an entry), a `<-return>` is inert and erased — it only means something to a comptime caller. Conversely a runtime `<return>` in a comptime-_expanded_ template lowers structurally (see [Userland comptime tags](#userland-comptime-tags)).

### `<-log>`

```marko
<-log=`building ${CMS.page.slug} with ${CMS.blocks.length} blocks`/>
```

- Mirrors `<log>`: single `value` attribute, nothing else. Evaluates the value at expansion and reports it through the compiler's diagnostics (prefixed `file:line:col`, surfaced by CLI/vite as build output). Erased from the compiled result.
- Inside a `<-for>`, logs once per iteration — it is an expansion-time trace, which is exactly what you want when a macro misbehaves.

### `<-debug>`

```marko
<-debug/>
<-debug=suspectValue/>
```

- Mirrors `<debug>`: optional `value` attribute. Executes a `debugger;` statement _inside the compiler_ at that point of the expansion walk, with the current comptime scope and the optional value in hand — run the build under `node --inspect-brk` (or the test runner under a debugger) and step through your macro. Erased from output.

### Not comptime

For every remaining runtime tag the `-` form is a compile error with a specific message, not a silent fallthrough:

- `<-let>` — mutable _reactive_ state has no compile-time meaning; compile-time mutation is ordinary JS in `comptime` statements.
- `<-await>` — unnecessary as a tag; awaiting belongs to the evaluator (see [Open questions](#open-questions)).
- `<-show>`, `<-try>`, `<-lifecycle>`, `<-script>`, `<-style>`, `<-id>`, `<-html-comment>`, native/HTML names (`<-div>`) — no compile-time counterpart; the errors suggest the runtime tag or the right comptime construct. (`<-try>` as a macro-failure boundary is a plausible future addition; see Open questions.)

---

## The `comptime` statement

`comptime` joins `static`, `server`, and `client` as a statement prefix at template module scope, with the identical grammar (bare statement or block):

```marko
comptime const str = "a".repeat(5);
comptime let revision = 0;
comptime function slug(s) { return s.toLowerCase().replace(/\s+/g, "-"); }
comptime {
  if (!globalThis.CMS) throw new Error("CMS data must be loaded before compiling");
}
comptime import { getPage } from "./cms.js";
comptime import "./register-build-helpers.js";
```

Semantics:

- The code runs **once per template compile**, in the comptime program's module scope, in source order, before the tree expansion walk. It is real JS: any statement form, real imports, real errors.
- **Lowering:** each top-level declaration whose binding is referenced by surviving _runtime_ code lowers to a `static` declaration of the serialized value — `comptime const str = "a".repeat(5)` compiles as `static const str = "aaaaa"` does today (a plain module-scope `const` in the output program, shared by server and client). Declarations referenced only from comptime code, expression statements, and blocks lower to nothing.
- `comptime import` is the **only** way comptime code sees a module. Plain `import`s are runtime-world: never loaded by the compiler, unreadable from comptime expressions (the error carries a fix-it). `comptime import` bindings are module comptime bindings like any other, so the standard rules compose: comptime code uses them directly; a _runtime_ reference to one materializes through the [handoff](#functions-cross-like-they-resume) — for module exports that means route 1, a plain import of the same specifier re-emitted in the output, identity preserved — and a `comptime import` nothing references at runtime is never emitted. The bare form (`comptime import "./register-helpers.js"`) loads a module for compile-time side effects only. One statement therefore covers the dual-use case; there is no need to import a module twice to use it in both worlds.
- `comptime function` declarations are callable from any comptime expression and materialize through the [function handoff](#functions-cross-like-they-resume): the compiler owns their source, so a runtime reference emits the function (into the output or a virtual module) with its captured comptime bindings serialized alongside — captures freeze at their final compile-time values, and a capture that cannot cross is a compile error naming it. `static function` remains the right home for code only runtime needs.
- `comptime let` is mutable at compile time (macros and thunks may update it; document order applies). Its runtime materialization, if referenced, is the **final** post-expansion value, as a constant — the error message for assigning to it from runtime code explains that.

AST-wise the statement reuses `MarkoScriptlet` with a new marker (see [Implementation plan](#implementation-plan)); `output: "source"` and codemods round-trip it like `static`.

---

## Userland comptime tags

Any tag resolvable by normal custom-tag discovery — local `tags/` directories, installed tag libraries, `<-define>` bindings, imported templates — can be invoked with the `-` prefix. Resolution strips the prefix and runs the standard lookup (local comptime binding first, then filesystem, then packages); only _what happens next_ is new.

### Template macro expansion

`<-my-tag ...>` performs **AST macro expansion** — compile-time inlining of the tag's template into the caller:

1. **Inputs are evaluated.** Attributes (including shorthands, spread of comptime objects, attribute tags) are evaluated to values and assembled into an `input` object, exactly shaped like the runtime `input`. The caller's body becomes `input.content` as a _content fragment_ (an AST value carrying its scope), attribute tags become fragment-bearing values, repeated attribute tags collapse to iterables — the attribute-tag contract, evaluated one stage early.
2. **The tag's template is instantiated.** The child template's parsed+migrated AST (via the compiler's existing per-file cache and `loadFileForTag` machinery) is cloned. Its module comptime context — its `comptime import`s and `comptime` statements — is evaluated once per file and shared across expansions of that tag.
3. **`input` is comptime inside the clone.** Every reference to `input` (and to tag parameters, for content invoked with arguments) resolves to the evaluated values. That single rule is what makes ordinary tags dual-use: `<-if=input.variant>` branches at compile time, and a _runtime_ expression like `` class=`hero--${input.variant}` `` materializes to a literal through the comptime handoff.
4. **The clone is recursively expanded** — its own `-` tags run, with a fixed expansion-depth guard (`100`) making mutual macro recursion a loud error.
5. **The result is spliced into the caller**, with hygiene (alpha-renaming on collision) and bookkeeping:
   - the child's runtime imports are merged into the caller's module (deduplicated);
   - `<${input.content}/>` sites splice the caller's fragment; a site that passes attributes/arguments to content lowers the fragment's parameters to a destructuring `<const/>` so runtime-valued params keep working;
   - a child `<style>` lowers to one shared virtual CSS dependency per tag file (not one per expansion);
   - a child **runtime** `<return=expr>` lowers to a caller-side `<const/x=expr/>` (the tag variable becomes a runtime binding), whereas a child `<-return>` binds the tag variable as a _comptime_ value — the tag var's stage follows the return's stage;
   - source locations map into the tag file so diagnostics and sourcemaps point at real code, with an expansion trace back to the caller.

Runtime constructs inside the expanded template — `<let>`, event handlers, `<script>`, nested custom tags — are untouched: they are spliced as-is and analyzed as if the caller had written them. **Comptime expansion is not pre-rendering**; interactivity survives inlining.

### Runtime `input` vs comptime `input`

The invocation decides, and it decides for the whole instantiation: `<hero .../>` compiles the tag with `input` (and its content parameters) as runtime bindings, exactly as today; `<-hero .../>` expands the same file with `input` bound in the expansion's **comptime scope**. There is no mixed `input` — attributes are never split between worlds within one invocation. A caller that wants both bakes the static part and passes the live part through content or a nested runtime tag (per-attribute mixing is listed under [Open questions](#open-questions)).

Determination is scope membership, not inference. The comptime pass resolves every identifier in a comptime expression against the comptime scope chain — tree bindings, then module bindings (`comptime const`/`comptime import`), then realm globals. In a comptime-invoked clone, `input` is present in that chain, so `<-if=input.variant>` reads it directly, and a _runtime_ expression like `` class=`hero--${input.variant}` `` materializes through the handoff. In a normal compile, `input` is not in the chain — it is the runtime program's parameter — so the same `<-if=input.variant>` is the standard runtime-binding-read error, pointing at this rule.

Three kinds of tag file fall out:

- **Dual-use** (the common case): `input` appears only in runtime expressions. Both `<hero>` and `<-hero>` work; the comptime invocation simply knows the values one stage earlier. Nothing needs declaring.
- **Comptime-only**: some comptime expression reads `input` (a `<-if=input.variant>`, a `<-return=tokens[input.name]>`). The file only makes sense expanded, and that classification is **inferred from the file itself** — no declaration, no config. Compiling it for runtime use — as an entry, or resolving a runtime invocation site against it — errors at the offending read: `` `input` is a comptime binding only when this tag is invoked as `<-design-token>`; add the `-` prefix at the call site, or move this expression out of comptime position to support runtime use. ``
- **Input-free**: trivially dual-use.

Because determination is static, preserve compiles (see [Compiler API](#compiler-api)) classify files without evaluating anything: the same `Input` interface types both worlds (the values have the same shapes, just known earlier), the comptime-only diagnostic attaches to _runtime call sites_ rather than to the tag file, and an open comptime-only file in the editor is simply a valid file. Whether a value can cross the handoff is deliberately not part of the type: a comptime invocation may receive values of any shape, and the crossing rules apply only where a given value leaks into a runtime position.

---

## Syntax and parsing

### The `-` prefix is part of the tag name

`MarkoTag.name` for `<-if>` is the string `-if`; no new AST node kinds are introduced for invocations. The comptime pass recognizes the prefix; the core taglib registers the seven core comptime tags programmatically, as it does every core tag, so tooling autocompletes them; userland resolution strips the prefix before standard lookup.

### HTML mode: already unambiguous

`htmljs-parser` already lexes `<-if=x>hi</>` as a tag named `-if` (verified against the current parser), and the compiler currently rejects it downstream as an unresolvable custom tag — with, delightfully, the suggestion `Did you mean \`<if>\`?`. The `-`name prefix in HTML mode is therefore free syntax space today: no working template changes meaning. Closing works as any tag:`</>`, `</-if>`.

### Concise mode: one new disambiguation rule

In concise mode `-` currently means:

| Line starts with                              | Today                      | Under this proposal |
| --------------------------------------------- | -------------------------- | ------------------- |
| `-- ` / `--` at EOL / `---`… (matched fences) | text block                 | unchanged           |
| `- ` (single dash + space)                    | `INVALID_LINE_START` error | unchanged (error)   |
| `-if`, `-const/x=1`, `-my-tag` …              | `INVALID_LINE_START` error | **comptime tag**    |

The single-dash error is explicit in the tokenizer (`CONCISE_HTML_CONTENT`, the `-` branch: _"A line in concise mode cannot start with a single hyphen. Use `--` instead."_), so the space is not merely unused — it is actively reserved. The rule added: at a concise line start (or after `;` / `>` continuations), a `-` immediately followed by a tag-name start character begins a tag name; `-` followed by another `-` keeps opening a text block. Because every newly-meaningful input is an error today, the change is strictly backward compatible. Double-dash remaining text costs one asymmetry: a tag whose _stripped_ name itself starts with `-` cannot be written concisely — such names do not exist in practice (HTML custom-element names cannot start with `-`, and the taglib has never allowed one).

Until that parser change ships, the HTML form works everywhere already — concise templates switch to HTML mode at any `<`, so `<-if=x>` is usable inside a concise file today. The concise line form is an ergonomics improvement, not a gate for the rest of this design.

```marko
// concise
-if=DEBUG_ENABLED
  debug-panel
-for|item| of=nav.items
  a href=item.href -- ${item.label}
```

All tag anatomy composes with the prefix unchanged: `<-const/x=1/>` (var), `<-for|item| of=list>` (params), `<-hero title="Hi">` (attrs), `<-data-grid><@column key="name"/></>` (attribute tags), shorthand value `<-if=cond>`.

### The `comptime` statement keyword

`static` is not special-cased in `htmljs-parser`. The parser only knows a generic `TagType.statement`, which the compiler's `onOpenTagName` handler returns for any tag whose taglib definition sets `parseOptions: { statement: true, rawOpenTag: true }`; the parser then consumes the rest as a raw statement (and itself enforces that statements are root-only and written without angle brackets). The keyword's behavior is a core _parse-phase tag_ whose `parse` hook turns the raw text into a `MarkoScriptlet` (`translator/core/static.ts`). `comptime` is implemented identically — a new core tag with the same `parseOptions` — so **no parser changes are needed for the statement**: root-only enforcement, block bodies, and indented continuation all come for free.

### Dynamic comptime tag names

`<-${expr}>` is reserved (parse error) in v1. `<-define>` bindings cover the in-file case with static names, and computed dispatch is ordinary comptime code selecting among snippet values before invoking one. Lifting this later is purely additive.

---

## Compiler API

There is deliberately **no comptime compiler option**. Comptime is part of the language — always on, like `static` — and everything a build could want to configure is already expressed by signals the compiler has:

- **Globals** are the compiler realm's globals. A build orchestrator assigns onto `globalThis` before compiling (the tour example); a `globals` option would only alias that assignment.
- **Preserve behavior is derived, not configured.** `output: "source"` / `"migrate"` compiles stop before the transform stage, so they round-trip comptime constructs verbatim. Error-recovery compiles (`errorRecovery: true` — the editor/language-server pipeline) never evaluate: comptime constructs lower to their runtime analogues (`<-if>` analyzes as `<if>`, `<-for>` as `<for>`, `comptime` statements as `static`), so bodies still resolve taglib metadata and type-check with their bindings in scope while nothing executes. The compile's existing shape already says whether evaluation is wanted; a mode string would restate it.
- **Guards are fixed.** `<-for>` unrolling caps at `100_000` iterations, evaluation at `30` seconds of user-code execution per template (enforced by the VM, so even a hung loop terminates), and macro expansion depth at `100`. A legitimate build never approaches these; a runaway one should fail loudly, not be configured around.

Additions to the compile result:

- `meta.watchFiles` (existing) grows: comptime-imported module files and `.marko` files expanded into this one. `@marko/vite` already forwards `meta.watchFiles` into its dev-server watch graph, so file-backed comptime data invalidates with no new plugin work.
- `meta.comptime?: { evaluated: true }` so integrators can tell whether a template had comptime work (and cache accordingly).

The programmatic story for a CMS build service is the tour example: set globals, pass a fresh `cache` for the content revision, compile. There is no new configuration at all.

### `marko/comptime`

The one runtime-library addition is the untrusted-data airlock (see [Untrusted data](#untrusted-data)), a plain module with no compiler coupling:

- **`inert(value)`** deep-snapshots plain data — JSON shape plus `undefined` and `bigint` — into frozen, null-prototype trees, preserving shared references and cycles. Anything with behavior (functions, symbols, class instances, getters/setters) is a `TypeError` naming the offending path. The result is safe to hand to comptime evaluation in the compiler's Node realm: it cannot carry code, cannot be mutated, and has no prototype chain for merge utilities in trusted comptime code to pollute.
- **`isInert(value)`** brands the airlock: true for primitives and for objects produced by `inert`, so an entry channel can assert data actually passed through.

A build orchestrator applies it at the boundary where untrusted data enters the compiler realm:

```js
import { inert } from "marko/comptime";

globalThis.cmsContent = inert(await fetchDraftContent(revision));
// ...compile templates; comptime code reads `cmsContent` like any global.
```

Comptime code can equally apply it to data it loads itself (`comptime import { inert } from "marko/comptime"`), since `comptime import` resolves bare specifiers through Node resolution. Inert values fold and serialize like any other data — a frozen null-prototype tree is already the serializer's plain-object shape.

---

## Caching and invalidation

The config-supplied `cache` map is an arbitrary data store scoped to a **full build** — one instance across every template and both output targets — namespaced by consumer. The compiler's own use caches the parsed-through-analyzed `BabelFile` per template (keyed per translator, then per template id; entries store `{ time, file, contentHash }` and are written at the end of `transform` — see `getMarkoFile` in `babel-plugin/index.js`); the comptime pass adds its own namespaced entries, most notably the [cross-template value store](#cross-template-dedup-through-the-build-cache). A template entry is invalidated when its content hash changes **or when any file in its `meta.watchFiles` has a newer mtime than the entry** — that second check already exists and runs on every cache hit, in plain compiler usage, not just under vite.

Comptime expansion happens inside that cached span, so its result must be valid for the entry's lifetime. Two mechanisms line up with the two kinds of comptime input, and no dedicated invalidation API is needed:

1. **Source-shaped inputs** (the template, templates it expands, comptime-imported modules): covered by `meta.watchFiles` — the existing mtime check invalidates the entry, and in `@marko/vite` dev mode any watched-file change additionally clears the compiler and taglib caches wholesale (`hotUpdate` in `packages/vite/src/index.ts`), so edits to a comptime-imported JSON file or an expanded tag recompile dependents.
2. **Out-of-band inputs** (compiler-realm globals, CMS state fetched by the orchestrator): covered by the cache's lifecycle. Comptime results are memoized in, and only in, the build's `cache`, so **the cache is the invalidation unit**: the on-the-fly CMS case passes a fresh `cache` per revision (the tour example, and already the recommendation for isolated builds), and a long-running dev server relies on the wholesale `cache.clear()` vite performs on updates — a CMS webhook invalidates the same way, no new plugin API. Changing globals or comptime-module state while reusing a cache is out of contract (data meant to change per build belongs in globals or comptime-imported files, per the determinism contract).

Virtual comptime modules participate like style virtual dependencies, with content-hashed ids: an unchanged emission stays byte-identical across rebuilds (the dev-server module graph and browser cache both reuse it) while any change to the comptime result rolls the id. The [cross-template value store](#cross-template-dedup-through-the-build-cache) rides the same lifecycle — it is a namespaced entry in the build-scoped `cache`, so vite's wholesale `cache.clear()` on hot updates rebuilds it safely.

Parallel test/build workers each evaluate independently; the determinism contract (same inputs ⇒ same expansion) is what makes that sound.

---

## Diagnostics

Comptime failures are compile errors in the house style (`path.buildCodeFrameError`, backticked names, docs link — `core/if.ts` is the model), with two additions:

- **Cause chaining.** A throw from user comptime code keeps its own stack as `cause`; the compile error frames the template site that invoked it.
- **Expansion traces.** Errors inside expanded templates carry the chain of invocation sites:

```
CompileError: CMS region `sidebar` has no published blocks
    at tags/cms-region/index.marko:3:14 (in comptime code)
  while expanding `<-cms-region>` at layouts/base.marko:18:2
  while expanding `<-base-layout>` at page.marko:1:0
```

Specific, early errors exist for every rule stated in this document: runtime-binding reads from comptime expressions, plain-`import` reads from comptime expressions (with the `comptime import` fix-it), non-serializable boundary crossings (the resume serializer's `Unable to serialize ... (reading x.y)` message shape, with template locations and the suggested routes across), `<else>` after `<-if>`, `by` on `<-for>`, `valueChange` on `<-return>`, runtime invocation of a comptime-only tag, promise results in sync mode, iteration/depth guard trips, use-before-declaration of comptime bindings, and `$ct`-prefixed names in comptime code (reserved for the evaluator, keeping its internals unreachable).

`<-log>` output surfaces as compiler diagnostics (the existing `diagnosticWarn`/`diagnosticError` babel-utils channel, which respects `errorRecovery` and lands in `meta.diagnostics`), so vite prints it with file context rather than raw `console` noise.

---

## Tooling

- **Editors and the language server never execute comptime code.** Editor-driven compiles preserve instead of evaluate (derived from `errorRecovery` — see [Compiler API](#compiler-api)): comptime constructs still parse, resolve taglib metadata, and type-check structurally: `-if`/`-for` bodies are checked as always-possible content, comptime bindings get types from their initializer expressions, and `input` in a dual-use tag types as the tag's `Input` as usual. What the editor loses is only value-dependent knowledge (which `-if` branch survives) — the same information it already lacks for runtime branches.
- **Type declarations.** `comptime const` participates in the generated `.d.ts` pipeline like `static const`. Compile-time globals are ambient: projects declare them (`declare global { const DEBUG_ENABLED: boolean }`) exactly as they would for any bundler-injected global. `marko/comptime` (the data airlock, and future home of `register`) ships its own types.
- **`output: "source"` / `"migrate"`** round-trip comptime constructs verbatim (the pass runs after the point those outputs stop), so codemods and formatters are unaffected.
- **Syntax highlighting** needs two small grammar updates in the editor plugins: `comptime` in the statement-keyword set and tag names beginning with `-`.
- **Snapshot debugging:** `npm run compile -- -o html -d file.marko` shows post-expansion output like any compile; a `--comptime-preserve` flag on the inspect script is a cheap add for seeing the pre-expansion tree.

---

## Security

Comptime executes arbitrary project code inside the compiler process. The design position, consistent with the "real JS execution" decision:

- **No sandbox, by design.** Building a project already executes its dependencies (install scripts, vite config, Babel plugins, PostCSS...). Comptime adds no privilege that `marko.config`/plugin code does not already have, and pretending `vm` contexts are a security boundary would be false comfort (Node's `vm` is explicitly not one). The trust model is: compiling a project ≡ running that project's build code.
- **What changes is _where_ code can hide:** a `.marko` file or an installed tag library can now carry compile-time behavior. Mitigations that keep the DX intact:
  - Compile-time module loading is lexically explicit: only `comptime import`s (plus the comptime code of templates it comptime-invokes) execute in the compiler, so auditing what a template runs at build time means reading its import block, not tracing its expressions.
  - Editors/language tooling never evaluate (above) — opening a malicious file in an IDE runs nothing.
  - Pipelines that only need syntax (linters, formatters, code intel) compile with `errorRecovery` or the source outputs and therefore never evaluate.
- Compiling _templates_ authored by untrusted parties is executing their code, exactly as it would be for JSX/TS files, and should be treated with the same isolation (throwaway workers/containers), which the ephemeral-build pattern already implies.

### Untrusted data

Untrusted _templates_ and untrusted _data_ are different problems. Data has no agency: a JSON tree cannot call anything, so every data-borne attack must flow through a **sink in trusted code** — somewhere a value is given power. That reframing makes the CMS question tractable, because the design already closes most sinks structurally:

- **Output injection is closed by construction.** The serializer emits AST literal nodes, never concatenated source text, so a string value cannot break out of its value position — the comptime analogue of why the resume serializer escapes its wire format.
- **Data never becomes syntax.** Expansion lets values _select among_ trusted branches (`<-if>`, `<-for>`) and _fill_ value positions; tag names never fold, and no data-driven path produces new attribute names or statements. Template structure comes only from template authors.
- **Escaping parity.** Values folded into static output are escaped with the same rules as runtime interpolation, so untrusted strings inlined at comptime have exactly runtime Marko's XSS posture.
- **No data-driven loading.** `comptime import` specifiers are string literals by grammar; a value cannot name a module to load.

What a shared realm leaves open, and the ladder of answers (each rung buys more than the last):

1. **Types + lint.** A deep-readonly, JSON-shaped type on the data entry point plus lint bans on eval-shaped sinks and naked merges. Advisory — but since data has no agency, the adversary is _bugs in trusted code_, and advisory tooling is a principled fit for that threat.
2. **An inertness airlock.** One blessed entry channel (the globals/`input` root the CMS pattern already uses) that structural-clones incoming data into deep-frozen, null-prototype trees, rejecting functions and getters. This kills the two data-only attack classes outright: live objects masquerading as data, and prototype pollution through merge utilities (a null-prototype tree has no chain to pollute). Shipped as [`inert`/`isInert` in `marko/comptime`](#markocomptime).
3. **A hardened realm.** Frozen intrinsics and evaluation inside a compartment endowed with only what the build grants, so even eval-shaped bugs in trusted code have nothing to reach. The first rung that protects against sloppy trusted code; costs real friction (cross-realm brand checks in the serializer, ecosystem compatibility of comptime-imported packages).
4. **Process isolation.** No ambient authority, structured-clone in and out (rung 2 for free), time and memory budgets, kill on breach. The only rung that also covers untrusted templates, and what a multi-tenant build service should run regardless. The handoff composes with it naturally: everything that crosses is serializable data plus module-identity references, which is already an isolation-boundary protocol.
5. **Keep it out of comptime.** Bake _structure_ from trusted config; leave untrusted _content_ as runtime `input`. The bake-structure-vs-inline-data guidance is also a security lever.

The recommended posture: rungs 1–2 as the documented default for CMS builds, rung 4 for services compiling on behalf of tenants. On resource exhaustion, the fixed guards bound iteration count and evaluation wall-clock time (the VM terminates even a hung loop), leaving output size as the one budget no rung supplies — a natural extension wherever untrusted data is in play.

---

## Performance and output size

- **Compile cost** is proportional to what comptime does: templates without comptime constructs skip the pass entirely (a cheap syntactic check), and evaluation results are cached with the template. Macro-heavy builds pay module-evaluation once per file per cache lifetime.
- **Output size** cuts both ways and the docs should say so plainly:
  - `<-if>` removes code with a guarantee — including from analysis metadata, walks, and serialized state, which no downstream minifier could do.
  - `<-for>` _duplicates_ its body program per iteration. The unroll-vs-inline guidance in the [`<-for>` reference](#-for) (bake structure, not repetition) is the primary authoring rule; `<-log>` plus the sizes tooling (`npm run build:sizes`, fixture `sizes.json`) make regressions visible in review.
  - Materialized values dedup structurally per template: the serializer's reference graph hoists shared objects and long repeated strings to single `static const`s, the same guarantee the resume payload gives on the wire. Build-wide, the [shared-module store](#cross-template-dedup-through-the-build-cache) extends this across templates: N pages baking the same data ship one content-addressed module, deduplicated by the bundler like any other import.
- **Runtime cost is zero by construction** (principle 4): no runtime helper, no new runtime branch, no size change to `@marko/runtime-tags` for programs that never use comptime — and none for programs that do, either, since expansion output uses only existing constructs. The `.sizes.json` diff for the implementing commits should be exactly zero on the runtime side.

---

## Implementation plan

Phased so every step lands green and independently useful.

### Phase 0 — parser groundwork (`htmljs-parser`)

- Concise-mode rule: `-` + tag-name start character at line start begins a tag name (today: the explicit single-hyphen `INVALID_LINE_START` error in `CONCISE_HTML_CONTENT`). New tests around the `--` text fences.
- **Not a blocker**: the HTML form (`<-if>`) parses today in both modes, so phases 1–3 can land and ship against it while this trails in parallel.
- No changes for the `comptime` statement (statement parsing is taglib-driven via `parseOptions`; htmljs already enforces root-only placement for `TagType.statement`).

### Phase 1 — the statement and `<-const>`/`<-if>`/`<-log>`/`<-debug>` (runtime-tags translator)

- `translator/core/comptime.ts`: parse-phase tag mirroring `static.ts` (`parseOptions: { statement: true, rawOpenTag: true }`, `parse` hook strips the keyword and `parseStatements`s the rest), producing `MarkoScriptlet` with a comptime stage marker. This touches the Babel patches regardless of encoding, because `output: "source"` needs the generator to print the `comptime` keyword back out — so encode it honestly in the node (widen `target` with `"comptime"`, or add a fourth field) and update the `@babel/types` + `@babel/generator` patches together, per the repo's patch-regeneration rule. The `comptime import` form parses like the core `import` tag — to a real `ImportDeclaration` — marked comptime (an `extra` flag suffices there), keeping plain and comptime imports distinguishable through transform and printable by `output: "source"`.
- New `translator/comptime/` module owning the pass: comptime-program derivation, the thunk builder, the sync evaluator/loader, scope tracking, the comptime serializer, and the expansion walker. Registered as the first transform step (Program transform enter, before `preAnalyze`), per the pipeline constraints above. The program builder uses the existing `parseStatements`/`parseExpression` babel-utils, whose source-offset mapping keeps every generated frame pointing at real template positions.
- **The comptime serializer aligns with `html/serializer.ts` by contract**: same value coverage, reference/cycle semantics, known-built-in tables, and error taxonomy, with an AST-emitting backend and the module graph in place of the runtime registry. Whether the two literally share a core is an implementation call — the resume serializer's size and speed are load-bearing (it ships in every server bundle), so sharing must not regress the string path; the translator already importing `toAccess` from it is precedent that some sharing is workable (and a known coupling gotcha). Either way, a shared **conformance fixture** keeps them aligned: one table of exotic values (shared refs, cycles, `Map`/`Set`, symbols, registered functions, iterable objects) asserted to revive identically through the resume round trip and through the comptime lowering.
- Core comptime tags registered in `core/index.ts` + `util/is-core-tag.ts` (they ride the existing taglib, keyed literally as `-if` etc., so tooling sees them); each is a thin validation shell (the `assert*` style) whose behavior lives in the pass. `-if`/`-for` mirror their runtime `parseOptions` (`controlFlow: true`) so attribute-tag children parse identically.
- Compiler-side: append comptime-imported files to `meta.watchFiles`; add the `comptime` config plumbing and the stage seam in `babel-plugin/index.js`. All additive; the compiler stays translator-agnostic (a translator exports an optional `comptime` stage hook).
- Fixtures: `comptime-statement-*`, `comptime-if-*`, `comptime-const-*`, plus `error_compiler` fixtures for each diagnostic in [Diagnostics](#diagnostics). Snapshots double as the spec for "no residue" (compiled output must match the hand-written equivalent fixture byte-for-byte, a property worth asserting directly in `main.test.ts`).

### Phase 2 — `<-for>`, `<-define>`, `<-return>`, the full handoff

- Unrolling with per-iteration binding frames; snippet values; comptime tag variables; the materialization/dedup machinery for tree-scoped bindings.
- Function handoff routes 1–2: module-export identity → imports, and comptime-born functions emitted through virtual modules via `resolveVirtualDependency` (the `<style>` channel), with content-addressed module ids.
- The build-wide value store: a namespaced entry in the compiler `cache` (identity `WeakMap` + content-hash index) backing cross-template shared modules, consulted by both output targets.

### Phase 3 — userland expansion

- `.marko` macro expansion (clone + splice + hygiene + import/style merging), building on `loadFileForTag`/per-file caching; content-fragment splicing including the parameter-lowering rule; expansion traces in errors.
- Function handoff route 3: `register` in a new `marko/comptime` export, mirroring the runtime registry's shape.

### Phase 4 — integrations and DX

- `@marko/vite` / `@marko/run`: docs for the cache-lifecycle and watchFiles invalidation patterns; editor plugin grammar updates; `--comptime-preserve` on the inspect script; deriving preserve from `errorRecovery` in the language server.
- Website docs: a reference page (`docs/reference/comptime.md`) and an explanation page (the time ladder; bake-structure-vs-inline-data guidance).

Each phase needs a changeset; interop taglib-lookup expectations (`packages/runtime-class/test/taglib-lookup/`) update when the core taglib grows.

### Testing strategy notes

- The fixture harness runs everything under `--experimental-vm-modules` already; evaluator tests can drive both loader modes.
- Determinism: a fixture asserting html/dom compiles of one template agree after independent evaluation, and one asserting cache-hit compiles skip re-evaluation (spy on a `comptime {}` side effect).
- Guard-rail fixtures: iteration cap, depth cap, promise-in-sync-mode, every boundary error.

---

## Prior art

- **Marko's own resume handoff** (`html/serializer.ts` + `dom/resume.ts`) — the primary architectural template. A reference-graph serializer with a registration model for code values, already trusted to move arbitrary application state (shared references, cycles, symbols, exotic built-ins, registered functions with captured scopes) across the server→client boundary. Comptime is deliberately the same handoff one rung earlier, down to the shape of its error messages.
- **Zig `comptime`** — the naming and the core idea: same language above and below the line, compile-time execution of ordinary code, values crossing downward by materialization. Marko's twist is that the "code" is markup and the materialization target is a template program.
- **Bun macros** (`import { x } with { type: "macro" }`) — real JS executed at bundle time whose return values are serialized into the bundle; validated the "real execution + serialization boundary" model this design adopts. Bun rejects functions and non-data values outright, which is exactly the limitation the resume-aligned handoff exists to lift.
- **Rust macros / `macro_rules!`** — hygiene expectations and expansion traces in diagnostics; also the cautionary tale about a second dialect feeling bolted on, which principle 1 exists to avoid.
- **The C preprocessor** — the anti-model: textual, unhygienic, its own grammar. Comptime is AST-and-value based specifically to be everything `#if` is not.
- **Marko 5 `<macro>`** — historical, runtime, recursive; removed in Marko 6. Its name is deliberately not reused (it is also an interop detection heuristic for the Class API), and its leftover compiler plumbing (`registerMacro`/`isMacroTag` in babel-utils, serving the class-API translator) shares nothing with this design.
- **Marko's own implicit passes** — `<show>`'s confident-value collapse, static attribute inlining (June 2026), text-only-`<if>` flattening: comptime is the explicit, guaranteed, user-directed generalization of what these do opportunistically.

---

## Alternatives considered

- **A wrapper tag (`<comptime>…</comptime>`) instead of a prefix.** Rejected: it marks a _region_ rather than an _invocation_, so it cannot express "this tag call is compile-time" without inventing nested re-dispatch rules, and it reads as a foreign island — precisely the disjointedness this design is meant to avoid.
- **An attribute (`<if comptime>`), or a modifier on the value (`if=comptime(x)`).** Rejected: attributes are expressions in Marko; overloading one as a stage marker muddies the attribute grammar and cannot mark userland invocations cleanly (`<my-tag comptime>` would shadow a real input name).
- **Other prefix characters.** `!` collides with `<!DOCTYPE`/comments and reads as negation; `#`/`.` are the id/class shorthands; `$` means placeholders/scriptlet history; `@` means attribute tags; `:` suggests namespaces and pseudo-selectors. `-` is free in HTML mode today, an error in concise mode today (strictly backward compatible to claim), visually quiet, and mnemonic: the tag is _subtracted_ from the runtime.
- **Whole-file opt-in (a `.comptime.marko` extension or pragma).** Rejected: the CMS use case needs comptime and runtime interleaved in one template; per-invocation granularity is the feature.
- **A constant-expression interpreter instead of real execution.** (The `computeNode` route, extended.) Rejected per the design decision — subset interpreters grow forever, surprise users at every boundary, and still cannot import a JSON file. Real execution makes capability questions answer themselves.
- **"Just use a bundler define / build plugin."** Covers `DEBUG_ENABLED`-style constant folding at the JS level only; cannot remove template structure, unroll markup, or expand tags, and pushes CMS builds back to source-generation. Comptime subsumes the define use case via globals while staying inside the language.

---

## Open questions

1. **Async evaluation.** v1 is sync; the stage seam anticipates `compile()` awaiting evaluation before the Babel traversal. Is top-level `await` in `comptime {}` worth landing in Phase 3, or does the fetch-then-build pattern cover real users indefinitely?
2. **`<-try>`.** A macro-failure boundary (fall back to body / `@catch` content when expansion throws) would help CMS resilience, at the cost of swallowing build errors. Needs a real use case before being specified.
3. **How much of the async tail crosses.** The resume serializer moves promises, `ReadableStream`, `Request`/`Response`, and in-flight generators through flush channels; the comptime handoff defers them (await in comptime; error otherwise). Once async evaluation lands, which of these are worth carrying over — is there a real template that wants to bake a _pending_ value?
4. **Shared-module tuning.** Content-addressed ids and the build-store design pin down identity and lifecycle; still open are the extraction thresholds (when a value is big enough to leave the template), first-emitter ownership conventions versus a build-level namespace for dev-server invalidation tracking, and whether freezing shared values should extend beyond debug builds.
5. **`<-else>`.** Deliberately excluded from this design to keep it simple (complementary `<-if>`s cover it). Revisit only with strong demand, as pure sugar over the same model.
6. **Cross-template macro memoization.** Expanding the same tag with identical input in many templates re-evaluates per template. A keyed memo (input-hash → fragment) is a pure optimization, and the build-scoped `cache` — already hosting the shared value store — is its natural home; measure first.
7. **Editor-time value knowledge.** Preserve mode could optionally consult a user-supplied "editor globals" module to light up `-if` branch dimming in the IDE without executing project code. Worth exploring after the language server work settles.
8. **Ecosystem naming.** `comptime` (statement, config key, `marko/comptime` export) vs "compile-time tags" in prose docs — settle before public docs ship.
9. **Partial comptime input.** Should a runtime invocation be able to mark individual attributes comptime — baking `variant` while `title` stays live? v1 keeps `input` whole (one world per instantiation) because splitting gives attributes per-attribute worlds in both the scope rules and the handoff; content and nested runtime tags cover today's mixed cases. Revisit with evidence.
