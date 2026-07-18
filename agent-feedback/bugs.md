# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`packages/runtime-tags/src/translator/util/optional.ts:103` | 2026-07-03 | impact:med | effort:med

`isSuperset` walks `subset` from the top and rejects with
`supLen - found <= i`, which compares the remaining superset slots against `i`
(the count of _smaller_ elements) instead of `subLen - i` (the count still to
place). It returns `false` for many genuine superset relationships, including
two identical sorted arrays: `isSuperset([1,2,3],[1,2,3])` is `false`. The one caller,
`isSupersetSources` (`references.ts:2395`), gates intersection serialization at
`references.ts:1131`/`1145`. Naively correcting the arithmetic to
`supLen - found < subLen - i` makes `isSupersetSources` return `true` for
equal-source bindings, so both symmetric `addSerializeReason` calls are skipped
and neither binding in the intersection serializes — this under-serializes and
breaks resume (the `bound-attr-shapes` fixture throws `Unable to serialize
"ControlledHandler:#input/2"`). The current over-serializing behavior is
therefore relied upon for correctness. A real fix needs `isSupersetSources` to
use a strict/proper-superset test (equal sources must not prune each other)
_and_ the corrected arithmetic, then a full snapshot audit — out of scope for a
one-line change.

## CSR: rejected `<await>` under an ancestor `@placeholder` never dismisses the placeholder

`packages/runtime-tags/src/dom/control-flow.ts:376` | 2026-07-10 | impact:med | effort:med

In a pure client render of `<try @placeholder><await>…<try @catch><await=rejecting>…`,
when the inner await rejects, `_await_promise`'s reject handler zeroes the
ancestor placeholder's counter (`awaitCounter.i = 0`) without running the
counter's completion, and `renderCatch` only unwinds a `PlaceholderBranch` on
the try that owns the `@catch`. When the placeholder lives on an _ancestor_
try (the nearest-placeholder lookup in `_await_promise` attaches the counter
there), the detached content is never re-inserted and the page shows the
placeholder forever; the catch content renders only into the detached tree.
Observed in the `catch-reject-nested-in-await` fixture's `render-csr` snapshot
(final state stays `loading outer...`; SSR of the same template shows
`caught: ERROR!` plus the sibling `<div>`). A fix needs the reject path to
complete (not zero) the pending counter so `dismissPlaceholder`/pending
effects run, while keeping the forced-zero semantics for resumed reorder
records — those `c()` implementations do stream-node surgery that must not run
on rejection.

## Inline reorder runtime holds only one pending `onNextSibling` callback

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts:37` | 2026-07-10 | impact:low | effort:med

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>`
swap callback pending at the element's next sibling is overwritten if, while
walking the `<t>`'s children, a placeholder-end comment (`!id`) matches the
"content arrived before its end marker" branch and re-assigns the pair — the
outer swap then never fires. Tracing current server emission orders suggests
this is unreachable today (catch/content `<t>`s and their end markers always
stream in an order where the earlier callback fires before the overwrite),
but it is one flush-ordering change away from a silent hydration freeze. A
queue (or firing the pending callback before re-assigning) would make the
inline runtime robust; weigh against inline-runtime byte cost.

## SSR controlled-form value normalization diverges from DOM for `0n`/`NaN`/`false`, causing a hydration mismatch

`packages/runtime-tags/src/html/attrs.ts:516` | 2026-07-14 | impact:low | effort:low

`normalizeStrAttrValue` computes `(value && value !== true) || value === 0 ? value + "" : ""`, so `0n` (falsy, `0n === 0` is false), `NaN`, and `false` all normalize to `""`. The DOM counterpart used for the identical selection/checked computation, `normalizeStrProp` (`dom/controllable.ts`) → `normalizeAttrValue` (`dom/dom.ts`), returns `value + ""`, giving `"0"`/`"NaN"`/`"false"`. This normalizer feeds `normalizedValueMatches`, which decides `selected` for controlled `<select>`/`<option>` and `checked` for `<input type=checkbox|radio>`, so SSR and CSR can select different options/checkboxes for the same value. Example: a controlled `<select value=0n>` with `<option value=0>` and `<option value="">` — SSR marks the empty option selected, CSR marks the `value=0` option selected, a genuine hydration mismatch. Unlike ordinary text rendering, where the SSR and DOM helpers both deliberately render `0n` as empty, these controlled-value paths use different formulas and disagree. Latent (no fixture feeds these as controlled values today). Fix: make `normalizeStrAttrValue` agree with the DOM normalizer for non-void, non-`true` values.

## Multiple-select change observer compares controlled value to DOM selection index-by-index

