# Developer Experience

Friction in builds, tests, tooling, or repo workflows. Format and rules: [README.md](README.md).

## Migrate to Babel 8 and chai 6 as dedicated efforts (deferred from the deps upgrade)

`patches/@babel__types@7.29.7.patch` | 2026-07-07 | impact:med | effort:high

The dependency upgrade took everything to latest except two majors that are true migrations, not refreshes. **Babel 8** (`@babel/*` held at 7.29.7): the compiler ships four hand-authored patches against Babel 7's compiled `lib/` (`patches/@babel__{types,traverse,generator,helper-compilation-targets}@7.29.7.patch`, the types one 79 KB, injecting Marko AST node types) plus `packages/compiler` code that reaches Babel-7 internals via `@marko/compiler/internal/babel`; Babel 8 restructures those modules so the patches won't apply and the codegen needs porting. **chai 6** (held at 4.5.0): chai 5+ is ESM-only (`"type":"module"`), but there are 379 CommonJS `require("chai")` call sites (all under `packages/runtime-class/test/**` and `packages/runtime-tags/src/__tests__`), so adopting it means converting every test fixture to ESM or dynamic import. Each should be its own PR with focused testing.

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

**The profile above predates the drop of `@babel/register` and must be
re-measured before anyone acts on it.** Node now strips types natively, so the
~13% `@babel/register` TS transform and the cold-cache penalty on fresh CI
checkouts no longer describe anything that exists. Coverage is no longer a
factor either: the report is a native `zcov` pass of a few seconds rather than
the ~65s single-threaded `c8 report` this entry was originally written against.
Whether the run is still CPU-bound — the entry's actual conclusion — is
untested against the current tooling.

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
`pnpm run compile` (`scripts/inspect-compiled-output.mts`) never sets the hook,
so `<style>.a{color:red}</style><div class=a>hi</div>` compiles to output
containing only the `<div>` and a contributor inspecting `<style>` codegen
cannot tell whether the CSS was dropped by design or by their change; the same
silent loss hits any hand-rolled `@marko/compiler` integration. The compiler
already validates this exact option elsewhere
(`packages/compiler/src/babel-plugin/index.js:47-50` throws "the
`resolveVirtualDependency` option must be supplied when output is `hydrate`"),
so a `diagnosticWarn` when a non-empty `<style>` body is discarded is consistent
with existing behavior; independently, `scripts/inspect-compiled-output.mts`
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

## Make `pnpm run compile` tolerate the `--` that root AGENTS.md documents

`scripts/inspect-compiled-output.mts` › `parseArgs` | 2026-07-23 | impact:med | effort:low

Root `AGENTS.md`/`CLAUDE.md` call `pnpm run compile -- -o dom -d foo.marko` "the
fastest way to inspect what the translator generates", but the documented form
with `--` does not work: pnpm forwards the literal `--` to the script, and
`scripts/inspect-compiled-output.mts` uses Node
`parseArgs({allowPositionals:true})`, which treats everything after a bare `--`
as positionals — so `-o` becomes a file path and it dies with `ENOENT ... open
'<repo>/-o'`. Fix by having the script drop a leading `--` before parsing (or by
correcting the two AGENTS.md invocations to omit it). The translator-resolution
half of this — `Cannot find module '@marko/runtime-tags/translator'`, which used
to force an explicit `-t <abs path>` — no longer reproduces; the no-`--` form
resolves the default translator on its own. Re-verify from the repo root: `pnpm
run compile -- -o dom -d /tmp/x.marko` → ENOENT on `-o`, while `pnpm run compile
-o dom -d /tmp/x.marko` succeeds and writes `/tmp/x.marko.js`.

## Serialize boxed primitives

`packages/runtime-tags/src/html/serializer.ts` › `writeUnknownObject` | 2026-07-24 | impact:low | effort:low

Boxed primitives (`Object(1)`, `Object("x")`, `Object(true)`) fall through the constructor dispatch to `throwUnserializable` and resume as nothing. This is a one-case addition with an obvious constructor form (`Object(value)`). `DataView`, previously recorded alongside them, was serialized in #3571 and is done. Re-verify: pass `Object(1)` through `Serializer#stringifyScopes` and observe the value is omitted from the payload, against `new URL("https://a.b")` as a supported control.

## Unify `packages/runtime-class/src` on ESM so its module type can be declared

`packages/runtime-class/package.json` › `files` | 2026-07-24 | impact:low | effort:high

`packages/runtime-class` declares no `"type"`, and 79 ESM-syntax `.js` files sit under it alongside 140 CommonJS ones, so Node parses each ESM file as CommonJS, fails, and reparses it as ESM. This is the last typeless-package surface in the repo now that `packages/compiler` is unified — no current npm script trips the warning (the class translator entry `src/translator.js` is CommonJS, and mocha runs with `no-warnings`), so this is a latent cost rather than visible noise. It is harder than the compiler was: unlike `compiler`, this package publishes `src` (it is in `files`), so a `src/package.json` marker would ship to consumers and would need the same `dist` override the compiler build now applies via `scripts/write-dist-package.mjs`. Marko 5 is in maintenance, so weigh the churn before starting. Verify: `node -e "..."` walking `packages/runtime-class/src` for files matching `/^\s*(import|export)\s/m` reports 79.

## Name the actual handler attribute in SSR's controllable assertion; `checkedChange`/`checkedValueChange`/`openChange` all report `valueChange`

`packages/runtime-tags/src/html/attrs.ts` › `writeControlledScope` | 2026-07-27 | impact:low | effort:low

All six typed SSR controllable helpers (`_attr_input_checked`, `_attr_input_checkedValue`, `_attr_details_or_dialog_open`, `_attr_select_value`, `_attr_input_value`, `_attr_textarea_value`) funnel into `writeControlledScope`, whose MARKO_DEBUG guard calls `assertHandlerIsFunction("valueChange", valueChange)` with a hardcoded name, so a non-function `checkedChange`, `checkedValueChange` or `openChange` throws an error naming an attribute the author never wrote and sends them looking at the wrong line. The DOM runtime gets this right — `dom/controllable.ts` passes the real name at each of its five `assertHandlerIsFunction` call sites — so the identical authoring mistake yields a correct message on the client and a misdirecting one on the server, which is the one an SSR-first render surfaces. `writeControlledScope` already receives the `ControlledType`, and that maps 1:1 onto the handler name (`InputChecked`→`checkedChange`, `InputCheckedValue`→`checkedValueChange`, `DetailsOrDialogOpen`→`openChange`, `InputValue`/`SelectValue`→`valueChange`, per `packages/runtime-tags/src/common/constants/controlled-type.ts`), so a debug-only lookup there — or threading the name in from each call site the way DOM does — fixes all six at once. Re-verify: `node -r ~ts -e 'const a=require("./packages/runtime-tags/src/html/attrs.ts");try{a._attr_input_checked(0,"#input/0",true,"oops")}catch(e){console.log(e.message)}'` from the repo root prints "The `valueChange` handler must be a function …" for a value that was really passed as `checkedChange`, while the same call against `src/dom/controllable.ts` reports `checkedChange`.

## Add `"./package.json"` to the source-mode `exports` map so it resolves the way the published map does

`packages/runtime-tags/package.json` › `exports` | 2026-07-27 | impact:low | effort:low

`packages/runtime-tags/package.json` declares `"./package.json": "./package.json"` only in `exports:override` — the map `scripts/pkg-override.js` swaps in at publish — so in the monorepo, and in any workspace linked against source, the subpath falls through the catch-all `"./*": "./src/*.ts"` and resolves to the nonexistent `src/package.json.ts`; it is the single key that differs between the two maps, and it has been override-only since the maps were introduced. Reading a dependency's own `package.json` to get its version or locate its root is routine for bundlers and dev tooling — `language-server` and `packages/runtime-class/bin/markoc.js` both do exactly that via `require.resolve("marko/package.json")`, which works only because `marko` ships no `exports` map at all — so this breaks in source mode while looking fine from npm. Sibling `@marko/compiler` lists `"./package"` and `"./package.json"` in both of its maps, so the omission reads as an oversight rather than policy. Fix by adding `"./package.json": "./package.json"` to `exports` alongside the existing `"./cheatsheet.md"` entry. Re-verify from the repo root: `node -e 'require.resolve("@marko/runtime-tags/package.json")'` throws `Cannot find module '<repo>/node_modules/@marko/runtime-tags/src/package.json.ts'`, while `node -e 'console.log(require.resolve("@marko/compiler/package.json"))'` prints `packages/compiler/package.json`.

## Reject unknown attribute tags on `<try>` — a `<@placholder>`/`<@cath>` typo compiles clean and silently drops the pending/error UI

`packages/runtime-tags/src/translator/core/try.ts` › `analyze` | 2026-07-27 | impact:med | effort:low

`<try>`'s `analyze` is strict about plain attributes — `assertNoAttributes(tag)` turns `<try foo=1>` into a hard "Tag does not support attributes" error — but it then calls `analyzeAttributeTags(tag)` with no name check, so any misspelled or invented attribute tag compiles clean even though `_try` in `packages/runtime-tags/src/html/writer.ts` and `packages/runtime-tags/src/dom/control-flow.ts` only ever reads `input.placeholder` and `input.catch`. The typo'd branch still emits a full `_content_resume` renderer into both the SSR and the client output and is then never read: `<@placholder>` means the pending UI silently never streams, and `<@cath|e|>` means a rejection escapes `render()` entirely instead of being caught — a page that dies with no diagnostic at any layer. `<await>` already produces a good error for exactly this mistake via `assertNoAttributeTags(tag, hint)`, and `<try>`'s own type stub `packages/runtime-tags/tags/try.d.marko` already declares the closed set (`content`/`placeholder`/`catch`), so the translator is the one layer that lets it through. Add a name check in `analyze` that throws for any attribute tag other than `@placeholder`/`@catch` (with a near-miss suggestion, in the style of the other core-tag code-frame errors), plus an `error-try-unknown-attr-tag` fixture — the error fixture family has `error-await-attr-tags` and `error-try-no-body` but nothing for this. Re-verify: `pnpm run compile -o html -d tmp.marko` on `<try><@cath|e|>caught ${e.message}</@cath><await|v|=Promise.reject(new Error("boom"))>${v}</await></try>` succeeds and emits a `cath:` key in the `_try` props object, and rendering that template rejects with `boom`, while the `<@catch|e|>` spelling renders "caught boom".

## Validate the `load` import attribute even when `linkAssets` is not configured — a bogus trigger compiles clean today

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `analyze` | 2026-07-27 | impact:low | effort:low

`analyze` bails out of all `load` handling with `if (!getMarkoOpts().linkAssets) { loadAttrPath.remove(); return; }` before `getLoadImportConfig` ever runs, so every diagnostic for the attribute — unknown trigger type, missing selector or media query, `render` combined with other triggers, unknown query params, non-default specifiers, an unresolvable `.marko` target — only fires in builds that configure `linkAssets`. That means `import Child from "<child>" with { load: "bogus-trigger" }` compiles completely clean under a plain `@marko/compiler` invocation — `@marko/vite` with `linked: false`, the repo's own `pnpm run compile`, unit-test setups, Lasso — and the typo surfaces only later, as a hard throw, in whichever asset-linked build first consumes the template, so a component library validated in a non-linked pipeline can ship a `load` string that breaks its consumers. The eager fallback itself is deliberate (CHANGELOG #3434, "compile lazy `with { load }` imports as normal eager tag imports when the `linkAssets` compiler option isn't configured ... instead of throwing"), but the trigger parse is pure string validation with no dependency on asset orchestration, so it should run unconditionally — parse and report first, then drop the attribute when `linkAssets` is absent — so a template either always errors or always compiles. The class-API translator has the same ordering (`packages/runtime-class/src/translator/util/load-import.js` › `analyzeLoadImport` returns on `markoOpts.hot || !markoOpts.linkAssets` before its `getLoadImportConfig` call), so a fix should cover both. Re-verify: compile a template containing `import Child from "<child>" with { load: "bogus-trigger" }` plus `<Child/>` with `compileFile` at `output: "html"` — it resolves with empty `meta.diagnostics` under default options, and throws `Unknown trigger type "bogus-trigger". Supported triggers are "visible", "idle", "media", and "on*".` once `linkAssets: { runtime, onAsset }` is added; `pnpm run compile -o html -d that.marko` likewise emits the `.js` with no complaint.

## Union the Marko 5 and 6 `types` stubs in the interop taglib merge — `<await>` and `<script>` type-check against the Marko 5 API inside Tags-API files

`packages/runtime-tags/src/translator/interop/index.ts` › `mergeTagDef` | 2026-07-27 | impact:med | effort:med

`mergeTagDef` special-cases only the hook keys (`parse`/`migrate`/`transform`/`analyze`/`translate`) and falls through to `value5 ?? value6` for everything else, so wherever both core taglibs define a tag the Marko 5 `types` stub wins unconditionally — and `types` is the only key that actually diverges, for exactly `<await>` and `<script>`. `marko/translator` is the interop translator (`packages/runtime-class/src/translator.js` = `createInteropTranslator(classAPI)`) and is also `@marko/compiler`'s default (`packages/compiler/src/config.js`), so `@marko/language-tools` — which picks a tag's type file via `resolveTagFile(def) = def.types || def.template || def.renderer` — resolves those two tags to `marko/src/core-tags/core/await/index.d.marko` and `marko/src/core-tags/core/script.d.marko` even inside a Tags-API `tags/*.marko` file. Idiomatic `<await|v| value=promise>` still type-checks (the Marko 5 stub extracts as `api: "class"`, so `Marko._.contentFor` binds the body to `renderBody`, matching that stub's second union branch), but the editor now offers and silently accepts `<@then>`/`<@catch>`/`<@placeholder>`/`client-reorder`/`timeout` on `<await>` and every HTML script attribute on `<script>`, all of which the Marko 6 translator rejects with a hard compile error ("Tag does not support nested attribute tags…" / "The `<script>` tag does not support html attributes…"), and hovers describe the wrong tag entirely — precisely in the projects that are mid-migration. The taglib merge has no per-file API dispatch available, so the direction is interop-specific stubs whose `Input` unions both APIs, selected when both sides declare `types`, rather than silently preferring 5. This is a different defect from the entry `Give <show> a types stub so its input is type-checked like every other core tag`, which is about a core tag that declares no `types` at all. Re-verify: `node -r ~ts -e 'const {taglib}=require("@marko/compiler");const l=taglib.buildLookup("packages/runtime-tags/src/__tests__/fixtures-interop/interop-basic-tags-to-class","marko/translator");for(const n of ["await","script"])console.log(n,l.getTag(n).types);'` prints the two `marko/src/core-tags/...` paths instead of `@marko/runtime-tags/tags/await.d.marko` and `.../script.d.marko`.

## Stop the render-snapshot comment filter from swallowing real `<html-comment>` content; `<!--TODO: fix-->` is classified as a Marko marker

`packages/runtime-tags/src/__tests__/utils/get-node-info.ts` › `isIgnoredNode` | 2026-07-27 | impact:med | effort:low

`isMarkoComment` (reached through the exported `isIgnoredNode`) decides a comment is Marko-internal by shape, `/^[a-zA-Z$_]\w*[^\w\s]/`, which does catch resume markers like `M_*1 b` but also matches ordinary comment prose whose first word is followed by punctuation — `TODO: fix`, `wp:paragraph`, `count: 1`, `note-1`, `foo=bar` are all treated as internal while `hello world` is not. `cloneAndSanitize` (`src/__tests__/utils/track-mutations.ts`) then removes those nodes from the html block of every `render*.md`, so an `<html-comment>` carrying exactly the analytics/CMS-marker text the tag exists for is invisible in the primary review artifact; worse, the two halves of the snapshot contradict each other, because `formatMutationRecord` tests only `target.parentNode` for characterData records, so a fixture whose comment updates still emits `UPDATE: div > #comment "c: 0" => "c: 1"` in `## Change` for a node the html block never showed. Since AGENTS.md directs reviewers to audit the mutation log for unexpected changes, an `<html-comment>` regression on such content would pass unnoticed, and the committed `html-comment-counter` fixture escapes only by accident (its data starts with a digit, which `[a-zA-Z$_]` rejects). Direction: match the actual marker grammar instead of a generic shape — every marker `html/writer.ts` › `mark` emits is `commentPrefix` (runtime id + `_`) followed by a resume sigil, as the committed `writes.html` snapshots show (`M_*10 a`, `M_]10 a 11`, `M_[`) — or have the writer tag its markers so the tracker recognizes them by prefix. This is a different defect from the entry `Surface <style>/<title>/<link> mutations in the render log`, which is about the element-name list in `isIgnoredTag`, and from `Mutation-tracker jsdom workaround silently hides real text updates`, which drops the `## Change` line rather than the html node. Re-verify: `node -r ~ts -e 'const n=require("./packages/runtime-tags/src/__tests__/utils/get-node-info.ts");for(const d of ["TODO: fix","wp:paragraph","hello world","M_*1 b"])console.log(JSON.stringify(d),n.isIgnoredNode({nodeType:8,data:d}))'` prints true for `TODO: fix` and `wp:paragraph` and false for `hello world`.

## Format fixture console args with `util.inspect`: an `Error` snapshots as `ERROR {}` and a circular value crashes the harness

`packages/runtime-tags/src/__tests__/utils/capture-console.ts` › `formatConsoleRecord` | 2026-07-27 | impact:low | effort:low

`formatConsoleRecord` renders every console argument with `JSON.stringify`, which erases exactly the values a fixture would want to assert on: `console.error(new Error("boom"))` snapshots as `ERROR {}`, a DOM node as `LOG {}`, and `undefined`/a function/a symbol each collapse to a bare `LOG ` — so a `<try>`/`@catch` or `onError` fixture that logs the caught error records no information and would keep passing however the error changes. A circular argument is worse: the stringify throws inside `getStatusString` (`utils/track-mutations.ts`), so both the `ssr` and `csr` tests fail with `TypeError: Converting circular structure to JSON` over a stack that names only harness internals, never the template. No committed snapshot logs a non-primitive today, so the gap is latent, but it silently caps what a console-based fixture can assert and turns a self-referential value into a dead-end crash. Direction: format with `node:util.inspect` (depth-limited, `Error`- and DOM-aware), or at minimum special-case `Error` as `name: message` and wrap the stringify in a try/catch that falls back to `String(arg)`. Re-verify from the repo root: `node -r ~ts -e 'const {formatConsoleRecord}=require("./packages/runtime-tags/src/__tests__/utils/capture-console.ts"); console.log(formatConsoleRecord({type:"error",args:[new Error("boom")]})); const c={}; c.self=c; formatConsoleRecord({type:"log",args:[c]});'` prints `ERROR {}` and then throws.

## Thread `reject_load` into the CSR half of the fixture harness; today it is silently inert and a CSR chunk-load-failure fixture passes with a successful load

`packages/runtime-tags/src/__tests__/main.test.ts` › `csr` | 2026-07-27 | impact:med | effort:low

`ssr()` builds its jsdom with `createBrowser(runner.assets, config.load_order, rejectLoad)`, but `csr()` calls the bare `createBrowser()` and reaches the client entry through `clientRunner` (`__tests__/utils/bundle.ts` › `createServerRunner`), which calls `importWithContext(csrFile, { browser: true }, ctx)` with no `rejectLoad` — so the `reject_load` TestConfig option is silently a no-op in CSR mode even though the CSR module graph does perform the dynamic `import("./v:child.marko.input_value.mjs")` that the option is meant to fail. That is not theoretical: a fixture carrying `reject_load: ["input_value"]` that renders client-side produces a snapshot where the lazy chunk loads fine and `<try>`'s `@catch` never fires, i.e. a green test asserting the opposite of what the fixture is named for; today only the easy-to-forget `skip_csr: true` on `fixtures/lazy-tag-input-chunk-load-error` hides that, and the client-only lazy-chunk-failure path has no coverage at all. Direction: forward `rejectLoad` from `csr()` through `clientRunner` into `importWithContext` (a single extra argument — with it the same fixture renders `<div id="error">simulated chunk load failure: ./v:child.marko.input_value.mjs</div>` under CSR), or throw at fixture setup when `reject_load` is set without `skip_csr`; while there, note that `load_order` is likewise SSR-only, but harmlessly so, since a CSR browser has no document module scripts to order (`fixtures/lazy-tag-nested-shared-reversed` sets it and still runs CSR). This is a different item from the entry "Exercise `MountedTemplate.destroy()` and `.value` in the CSR fixture harness", which is about missing teardown-API coverage rather than a config option that is wired into only one render path. Re-verify: copy `fixtures/lazy-tag-input-chunk-load-error`'s `template.marko` and `child.marko` into a new fixture whose `test.ts` keeps `reject_load: ["input_value"]` and `equivalent: false` but uses `skip_ssr: true` in place of `skip_csr: true`, run `pnpm test -- --grep "runtime-tags/translator <newFixture> " --no-bail`, and read the written `__snapshots__/csr.actual.md` — it ends with `<span id="child">1</span>`, never the `#error` div that the committed `lazy-tag-input-chunk-load-error/__snapshots__/render-ssr.debug.md` records for the same input.

## Validate `translator.tagDiscoveryDirs` in `buildLookup` — omitting it throws a bare `is not iterable`, and a string silently discovers no tags

`packages/compiler/src/taglib/index.js` › `buildLookup` | 2026-07-27 | impact:low | effort:low

`buildLookup` guards one member of the translator contract (`if (!translator || !Array.isArray(translator.taglibs)) throw "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)"`) and defaults another (`translator.optionalTaglibs || []`), but hands `translator.tagDiscoveryDirs` straight to `finder.find`, whose `for (const tagDiscoveryDir of tagDiscoveryDirs)` (`packages/compiler/src/taglib/finder/index.js` › `find`) is the only thing standing behind it. Omitting the key throws an unprefixed `TypeError: tagDiscoveryDirs is not iterable` from inside the finder with no hint that the culprit is a translator export — compare dropping `translate`, which produces `@marko/compiler: translator must provide a translate visitor object` — and the natural typo `tagDiscoveryDirs: "tags"` is worse: a string is iterable, so it iterates the characters, discovers nothing, and only surfaces much later as a misdirecting `Unable to find entry point for custom tag <child>. Did you mean <meta>?`. Nothing type-checks it either, since `packages/compiler/config.d.ts` declares `translator?: any`, and both shipped translators declare the key (`packages/runtime-tags/src/translator/index.ts` → `["tags"]`, `packages/runtime-class/src/translator/index.js` → `["components"]`), so it is required in practice while `packages/compiler/AGENTS.md`'s "Translator contract" paragraph lists it in the same run as the genuinely optional `optionalTaglibs` / `preferAPI` / `cheatsheet`. Default it to `[]` next to the `optionalTaglibs` default and reject a non-array with the existing named `@marko/compiler:` error, then mark it required in AGENTS.md. Re-verify: `node -r ~ts -e 'const {taglib}=require("./packages/compiler/src/index.js");const t=require("./packages/runtime-tags/src/translator/index.ts");const d="packages/runtime-tags/src/__tests__/fixtures/assign-destructured-reduced";for(const tdd of [["tags"],"tags",undefined]){taglib.clearCaches();try{console.log(JSON.stringify(tdd),"-> <child>:",!!taglib.buildLookup(d,{taglibs:t.taglibs,translate:t.translate,tagDiscoveryDirs:tdd}).getTag("child"))}catch(e){console.log(JSON.stringify(tdd),"->",e.constructor.name+": "+e.message)}}'` prints `<child>: true`, then `<child>: false`, then `TypeError: tagDiscoveryDirs is not iterable`.

The asymmetry reads as accidental rather than deliberate, because every other export in AGENTS.md's optional list genuinely is optional: `transform`/`analyze` are `if`-guarded in `babel-plugin/index.js`, `getRuntimeEntryFiles` is guarded in `src/index.js`, and `optionalTaglibs` is defaulted on the very line above this one — while both genuinely required exports get a named `@marko/compiler:` error. Inline translator objects are a supported entry point rather than a test-only artifact (`util/agent-fix-guide.js` explicitly accommodates "inline objects (tests, embedders)"), so this is reachable by embedders, and `errorRecovery: true` does not downgrade the `TypeError` to a diagnostic.

## Diagnose a cross-environment read of a `server`/`client` scriptlet binding — it compiles to a bare `var` with no warning

`packages/runtime-tags/src/translator/visitors/scriptlet.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

When a scriptlet's `target` does not match the output, `translate.exit` replaces it with bare `var` declarations of its outer binding identifiers, so every cross-environment read compiles clean and silently evaluates to `undefined` — no compile error, no MARKO_DEBUG warning. A template with `server function fmt(n) { return n + "!" }` and `<p>${fmt(input.n)}</p>` renders `<p>a!</p>` on the server but emits `var fmt;` plus `_text($scope["#text/0"], fmt(input_n))` for DOM, which throws `TypeError: fmt is not a function` as soon as the browser renders or updates; the mirror case, `client const only = "browser";` read from the template body, renders `<p></p>` on the server and `<p>browser</p>` on the client. The translator already has the exact binding names it is stubbing and the reference paths are available at analyze, so it can raise a code frame on the offending reference naming the binding and its declaring environment ("`fmt` is declared in a `server` statement and is not available on the client — use `static`, or move the use into a `server` statement"). Any diagnostic must exempt the deliberately guarded form: `src/__tests__/fixtures/server-client/template.marko` reads both `server_x` and `client_x` from a `static` statement behind `typeof server_x === "undefined"` and must keep compiling. Re-verify: `printf 'server function fmt(n) { return n + "!" }\n<p>${fmt(input.n)}</p>\n' > /tmp/t.marko && pnpm run compile -o dom -d /tmp/t.marko` exits 0 with no diagnostic and writes a module containing `var fmt;` next to `fmt(input_n)`.
