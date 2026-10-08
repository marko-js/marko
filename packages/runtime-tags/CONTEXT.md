# Runtime Tags (Marko 6)

Marko 6 compiles `.marko` templates into one dependency graph, then lowers it
to streaming HTML and resume state or fine-grained DOM code.

This is the canonical implementation glossary. _Avoid_ lists name misleading
synonyms, not exact APIs, platform types, or legacy options. See
[RESUMABILITY.md](./RESUMABILITY.md) for the architecture and code map.

## Compiler model

**Section**:
A compile-time analysis and codegen unit formed from a template program or
non-inlined tag body. Sections own bindings and signals; scopes are their live
executions.
_Avoid_: fragment, block, component

**Binding**:
The compiler record for a template value or property, including its reads,
assignments, aliases, closures, hoists, consumers, and sources. Only retained
runtime values occupy accessor-addressed scope slots. Distinct from Babel's
lexical `Binding`.
_Avoid_: dependency, runtime container

**Node binding**:
The dom binding for the node client code reaches a tag at (`extra.nodeBinding`):
its element, a control-flow tag's marker, or an only child's parent element.
Its accessor is the runtime's `nodeAccessor`; the tag's other scope slots
(branch scopes, conditional renderer) are keyed by a prefix plus it.
_Avoid_: node ref

**Referenced bindings**:
The canonical zero/one/many collection of bindings that schedule an expression
or function. Constants, DOM getters, and safe lazy reads are tracked separately.
_Avoid_: refs, dependencies

**Sources**:
The transitive roots that can make a binding browser-relevant, split into
non-parameter `state` and template- or body-parameter `param` roots. `state`
does not mean only `<let>` values.
_Avoid_: dependencies, referenced bindings, provenance