`packages/runtime-tags/src/dom/controllable.ts:352` | 2026-07-14 | impact:low | effort:low

In `_attr_select_value`'s `MutationObserver` (fired when `<option>`s are added/removed), the decision to run `onChange` is `value.length !== el.selectedOptions.length || value.some((v, i) => v != el.selectedOptions[i].value)` (lines 352–353). `value` is `scope[ControlledValue]` in app-supplied order, while `el.selectedOptions` is always document order and selection is applied set-wise (`opt.selected = value.includes(opt.value)` in `setSelectValue`). So a set-equal but reordered controlled array (e.g. `value=["b","a"]` with options rendered `a,b`, both selected) flags a false mismatch on any option add/remove and fires `valueChange(getSelectValue(...))`, silently reordering the app model to document order with no user interaction. Native multi-select never preserves order (any real user change already document-orders the model), so impact is low — the only novel effect is a spurious change side-effect on unrelated option mutations, which stabilizes after one fire. Fix: compare as sets (length plus `every(v => selectedValues.has(v))`).

## Inert Class parent drops client resume for a stateful Tags-API descendant

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:293` | 2026-07-13 | impact:high | effort:high

A Tags-API page that renders an inert Class-API component (no class block /
component-browser) which itself renders a stateful Tags-API grandchild produces
a dead (non-resuming) grandchild after SSR: clicking a `<button onClick>` in the
grandchild does nothing, in **both** debug and optimize. In optimize the class
boundary is additionally removed outright by the inert-child optimization here
(`!classHydration && !tagsSerializeReason` → `tag.remove()`), because
`getClassHydrationMode` (`packages/runtime-class/src/translator/index.js:714`)
only detects interactivity via `meta.component` and never inspects a Tags-API
child's `isInteractive` (which lives on `program.node.extra`, not
`metadata.marko`). But disabling that removal does **not** fix the dead button,
so the root cause is a deeper resume gap for stateful-tags-inside-inert-class,
not just the optimization. Repro (CSR works, SSR-resume dead): tags page
`// use tags` + `<class-wrapper/>`; `class-wrapper.marko` =
`<div><tags-counter/></div>` (no class block); `tags-counter.marko` =
`<let/n=0/><button onClick(){n++}>${n}</button>`. A fix likely needs the tags
translator to surface interactivity on `metadata.marko`, `getClassHydrationMode`
to return DESCENDANT for interactive tags children, and the boundary to actually
resume.

