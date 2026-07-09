# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Dynamic-tag hop swapping to/from a native tag never takes the possession-fragment path

`packages/runtime-tags/src/html/dynamic-tag.ts:62` (the `typeof renderer === "string"` branch) | 2026-07-08 | impact:med | effort:med

The possession-echo fragment path (`state.possessed` / `possessionMiss` /
`takeFragment`) was wired only into the renderer-object branch of
`_dynamic_tag`. The native-tag branch (`typeof renderer === "string"`)
never read `state.possessed`, so a same-route swap into or out of a plain
tag name could only throw ("update diverged") and fall back to a full
navigation, unlike the fine-grained fragment swap a
component-to-component hop gets.

**Resolved** (2026-07-08), pinned by `persisted-update-possession-native`
(both swap directions plus the matched-native fill). Three pieces:

- The possession/fragment decision is hoisted above the renderer-type
  split in `_dynamic_tag`, so a diverging native branch captures a
  fragment exactly like a component branch.
- Inside the capture, the native branch's `BranchEndNativeTag` bracket
  must NOT bake into the markup: its parent-scope token is the anchor
  scope, which the fragment walker would stamp -- self-pairing the patch
  scope and clobbering its matched pairing, replaying the anchor
  section's effects against a bare patch scope (the first draft crashed
  exactly this way). Binding the branch is `applyFragment`'s job, as for
  component branches (whose brackets ride the suppressed outer chunk);
  only the element ref ships, as a plain node marker bound onto the
  stamped branch scope.
- The fixture's matched direction flushed out an adjacent latent gap:
  NOTHING dispatched fills into a native branch (tag-name renderer ids
  register no merge, and the branch's content hop is runtime-created by
  the native wrapper, so no compiled merge line can exist at any level)
  -- a matched native dynamic tag's content was permanently stale across
  persisted navigations. `_update_dynamic` now descends generically when
  no merge is registered: the branch scope's typed captures place via
  `_update_scope` (dynamic attrs on the element) and nested hops recurse
  through their own renderer-id-keyed links. Every legitimate content
  renderer registers a merge (update-generic ones register the bare
  interpreter via `_update_content`), so "no merge" reliably means a
  native branch; the known misfire is a `_load_template` lazy dynamic-tag
  target, whose merge is genuinely unregistered until it loads (see the
  lazy-merge entry).

## `bigint` zero renders as empty string in text/escape helpers

`src/html/content.ts:26` | 2026-07-03 | impact:low | effort:low

Every text/escape helper special-cases numeric zero with `val === 0` so a
falsy-but-renderable `0` yields `"0"` (`_to_text` line 8, `_unescaped` 15,
`_escape` 26, `_escape_script` 38, `_escape_style` 49, `_escape_style_value`
56, `_escape_comment` 67). A `bigint` zero `0n` is falsy and `0n === 0` is
`false`, so `${0n}` renders `""` instead of `"0"` (a non-zero `bigint` such as
`5n` is truthy and renders fine). The DOM runtime `src/dom/dom.ts:48` shares the
pattern, so SSR and CSR agree — it is a consistent wrong value, not a hydration
mismatch. A correct fix must add `|| val === 0n` (loose `== 0` would make `""`
render as `"0"`) to all seven helpers plus `dom/dom.ts`.

Decided not worth fixing: interpolating a `bigint` directly into the DOM text
APIs is not something you would generally display to a user, so it does not
justify the measurable bundle growth across these hot helpers (bundle size is a
feature). Recorded for the record rather than as work to pick up.

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`src/translator/util/optional.ts:103` | 2026-07-03 | impact:med | effort:med

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

## Fresh-render `_or` joins can stall for guarded request-derived members

`packages/runtime-tags/src/translator/util/signals.ts:330` | 2026-07-05 | impact:low | effort:med

Pure-global intersections now fold into setup placement (fixed -- see the
`persisted-update-or-stall` fixture), but the second pathological shape
remains: an intersection whose non-global members are all `_updating()`-
guarded request-derived invocations never completes its join during a
persisted apply (the guarded computes skip, and globals have no value
signal). Harmless when the joined statement's output is a server-captured
hole (the merge places it); a non-captured side effect over such an
intersection would silently not run for fresh branches. Also worth
auditing: the `_or` pending count excludes members by source shape
(`sources.global` without state/param), which under-counts derived
request-derived members that CAN fire through registered update merges.

