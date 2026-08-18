# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Migrate to Babel 8 and chai 6 as dedicated efforts

`patches/@babel__types@7.29.7.patch` | 2026-07-07 | impact:med | effort:high

Two majors stay pinned because they are migrations, not refreshes. Babel is held at 7.29.7 behind four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel__{types,traverse,generator,helper-compilation-targets}@7.29.7.patch`; the types one is 78 KB of injected Marko AST node types) plus `packages/compiler` reaching Babel-7 internals through the `@marko/compiler/internal/babel` export — Babel 8 restructures those modules, so the patches stop applying and the codegen needs porting. chai is held at 4.5.0 because chai 5+ is ESM-only and 371 CommonJS `require("chai")` call sites remain, all under `packages/runtime-class/test/**`. Give each its own PR. Re-check with `ls patches` and `rg -c 'require\("chai"\)' packages`.

## Serialize `Blob` and `File`, including inside `FormData`

`packages/runtime-tags/src/html/serializer.ts` › `writeFormData` | 2026-07-23 | impact:med | effort:med

Neither type has a case in `writeUnknownObject`, and `writeFormData` aborts on any non-string entry ("`File`/`Blob` entries aren't serializable yet"), so a resumed form carrying an upload cannot be represented at all. Both hold binary content the existing `writeArrayBuffer`/`writeTypedArray` path already encodes and both rebuild from a constructor call (`new File([bytes], name, { type, lastModified })`); the work is reading the bytes and threading the async read through the boundary the way `writeReadableStream` does. Verify: `serializer.test.ts`'s "aborts on File/Blob values instead of dropping them" pins today's behavior, and a bare `new Blob(["hi"])` hits `throwUnserializable`.

## Raise the unresolvable-tag-name error during analyze; at translate its `<let>`/`<const>` hint is lost and only the first bad tag reports

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `tagNotFoundError` | 2026-07-23 | impact:med | effort:med

`analyzeTagNameType`'s `else if (!childFile)` branch (`util/tag-name-type.ts`) reclassifies an unresolvable string tag name as `TagNameType.DynamicTag`, so `CustomTag.analyze.enter` never throws and the error surfaces instead from `getTagRelativePath` during `DynamicTag.translate.exit`. That costs two things. `tagNotFoundError`'s `tag.scope.hasBinding(tagName)` hint reads a scope translate has already rewritten, so `<let/thing="hi"/>` then `<thing/>` prints ``Did you mean `<img>`?`` instead of the PascalCase/dynamic-tag hint the reversed order still prints, and `<const/panel=input.content/>` + `<panel/>` degrades to ``Did you mean `<label>`?``. And the `reportAnalyzeError`/`analyzeFailed` batching in `visitors/tag/index.ts` is bypassed: two unknown tags report one error, while two `<let/x=x/>` circular references report together. Direction: detect the unresolvable string-literal tag name in `DynamicTag.analyze.enter` (export `tagNotFoundError`) so the diagnostic is built while the scope is intact and batched. Re-verify: compile those two pairs and count reported errors.

## Union the Marko 5 and 6 `types` stubs in the interop taglib merge — `<await>` and `<script>` type-check against the Marko 5 API inside Tags-API files

`packages/runtime-tags/src/translator/interop/index.ts` › `mergeTagDef` | 2026-07-27 | impact:med | effort:med

`mergeTagDef` special-cases only the hook keys and falls through to `value5 ?? value6`, so the Marko 5 `types` stub wins wherever both core taglibs declare one — today exactly `<await>` and `<script>`. Because `marko/translator` is the interop translator and `@marko/compiler`'s default, `@marko/language-tools` resolves those two to `marko/src/core-tags/core/await/index.d.marko` and `.../script.d.marko` even inside a Tags-API `tags/*.marko` file, so editors offer and silently accept `<@then>`/`<@catch>`/`client-reorder`/`timeout` and every html `<script>` attribute — all of which the Marko 6 translator rejects with a hard compile error — precisely in mid-migration projects. Direction: interop-specific stubs whose `Input` unions both APIs, selected when both sides declare `types`. Re-verify: `taglib.buildLookup(".../fixtures-interop/interop-basic-tags-to-class", "marko/translator").getTag("await").types` prints the Marko 5 path instead of `@marko/runtime-tags/tags/await.d.marko`.

## Diagnose cross-environment reads of a `server`/`client` scriptlet binding

`packages/runtime-tags/src/translator/visitors/scriptlet.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

When a scriptlet's `target` does not match the output, `translate.exit` replaces it with bare `var` declarations of its outer binding identifiers, so every cross-environment read compiles clean and silently evaluates to `undefined` — no compile error, no MARKO_DEBUG warning. `server function fmt(n) { return n + "!" }` with `<p>${fmt(input.n)}</p>` renders fine on the server but emits `var fmt;` plus `_text($scope["#text/0"], fmt(input_n))` for DOM, throwing `fmt is not a function` on the first client render. The translator already has the binding names it stubs and the reference paths at analyze, so it can raise a code frame naming the binding and its declaring environment. Any diagnostic must exempt `src/__tests__/fixtures/server-client/template.marko`, which deliberately reads both bindings from a `static` statement behind `typeof server_x === "undefined"`. Re-verify: `pnpm run compile -o dom -d` on that two-line template exits 0 with no diagnostic and writes `var fmt;` next to `fmt(input_n)`.

## Re-measure `test:parallel` before chasing further speedups

`scripts/test-parallel.js` | 2026-07-11 | impact:med | effort:high

The "CPU-bound, so packing and worker count can't help" conclusion rests on a profile that no longer describes the tooling: `@babel/register` is gone (Node strips types natively) and the `c8 report` pass was replaced by zcov in a2ac845475. Nothing has re-profiled a worker since. If a fresh profile still shows significant idle, the one identified win — pipelining the next fixture's `createServerRunner()` build one fixture ahead, gated on `MARKO_TEST_SLOTS` — remains blocked by `packages/runtime-tags/src/__tests__/utils/capture-console.ts`, which patches `globalThis.console` process-wide so a concurrent build's output lands in another test's capture window; scope that capture first. Re-verify by `--cpu-prof`-ing one worker of `node scripts/test-parallel.js`.

## Give a structural error for a stray close tag / unwrapped text on a concise line

`packages/compiler/src/babel-plugin/parser.js` › `onError` | 2026-07-19 | impact:low | effort:med

`onError` relays htmljs-parser's raw `part.message` into `buildCodeFrameError` with no post-classification, so a concise line of bare text plus a stray close tag reports a JS-tokenizer internal that never mentions tags: `hello</div>` → "Unterminated regular expression." at column 8, `Read more or/and less` → "Invalid attribute name.", `Click here</a> to continue` → "Attribute cannot contain type parameters unless it is a shorthand method". The identical mistake in HTML mode is diagnosed correctly (`<div>hi</span>` names the mismatched closing tag). Detect the concise `<identifier>`-scanned-as-tag followed by a `/`-started expression and remap it to a tag/text structural message before rethrowing. Wants a post-classification layer in this parser adapter. Re-verify by compiling those three one-line templates.

## Emit a dev-mode diagnostic when a self-referential effect re-renders past a threshold

`packages/runtime-tags/src/dom/signals.ts` › `_let` | 2026-07-19 | impact:low | effort:med

A `<script>` effect that writes a `<let>` it transitively reads re-renders forever with no cycle or max-depth diagnostic. `<let/n=0/><div>${n}</div><script>{ n = n + 1 }</script>` compiles to a `_let("n/1", ...)` signal that invokes the `_script` effect, whose body calls the setter again: `_let`'s non-rendering branch fires `schedule()` + `queueRender` on every value change with no per-scope update counter, `_script` is a bare `queueEffect` with no dedupe, and `run()` in `dom/queue.ts` drains renders then effects with no depth tracking. Mounted in jsdom the effect runs ~124 times per second (the `queueMicrotask`->`requestAnimationFrame`->`MessageChannel` pacing in `dom/schedule.ts` yields ~2 passes per frame), `n` grows unbounded and the console stays silent; a terminating variant (`if (n < 3) n = n + 1`) settles at `n = 3`, showing each self-write is a full render+effect pass. Writing state from an effect is user error (derive with `<const>`), so the gap is the diagnostic React and Solid provide. Add a `MARKO_DEBUG`-only update-depth guard in `run()`/`queueRender` that throws after N self-perpetuating passes on the same scope+signal.

## Unify `packages/runtime-class/src` on ESM so its module type can be declared

`packages/runtime-class/package.json` › `files` | 2026-07-24 | impact:low | effort:high

`packages/runtime-class` declares no `"type"`, and 79 ESM-syntax `.js` files sit under `src` alongside 137 CommonJS ones, so Node parses each ESM file as CommonJS, fails, and reparses it as ESM. It is not silent: `pnpm run compile -t class` — the `-t class` form root `AGENTS.md` documents — prints `[MODULE_TYPELESS_PACKAGE_JSON] ... packages/runtime-class/src/translator/index.js ... incurs a performance overhead`. It is harder than `packages/compiler` was: that package fixed it with a `src/package.json` `{"type":"module"}` marker it never publishes, whereas `runtime-class` lists `src` in `files`, so the marker would ship and all 137 CJS files would have to convert. Marko 5 is in maintenance, so weigh the churn before starting. Re-verify: `pnpm run compile -t class -o dom -d /tmp/x.marko` and observe the warning.

## Populate the `meta.diagnostics` warning channel; three messages cover 1024 fixtures

`packages/compiler/src/babel-utils/diagnostics.js` › `diagnosticWarn` | 2026-08-03 | impact:high | effort:med

The warning pipeline works and is snapshot-tested, but almost nothing feeds it. `babel-utils/diagnostics.js` exposes four non-throwing channels; runtime-tags uses `diagnosticSuggest` not at all, `diagnosticError` only to collect analyze failures, and spends its entire author-facing vocabulary on five `diagnosticWarn`/`diagnosticDeprecate` sites — the `<attrs>` and `<effect>` deprecations, duplicate native attributes, camelCase `style=` keys, and `core/style.ts`'s dynamic placement — of which only the first three are exercised by any fixture, 21 of 1024 fixture dirs carrying a `diagnostics*.md` snapshot. A survey of 60 hand-written templates meanwhile turned up 21 distinct compile-clean-but-wrong behaviours, several decidable from data the translator already computes, and each produces `[]` diagnostics in both `html` and `dom` today. Direction: make the channel the home for statically-detectable silent failures, not just deprecations, and note that a consumer which only catches thrown errors never sees a warning at all, so anything attached to a thrown `CompileError` has to reach `errorRecovery` diagnostics too. Re-verify: `rg -n 'diagnosticWarn|diagnosticDeprecate' packages/runtime-tags/src` lists five sites, `rg -n 'diagnosticSuggest' packages/runtime-tags/src` matches nothing, and `find packages/runtime-tags/src/__tests__/fixtures -name 'diagnostics*.md' | wc -l` prints 21.

## Warn when a `<let>` initializer reads reactive state and nothing ever assigns it

`packages/runtime-tags/src/translator/core/let.ts` › `analyze` | 2026-08-03 | impact:high | effort:med

A `<let>` value is an initial value, not a formula, so using one for a derived value is silent and partially passing. `<let/a=false><let/b=false><let/openCount=(a ? 1 : 0) + (b ? 1 : 0)>` with a `${openCount}` readout renders `0` correctly on the server and then freezes: an uncontrolled `<let>` calls `setBindingDownstream(binding, false)`, so SSR emits no resume marker for the text node it feeds and the DOM signal's write lands in an undefined scope slot — no exception, `[]` diagnostics in both outputs, and any assertion matching the first render still passes. All four inputs are already in `analyze`: the tag is `<let>`, `valueChangeAttr` is absent, `tag.node.extra.referencedBindings` is non-empty, and `binding.assignmentSections` is empty — that last condition is what preserves the legitimate "seed an editable copy from a prop" pattern. Warn naming `<const>` as the fix rather than erroring, until someone rules whether an unassigned reactive-initialized `<let>` should be illegal or simply reactive. Re-verify: compile that template with `errorRecovery: true` for empty diagnostics, then mount it in jsdom and click both buttons — the readout stays `0`.

## Warn when a client-reactive expression reads `$global`

`packages/runtime-tags/src/translator/visitors/referenced-identifier.ts` › `analyze` | 2026-08-03 | impact:med | effort:med

After resume `$global` holds only `{runtimeId, renderId}` unless a key is enabled in `$global.serializedGlobals`, so any read that recomputes on the client silently becomes `undefined` rather than throwing. `<let/n=0><const/derived=$global.msg + "!" + n><div id=derived>${derived}</div>` plus a button that bumps `n` streams `hello!0`, hydrates unchanged, then renders `undefined!1` on the first click; adding `serializedGlobals: ["msg"]` restores `hello!1`. Nothing reports it — `meta.diagnostics` is `[]` in both outputs — and a non-reactive `${$global.msg}` on the line above stays correct forever, so the page looks half-working rather than broken. The condition is decidable exactly where `analyze` already calls `setReferencesScope` for `$global`: warn when the read's expression root also carries `referencedBindings`, i.e. the read feeds a DOM update signal instead of a first-render-only write — exempting `runtimeId` and `renderId`, which `dom/resume.ts`'s `initGlobal` seeds whatever the payload contains. `serializedGlobals` is a runtime value in both accepted shapes (`string[]` and `Record<string, boolean>`; see `getFilteredGlobals`), so the compiler can never tell which keys survive — this has to be a warning naming it, never an error. Re-verify: render that template with `$global = { msg: "hello" }`, resume it in jsdom, click, and read `#derived`.

## Warn when a `<script>` assigns a fresh identity to a binding it also reads

`packages/runtime-tags/src/translator/core/script.ts` › default export | 2026-08-10 | impact:high | effort:med

A `<script>` re-runs when any binding it references changes, and an assignment like `items = items.filter(...)` inside that same script produces a new array identity on every run — so the script re-triggers itself forever. In a real app the loop sat inside a data loader (`openIds = openIds.filter(id => list.some(...))` after a fetch), yielding an unbounded three-requests-per-cycle fetch loop that only surfaced as the browser's `ERR_INSUFFICIENT_RESOURCES`, far from the cause; the fix was guarding the assignment behind a length comparison to preserve identity. The hazard is statically visible: the script's body both reads a binding and unconditionally assigns it an expression guaranteed to be a fresh object identity (array/object literal, `.filter`/`.map`/`.concat`/spread). Warn on that shape, pointing at identity-preserving guards or `<const>`. Re-verify: mount `<let/items=[[]]>` with `<script>items = items.filter(Boolean); console.count("run")</script>` in jsdom — the counter never stops.

## Diagnose nullish-coalesce inside handlers that also assign `<let>` (false TS2588)

`packages/runtime-tags` › handler type extract | 2026-08-13 | impact:med | effort:med

Inside a native-tag handler or `<const/fn=() => {…}>`, an expression like `pending ?? value || ""` (or optional-chain + `??`) makes every later assignment to a `<let>` report TS2588 "Cannot assign to 'x' because it is a constant", even though the binding is a `<let>`. Workarounds that typecheck: parenthesize `(pending ?? value) || ""`, or avoid `??` in that function (`pending !== null ? pending : value || ""`). Cheatsheet/golden-rules should call this out next to the existing `>=` / `>` attribute-close gotchas. Re-verify: compile a tag with `<let/x=0>` and `onClick() { const y = a ?? b; x = 1 }` — TS2588 on `x = 1`; replace with a ternary and the error disappears.

## Document out-of-order `<try>`/`@placeholder` HTML shape for SSR debugging

`website/docs/explanation/streaming.md` › `@placeholder` / out-of-order | 2026-08-13 | impact:med | effort:low

When `<try>` has `@placeholder` around `<await>`, a single `curl` of the response shows the placeholder still inside `<main>` even after the promise has resolved — the real branch is appended as out-of-order markers (`<t hidden M_=…>…</t>` + small runtime scripts) later in the body. Agents debugging "SSR didn't render X" often stop at the placeholder in `<main>` and miss that the streamed branch (or a `@catch` error string) is further down.

Direction: in the streaming doc (or cheatsheet SSR section), show a minimal response sketch: placeholder in-tree → later hidden replacement fragment; note that `@catch` errors surface the same way (`<p>…is not a function</p>` inside a hidden `t`). Re-verify: stream a page with slow `<await>` + placeholder; `curl -N` and observe placeholder first, then hidden content blocks before `</body>`.