**Derives from**:
What a binding's value is computed from: the expressions it reads
(`derivedFrom`, whose reverse is an expression's `derives`) and, for an
alias, the binding it aliases (`aliasOf`), summarized by kind as its
_sources_.
_Avoid_: upstream, downstream, feed, feeder

**Branch expression**:
The expression a branch section is rendered by: an `<if>` condition, a
`<for>` collection, or a dynamic tag's renderer (`branchExpr`).
_Avoid_: upstream, selection (a keyed `<for>` row selector aside)

**Optional branch**:
A branch section its branch expression's value can leave unrendered: an `<if>` body, or
a `<for>` body (rendered once per item). An `<await>` or `<try>` body renders
for every value its branch expression takes; an error renders the catch content instead.
_Avoid_: reselected, conditional branch

**Closure**:
A binding read by another section, allowing its signal to notify live child
scopes. This names a binding relationship, not a JavaScript function closure.
_Avoid_: captured variable, hoist

**Local closure**:
An attribute tag `<for>` param read from content the loop creates. The loop
passes it when it creates that content, which holds it as a param that the
content's call site supplies and nested sections read as a closure.
_Avoid_: loop local holder

**Tag variable**:
The value a tag returns, named after `/` (`<let/count=0>`, `<child/api>`). It
is a render-time value of the scope that declares it, so module scope
(`static`, `export`) never sees it.
_Avoid_: ref

**Module read**:
A read of an import binding (`styles.box`, `logo`) and its member names, which
the module can evaluate once its imports load: so a template may write it into
markup built when the module loads. `server`/`client` imports, which exist in
one output only, and destructured tag variables are not module reads.
_Avoid_: static value, constant import

**Style import**:
A module read of a stylesheet module: an import whose source names one (`.css`,
`.scss`, `.css.ts`, …, matched by path as `@marko/vite` keeps them), or a
`<style/name>` tag variable (a namespace import of the tag's own module). Its
reads are class name strings, so a class built from them renders like a literal.
_Avoid_: CSS module (vanilla-extract and plain stylesheets match too)

**Hoist**:
A tag-variable read before its declaring tag within the enclosing body, or from
outside that body. It lowers through a getter and may cross sections; it is not
JavaScript declaration hoisting.
_Avoid_: closure

**Intersection**:
A canonical set of bindings whose shared work waits for every member in the
current render generation. Remaining intersections lower through `_or`.
_Avoid_: dependency array

**Signal**:
The translator's bucket of client work for a section, keyed by setup, one
binding, or an intersection. Its lowered runtime function receives a scope and
optional value; helpers such as `_const`, `_let`, and `_or` add storage, dirty
checking, or coordination.
_Avoid_: observable, reactive value

**Effect**:
Client work queued after pending renders, including `<script>`, `<lifecycle>`,
handler attachment, and controllable setup. Resumable effects register and
queue per scope through `_script`.
_Avoid_: lifecycle hook, arbitrary JavaScript side effect

**Reason**:
The `Sources` whose changes lead client code that runs after resume to read a
section's scope, a scope property, a marker, or a registered value: `always`
for reads on resume (effects, handlers), state for reads a client change
starts, params for reads only a caller's change starts. Unset means nothing
reads it. Analysis records reasons; translate concludes from them.
_Avoid_: serialization flag, demand

**Write reason**:
Translate's conclusion from a slot's reason (`getWriteGuard`): whether
and under which guard the server writes it.
`always` and state reasons write unconditionally; param-only ones produce
per-call guards. At a call site the guard is one runtime value for plain and
patch templates: two bits per param reason group, client contributes and
server contributes; a patch template reads the pair as the group's ownership.
_Avoid_: serialization flag, serialized value, ownership mask as a second value

**Slot**:
What analysis records, with its reason, for one thing client code may read
after resume: either a place in a scope the server writes at an _accessor_ (a
value, a change handler, an owner link), or a fact a guard decides on (a
control-flow tag's condition changing, a branch or the scope itself resuming, a
known tag's param group). Owned by a binding or a section, found by owner and
kind.
_Avoid_: serialize key, prop key

## DOM runtime

**Scope**:
A section's runtime record: a plain object of value slots and reserved runtime
state keyed by accessors. Not a lexical scope, component instance, or `$global`.
_Avoid_: component state, context

**Accessor**:
A scope property's key; the property itself is a _scope slot_. Debug builds use
readable strings and optimized builds use compact encodings from the lockstep
`src/common/constants/*[.debug].ts` pairs.
_Avoid_: slot (the property it names), value

**Generation**:
`Scope[AccessorProp.Gen]`, the run a scope belongs to, compared against the
`runId` counter in `dom/queue.ts` (which starts at 2). Four states: `0`
destroyed, `1` resumed from SSR, `=== runId` created during this run, and
`> 0 && < runId` live from an earlier run. The distinction decides whether a
write lands in place or queues a render — a `<let>` write into a same-run scope
is applied directly, while an earlier-run scope schedules one — and destroyed
scopes are skipped entirely.
_Avoid_: version, revision

**Owner**:
The scope reached through the owner accessor for values captured from enclosing
or invoking content. Ownership is separate from DOM nesting and `parentBranch`.
_Avoid_: parent scope, DOM parent

**Content**:
Renderable children passed to a tag. The Tags API calls this _content_; syntax
and ASTs say _body_, while the Class API says `renderBody`.
_Avoid_: children, renderBody, body outside syntax or AST discussion

**Client renderer (`Renderer`)**:
A descriptor for creating a branch, carrying clone/setup/parameter work and
optional owner or closure data. Its static shape starts as a template and walk
string.
_Avoid_: branch, component instance, server renderer

**Server renderer (`ServerRenderer`)**:
A generated function that writes a section or template to the HTML stream. It
does not create a client branch.
_Avoid_: client renderer, branch

**Branch**:
A specialized scope for one live application of a client renderer to a DOM
range. It owns the range and joins a branch tree for ordering and cleanup.
_Avoid_: fragment, component instance, renderer

**Controllable**:
A native element whose value, checked, or open state Marko synchronizes with
bound state (`dom/controllable.ts`). Controllable is the capability; the
`Controlled*` accessors and `ControlledType` are the per-element state, which
is `ControlledType.None` until a change handler binds it. A change handler
intercepts the element's own change (typing, a `<details>` toggling): it receives
the new value, and the element then shows only what the bound state holds.
_Avoid_: controlled component

**Walk string**:
A compact program that locates nodes and ranges while cloning a fresh branch.

## Streaming and resume

**Chunk**:
A node in the HTML writer's tree of buffered output, not a bundle chunk or Node
stream buffer.

**Boundary**:
The writer's coordinator for a render and for each `<try>` body in it: it
tracks async work, flushes chunks, and aborts with the boundary it is in.

**Resume**:
Filling scopes, adopting server-rendered nodes, creating branches, and running
effects without an initial client rerender.
_Avoid_: hydrate, hydration, replay

**Created scope**:
A scope a patch creates from a shell where the live page has none, seeded by
its fills and set up by registered ids (`inits…!effects…`) in place of a
renderer's setup; a live scope the patch writes into is _paired_. The same
word as a client render's `createBranch`; the patch is just who creates.
_Avoid_: construct, rebuild

**Resume payload**:
Server-emitted JavaScript data and fill operations for required scope slots,
shared values, and registrations. It is neither JSON nor every server value.
_Avoid_: component state, JSON payload

**Fill**:
A resume-payload batch of scope ids and partial properties, merged into or
adopted as live scopes.
_Avoid_: partial, payload chunk

**Resume comment**:
An SSR HTML comment associating existing nodes or ranges with scopes and
encoding owners, branches, keys, or await state.
_Avoid_: hydration marker

**Registration**:
Associating executable code with a stable `_resume` id so SSR need not serialize
its source. It retains client code only when SSR emits the id.
_Avoid_: serialization

**In-order content**:
Content the main stream writes where it renders, holding back everything after
it until it resolves (an `<await>` with no `@placeholder` of its own). Every
effect waits until none is pending, so the client changes nothing while it
streams.
_Avoid_: blocking content

**Reorder**:
Content rendered behind a `@placeholder` and swapped in by the client when it
resolves. Arriving once effects have run, it may find its owners changed.
_Avoid_: out-of-band content

**Ready stream**:
A `readyId`-keyed serialization channel that withholds lazy resume data until
its module registers and earlier data drains.
_Avoid_: async HTML stream

## Patch protocol

Analyze names observations in template terms; translate names conclusions
(ownership, wire channels, masks) and keeps them out of shared metadata.

**Patch render**:
A server rerender of a patch page (`template.patch`), streamed as flushes the
live page applies by refreshing values and navigating structure, without a
full page render.
_Avoid_: rerender, hydration update

**Flush**:
One payload of a patch render (a sync flush, a settle, a lazy module's
ready data): the shells it ships, then its tree of patches, applied as a
unit: the flush commit check accepts or rejects it whole. The same word as a
normal render's flush.
_Avoid_: frame

**Patch**:
One scope's part of a flush: the fills it writes into the scope's holes and
the structural entries it navigates by (a branch, a loop, a child, a setup
envelope), keyed by the accessors resume uses and applied to the live scope
(`patchScope`). A flush's patches nest under their parent's structural
entries, from the page root's.
_Avoid_: partial

**Shell**:
A body a patch may create, as its id with setup ids, walks and markup
(`id inits…!effects…;walks;template`): registered by the server module at
load and shipped in the first flush that creates from it, so the client
creates the body without bundling its template.
_Avoid_: skeleton, template string

**Held-shell token**:
The request's `x-marko-patch` value after the build id: the shells the page
already holds, as the last response's closing token named them, so a flush
ships only new ones. It may forget shells (they ship again), never claim one
the page lacks.
_Avoid_: shell cache, shell manifest

**Setup envelope**:
A patch's `PatchKey.Setup` entries: what a created scope gets in place of
its renderer's setup (seeds, bindings, init ids). It applies only to a scope
its flush created; a paired scope ignores it.
_Avoid_: seed block, init payload

**Held flush**:
A flush waiting for the lazy modules it writes into to register
(`patch-ready`); later flushes of the response queue behind it, and a
rejected one is discarded.

**Structural param**:
A root param a branch expression derives from (`structuralParams`), in its
template or in a child it is passed to: state in the call site's expressions
(those at the child's tag) hands that structure to the client at run time.
_Avoid_: upstream of structure, selector

**Stateful structure**:
A branch body whose branch expression has a state reason (its `BranchExpr`
slot) — state sources, no `$global`, param sources a patch fills —
derived from its branch expression (`isStatefulBranch`), never stored.
Resumed code re-renders it, so patch renders skip it and flushes omit its
entry.
_Avoid_: state-selected, client-owned

**Ownership**:
Which side feeds a param group at a call site, as the runtime reads it from the
group's two bits (client contributes, server contributes). Only a root param's
group is decided per call, at render; analysis knows only sources (state,
params, `$global`), so translate code names those and never claims ownership.
_Avoid_: server-owned/client-owned as a compile-time fact

**Hole / filled / unfilled**:
A read a patch keeps current by writing its value at the site is a _hole_ the
patch _fills_; the html gates say which side acts on a param group:
`_filled_guard` (a patch fills it: server-owned, or constant where a construct
needs the seed), `_unfilled_if` (no patch fills it: the group is client-sourced,
or the read sits in unpatched structure). Analyze records reads no patch can
fill (`hasUnfillablePatchReads`), never the gate.
_Avoid_: server-side/client-side value, owned read

**Unpatched structure**:
Structure patch renders skip and so never fill: stateful structure, a
branch or loop whose expression derives from a client-owned group, a dynamic tag
site a patch never pairs. The html writer tracks it at render as context
(`withUnpatched`, `inUnpatched`) because a child template cannot see how
its parent reached it; analyze names the static cases `inResumedStructure`.
_Avoid_: client-owned structure, client-selected

**Structural-or-global param**:
A structural param, or one whose reads mix with `$global` — the value
never leaves through an expression channel, so whoever renders must supply
it. Translate derives which groups a patch must fill from this fact. Where a
call site hands the param to the client, a changed `$global` key re-runs the
join there instead: the page ships the value and subscribes the scope.
_Avoid_: server-required param

**Kept structure**:
A loop or branch whose expression derives from nothing request-derived (its
group's mask is `0`), outside structure a flush creates: its scopes stay, so
the patch renders its body as kept (`withKeptBranchId`, not creatable), ships
no shell, and a kept branch with nothing filled ships no entry.
_Avoid_: static branch, frozen rows

**Branch path**:
The root section and every section below it not crossing boundary content
(`isBranchPathSection`). Outside stateful structure, its text and attr
holes emit direct patch writes (`writesPatchIn`).
_Avoid_: capture path, patch section

**Patch fill**:
A value a patch writes into a hole is a _fill_. A _patch fill_ is a
server-sourced binding whose reads intersect client state, so patches refresh
it through a registered fill signal. A _join fill_ is a template input read by a join whose other
inputs a caller may pass client state: the template owning the join
registers it on the join alone (`_fill_join`), and writes it only while
another input is client-sourced (otherwise the value is a write, and a created
scope seeds it). No template fills its value into another's param signal.
Assigned state registers through its own declaration (`_fill_let`), which
reaches every join that reads it, so no join registers it again.
_Avoid_: deliver/delivery, forwarder

**Effect write / capture write**:
Wire channels for refreshable values no fill consumes: an accessor write
plus effect re-run, or a bare accessor write for registered-function
captures.

**Param group sources**:
Per reason group at a templated call site (`getParamGroupSources`): the
call site's sources for the group, function-body reads included, and
whether it covers a structural-or-global param. Translate composes
ownership masks and admission from it.
_Avoid_: group feeds, group ownership, provenance, feed/feeder for a source

**Owner-bound entry / bind reference**:
How a flush ships a registration bound to a scope. A value that is one,
bound to the site's scope or an owner up its chain, rides an _owner-bound
entry_ (its id and hops up) that resolves to the registered value as it
applies. Any other is a _bind reference_ `_(path, id)`: the scope's links
down from the page root (loop items by index, checked by key), walked on
use; content resolves to its renderer. Both ride `patch-bind`, which the
module registering a scope-bound value imports.
_Avoid_: bind table, bind source, bind 0

**Patch-keyed node**:
A dom node the writer emits a patch entry keyed on, so its marker or scope ref
is written whatever its reason says: a node rendering a value a flush
writes (`Binding.renders`, `writesPatchHole`), a known tag's child scope ref
(`isKnownChildNode`, `isPatchRendered`), or the marker of loop rows a flush
pairs (`getLoopBody`, `patchesLoopRows`). Analyze records what the template
renders there; translate concludes which nodes are keyed (`isPatchKeyed`) and
forces their writes (`getSlotWriteReason`). Being keyed is no reason, so it
never makes a template a root, wires a tag variable, or registers a subscriber.
_Avoid_: anchor (a DOM reference node), patch record, paired reason

## Compilation modes

**Output mode**:
`html` emits streaming SSR and resume state; `dom` emits client code.
_Avoid_: entry mode

**Entry mode**:
Unset emits a normal module, `page` a top-level bootstrap, and `load` a lazy
ready notification. Deprecated `output: "hydrate"` aliases a DOM page entry;
Marko 6 still resumes.
_Avoid_: output mode, hydration

**Root**:
A template a page entry imports: the topmost template with client work, or
with resumes the client's own code revives (a registration, or a state-backed
or `always` reason). Everything below a root arrives through its
imports. An entry that initializes the runtime imports every root; a patch page
always initializes, so a registration its payload names always resolves. A
param-only reason is never a root's own (the parent passing it client state
already bundles the template), and being patch-keyed is no reason at all.
_Avoid_: linked page, unlinked page, scriptless page (as a bundling state)