## Controllable update coverage: `checkedValue`, spread controllables, selection re-sync

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` (controllable capture/merge) | 2026-07-05 | impact:low | effort:med

The controllable attr update slice covers single-value controllables
(`value` on input/select/textarea, `checked`, `open`) via the helper's
`_default` variant, and `<option value=dynamic>` holes now capture/merge
as plain attrs (see the `persisted-update-option-values` fixture). Still
outstanding:

1. `checkedValue` pairs two interdependent values (`checkedValue` +
   `value`); sparse per-key captures can't replay the pair when only one
   key changed, so it is excluded (uncontrolled request-derived
   `checkedValue` is rare -- it is virtually always bound).
2. Controllables reached through a spread (`_attrs`/`_attrs_partial`
   resolve them at runtime) have no static value expression to wrap, so
   nothing captures; a fix needs capture support inside the html `_attrs`
   runtime itself.
3. Selection re-sync: after option values merge, live selectedness is not
   re-derived -- a changed option value under an unchanged select value
   can leave the user-visible selection on the wrong option. Needs a
   design decision on uncontrolled-select semantics (re-match the select's
   default value vs preserve element-identity selection) plus cross-element
   coordination from the option's section to its owning select.
4. Mixed state/global values in spreads and controllables: the `$global`
   demotion re-invokes mixed statements client-side after the update's
   globals assign (`addUpdateGlobalsStatement` at the attr, class/style,
   placeholder, and content/text-content emission sites), but spread
   statements and controllable helpers are not collected -- a
   controllable value or spread attr mixing client state with `$global`
   stays stale across navigations. Spreads need the same runtime-capture
   design as (2); controllables need the `_default` replay wired through
   the globals re-invocation (or their own merge path) so
   default-vs-live semantics survive the re-run.

## Inline walker lookup: branch-start keys can collide with reorder anchor ids (pre-existing)

The inline `WALKER_RUNTIME` registers _every_ prefixed comment in the
per-render lookup keyed by its post-symbol payload (`a[l.slice(s+1)]=e`),
and `REORDER_RUNTIME` resolves its anchors from that same lookup by bare
reorder id (`e.l[a]` / `e.l["^"+a]`, ids from `state.nextReorderId()`,
counting from 1). Branch-start markers flushed with accumulated ids emit
`<!--M_[2-->` (`forBranches`' `flushBranchIds` starts as `branchId + ""`),
whose lookup key is the bare string `"2"` -- branch ids are scope ids,
which share the small-integer space with reorder ids. A branch-start
registered after anchor `<!--M_!2-->` in walk order overwrites the
anchor's entry, so when the reordered tail arrives, the removal walk /
`replaceWith` targets the branch-start comment instead of the anchor.
Reachable in principle on any page combining out-of-order flushing with
multi-branch loop flushes; unconfirmed by a failing test. Discovered
while adding the persisted node-marker continuation form, which hit the
same collision class (bare numeric accessor keys vs reorder ids) and
sidesteps it with a space-leading payload -- the same disambiguation (or
a reserved prefix for reorder keys) would fix this one.

## Optimized register-id allocation races when html/dom compiles run concurrently

`packages/compiler/src/babel-utils/tags.js:294-337` (`getTemplateId`'s
`registered.children` map) and `packages/runtime-tags/src/translator/util/signals.ts:1007-1033`
(`getResumeRegisterId`) | 2026-07-08 | impact:med | effort:high

Root cause of the `test:parallel` id-shift flakiness noted above in
`dx.md` (that entry's "depends on how many templates its worker compiled
first" guess is wrong -- corrected here with a traced mechanism). For a
persisted template, ids like `_script_update("a0", …)`, `_update_signal("a1")`,
`_resume("a2", $update)` are NOT assigned during the once-per-file,
cached `analyze` stage (unlike `registerFunction` in
`packages/runtime-tags/src/translator/visitors/function.ts:197`, which
safely computes its `registerId` once at analyze time and is immune to
this). Instead `getResumeRegisterId` runs live during each output-specific
`translate` pass -- once per entry kind (plain dom/html output, `update`
entry, `persisted` entry, `load`/`page` entry) -- and assigns the next
free slot in `registered.children` (a plain insertion-ordered `Map`,
keyed by `${section.id}${referencedBindingNames}${type}`) to whichever
signal it sees _first_. That map is intentionally shared across every
entry-kind compile of one template (keyed off the identity of the
`optimizeKnownTemplates` array so ids stay consistent within a build --
see `designs/persisted-pages-cost-model.md:148-151`, invariant 3, "Id
consistency across compiles... Everything registry-shared rests on
this"), so whichever compile reaches a given signal first wins the next
id. `designs/persisted-pages-architecture.md`'s "Gotchas for the next
contributor" section tells integrators to share one config object -- but
sharing the object only keeps ids consistent if the entry-kind compiles
that touch it run in a
fixed order; nothing enforces that order when they run concurrently.

Traced with temporary instrumentation on `getTemplateId`: for the
`persisted-update-generic-child` fixture, the uncontended/passing case
registers `template.marko`'s three signals in the order `0_count/var`
(from the `entry:"update"`, `output:"dom"` compile, via
`update-merges.ts`'s `getUpdateVarRegisterId`) → `0_update` (same
update-entry compile, `program/update.ts:118`) → `0` (from the plain
`entry:undefined`, `output:"html"` compile's `writeHTMLResumeStatements`,
`signals.ts:1388`), giving ids a0/a1/a2 -- matching the committed
snapshot. Under `test:parallel` CPU contention the html-output compile's
registration for child `0` wins the race and lands first (a0), shifting
the other two to a1/a2 -- exactly the diff `test:parallel` reports. The
race exists because `packages/runtime-tags/src/__tests__/utils/bundle.ts`
starts `domBuilt` (line 82) and `htmlBuilt` (line 210) concurrently via
rolldown, both awaited only at the end; rolldown's own async module-graph
resolution decides which one's `compiler.compileFileSync` call reaches a
given signal first, and that is not fixed by the source -- it is
perturbed by external scheduler/CPU contention (e.g. `test:parallel`'s
sibling worker processes). These two builds cannot simply be serialized
either: `domBuilt`'s `domEntry.plugin` sentinel `resolveId` handler
awaits `end.promise` (`bundle.ts:537`, inside `entryPlugin()` at
`bundle.ts:507`), which only resolves via `htmlBuilt`'s own `buildEnd`
hook (`bundle.ts:256`, `buildEnd: domEntry.end`) -- confirmed by
attempting `await domBuilt` before creating `htmlBuilt`, which deadlocks
the harness (mutual dependency for lazy asset-chunk discovery).

Verdict: not test-only. The compiler never guarantees "first-request
order" is deterministic; it only guarantees it _if_ every entry-kind
compile of a template runs against a shared config object in a fixed
sequence. `@marko/vite`'s validated production pass (see
designs/persisted-pages-architecture.md's "Gotchas for the next
contributor" section) apparently doesn't trip this today, most likely
because its client/server builds don't race the way this harness's
`domBuilt`/`htmlBuilt` intentionally do (for lazy asset-manifest
discovery) -- but nothing in `@marko/compiler` enforces that. Any
bundler integration, current or future, that parallelizes html/dom/update
compilation of a persisted template for build speed while sharing one
`optimizeKnownTemplates` config is at risk of the same register-id
divergence between its server and client bundles, silently breaking
persisted-page hydration (client registers under an id the server never
serialized under) in a way no serial `npm test` run would surface.

**Harness half fixed** (2026-07-08): the earlier "cannot be serialized"
finding was half right -- awaiting `domBuilt` first deadlocks, but the
dependency is one-directional per PHASE: the dom build's asset entries
already wait on the html build's `buildEnd` (the `"\0"` sentinel in
`entryPlugin`), while only its DIRECT inputs (csr/update entries) raced
the html compiles. `bundle.ts` now gates every importer-less dom-build
resolution on the same promise (`entryPlugin.done`, the
`html-compiles-first` plugin), so all html compiles complete before any
dom-side compile allocates ids -- a deterministic total order, no
throwaway compiles, no cycle (the html build only awaits the dom build
in `renderChunk`, after its own `buildEnd`). One-time snapshot regen:
optimize register ids permuted across persisted fixtures only
(non-persisted fixtures untouched -- they compile no update/persisted
entry kinds); verified stable across repeated `test:parallel` runs.

**Compiler half still open**: nothing in `@marko/compiler` enforces a
compile order for integrators sharing one `optimizeKnownTemplates`
config across concurrent entry-kind compiles. The analyze-stage
pre-registration fix (mirroring `registerFunction`) was scoped during
implementation and is blocked on a real re-architecture: a TIGHT
enumeration of the key union requires the update-merge records
(`addUpdateMerge` et al) which are recorded at translate, not analyze
(the same translate/analyze split the update-generic classification
tripwires already guard) -- and a LOOSE superset enumeration is
unacceptable because unused registrations inflate every later id's
wire bytes. The real fix is moving update-merge recording to analyze,
then enumerating; until then the guarantee integrators get is
documented order ("share one config, compile entry kinds in a fixed
sequence") plus debug-mode resume-registry misses being loud. Detection
gap: production id divergence stays silent.

## `load=` lazy children never receive persisted update merges

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` (lazy custom-tag codegen; no `?update` dispatch emitted) | 2026-07-08 | impact:med | effort:high

Pinned by the `persisted-update-lazy-load` fixture (its snapshot shows the
stale label on purpose; compare its render-csr snapshot for the correct
behavior). A child imported `with { load: "..." }` gets no merge dispatch
in its parent's `?update` entry -- the child's `?update` module is never
imported, so the child's patch fills (its `UpdateHole:` captures ride a
ready-channel frame in the update response) land in a patch scope nothing
ever pairs with a live scope. Result: every server-fed input of a lazy
child is permanently stale across persisted navigations -- before AND
after the lazy module loads (nothing re-dispatches the patch on load, and
later navigations still have no dispatch line). Client state, event
wiring, and the load itself all work. **Resolved** (2026-07-08) with the
third option the original either/or missed: the child's `?update` module
rides the child's own lazy chunks (a bare import in the CSR setup virtual
module and a `Promise.all` leg in the resume load-entry wrapper -- both
persisted-gated, so the parent's update entry imports nothing and the
lazy split survives), registering under a compile-constant register id
both compiles derive (the child's template id + its root section's
`update` key -- computable cross-template because `registered.children`
is a shared keyed map). The parent's dispatch compiles to `_update_load`
(dom/update.ts): registered -> merge directly; still loading -> park the
(patch, live) pair (newest patch per live scope wins -- request-derived
values ride every update, so the latest is complete) and replay from the
shared `flushReadyUpdates` slot in dom/resume.ts, invoked by `ready()`
(resumed pages) and `insertLoaded` (CSR) -- wired via `enableReadyUpdates`
so non-persisted builds carry only the slot. The
`persisted-update-lazy-load` fixture pins both halves (park-then-replay
shows "beta" at first paint; post-load "gamma" dispatches fine-grained
with click state preserved). Note the wire-level halves of this
intersection were already fixed (`html/writer.ts`: document asset loader
scripts are suppressed in update mode and ready-channel frames ride their
own line -- before that fix every navigation on a `load=` page produced
an unparseable frame line and fell back to a full document load).
Remaining narrow edge: `_load_template` (bodiless dynamic-tag lazy
templates) does not route through `_update_load` -- same park mechanics
would apply if that shape meets persisted updates; no fixture exercises
it yet.

