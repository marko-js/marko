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

## Forward the translator cheatsheet through `createInteropTranslator` so the agent fix-guide fires for interop (Marko 5 and mixed 5/6) compiles

`packages/runtime-tags/src/translator/interop/index.ts` › `createInteropTranslator` | 2026-07-20 | impact:med | effort:low

`createInteropTranslator` (`interop/index.ts:16-41`) builds the translator every Marko 5 and mixed 5/6 project loads, forwarding `version`, `preferAPI`, `transform`, `analyze`, `translate`, `tagDiscoveryDirs`, `taglibs`, and `getRuntimeEntryFiles` but omitting `cheatsheet`; `runtime-class/src/translator.js` destructures exactly those 8 keys, so `marko/translator` exposes no `cheatsheet` (verified: loading it via the compiler's `markoModules.require` yields `cheatsheet === undefined`). The compiler's agent fix-guide (`agent-fix-guide.js:40-46`) appends `Fix guide: READ <cheatsheet> before writing a fix.` only when `tryLoadTranslator(translator)?.cheatsheet` is a string, so coding-agent sessions on interop projects never receive it — including on Marko 6 tags-API files compiled through the interop, where the runtime-tags cheatsheet (`runtime-tags/src/translator/index.ts:23`) is exactly the migration aid intended. Forward a `cheatsheet` from `createInteropTranslator` and add it to the runtime-class re-export; the value must be an absolute path, because `try-load-translator.js:16-19` resolves it via `path.resolve(path.dirname(translatorModule), value)` and the runtime-class translator sits at `src/translator.js`, so `translate6`'s raw `'../../cheatsheet.md'` would resolve to a non-existent file (`packages/runtime-class` has no `cheatsheet.md`). Re-verify with `CLAUDECODE=1`: `appendAgentFixGuide(new Error('x'), 'marko/translator')` leaves the message untouched (no `Fix guide:` suffix), whereas the same call with `'@marko/runtime-tags/translator'` appends `READ packages/runtime-tags/cheatsheet.md`.

## Serialize `Blob` and `File`, including inside `FormData`

`packages/runtime-tags/src/html/serializer.ts` › `writeFormData` | 2026-07-23 | impact:med | effort:med

`writeFormData` already rejects any non-string entry with an explicit "`File`/`Blob` entries aren't serializable yet" comment, and both types are equally unserializable as standalone values, so a resumed form that carries an upload cannot be represented at all. Both hold binary content that the existing `writeArrayBuffer`/`writeTypedArray` machinery can already encode, and both reconstruct from a constructor call (`new File([bytes], name, { type, lastModified })`), so the work is reading the bytes plus threading the async read through the boundary the way `writeReadableStream` does. Re-verify: serializing `new Blob(["hi"])` or a `FormData` holding a `File` drops the value, and the `writeFormData` comment marks the gap in source.

## Serialize the remaining DOM built-ins reachable from browser code

`packages/runtime-tags/src/html/serializer.ts` › `writeUnknownObject` | 2026-07-23 | impact:low | effort:low

`DOMException`, `AbortSignal`, and `Event` still fall through the constructor dispatch to `throwUnserializable`, each a one-case addition. They reach templates through request handling yet cannot cross to the browser, so a resumed value holding one is dropped. Each has a constructor form that round-trips its observable state (`new DOMException(message, name)`, `AbortSignal.abort(reason)` for an already-aborted signal, `new Event(type, { bubbles, cancelable, composed })`), but a live `AbortSignal` that has not yet aborted has no faithful representation — resume would need it wired to a fresh controller, so decide that semantics before adding it. Lower value than the rest of the dispatch table and only worth adding if a real template needs them. Re-verify: pass each through `Serializer#stringifyScopes` and observe the value is omitted from the payload, against `new URL("https://a.b")` as a supported control.

## Make `Cannot assign to hoisted tag variable.` say what the rule is and link the tag-variable docs

`packages/runtime-tags/src/translator/util/references.ts` › `trackReferencesForBinding` | 2026-07-23 | impact:med | effort:low

Writing a `<let>` from a handler that appears _above_ the `<let>` fails with the
bare message `Cannot assign to hoisted tag variable.` (references.ts:524).
"Hoisted" is compiler jargon (CONTEXT.md's _Hoist_ entry), the restriction is
not stated anywhere in the language reference — website
`docs/reference/language.md:664` only says tag variables are hoisted and
readable anywhere — and the message names neither the variable nor the fix,
which is simply to move the declaration above the assignment. `references.ts` is
a cluster of nine user-facing compile errors (`:291`, `:306`, `:309`, `:495`,
`:519`, `:524`, `:555`, `:584`, `:679`) and none of them follow the convention
AGENTS.md documents and `core/if.ts` demonstrates — backticked names plus a
markojs.com docs link; every `core/*.ts` tag file does. `Duplicate declaration
"x"` (`:519`/`:306`) even uses `JSON.stringify` quotes where the house style is
backticks. Direction: reword to name the variable and the positional rule (e.g.
"`count` is assigned before its declaring tag; move `<let/count=…>` above this
assignment.") and link
`https://markojs.com/docs/reference/language#tag-variables`, and add the
assignment-position rule to the Tag Variables docs section. This is distinct
from the existing dx.md entry on `trackReferencesForBinding`, which asks for
_detecting_ mutual `<const>` cycles rather than improving message text.
Re-verify: compile `<button onClick() { x = 2
}>b</button>\n<let/x=1/>\n<div>${x}</div>` and observe the jargon-only message;
swapping the two lines compiles cleanly, confirming the rule is purely
positional.

## Exercise `MountedTemplate.destroy()` and `.value` in the CSR fixture harness

`packages/runtime-tags/src/__tests__/main.test.ts` › `csr` | 2026-07-23 | impact:med | effort:low

The CSR half of the fixture harness mounts a template and then only ever calls
`instance.update(input)` (main.test.ts:282); `instance.destroy()` and the
`value` getter/setter returned by `dom/template.ts` › `mount` are never called
anywhere under `src/__tests__`. So the entire client-side teardown path of the
public mount API — `removeAndDestroyBranch`, `<lifecycle> onDestroy`, `$signal`
abort, nested-branch destruction — has no fixture coverage at all, which is why
the stranded-cleanup-effects defect above survives (`cleanup-*` fixtures only
cover destroys driven from inside a render by `<if>`/`<for>`). Add a `Destroy`
step control alongside the existing `Wait`/`Flush`/`Throws` controls in
`TestConfig.steps` (and a matching `SetValue` for the tag-variable channel),
have `runSteps` call `instance.destroy()`, and let the mutation tracker snapshot
the resulting removal plus any console/`onDestroy` output; a couple of fixtures
over `<lifecycle>`, `$signal`, and a nested `<for>` would lock the contract in.
Re-verify: `rg -n "instance\.|\.destroy\(\)" packages/runtime-tags/src/__tests__
--glob '!fixtures/**'` returns only the single `instance.update(input)` line.

## Add a unit test for the `Opt`/`Sorted` list algebra in `translator/util/optional.ts`

`packages/runtime-tags/src/translator/util/optional.ts` › `Sorted` | 2026-07-23 | impact:med | effort:low

`util/optional.ts` is the hand-rolled sorted-list algebra that `AGENTS.md`
describes as underpinning reference tracking, yet it has no direct test — the
only coverage is indirect, through ~800 end-to-end fixture snapshots, which is
exactly why `Sorted.isSuperset`'s off-by-one survived long enough to become
load-bearing (see the existing bugs.md entry). The module is pure and
dependency-free, and the repo already auto-discovers unit tests via
`.mocharc.json`'s `packages/*/@(src|test)/**/*.test.@(js|ts)` spec with
`common-helpers.test.ts` and `resolve-cursor-position.test.ts` as the precedent,
so a new `src/__tests__/optional.test.ts` needs no config change. A short
differential test comparing `Sorted.union/add/find/has/groupBy/isSuperset`,
`addSorted`, `findSorted`, `findIndexSorted`, `filter`, `concat`, `push`,
`fromIter`/`toIter` and `mapToString` against naive array reference
implementations over randomized sorted inputs pins the contract, documents the
`Opt` single-vs-array duality, and would let someone actually attempt the
`isSuperset` fix with a safety net instead of a full snapshot audit. Re-verify
the gap: `ls packages/runtime-tags/src/__tests__/*.test.ts` shows no
optional/Sorted test, and `grep -rn "util/optional"
packages/runtime-tags/src/__tests__` returns nothing.

## Prune only snapshots whose tests actually ran; `test:update` deletes snapshots for skipped/bailed tests

`packages/runtime-tags/src/__tests__/utils/snap.ts` › `cleanupSnapshots` | 2026-07-23 | impact:med | effort:low

The `after(cleanupSnapshots)` hook in `snap.ts` treats "not written during this
run" as "stale": for every `__snapshots__` dir that received at least one write
it `fs.rmSync`s every entry missing from `writtenFiles`. That is only correct
when the whole fixture ran. Because mocha suite titles include the mode
(`describe(entry)` → `describe(mode)` in `main.test.ts`), a natural narrowing
like `pnpm run test:update -- --grep "runtime-tags/translator title-counter
debug "` writes only the debug snapshots and then deletes `dom.bundle.js`,
`html.bundle.js`, `render.md` and `writes.html` for that fixture; the same
happens on a bailed update run, since `.mocharc.json` sets `bail: true` and
mocha still runs root `after` hooks after aborting (verified), so a fixture
whose `ssr` step throws mid-`test:update` loses the snapshots of every test that
never got to run. This directly undercuts the repo invariant that
`__snapshots__/**` is never deleted by hand, and the deletions are only visible
in `git status`. Direction: record which fixture/mode combinations completed (or
which snapshot basenames the run was responsible for) and prune only within
those, instead of every entry of any touched dir. Re-verify: `pnpm run
test:update -- --grep "runtime-tags/translator title-counter debug "` then `git
status packages/runtime-tags/src/__tests__/fixtures/title-counter` — the
optimize-mode snapshots show up as deletions.

## Surface `<style>`/`<title>`/`<link>` mutations in the render log; today a dynamic `<style>` update snapshots as an empty step

`packages/runtime-tags/src/__tests__/utils/get-node-info.ts` › `isIgnoredTag` | 2026-07-23 | impact:med | effort:med

`isIgnoredTag` returns true for `T`, `LINK`, `TITLE`, `STYLE` and
non-typed/module `SCRIPT`, and `formatMutationRecord` drops any record whose
target (or characterData parent) is an ignored node, so no `<style>`, `<title>`
or `<link>` change is ever representable in a `render*.md` snapshot — grepping
all committed render snapshots finds zero `<style`/`<title` occurrences. The
cost is concrete for the `<style>` core tag: `_style_rule_item`
(`src/dom/dom.ts`) does non-trivial string surgery on the style element's
`textContent` to splice a CSS custom property, yet the `style-tag-dynamic`
fixture — whose entire purpose is a dynamic `${input.color}` in a `<style>` —
snapshots its update step as the bare line `# Update \`{"color":"blue"}\``with
no html block and no`## Change`, byte-identical to what a no-op client update
would produce (only `style-tag-dynamic-injection`covers this path, and only via`assert`calls inside step functions, which the snapshot does not record). Since
AGENTS.md tells reviewers to audit the mutation log for unexpected updates, this
is a blind spot in the primary review artifact. Direction: narrow the ignore
rule to Marko-emitted asset/resume nodes (the`T`placeholder, resume`<script>`s, injected `<link>`s) rather than the element type, or always emit
style/title text changes as an `UPDATE:`line. Re-verify: read`fixtures/style-tag-dynamic/**snapshots**/render-csr.debug.md`and confirm the
second step has no`## Change`even though`writes.debug.html` shows the custom
property carrying the value.

## Error on an empty `<for>` body instead of silently compiling the loop away

`packages/runtime-tags/src/translator/core/for.ts` › `analyze` | 2026-07-23 | impact:low | effort:low

When `startSection(tagBody)` returns undefined because the body is empty,
`analyze` calls `dropNodes(getAllTagReferenceNodes(tag.node))` and returns
(for.ts:154-159), so `<for|item| of=input.list/>` compiles to nothing at all —
the `of=` expression is not even evaluated — with no diagnostic in any mode.
Every other body-requiring core tag raises a code-frame error for the same
mistake: `core/if.ts` › `assertHasBody`, `core/show.ts` › `assertHasBody`,
`core/try.ts` › `analyze` (:74-80), and `core/await.ts` › `analyze` (:97) all
throw "The [`<x>` tag](…) requires [body content](…)". A `<for>` body is the
tag's only output, so an empty one is always an authoring mistake (a stray `/>`
or an emptied body), and today it costs a debugging cycle where `<if>` gives an
immediate caret. Add the same `assertHasBody` check to `<for>` before the
`dropNodes` fast path, and add an `error-for-empty-body` fixture — the
`error-for-*` family currently has ten cases and none of them is an empty body.
Re-verify: compile `<div><for|x| of=input.list/></div>` and observe it succeeds
with output `_html("<div></div>")`, versus `<div><if=input.list/></div>` which
fails with the "requires body content" code frame.

## Fix the dead markojs.com links core tags hand to users: `/docs/syntax/` and synthesized `core-tag#<tagName>` anchors

`packages/runtime-tags/src/translator/core/import.ts` › `autocomplete` | 2026-07-23 | impact:low | effort:low

`<import>`'s completion entry sets `descriptionMoreURL:
"https://markojs.com/docs/syntax/#importing-external-files"` (import.ts:20-22),
and `core/static.ts:28`, `core/server.ts:28`, `core/client.ts:28` use the same
`/docs/syntax/` base — a page that no longer exists (the website repo has no
`docs/syntax*` markdown, its docs routes are generated from `docs/**/*.md` by
`src/util/markodown.ts`, and `src/routes/docs/+handler.ts` only redirects bare
`/docs` to getting-started), so the "[More Info]" link the language server
renders in tag-name completion documentation
(`packages/language-server/src/service/marko/util/get-tag-name-completion.ts`)
404s. The live targets are `docs/reference/language.md` headings `### import`,
`### static`, `### server and client` → `#import`, `#static`,
`#server-and-client`. The same class of breakage exists in the shared assert
helpers reached from `core/if.ts`:
`packages/runtime-tags/src/translator/util/assert.ts` › `assertNoSpreadAttrs`
(:8) and `assertNoBodyContent` (:38) build the anchor as `core-tag#${tagName}`,
which is only correct when a tag's docs heading is its bare name — `<if=x
...attrs>` errors with `core-tag#if` and `<else-if=y ...attrs>` with
`core-tag#else-if` when the real heading id is `if--else`, and
`<effect>`/`<attrs>` have no core-tag section at all. Replace the four
`/docs/syntax/` URLs and give the assert helpers an explicit anchor argument (or
a tag-name→anchor map) rather than interpolating the tag name; this is distinct
from the existing unclear.md llms.txt entry, which is about the website's own
index, not links emitted from runtime-tags. Re-verify: `grep -rn "docs/syntax"
packages/runtime-tags/src` lists the four call sites while the website has no
matching page, and compiling `<if=input.x ...input.attrs>a</if>` prints ``The
[`<if>`](https://markojs.com/docs/reference/core-tag#if) tag does not support
`...spread` attributes.``

## Give `<show>` a `types` stub so its input is type-checked like every other core tag

`packages/runtime-tags/src/translator/core/show.ts` › `default export (the `Tag` definition)` | 2026-07-23 | impact:low | effort:low

Every core tag that renders through the normal tag path declares `types:
runtimeInfo.name + "/tags/<name>.d.marko"` — 14 of them (await, const, debug,
define, effect, html-comment, html-script, html-style, id, let, lifecycle, log,
script, try) with matching files in `packages/runtime-tags/tags/`. `<show>`, a
documented first-class control-flow tag (`website/docs/reference/core-tag.md` ›
`## <show>`), declares none and has no `tags/show.d.marko`. The other
`types`-less entries in `core/index.ts` are all handled elsewhere:
`if`/`for`/`return` are special-cased in `@marko/language-tools`' script
extractor, `class`/`import`/`export`/`style`/`server`/`client`/`static` are
parsed as statements in its `parser.ts`, and `attrs` is a migrate-only
deprecation. `<show>` is the only renderable core tag with neither. In the
extractor's `#writeTag`, the taglib def exists but `resolveTagFile(def) =
def.types || def.template || def.renderer` is `undefined`, so `importPath` is
undefined, the `if (!def || importPath)` block is skipped, and the tag falls
through to `varShared("missingTag")` typed `DefaultRenderer = (): () =>
<Input>(input: Input) => …` — a free generic with no contract. Consequently
`<show=cond when=x>` and a `<show>` missing its value attribute both type-check
clean and only fail later with `assertValidShow`'s "only supports the `value=`
attribute" / "requires a `value=` attribute" compile errors, and there is no
hover/type information for `value`. Add `tags/show.d.marko` (`export interface
Input { value: unknown; content: Marko.Body }`, mirroring `tags/await.d.marko`)
and point `core/show.ts` at it. Re-verify: `rg -n "types:"
packages/runtime-tags/src/translator/core/*.ts` lists 14 files and not
`show.ts`, and `ls packages/runtime-tags/tags` contains no `show.d.marko`.

## Raise the unresolvable-tag-name error during analyze; at translate its `<let>`/`<const>` hint is silently lost and only the first bad tag is reported

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `tagNotFoundError` | 2026-07-23 | impact:med | effort:med

`analyzeTagNameType` reclassifies a string tag name whose file cannot be
resolved as `TagNameType.DynamicTag` (util/tag-name-type.ts, the `else if
(!childFile)` branch), so `CustomTag.analyze.enter`'s `tagNotFoundError` never
fires for a plain unknown tag; the error instead comes out of
`getTagRelativePath` (custom-tag.ts:342) during `DynamicTag.translate.exit` —
verified by wrapping `getTagRelativePath` and printing `file.___compileStage`,
which prints `translate`. Two consequences. (1) `tagNotFoundError`'s best hint
is order-dependent: `tag.scope.hasBinding(tagName)` (`:383`) reads a scope that
translate has already been rewriting, so `<let/thing="hi"/>` followed by
`<thing/>` loses the "Local variables must be in a dynamic tag unless they are
PascalCase" message and instead prints the bogus ``Did you mean `<img>`?``
(levenshtein distance 3 < 4); moving `<thing/>` above the `<let>` restores the
correct hint, and `<const/panel=input.content/>` + `<panel/>` degrades to ``Did
you mean `<label>`?``. Module bindings (`import thing from ...`) and
`<for|widget|>` params survive translate and still get the right hint, so the
failure is specific to same-scope tag variables — the most common way a user
writes this mistake. (2) The whole `reportAnalyzeError`/`analyzeFailed`
machinery in `visitors/tag/index.ts` exists so every bad tag reports at once,
and a translate-stage throw bypasses it: a template with two unknown tags
reports only the first, while two `<let/x=x/>` circular-reference errors report
together. Fix direction: detect the unresolvable string-literal tag name in
`DynamicTag.analyze.enter` (export `tagNotFoundError` from custom-tag.ts) so the
diagnostic is produced while the scope is intact and batched with the rest.
Re-verify: compile `<let/thing="hi"/>` + `<thing/>` and the same two lines
swapped and compare the two error messages; compile a file with two unknown tags
and count the reported errors.

## Stop a `--grep`-scoped test run from rewriting `sizes.json` and pruning `__snapshots__`

`packages/runtime-tags/src/__tests__/main.test.ts` › the optimize `after()` sizes hook | 2026-07-23 | impact:med | effort:low

Both generated-file gates in the fixture harness assume the whole fixture ran,
so a narrower `--grep` reports a false failure and then destroys committed
output. (1) `pnpm test -- --grep "runtime-tags/translator attr-class optimize
html"` fails in `"after all" hook for "ssr"` with `AssertionError: sizes.json
out of date for "attr-class" — run pnpm run test:update` (`main.test.ts:408`);
nothing is stale — `stats.dom` is only filled by the `dom` test and `stats.html`
only by the `ssr` test, both excluded by the grep, so `actual` is `{}`. (2)
Following that message with the same grep is destructive: the hook then does
`fs.writeFileSync(sizesFile, "{}\n")` (`main.test.ts:402-403`), and `snap`'s
root `after` hook `cleanupSnapshots` (`utils/snap.ts:103-113`) deletes every
entry of each visited `__snapshots__` directory that this run did not rewrite —
so a run scoped to one mode erases the other mode's `dom.bundle.js` /
`render.md` / `writes.html` — that prune half is the same defect as "Prune only
snapshots whose tests actually ran", which owns the `snap.ts` anchor; fix them
together rather than twice. Both are files AGENTS.md marks as generated and
never to be hand-edited or deleted. Fix direction: make both gates inert when
the run is scoped (mocha exposes `--grep`/`--fgrep` on its options;
alternatively track that every `it` of the mode actually executed), and reword
the sizes assertion to say the numbers are incomplete because the run was scoped
rather than pointing at `test:update`. Re-verify: run the grep above and observe
the false "out of date" failure; for the prune, with `UPDATE_EXPECTATIONS=1`
call `snap` once against a scratch dir whose `__snapshots__` holds
`dom.bundle.debug.js`, `dom.bundle.js` and `render.md`, rewriting only
`dom.bundle.debug.js`, and list the directory after mocha's root hooks — only
`dom.bundle.debug.js` remains.

## Warn when a `<script>` effect returns a cleanup function — the return value is discarded

`packages/runtime-tags/src/translator/core/script.ts` › `default export › translate.exit` | 2026-07-23 | impact:med | effort:low

The React `useEffect` habit compiles clean and silently leaks: `<script>` with
`const id = setInterval(() => n++, 1000); return () => clearInterval(id);`
becomes the effect statement `(() => { const id = setInterval(...); return () =>
clearInterval(id); })()` (`core/script.ts:139`, the IIFE fallback taken because
a top-level `return` blocks inlining), so the returned cleanup is dropped and
the interval runs for the life of the page with no error, no warning and no
`MARKO_DEBUG` complaint. Marko's actual cleanup channel is `$signal.onabort = ()
=> clearInterval(id)` (documented in `packages/runtime-tags/cheatsheet.md`,
"Client-side effects" section) or `<lifecycle onDestroy>`, and nothing in the
compile output points there. Detection is already paid for: `translate.exit`
calls `traverseContains(value.body, isReturnStatement)` at `core/script.ts:120`
(predicate at `:179-193`, which already skips nested function bodies). Narrow
that to a `return` whose argument is an arrow or function expression — a bare
early-exit `return;` is legitimate and must stay silent — and emit
`diagnosticWarn` naming `$signal.onabort`/`<lifecycle onDestroy>`. Re-verify:
compile `<let/n=0/><script>const id = setInterval(() => n++, 1000); return () =>
clearInterval(id);</script>` with `pnpm run compile -- -o dom -d file.marko` and
observe the returned arrow sitting inside the emitted IIFE with an empty
`meta.diagnostics`.

## Diagnose a dropped `<style>` block when `resolveVirtualDependency` is not configured

`packages/runtime-tags/src/translator/core/style.ts` › `getStyleImportPath` | 2026-07-23 | impact:low | effort:low

`getStyleImportPath` returns `undefined` as soon as
`file.markoOpts.resolveVirtualDependency` is unset (`core/style.ts:347-350`), so
`node.extra.styleImportPath` stays falsy, `emitStyleImport` returns early
(`:301-302`), and `translateHTML`/`translateDOM` just `tag.remove()` — the
entire `<style>` block disappears from both targets with no error, warning or
`meta.diagnostics` entry. This bites the repo's own documented iteration loop:
`pnpm run compile` (`scripts/inspect-compiled-output.ts`) never sets the hook,
so `<style>.a{color:red}</style><div class=a>hi</div>` compiles to output
containing only the `<div>` and a contributor inspecting `<style>` codegen
cannot tell whether the CSS was dropped by design or by their change; the same
silent loss hits any hand-rolled `@marko/compiler` integration. The compiler
already validates this exact option elsewhere
(`packages/compiler/src/babel-plugin/index.js:47-50` throws "the
`resolveVirtualDependency` option must be supplied when output is `hydrate`"),
so a `diagnosticWarn` when a non-empty `<style>` body is discarded is consistent
with existing behavior; independently, `scripts/inspect-compiled-output.ts`
should pass a stub `resolveVirtualDependency` so inspected output shows the
emitted style import. Re-verify: `pnpm run compile -- -o html -d file.marko` on
that template and observe the emitted `_html("<div class=a>hi</div>")` with no
style import and no diagnostic.

## Report a tag-variable diagnostic instead of Babel's "invalid left-hand side in function parameter list"

`packages/compiler/src/babel-utils/parse.js` › `parseVar` | 2026-07-23 | impact:low | effort:low

A hyphenated tag variable — a common habit for anyone naming things like HTML —
produces a diagnostic that leaks `parseVar`'s internal encoding and never
mentions tag variables: `<div/my-el>hi</div>` and `<input/card-input>` both
compile-fail with `Binding invalid left-hand side in function parameter list.`,
caret on the variable. The cause is `parseVar`
(`packages/compiler/src/babel-utils/parse.js:55-69`), which parses the
tag-variable source as `(${str})=>{}` to reuse Babel's binding-pattern grammar
and relays Babel's raw parameter-list message when that parse fails; the author
wrote no function and no parameter list. This falls below the repo's own
documented diagnostic standard (`packages/runtime-tags/AGENTS.md` › Translator:
errors use backticked names plus a markojs.com docs link, `core/if.ts` as
canonical style) — for contrast, `<let x=0>` produces a fully tailored message
with a `<let>` docs link. It is also why `packages/runtime-tags/cheatsheet.md`'s
DON'T table needs the row `<div/my-el>` / `<input/card-input>` → "valid JS
identifier: `<div/myEl>`": the compiler cannot say it itself. Detect the
parameter-list-family parse errors in `parseVar` and rethrow as e.g. "`my-el`
is not a valid [tag
variable](https://markojs.com/docs/reference/language#tag-variables); use a
JavaScript identifier or destructuring pattern". Distinct from the existing
dx.md entries on `parser.js` › `onError`/`onText`, which concern htmljs-parser
tokenizer messages in concise mode, not Babel messages from the tag-variable
wrapper. Re-verify: compile `<div/my-el>hi</div>` and observe `Binding invalid
left-hand side in function parameter list.`

## Fix `pnpm run compile` — the documented translator-inspection command fails two different ways

`scripts/inspect-compiled-output.ts` › `TRANSLATORS` | 2026-07-23 | impact:high | effort:low

Root `AGENTS.md`/`CLAUDE.md` call `pnpm run compile -- -o dom -d foo.marko` "the
fastest way to inspect what the translator generates", but neither the
documented form nor the corrected form works in this repo. (1) pnpm forwards the
literal `--` to the script, and `scripts/inspect-compiled-output.ts` uses Node
`parseArgs({allowPositionals:true})`, which treats everything after a bare `--`
as positionals — so `-o` becomes a file path and it dies with `ENOENT ... open
'<repo>/-o'`. (2) Dropping the `--` gets further but then fails with `[BABEL]
...: Cannot find module '@marko/runtime-tags/translator'`, because
`packages/compiler/modules.js` resolves the translator id from
`lasso-package-root(process.cwd())` = the repo root, and pnpm's non-hoisted
layout only links `@marko/runtime-tags` into
`packages/runtime-tags/node_modules` (root `node_modules/@marko/` contains just
`compiler`, and root `package.json` has no dependency on `@marko/runtime-tags`
or `marko`); the `class` shorthand `marko/translator` is unresolvable for the
same reason. The fix is local to the script: resolve both `TRANSLATORS`
shorthands to absolute paths (`path.join(__dirname,
"../packages/runtime-tags/src/translator/index.ts")` and the runtime-class
equivalent) rather than bare package specifiers, and either document the no-`--`
invocation or make the script tolerate a leading `--`. Re-verify from the repo
root: `pnpm run compile -- -o dom -d /tmp/x.marko` → ENOENT on `-o`; `pnpm run
compile -o dom -d /tmp/x.marko` → "Cannot find module
'@marko/runtime-tags/translator'"; `pnpm run compile -o dom -d -t <abs path to
packages/runtime-tags/src/translator/index.ts> /tmp/x.marko` → succeeds and
writes `/tmp/x.marko.js`.