## Compat `___deserialize` override dereferences a possibly-undefined scope

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js:73` | 2026-07-13 | impact:low | effort:low

The compat `ComponentDef.___deserialize` override does
`o[2] = domCompat.getScope(global, o[2]).m5i` with no null guard, but
`compat.getScope` returns `getRenderScopes($global)?.[scopeId]`, which is
legitimately `undefined` when the tags scope carrying `m5i` has not been resumed
yet. Every other consumer uses optional chaining; the sibling comment at line 38
even notes "a split parent may not be hydrated yet when the child resumes."
Under the normal init6-before-init5 ordering the tags scope is registered first,
so this is not hit today, but any streaming/out-of-order resume of a
class-in-tags child before its `writeSetScopeForComponent` scope would throw
`TypeError`. Defensive fix: `getScope(global, o[2])?.m5i`.

## `COMPAT_REGISTRY` caches `[id, scopeId]` for the module lifetime

`packages/runtime-tags/src/html/compat.ts:69` | 2026-07-13 | impact:med | effort:med

`toJSON`'s `COMPAT_REGISTRY` is a module-global `WeakMap` keyed by the registered
function, and the `_script(scopeId, SET_SCOPE_REGISTER_ID)` side-effect (line 79)
runs only on the first `toJSON()` for that function object, ever. For any
registered function reused across renders (a module-level/hoisted `renderBody`,
or a memoized handler), render #2 returns render #1's cached `scopeId` (per-render
scope counters reset via `new State`) and never re-emits the `SET_SCOPE`
registration, so its serialized reference points at a stale scope id and the
client `getRenderScopes(...)[id]` lookup misses → broken hydration / dead bridged
handler. Server-side the WeakMap persists across requests, so this is a
cross-request hazard. Fix: key the cache per-render/per-`State` rather than
module-globally.

## class→tags bridged render builds its head `Chunk` with null context

`packages/runtime-tags/src/html/compat.ts:116` | 2026-07-13 | impact:med | effort:med

`compat.render` builds the bridged tags child's head `Chunk` with `context: null`
(the flagged TODO). With null context, inside the bridged subtree
`isInResumedBranch()` is false and `$chunk.context?.[kBranchId]`/`[kIsAsync]` are
undefined, so `_script` never calls `_resume_branch` and
`AccessorProp.ClosestBranchId` is never written. A Class component embedded under
an async/lazy Tags region (`tags(async) → class → tags(effect)`) then resumes its
effect with no closest-branch association, attaching it to the wrong branch or
none → hydration mismatch. Fix: thread the enclosing chunk's context into the
bridged head chunk.

## `_dynamic_tag` compares only the renderer id, conflating instances of the same content

`packages/runtime-tags/src/dom/control-flow.ts:535` | 2026-07-14 | impact:high | effort:med

The dynamic-tag change checks compare `renderer?.[RendererProp.Id] || renderer` (`:535` for `_dynamic_tag`, `:647` for `_dynamic_tag_content`, plus the DOM `_attr_content`). `RendererProp.Id` is the template/section resume id, identical for every _instance_ of one content section — instances differ only by their `RendererProp.Owner` scope. So switching a dynamic tag between two instances of the same content — two `<attrs.content>` from two instances of one provider tag, or the list-detail `<${selected.content}/>` — is a silent no-op: no teardown or re-render, and closures stay subscribed to the old owner's scope. A control with two _distinct_ tag files behaves correctly, pinning the defect to the id-only comparison. Fix: compare `(id, owner)` — content renderer objects are recreated per render so identity alone over-fires, while the owner scope is stable per instance; the resume handshake must serialize a scope-registered renderer as its registered reference so the first post-resume update stays instance-aware.

## An empty-bodied `<html-comment>` resumes as a text node instead of the comment

`packages/runtime-tags/src/dom/resume.ts:402` | 2026-07-14 | impact:med | effort:med

For an `<html-comment>${c}</html-comment>` whose body serializes empty, SSR writes `<!---->` immediately before the resume marker. The node-claim heuristic — `prev && (prev.nodeType < 8 /* COMMENT_NODE */ || (prev as Comment).data) ? prev : insertBefore(new Text())` — exists so an empty `<!>` separator is _not_ claimed (a fresh Text node is created instead), but it cannot distinguish an intentional empty comment: `prev` is a comment (`nodeType === 8`, so `< 8` is false) with empty `data` (falsy), so it builds a Text node as the binding rather than claiming the comment. After hydration, setting `c = "secret"` renders `secret` as visible text where a pure client render produces `<!--secret-->` — an SSR-resume vs CSR divergence. Fix: give the html-comment marker a dedicated resume symbol (e.g. `ResumeSymbol.NodeComment`) that claims the immediately-preceding sibling unconditionally, since the tag always writes its comment right before the marker.

## Fragment-walked non-branch scopes get the fragment root as ClosestBranch, not their inner enclosing branch

`packages/runtime-tags/src/dom/update-fragment.ts:198` | 2026-07-14 | impact:med | effort:med

`applyFragment`/`createFragmentBranch`/`applyBoundaryBody` finish a walk with
`for (const scope of touched) scope[ClosestBranch] ||= branch`, defaulting
every walker-stamped non-branch scope to the fragment's ROOT branch. Document
resume instead links a branch-owning scope to its true enclosing marker
branch (the deferred-owner pass in `createVisitBranches`, dom/resume.ts) or
applies a serialized `ClosestBranchId` fill -- but the update applier's
patch-side `getScope` (dom/update.ts) never resolves `ClosestBranchId`, so a
scope nested inside an INNER branch of a fragment (eg inside a keyed loop
item or an `<if>` body within the capture) is left with
`ClosestBranch = fragmentRoot`, skipping the inner branch. Consumers of the
`ClosestBranch`/`ParentBranch` chain include destroy propagation and
`getPossessionSiteKey` (dom/update-fragment.ts), whose loop-path segments
come from walking that chain -- a hop/boundary/loop site nested under a
fragment-created loop item could compute a possession path missing its loop
segment, making the echo mismatch (safe but lossy: fragments ship for
possessed sites) or collide. The marker-conformance test
(`__tests__/marker-conformance.test.ts`) pins the divergence explicitly as a
documented asymmetry; existing possession-in-fragment fixtures pass, so no
current fixture nests a participating site under an inner fragment branch.
A fix could adopt resume's deferred-owner linking into `walkFragment` (the
KEEP IN SYNC comments currently declare it render-only) or resolve
`ClosestBranchId` fills on patch scopes.

## Sibling `run` repo: `pkg-toggle` round trip permanently moves toggle-only keys into `package.json`

`../run/scripts/pkg-toggle.js:16` | 2026-07-15 | impact:med | effort:low

(Recorded here because the `run` repo has no agent-feedback directory.) The
toggle swaps each key of `package.toggle.json` with `package.json`
(`[targetData[key], toggleData[key]] = [toggleData[key], targetData[key]]`).
For a key that exists only in the toggle file (e.g. `typesVersions` in
`packages/*/package.toggle.json`), the first toggle writes
`toggleData[key] = undefined`, which `JSON.stringify` drops from the toggle
file; the second toggle then never sees the key, so `package.json` keeps the
publish-only field and the toggle file loses it — the round trip is not an
identity. Observed after `marko-ecommerce`'s `scripts/setup.mjs` ran
`node scripts/pkg-toggle` twice around `npm pack`: all eight
`packages/{run,adapters/*}/package{,.toggle}.json` files were left dirty
(`package.json` gained `typesVersions`). The `@ci:release` script does the
same double toggle, so post-release checkouts carry the same drift and a
subsequent toggle no longer switches those keys at all. Fix: use an explicit
absent-key marker (or `Object.hasOwn` bookkeeping) so toggle-only keys are
removed from the target on the way back instead of being dropped from the
toggle file.

## Runtime-valued dynamic tag renderers: only never-referenced (constructed/interop) renderers fall to the loud fallback

`packages/runtime-tags/src/dom/update-merges.ts` (`_update_dynamic`) | 2026-07-15 | impact:low | effort:med

The compile-time-referenced cases are closed. Eagerly imported candidates a
dynamic tag name reaches (conditional/logical/assignment/`<const>` chains)
link each `?persisted` entry from the parent's persisted entry
(`dynamic-tag.ts` `getDynamicTagImports` +
`persisted-update-dynamic-imported-child`), merge-less content sections
register a shared noop (`program/update.ts`), and templates whose default
escapes a module as a runtime value (attribute, spread, store, return,
object/array member) now register an escape-site loader: `dynamic-tag.ts`
`getEscapedTemplateImports` records the escapes at analyze,
`program/update.ts` emits `_update_loader(templateId, () =>
import("./child.marko?persisted"))` into the provider's persisted entry, and
`_update_dynamic` fires the loader once for an unregistered same-renderer
pair, parks, and drains when the entry registers
(`persisted-update-dynamic-escaped-renderer`); a rejected loader import
surfaces through the `patch(fail)` sink
(`persisted-update-dynamic-escaped-loader-failure`). Escape detection prefers
over-registration (a false positive costs one idle loader registration, never
a load). What remains, by design: a renderer never referenced as a
compile-time template value in any compiled `.marko` module — constructed at
runtime, interop-wrapped, or aggregated by a plain JS module the translator
never compiles (e.g. a lookup object in a `.js` registry re-exporting
templates) — has no escape site to register, so a renderer id with no
registration and no live match still fails loudly through `patch(fail)`
(`persisted-update-dynamic-unknown-renderer`) — defined behavior, recorded in
designs/persisted-pages-architecture.md.

## Document-side lazy load entries float rejections and leave the ready channel silent

`packages/runtime-tags/src/translator/visitors/program/index.ts:222` | 2026-07-16 | impact:low | effort:low

The generated `.load.mjs` entry (both persisted and not) is
`load().then(() => ready(id))` / `Promise.all([...]).then(() => readyPersisted(id))`
with no rejection handler, so a chunk that fails to load from the initial
document (deploy skew) surfaces only as an unhandled promise rejection and the
module's ready id never resolves. The lazy tag's own render path recovers
(`_load_setup`/`_load_template` route their load() failures to `renderCatch`),
and persisted navigations now re-trigger the load through `_load_ready`, whose
failure reaches the transport sink — but the document-side loader itself stays
noisy and inert. Consider a `.catch` that at least reports through a defined
channel (or retries), mirroring `_load_ready`'s handling.

## Initialize tag variables for dynamic native tags

`packages/runtime-tags/src/html/dynamic-tag.ts:146` | 2026-07-15 | impact:med | effort:high

The string-renderer branch of HTML `_dynamic_tag` never assigns `result` (the inline TODO calls this out), and the DOM branch creates the element but never sends its getter through the branch's `AccessorProp.TagVariable` callback (`dom/control-flow.ts:547`). Verified by adding `<${input.show && "div"}/el/><script>el().textContent = "set"</script>` to the `dynamic-tag-var` fixture: both CSR and SSR-resume left the `<div>` empty because `el` was never initialized, so its dependent effect never ran. Static native tags instead create a registered `_el(...)` getter; the dynamic-native path needs the equivalent getter tied to the created/resumed branch element in both runtimes.

CSR is a runtime-only fix: push `() => childScope[AccessorProp.StartNode]` through the child scope's `TagVariable` callback right after the native branch is created in `dom/control-flow.ts`. SSR-resume is the hard part and needs the translator, not just the runtime. The native branch scope carries no state, so `_var`'s `writeScopePassive` `#TagVariable` slot is never serialized (the server fill contains only the parent scope); a dynamic _component_ tag var only resumes because its scope serializes anyway, carrying `{ "#TagVariable": _(1, "…/var") }`. So on resume there is no callback to invoke from the `BranchEndNativeTag` marker handler (`dom/resume.ts:232`). Runtime-only escapes don't exist: `_dynamic_tag` is never told a tag var is present (the compiler emits a separate `_var`), and forcing every tag var to serialize its scope actively regresses payload size for all of them. Delivering the getter across the dynamic boundary requires the compiler to serialize/reconstruct an element reference (a client-side `_el(id, accessor)` for the resumed branch element) — hence effort:high spanning compiler + runtime + serialization.

## Make conflicting load triggers for one shared asset deterministic

`packages/runtime-tags/src/html/assets.ts:135` | 2026-07-15 | impact:med | effort:med

`addAsset` deduplicates solely by asset id and silently ignores the triggers on every later registration. The existing `lazy-tag-shared-parent` shape proves separate parent modules can wrap the same child asset independently; if one imports it with `visible` and another with `idle`/an event, whichever parent renders first becomes the only trigger and the other condition can never load the shared module. Detect incompatible registrations before the first flush and combine their triggers, or emit a compile/debug error as the existing TODO suggests; do not let render order choose behavior.

## Boundary-body effects targeting the adopted try branch are dropped

`packages/runtime-tags/src/dom/update-fragment.ts:126` | 2026-07-17 | impact:med | effort:med

`applyBoundaryBody`'s `Adopt` maps the body's patch branch id onto the live
`<try>` branch in the patch scope space, but never records the pairing, so a
body frame's effect entry that names that id — a handler on content sitting
directly in the try body rather than inside a nested branch, e.g.
`<try><@placeholder/>…<button onClick…/>…<await|v|=p>${v}</await></try>` —
fails `pairs.get(patchScopes[id])` in `createUpdate` (dom/update.ts) and is
silently dropped: the button renders but its click does nothing. Verified via
a temporary persisted fixture; the wire carried `[[2,0,"Mnavigate","<button>…",
[2,3]],"template.marko_1 2"]` and the effect for scope 2 never attached.
Pairing alone is not enough: the effect gate also requires
`live[Gen] >= applyGen`, and the adopted branch keeps its resume-time
generation. `applyBoundaryBody` (or `Adopt`) should both pair the adopted
branch and mark it effect-eligible for that apply, since all of its bound
nodes are new.

## Refresh unaffected checkedValue members' controlled value on the first patch

`packages/runtime-tags/src/dom/update-merges.ts` (`_update_input_checkedValue`) | 2026-07-17 | impact:low | effort:low

The gated checkedValue assert refreshes `ControlledValue:<accessor>` only when
it asserts. Its first-ever patch falls back to comparing this member's
`defaultChecked` against the captured list, so a navigation whose changed list
does not change THIS member's checked state (e.g. `["a","b"]` -> `["a","c"]`
seen from the member with value `"a"`) skips the assert and leaves that
member's resumed `ControlledValue` stale until some later capture differs.
A change handler firing on that member before then computes `updateList`
against the pre-navigation list ( `["b"]` instead of `["c"]` above). Later
navigations are safe: the skip still records the applied capture
(`PatchApplied:`/`S` key), so subsequent comparisons use it. Fix idea: on the
first patch, also treat a missing record with a present `ControlledValue`
whose normalized form differs from the capture as changed.

## Ecommerce demo "wrong product id after navigation" is not reproducible in the applier

`packages/runtime-tags/src/__tests__/fixtures/persisted-update-controllable-resubmit` | 2026-07-17 | impact:med | effort:med

The reported demo failure (submit after an item A -> item B same-route
navigation sees A's id) does not reproduce against the update applier: the
fixture pairs a bound (`value:Number:=`) quantity `<let>`, a request-derived
hidden `itemId`, an optimistic mirror, and an `onSubmit` handler recording the
scope values it read, both at the route root and across a child-tag boundary
(`tags/order-form.marko`). Under both the pre-Option-C and gated appliers the
hidden input's value attribute, the handler-read scope value, and the mirror
all see B after the patch. The defect is therefore most likely in the app or
in @marko/run's form-submission negotiation (e.g. what request/body the shell
re-sends or how a POST response patch is applied), which lives outside this
repo; investigate there with this fixture as the known-good applier baseline.