## A dynamic-tag possession echo can force a fragment take in a non-fragment-first build

`packages/runtime-tags/src/html/dynamic-tag.ts:241` (`takeFragment`'s `possessionMiss` branch) | 2026-07-08 | impact:med | effort:med

Discovered while wiring the `<try>` pending-boundary half of the
possession echo into `packages/runtime-tags/src/__tests__/main.test.ts`
(F1b: the echo now computes for every persisted build, not only
`"fragments"` ones, matching `@marko/run`'s always-on `have?.()` call --
see `packages/run/src/runtime/persisted.ts:254`). A non-`"fragments"`
persisted build (`persisted: true`) never registers/drops its client
construction graph, so a same-route or cross-route dynamic-tag renderer
change normally replays through the registered renderer
(`_update_dynamic`'s `replay` branch) instead of taking a fragment.
`takeFragment`'s `possessionMiss` check, though, fires regardless of
build mode: once a page has navigated at least once, a stale
`ConditionalRenderer:`/`HOP_SITE_PREFIX` entry on the live scope can
mismatch the next navigation's target renderer, forcing a fragment for a
hop whose construction graph was never dropped. That combination is
apparently untested in this non-`"fragments"` shape -- reproduced via the
`persisted-update-fresh-page` fixture (a `<${input.content}/>` cross-route
swap, `persisted: true`) once its `onNavigate` harness call started
computing `possessed` unconditionally: a later navigation throws
`TypeError: $scope.list is not iterable` inside a lazily-shared tag
variable (`tags/actions.marko`'s `<shared-list>` var) reached through the
forced fragment path. Root cause not isolated further (plausibly the
fragment and replay paths disagree about who owns constructing/wiring a
shared custom-tag variable when only one of them is expected to run for
a non-`"fragments"` build). **Resolved by compile-time gating** (review
follow-up on the same work): the dynamic-tag site id is now emitted only
under `persisted: "fragments"` (`isPersistedFragments()` in
`translator/visitors/tag/dynamic-tag.ts` -- possession fragments exist to
replace the construction graphs only those builds drop; a runtime
`state.fragments` gate was tried first and is WRONG, since that flag is
the per-render cross-route bit and same-route swaps -- the possession
echo's whole purpose -- render with it unset). Plain builds compile no
site id, so a miss can never force a fragment down a path whose replay
machinery was never removed, and plain-build persisted documents drop the
hop-stash bytes entirely. The test-harness echo filter is removed (the
harness now sends the full echo like the run router; the server side owns
ignoring what doesn't apply). The underlying fragment/replay
shared-tag-variable wiring disagreement is now unreachable from any
compiled output, but remains un-diagnosed at the machinery level -- if a
future feature routes fragments into plain builds again, isolate it
first (minimal repro: dynamic-tag fragment apply over a live branch with
a lazily-shared tag variable, no `<try>`).

## Fragment capture drops a `load=` lazy child's server-rendered HTML

`packages/runtime-tags/src/html/assets.ts` (`withLoadAssets` ready-channel chunk) x `html/writer.ts` fragment capture | 2026-07-08 | impact:med | effort:high

Pinned red-shaped by `persisted-update-fragment-lazy` (the gadget was
absent from the fragment-applied DOM) and caught in the wild by the
marko-ecommerce spec-sheet integration (cart->item cross-route fragment
navigations degraded). A `load=` child inside fragment-delivered content
rendered through `withLoadAssets`, whose ready-channel chunk html was not
collapsed into the fragment's captured markup -- and update mode
suppresses the loader script the document path would emit -- so the
fragment showed a hole where the lazy child's SSR html belongs.

**Resolved** (2026-07-08) by carrying the whole document-render contract
onto the fragment path (the same fixture, now green-shaped, is the pin):

- `writeWaitReady` keeps capturing when the current chunk is a fragment
  capture (restores `writeHTML` and inherits the fragment flags exactly
  as `fork` does), so the child's markup bakes into the fragment and its
  scope ids join the entry's stamp list. The sync-inline path also resets
  the parent chunk's node-marker run register: the body carried its own,
  so a same-scope continuation must not span the inlined markers (the
  document path shared this latent hazard).
- The child's resume data rides the SAME frame as its markup as a KEYED
  entry (`["<readyId>", ...fills]`, `writeReady`'s update branch --
  previously a bare ungated frame on its own line). The applier
  (`processBatch` in dom/update.ts) drains it inline when the module is
  already ready -- scope data before the merge dispatch reads it, effects
  through the frame's ordinary pairing-gated path, which runs after the
  fragment walk binds node refs -- and otherwise parks it until `ready()`
  replays it: the data-driven mirror of the document's blocking `.b`
  channel, deps markers included. (The inline-vs-park split matters: an
  earlier parked-only draft regressed `persisted-update-lazy-load`'s
  post-load navigation, because a matched child's patch data landed after
  `_update_load` had already dispatched its merge.)
- The load trigger arrives as data, not a script: `?update` entries
  register the child's trigger-gated setup-module loader under its
  asset/ready id (`_load_ready` in dom/load.ts, recorded through the
  child merge's `loadReady` -- the update entry is the right home because
  it is guaranteed loaded before any frame applies, even for fully
  server-only routes whose main dom module never ships). The applier
  fires it when a batch parks; the loader resolves the same modules the
  document's injected asset script would (child template + `?update`
  merge), then declares `ready`, which replays the parked batch.

Related, fixed earlier: `_update_load` skips dispatch/park when
`patch === live` (fragment subtree scopes are shared objects; a
registered child merge dispatched against one crashes the apply -- the
TypeError the integration surfaced). Still open at this intersection:
the `_load_template` dynamic-tag edge (see the lazy-merge entry above)
applies to fragments too -- no `loadReady` registration exists for that
shape.
