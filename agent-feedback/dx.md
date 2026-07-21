# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## `c8` coverage crashes generating lcov when the wrapped process loads `~ts`

`scripts/test-parallel.js` | 2026-07-02 | impact:med | effort:med

`c8 node -r ~ts <script>` (i.e. any c8-wrapped process that loads `scripts/babel-register.js` via `-r ~ts`) throws `TypeError: Cons is not a constructor` at `istanbul-reports/index.js:22` during c8's report step while constructing the `lcov` reporter — no `coverage/lcov.info` is written and the process exits 1. Coverage collection itself succeeds (the text-summary reporter prints correct numbers); only lcov report generation dies. This is why `scripts/test-parallel.js` is deliberately plain CommonJS (its spawned mocha workers still load `~ts` via `.mocharc.parallel.json`, which does _not_ trigger the bug — only `-r ~ts` on the c8-monitored process does). Worth root-causing, since it silently blocks lcov/codecov for any future `node -r ~ts` script someone wraps in `c8`; likely a c8@11 ↔ @babel/register require-hook interaction.

## Migrate to Babel 8 and chai 6 as dedicated efforts (deferred from the deps upgrade)

`patches/@babel+types+7.29.7.patch` | 2026-07-07 | impact:med | effort:high

The dependency upgrade took everything to latest except two majors that are true migrations, not refreshes. **Babel 8** (`@babel/*` held at 7.29.7): the compiler ships four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel+{types,traverse,generator,helper-compilation-targets}+7.29.7.patch`, the types one 79 KB, injecting Marko AST node types) plus `packages/compiler` code that reaches Babel-7 internals via `@marko/compiler/internal/babel`; Babel 8 restructures those modules so the patches won't apply and the codegen needs porting. **chai 6** (held at 4.5.0): chai 5+ is ESM-only (`"type":"module"`), but there are 379 CommonJS `require("chai")` call sites (all under `packages/runtime-class/test/**` and `packages/runtime-tags/src/__tests__`), so adopting it means converting every test fixture to ESM or dynamic import. Each should be its own PR with focused testing.

## `npm audit` reports 3 dev-only advisories; gate on `npm run audit` instead

`package.json` › `scripts` | 2026-07-07 | impact:low | effort:low

Bare `npm audit` shows 3 advisories (`serialize-javascript` high, `js-yaml`/mocha moderate, `diff` low), all transitively under `mocha` and `@changesets/cli` — dev tooling that never ships. They can't be resolved by version bumps: the fixes live in higher majors than mocha's ranges allow (`serialize-javascript ^6`→fix in 7.x, `diff ^7`→8.x, `js-yaml ^4`→5.x), mocha 11.7.6 is the newest stable, and the latest `@changesets/parse` still pins `js-yaml ^4.1.1`. Rather than pin them via `overrides`, the repo audits production deps only: **`npm run audit`** (`npm audit --omit=dev`) is the gate and returns 0 — that's what consumers of the published packages actually receive. Revisit and drop the distinction once mocha/changesets update their transitive deps upstream.

## Further `test:parallel` speedups need CPU cuts, not scheduling

`scripts/test-parallel.js` | 2026-07-11 | impact:med | effort:high

With suite slicing in place the run is CPU-bound: ~285s of user time across
workers (~80s wall on 4 cores, workers finish within ~2s of each other), so
better packing or more workers no longer helps (6 workers on 4 cores measured
neutral). A `--cpu-prof` of a fixture worker shows the spend is flat — ~17%
node core (ESM import of per-fixture bundles, fs), ~13% `@babel/register` TS
transform, ~13% jsdom+parse5, ~6% GC, rest compiler/translator/rolldown glue —
and ~21% idle (JS thread waiting on rolldown's native threads). Reclaiming
that idle by prefetching the next fixture's `createServerRunner()` build was
considered and rejected: a concurrent build can emit console output inside
another test's `captureConsole` window (`utils/capture-console.ts` patches the
global console), corrupting `writes.html`/log snapshots. If someone wants the
~10-20% win, scope the console capture (or buffer build diagnostics) first,
then pipeline builds one fixture ahead gated on `MARKO_TEST_SLOTS`.

On the CI (`@ci:test`) shape specifically, measured on a 4-core runner clone:
~81s tests + ~15s c8/V8 coverage collection on the workers + ~12s cold
`@babel/register` cache (fresh checkouts never hit the mtime-keyed cache, so
caching `node_modules/.cache` in CI is pointless) + ~65s single-threaded `c8
report`. The report profile: ~36% istanbul report generation, ~19% GC (fixed:
`--max-semi-space-size=128` cuts the step to ~56s), ~11% v8-to-istanbul remap
over 182MB of dumps — `--reporter=lcovonly` and `--merge-async` measured
neutral, and dropping `excludeAfterRemap`/`all` would corrupt the numbers
(runtime coverage arrives via fixture-bundle sourcemaps; see `.c8rc.json`).
Two unexplored wins: remap+report each worker's dumps in parallel processes
and merge the istanbul JSON at the end (the ~50s remap work splits cleanly
per dump); prewarm the babel cache with one serial require pass in
`scripts/test-parallel.js` before spawning workers on a cold cache (~6s net,
needs a hardcoded heavy-module list that can rot).

## Emit a compile-time diagnostic when an unenclosed `>`/`>=` truncates an attribute-value expression

`packages/compiler/src/babel-plugin/parser.js` › `onText` | 2026-07-18 | impact:med | effort:med

The htmljs-parser tokenizer treats the first unenclosed `>` in a tag/attribute-value expression as the tag close, so `<if=input.n > 0>yes</if>` compiles to `if (input.n) { _html(" 0>yes"); }` — the condition silently degrades to a truthiness check on `input.n` and ` 0>` leaks into the output as literal text. `<const/positive=input.delta >= 0>` likewise compiles to `const positive = input.delta;` plus a leaked `= 0>` text node (in a live dashboard every stat card showed the positive marker, including a `-2.3%` delta, with literal `= 0>` printed before each card). No error is raised in any mode: the parser adapter only rethrows tokenizer `onError` reports (`parser.js:141`) and faithfully emits the post-`>` remainder via `onText` (`parser.js:170`), and the truncation itself raises no `onError`. `x > y` / `x >= y` comparisons are among the most common expressions authors write in `<if>`/`<const>`/`<let>`/attribute values, so a silent wrong-logic-plus-leaked-text miscompile is a severe footgun. The ambiguity is intentional and documented (a CAUTION at website `docs/reference/language.md:212` says values cannot contain an unenclosed `>` and must be parenthesized), and the underlying token rule lives in the external `htmljs-parser` dependency (^5.12) — so rather than a grammar change, the pragmatic fix is a compiler/lint diagnostic for the tell-tale `<syntactically-complete-left-operand>` immediately followed by text beginning like a truncated operator (` 0>`, `= 0>`), which is exactly the `x > y` / `x >= y` shape.

## Surface a near-miss suggestion (or document the casing rule) for miscased event attributes

`packages/runtime-tags/src/common/helpers.ts` › `getEventHandlerName` | 2026-07-18 | impact:low | effort:low

`<input onKeydown(e) {}>` fails @marko/type-check with TS2353 "Object literal may only specify known properties, and '\"onKeydown\"' does not exist in type 'Directives & Input'" — no "did you mean onKeyDown?" — while the runtime happily binds it: `isEventHandler` matches `/^on[A-Z-]/` and `getEventHandlerName` lowercases everything after "on" (`name.slice(2).toLowerCase()`), so both casings mean `keydown` at runtime. Canonicalizing the types to exact camelCase (`onKeyDown` at `packages/runtime-tags/tags-html.d.ts:5085`, plus the `on-keydown` alias) is a reasonable choice, but the bare excess-property error on a near-miss casing makes it look like event handlers are unsupported on that element rather than misspelled. Emitting a spelling suggestion for case-only near-misses in the type-check diagnostics, or documenting the exact-camelCase rule in `cheatsheet.md`, would fix the confusion cheaply.

## Warn that `<const>` values captured by reactive content must serialize — Intl formatters crash SSR

`packages/runtime-tags/src/html/serializer.ts` › `throwUnserializable` | 2026-07-18 | impact:med | effort:low

The canonical i18n pattern — `<const/fmt=new Intl.NumberFormat(lang, { style: "currency", ... })>` reused by `${fmt.format(price)}` where `price` depends on a `<let>` — makes SSR throw `Unable to serialize "fmt" in <file>:<line>`: the formatter is captured in the resume payload and Intl instances are not serializable. Minimal repro: `<let/n=1/><const/fmt=new Intl.NumberFormat("en")/><button onClick(){n++}>${fmt.format(n)}</button>` fails SSR. The error already names the exact variable and location (excellent), but neither `packages/runtime-tags/cheatsheet.md` nor the `<const>` docs mention that values referenced from client-reactive expressions must survive serialization, and "create the formatter once and reuse it" is what every i18n guide teaches — the working pattern (a module-scope helper that constructs the formatter per call) is a dead-end discovery. Add a docs note plus a hint in `throwUnserializable`'s message (e.g. "move construction into a module-scope function").

## Give a structural error for a stray close tag / unwrapped text on a concise line instead of relaying htmljs-parser's "Unterminated regular expression."

`packages/compiler/src/babel-plugin/parser.js` › `onError` | 2026-07-19 | impact:low | effort:med

A concise-mode line that is bare text followed by a stray `</tag>` (or a `/`) is reported with a low-level JS-tokenizer message that names regex/type-parameter/attribute-name internals with the caret mid-identifier, never mentioning tags or text: `hello</div>` → `Unterminated regular expression.` at column 8; `Read more or/and less` → `Invalid attribute name.`; `Click here</a> to continue` → `Attribute cannot contain type parameters unless it is a shorthand method`. The exact same stray close in HTML mode or at line start is diagnosed correctly (`<div>hi</span>` → "The closing 'span' tag does not match the corresponding opening 'div' tag"; `</div>` → "The closing 'div' tag was not expected"). `parser.js:141` `onError` relays htmljs-parser's raw `part.message` verbatim (`buildCodeFrameError(…, part.message)`); in concise mode the first token is scanned as a tag name and the `/` in `</div>` starts a regex literal, so htmljs-parser (^5.12) raises an unterminated-regex tokenizer error that Marko passes through unchanged, with no post-classification that recognizes the `<word></…>`/trailing-`/` shape as a mis-structured tag or unwrapped text. Trigger is narrow (pasting an HTML fragment into a concise section, or unwrapped prose containing a slash/stray close) but opaque when hit. Detect the concise `<identifier>`-scanned-as-tag with a following `/`-started expression / stray close and remap to a tag/text structural diagnostic before rethrowing at `parser.js:141`. Distinct from the existing dx entry about an unenclosed `>`/`>=` truncating an attribute-value expression (`parser.js:170`), which is about `>` silently truncating; this is about the parser SURFACING a misleading low-level message for a tag-structure mistake.

## Emit a dev-mode diagnostic when a self-referential effect re-renders past a threshold

`packages/runtime-tags/src/dom/signals.ts` › `_let` | 2026-07-19 | impact:low | effort:med

A `<script>` (effect) that writes a `<let>` it transitively reads re-renders once per animation frame forever with no cycle/max-depth diagnostic. `<let/n=0>` + `<script>{ if (n < 2000) n = n + 1 }>` climbs `n` toward 2000 one pass per frame; an unconditional `n = n + 1` never terminates (a terminating variant `if (n<3) …` settles at `n=3` after 4 passes, proving each self-write is a full new render+effect pass, not coalesced). The page stays responsive (rAF-paced) but pegs a core and grows state unbounded, with no console warning or error. In `_let`'s non-rendering branch (`dom/signals.ts:43-49`) any value change unconditionally calls `schedule()` + `queueRender` with no per-scope/per-run update counter; `run()` (`dom/queue.ts:83-95`) drains renders then effects and resets state with no depth tracking; `schedule()` reschedules through `queueMicrotask`→`requestAnimationFrame`→`MessageChannel` (`dom/schedule.ts`), pacing successive self-write passes one-per-frame rather than a synchronous freeze. Writing state in an effect is a documented anti-pattern (use `<const>` for derivation), so this is user error — the finding is the MISSING diagnostic, which peers provide (React "Maximum update depth exceeded"; Solid/Svelte cyclic-update detection). A `MARKO_DEBUG` update-depth guard in `run()`/`queueRender` (throw after N self-perpetuating passes on the same scope+signal) would surface the mistake with a stack instead of a mysteriously spinning page. No existing entry mentions cycles / max-update-depth / infinite loops.

## Server-mode `render` can only observe the fully-resolved `<await>`/`<try>` state; a pending promise hangs the test

`packages/runtime-tags/src/html/template.ts` › `ServerRendered.#promise` | 2026-07-19 | impact:med | effort:med

The placeholder/loading and streaming states of Marko's own async primitive cannot be tested in a server-project (`*.server.test.ts`) render at all. `<try><await|u|=input.load()>…<@placeholder>Loading…</@placeholder><@catch|e|>…</@catch></try>`: after `String(await template.render(input))`, `@placeholder` is never observable (`queryByText("Loading…")` is null, only the resolved content is present), and a never-resolving `load()` makes the test time out because `render` awaits the whole stream to completion. `@marko/testing-library`'s server render is `String(await template.render(input))`, and Marko's `template.render` returns a `ServerRendered` thenable whose `#promise` resolves only once the boundary reaches `FlushStatus.complete` (`html/template.ts:268-293`, resolve at :287), while its synchronous `toString()` throws "Cannot consume asynchronous render with 'toString'" on any pending boundary (`:337-349`, :346). So awaiting the result necessarily drains all async content and there is no intermediate/initial-flush accessor for the helper to use — the `@await` placeholder and `@catch` paths are reachable only in the browser project (via `mount`, which paints the placeholder synchronously). Expose the first synchronous chunk from testing-library, or offer a sync/initial-flush render accessor on the `ServerRendered` result that the helper can call, so streaming states are testable without a browser. The file that awaits the full stream is `@marko/testing-library` (marko-js org, off-disk); the resolution semantics that force it are the marko html runtime cited here.

## Route the agent fix-guide to the specific error instead of appending one generic whole-cheatsheet pointer

`packages/compiler/src/util/agent-fix-guide.js` › `fixGuide` | 2026-07-19 | impact:high | effort:med

Every thrown compile error gets the identical appended line `\n\nFix guide: READ ${cheatsheet} before writing a fix.` (`agent-fix-guide.js:44-45`), because `fixGuide(translator)` interpolates only the resolved cheatsheet path and never consults the error's `label` or code — the same pointer is emitted for a malformed attribute, a bare-text-at-root case, an unclosed tag, or a serialization failure. The target `packages/runtime-tags/cheatsheet.md` is 174 lines (24 golden rules plus a ~24-row DON'T table), and one label routinely spans several unrelated causes (the existing dx entry at `parser.js:141` documents `Invalid attribute name.` covering both a real bad attribute and unwrapped concise text), so a whole-file pointer cannot disambiguate. This matters for agentic workflows because agents triage and fix from the error string alone: a generic "go read all 174 lines" pointer forces the agent to re-read and self-map the entire reference on every error (and mis-map, since one label spans several root causes), whereas an anchored hint lets it jump to the exact rule. Key the appended hint to the diagnostic — an anchor into the exact cheatsheet section, or a one-line cause-specific hint the emitter attaches from its AST context (e.g. `Fix guide: bare text at template root — see 'Golden rules' #1 in <path>`).

## Thread the agent fix-guide onto `meta.diagnostics` so editor/LSP and dev-overlay consumers surface it, not just hard throws

`packages/compiler/src/index.js` › `compile` | 2026-07-19 | impact:high | effort:med

`appendAgentFixGuide` runs only inside the `compile`/`compileSync` catch blocks (`index.js:41` and `:52`), which are reached only when `buildResult` throws. Under `errorRecovery: true` — the mode built for tooling, where "any recoverable errors will be returned in the `meta.diagnostics` property" (`config.js:172-175`) — `buildResult` collects diagnostics and returns a successful result without throwing (`index.js:165-175`), so the catch never fires and every recovery-mode consumer gets the raw `diag.label` with no fix-guide. The compiler's own comments confirm this is exactly the editor path: analyze/parse failures are "kept as recoverable diagnostics" for "editors compiling with `errorRecovery`" (`translator/util/analyze-errors.ts:6-11`, `babel-plugin/index.js:327-331`). This is the crux for agentic workflows: agents increasingly triage from LSP diagnostics, `mtc` type-check output, and dev-server overlays rather than a raw Node stack trace — all of which run in error-recovery mode — so the one place Marko emits agent guidance is invisible exactly where agents actually read errors during dev. Thread the (ideally error-specific) guide onto the diagnostic `label`/meta in `buildResult` so recovery-mode consumers surface it, instead of restricting it to the throw boundary.

## Honor an explicit `MARKO_AGENT_FIX_GUIDE` override and document the agent fix-guide so any harness can enable/suppress it deterministically

`packages/compiler/src/util/agent-fix-guide.js` › `isCodingAgent` | 2026-07-19 | impact:med | effort:low

`isCodingAgent()` (`agent-fix-guide.js:24-35`) enables the guide only on a fixed env allowlist — `CLAUDECODE`, `CLAUDE_CODE`, `CURSOR_AGENT`, `GEMINI_CLI`, `CODEX_SANDBOX`, `CODEX_THREAD_ID`, `AI_AGENT`. `AI_AGENT` is a generic catch-all opt-in, but the whole feature and its markers are documented nowhere user-facing (grep of `website/` docs and package READMEs both return nothing; only `packages/compiler/AGENTS.md:16,23` mentions it internally), and there is no explicit Marko override checked before the marker sniff to force the guide on (for a harness not on the list, or one that compiles in a child process that drops the inherited marker) or off. For agentic workflows this makes the guidance nondeterministic across harnesses: an agent whose runner isn't on the allowlist, or that spawns compilation in a subprocess without the marker, silently never sees the guide and has no documented way to discover or force it. Check a documented `MARKO_AGENT_FIX_GUIDE=1/0` env override first, before the marker sniff, and document the feature plus the `AI_AGENT` opt-in so any agent framework can deterministically enable or suppress it.

## Steer authors to the typed second-arg element; `event.currentTarget`/`target` fail mtc and are unsupported at runtime

`packages/runtime-tags/tags-html.d.ts` › `AttrEventHandler` | 2026-07-19 | impact:med | effort:low

The universal DOM/JSX idiom `event.currentTarget.value` (and `event.target.value`) both fails type-check and breaks at runtime in Marko, and almost nothing steers authors to the working form. `AttrEventHandler<Event, Target> = AttrMissing | ((event: Event, target: Target) => unknown)` (`tags-html.d.ts:5873`) puts the typed element in the handler's SECOND parameter; the first stays the raw DOM event whose `currentTarget: EventTarget | null` and `target: EventTarget` are unnarrowed. `mtc` on `<input onInput(event){ event.currentTarget.value }>` errors TS18047 ("possibly null") + TS2339 ("Property 'value' does not exist on type 'EventTarget'"), while `<input onInput(event, target){ target.value }>` type-checks clean (both verified, `target` inferred as `HTMLInputElement`). At runtime Marko's delegated events make `currentTarget` worse: reading it logs a `console.error` and returns null, then deletes the property (`packages/runtime-tags/src/dom/event.ts:34-53`), and handlers are invoked as `(ev, target)` (`event.ts:47`). Yet the reference example `<button onClick(e){ console.log(e.target) }>` (`docs/reference/language.md:274`) and the tutorial's `onInput(e){ degF = +e.target.value }` (`docs/tutorial/components-and-reactivity.md:36`) both model the type-failing idiom, and the two-arg element appears only once, unexplained, as `onClick(e, el)` (`docs/explanation/class-vs-tags-api.md:59`). Every form/input handler an agent writes reaches for `event.currentTarget.value` carried over from React/DOM; it fails `mtc`, and casting past it crashes in dev, with no docs or type message naming the second arg. Direction: narrow the event's `currentTarget`/`target` to the `Target` element type (or fail with a message that names the second parameter), and update the reference/tutorial examples to `onInput(event, target)`. Distinct from the existing dx.md miscased-event-attribute entry (`common/helpers.ts:133`), which concerns attribute-name casing, not the handler's element access.

## Make ad-hoc headless verification reliable: lazy-init the DOM walker, and stop the compiler silently disabling module resolution when a `document` global exists

`packages/runtime-tags/src/dom/walker.ts` › `walker` | 2026-07-19 | impact:low | effort:low

A throwaway node script — the fastest way an agent confirms a compiled component actually works before writing a full test setup — is mined with two import-order traps whose error strings point nowhere near the cause. (1) The DOM runtime evaluates `document.createTreeWalker(document)` at module top level (`dom/walker.ts:12`), so requiring the compiled `dom` output before a DOM global is installed throws `ReferenceError: document is not defined` at a `marko/dist` line. (2) `@marko/compiler`'s `modules.js` decides at first-require whether it is running in a browser via `typeof document === "object"` (`packages/compiler/modules.js:3`); installing jsdom globals (which define `global.document`) BEFORE requiring `@marko/compiler` takes that branch and sets `exports.resolve`/`tryResolve` to `null` (`:8-9`), so the first attempt to load a translator throws `TypeError: _modules.default.resolve is not a function` with no hint that a DOM global caused it (the branch is evaluated once and cached for the module lifetime). The only working order — compile with no DOM globals, THEN install jsdom, THEN require the runtime — is undocumented and easy to get backwards. `@marko/vite` and `@marko/testing-library` sequence this correctly, but an agent hand-rolling a verification script gets no guidance and burns turns guessing against two opaque messages. Lazy-init the walker on first `walk()` (drop the top-level `document` read), and either make the compiler's browser sniff robust to a node process that merely has jsdom installed or throw an error naming the cause; at minimum document a compile-then-shim-then-import recipe so headless self-checks are reliable.

## Mutation-tracker jsdom workaround silently hides real text updates in snapshots

`packages/runtime-tags/src/__tests__/utils/track-mutations.ts` › `formatMutationRecord` | 2026-07-14 | impact:low | effort:low

The characterData filter drops records where the new value starts with the
old value and the boundary is whitespace, to hide jsdom's duplicate records
(jsdom#3261) — but it also matches real updates of that shape: a step
changing text "draft" to "draft edited" produces no `## Change` entry and no
html block, so the step looks like a no-op in the render snapshot while the
DOM did update, which costs real debugging time on new fixtures. Fix
direction: re-check the jsdom issue, or drop a record only when an adjacent
record re-reports the same target, or always emit the html block even when
every record was filtered. Verify: a fixture step appending to an existing
text node currently yields an empty snapshot entry.

## `npm run build:sizes` dirties `.sizes*` on a clean checkout

`.sizes/dom.js` | 2026-07-14 | impact:med | effort:low

With lockfile-installed deps (rolldown 1.1.4, linux) and zero source changes,
a fresh `node -r ~ts scripts/sizes` run rewrites `.sizes.json` (+8 min /
+2 brotli on `dom.js`) and all `.sizes/**` outputs: the minifier emits
`for (; i && a[i - 1].x > y;) (i--, f())` where the committed files have
`for (; i && a[--i].x > y;) f()`, and the shared-chunk hash flips. The
committed `.sizes*` no longer reproduce from the committed lockfile, so
every next commit's pre-commit size diff carries unrelated noise. Fix:
regenerate and commit `.sizes*` once (confirming which toolchain produced
the committed files), or pin the minifier the sizes script uses. Verify:
run `npm run build && npm run build:sizes` on a clean checkout and check
`git status`.

## `npm test <file>` appends to the default spec glob instead of scoping to the file

`.mocharc.json` | 2026-07-15 | impact:low | effort:low

Passing an explicit test file (`npm test -- <path>.test.ts`) does not scope
the run: mocha adds positional file args to the configured spec glob, so the
whole suite runs anyway — silently, since the named file is also included.
Scoping to one file requires bypassing the config
(`npx mocha --no-config --no-package --timeout 10000 --require ~ts <file>`),
which is undocumented and easy to get wrong. Either document that
incantation in CLAUDE.md next to the `--grep` guidance, or add a `test:file`
script that forwards to mocha without the default spec. Verify:
`npm test -- packages/runtime-tags/src/__tests__/serializer.test.ts` runs
every spec file.

## Error-compile fixtures never refresh or clean `sizes.json`

`packages/runtime-tags/src/__tests__/main.test.ts` › `hasCompilerError` sizes gate | 2026-07-20 | impact:low | effort:low

The optimize `after()` sizes assertion is gated on `!hasCompilerError`, so a
fixture that later becomes `error_compiler: true` keeps its last generated
`sizes.json` forever — neither asserted nor rewritten by `test:update`. The
harness could delete (or assert the absence of) `sizes.json` for error
fixtures. Verify: add `sizes.json` to any `error_compiler` fixture and watch
`npm run test:update` leave it untouched.

## Emit the circular-reference error for mutually-referential `<const>` tags, not just self-references

`packages/runtime-tags/src/translator/util/references.ts` › `trackReferencesForBinding` | 2026-07-20 | impact:low | effort:med

`trackReferencesForBinding` throws `Tag variable circular references are not
supported.` only when a tag variable references itself inside its own tag
(`<const/x=x/>`). A mutual cycle (`<const/a=b/><const/b=a/>`) passes the check
and compiles to code that fails at runtime; detecting it through the binding
graph would surface the same clear compile error. Verify: compile
`<const/a=b/><const/b=a/>` used as a value and observe no diagnostic.

## Give array-destructure two-way binding a cause-specific error instead of the generic "Unable to bind to value."

`packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` › `getChangeHandler` | 2026-07-20 | impact:low | effort:low

`value:=x` where `x` comes from object destructuring works, because `getChangeHandler` (`pre-analyze.ts:203-243`) auto-generates a sibling `xChange` key via `getChangeHandlerFromObjectPattern`, but the same shorthand on an array-destructured value throws the opaque `Unable to bind to value.` (pre-analyze.ts:226): the array-pattern element's `parentPath` is neither `binding.path` nor an `ObjectProperty`, so `changeAttrExpr` stays undefined. The message names neither the cause nor a fix, and the identical string is reused at pre-analyze.ts:260 for an unrelated failure mode (an existing change handler whose binding has no Marko root to host the injected `const`), so it cannot disambiguate. This is a real footgun given the asymmetry: an author who binds `value:=a` off `{ a }` reasonably expects `value:=x` off `[ x ]` to work too. Branch the message on the array-pattern case (an array element has no positional change key) to suggest object destructuring or an explicit `valueChange` handler, mirroring the already-specific "Bound attribute refinement shorthand must be a valid JavaScript identifier." diagnostic at pre-analyze.ts:197; note the `error-bound-attr-array-pattern` snapshot pins the current text and must be regenerated. Re-verify: `npm run compile -- -o dom` on `<const/[ x ] = input.pair/>` + `<input value:=x/>` throws `Unable to bind to value.`, while `<const/{ a } = input/>` + `<input value:=a/>` compiles cleanly (emitting `$aChange2` from `input.aChange`).

## Forward the translator cheatsheet through `createInteropTranslator` so the agent fix-guide fires for interop (Marko 5 and mixed 5/6) compiles

`packages/runtime-tags/src/translator/interop/index.ts` › `createInteropTranslator` | 2026-07-20 | impact:med | effort:low

`createInteropTranslator` (`interop/index.ts:16-41`) builds the translator every Marko 5 and mixed 5/6 project loads, forwarding `version`, `preferAPI`, `transform`, `analyze`, `translate`, `tagDiscoveryDirs`, `taglibs`, and `getRuntimeEntryFiles` but omitting `cheatsheet`; `runtime-class/src/translator.js` destructures exactly those 8 keys, so `marko/translator` exposes no `cheatsheet` (verified: loading it via the compiler's `markoModules.require` yields `cheatsheet === undefined`). The compiler's agent fix-guide (`agent-fix-guide.js:40-46`) appends `Fix guide: READ <cheatsheet> before writing a fix.` only when `tryLoadTranslator(translator)?.cheatsheet` is a string, so coding-agent sessions on interop projects never receive it — including on Marko 6 tags-API files compiled through the interop, where the runtime-tags cheatsheet (`runtime-tags/src/translator/index.ts:23`) is exactly the migration aid intended. Forward a `cheatsheet` from `createInteropTranslator` and add it to the runtime-class re-export; the value must be an absolute path, because `try-load-translator.js:16-19` resolves it via `path.resolve(path.dirname(translatorModule), value)` and the runtime-class translator sits at `src/translator.js`, so `translate6`'s raw `'../../cheatsheet.md'` would resolve to a non-existent file (`packages/runtime-class` has no `cheatsheet.md`). Re-verify with `CLAUDECODE=1`: `appendAgentFixGuide(new Error('x'), 'marko/translator')` leaves the message untouched (no `Fix guide:` suffix), whereas the same call with `'@marko/runtime-tags/translator'` appends `READ packages/runtime-tags/cheatsheet.md`.
