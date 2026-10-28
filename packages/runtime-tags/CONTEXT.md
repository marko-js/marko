# Runtime Tags (Marko 6)

Marko 6 compiles `.marko` templates into one dependency graph, then lowers it
to streaming HTML and resume state or fine-grained DOM code.

This is the canonical implementation glossary. _Avoid_ lists name misleading
synonyms, not exact APIs, platform types, or legacy options. Record a rename
in the entry's _Avoid_ when it is agreed. See
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

**Readers**:
What reads a value through its aliases and derives links: its _reason_, and
each read the value reaches, marked if before a call site hands it to a callee,
and if as a dynamic tag's input rather than its name. An alias
(`<const/b=a/>`) is no read, so `a`'s readers include `b`'s; a computing init
(`<const/b=a + 1/>`) is a read of `a`, and the walk goes on into `b`'s readers.
A call site maps the callee's param reasons through the expressions it passes,
to their sources (a passed `<let>` gives a state reason).
_Avoid_: landing read

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

**Initial value**:
A `<let>`'s value as its scope is created, from its `value=` (`initialValue`);
an uncontrolled `<let>` takes it once. In a patch template, the server renders
it where its init reads only other `<let>`s at theirs and no patch fills it or
state its init reads; otherwise client code computes it.
_Avoid_: first value

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

**Join**:
Work a signal runs again when any input it reads changes: an intersection's
(`_or`), or any signal a fill or a `$global` key re-runs, one over a single
closure included (`_fill_join`, `$global` join). Say intersection where the
thing is one.

**Signal**:
The translator's bucket of client work for a section, keyed by setup, one
binding, or an intersection. Its lowered runtime function receives a scope and
optional value; helpers such as `_const`, `_let`, and `_or` add storage, dirty
checking, or coordination.
_Avoid_: observable, reactive value

**Effect**:
Client work queued after pending renders, including `<script>`, `<lifecycle>`,
handler attachment, and controllable setup. Resumable effects register and
queue per scope through `_script`. An effect runs once the renders of its run
are done, so the DOM it reads is final, its child scopes' included. Nothing
about their order is guaranteed (between a scope and the scope rendering it,
side by side, within one scope, on mount or on update), so no code holds one.
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
per-call guards.
At a call site the guard is one runtime value for plain and patch templates:
two bits per param reason group, client renders and server contributes; a
patch template reads the pair as where the group updates from.
_Avoid_: serialization flag, serialized value, ownership mask as a second value

**Param reason group**:
A param set a template's call sites report as two bits (`paramReasonGroups`),
built from what each write reason leaves conditional. The list is the
template's interface to its callers, fixed at analyze exit.
A patch template adds a group for each question its output asks of where
existing sources update from: fills, writes, joins, var wiring
(`ensurePatchReasonGroups`), and call sites' param group sources
(`addKnownTagReasons`).

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
Applying scope flushes, adopting server-rendered nodes, creating branches, and
running effects without an initial client rerender.
_Avoid_: hydrate, hydration, replay

**Created scope**:
A scope a patch creates from a shell where the live page has none, seeded by
its fills and set up by registered ids (`inits…!effects…`) in place of a
renderer's setup; a live scope the patch writes into is _paired_. Content the
page registers creates from that renderer's markup with the shell's ids and
no params, or from the renderer alone where it has no setup or params. A
`@catch` creates from its registered renderer, whose setup runs: the patch
stands in for its error, whose effects mount from their entries. The same
word as a client render's `createBranch`; the patch is just who creates.
_Avoid_: construct, rebuild

**Resume payload**:
Server-emitted JavaScript data and scope flushes for required scope slots,
shared values, and registrations. It is neither JSON nor every server value.
_Avoid_: component state, JSON payload

**Scope flush**:
A resume-payload batch of scope ids and partial properties, merged into or
adopted as live scopes.
_Avoid_: fill, partial, payload chunk

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
A body a patch may create, as its id with setup ids (setup reading nothing a
patch writes, or all of a `@catch`'s, which no patch pairs), walks and markup
(`id inits…!effects…;walks;template`): registered by the server module at
load and shipped in the first flush that creates from it, so the client
creates the body without bundling its template. Its setup ids lead with
those of each scope its markup composes, a known child's (a template's
`$setup` export), each addressed by its hop (`accessor>id`, after a `>` per
owner up), which sets that scope's owner; an id-less hop (`>a>`) sets only
that. Composed scopes' effects mount with the created scope's.
The server builds those ids (`_shell_setup`) and writes the shell's marker from
them (`_shell_marker`).
_Avoid_: skeleton, template string

**Patch request kind**:
What `patchRequestKind(headers, url)` reads a `~`-marked request as
(`PatchRequestKind`, the same strings in every build): this build's patch
(`Patch`), which `template.patch` renders, or another build's (`Stale`), which
the server refuses with a 412 before rendering. A request without the marker
or the header is a document's.

**Held-shell token**:
The request's `x-marko-patch` value after the build id: the shells the page
already holds, as the last response's closing token named them, so a flush
ships only new ones. It may forget shells (they ship again), never claim one
the page lacks. It indexes the shells its server process has loaded, so every
process serving one client loads the same templates (a build contract met by
importing routes statically, as Marko Run does); a template loaded later changes
the index, so earlier tokens read as holding nothing and their shells ship again.
_Avoid_: shell cache, shell manifest

**Setup envelope**:
A patch's `PatchKey.Setup` and `PatchKey.SetupValues` entries: what a created
scope gets in place of its renderer's setup (seeds, bindings, init ids). It
applies only to a scope its flush created; a paired scope ignores it. Its
writes, bindings and init ids apply at once, ahead of the scope's child
scopes, which may read them; its values follow the scope's child entries on the
wire, as their renders may read what those write. A write never sets a slot a
value's signal sets, which would then skip its renders: a `<let>` whose renders
read members seeds the written ones in that one value too. Where its group
mixes, a written join the scope inits rides the scope's own `PatchKey.Init`
entry, created or paired.
_Avoid_: seed block, init payload

**Held flush**:
A flush waiting for the lazy modules it writes into to register
(`patches/ready`, `holdFlush`); later flushes of the response queue behind it, and a
rejected one is discarded.

**Known child**:
A section its callers pass params to (`isKnownChild`): a template's root, or a
`<define>` body its direct calls render. Patches handle both alike: the
params' groups gate writes in the body and the sections inside it, a flush
writes its scope, and a created one seeds from its setup envelope.
_Avoid_: called body, define root, root-like body

**Structural param**:
A known child's param a branch expression derives from (`structuralParams`),
where it is declared or in a child it is passed to: state in the call site's
expressions (those at the child's tag) hands that structure to the client at
run time.
_Avoid_: upstream of structure, selector

**Param-selected structure**:
A branch around a section (inclusive), or content a call site passes, that a
known child's params alone select (`getParamSelectedStructure`): a caller
passing client state for them hands it to the client at run time, so a read
inside fills only where that caller's group bits say (a fill's `structure`
condition).
_Avoid_: rebuild, rebuilt structure

**Stateful structure**:
A branch body whose branch expression has a state reason (its `BranchExpr`
slot) — state sources, no `$global`, param sources a patch fills —
derived from its branch expression (`isStatefulBranch`), never stored; or a
content or `<define>` body every consumer renders with client state. Resumed
code re-renders it, so patch renders skip it and flushes omit its entry. A
body only some consumer renders so (`getStatefulConsumers`) is patch-written
structure whose instances each consumer sets at render: a call by its mask, a
dynamic tag or stateful chain by rendering it unpatched.
_Avoid_: state-selected, client-owned

**Updates from**:
Which side a param group at a call site takes its values from, as the runtime
reads it from the group's two bits (`getUpdatesFrom`: `UpdatesFrom.Client`
renders, `UpdatesFrom.Server` contributes). The client bit is set by
client state, or for a server value the client derives: a call input its
callee reads alone (`isClientDerivedParam`) where the fills of what the input reads
ship, which then reach it and no hole is written. Only the group of a
known child's param is decided per call, at render, and only code in that body
reads it (`isCallerParamAt`); analysis knows only sources (state, params,
`$global`), so translate code names those and never decides where a group
updates from.
_Avoid_: ownership, owned (owner is the owner scope); server-/client- as a
compile-time fact

**Hole / filled / unfilled**:
A read a patch keeps current by writing its value at the site is a _hole_ the
patch _fills_; the html gates say which side acts on a param group:
`_filled_guard` (a patch fills it: server-sourced, or constant where a created
scope needs the seed), `_unfilled_if` (no patch fills it: the group is
client-sourced, or the read sits in unpatched structure, unless the value is a `<define>`
param a call passes as a module read from structure the client renders, which
the call's forwards there push first: `derivesConstantParam`). Translate derives reads no patch can
fill (`PatchWrite.unfillable`), never the gate.
_Avoid_: server-side/client-side value, owned read

**Unpatched structure**:
Structure patch renders skip and so never fill: stateful structure, a
branch or loop whose expression derives from a group updating from the client
(not an `<await>` body: its promise settles into the branch its owner made),
a dynamic tag site a patch never pairs, a `@catch` (one reading its error is
written once, by the patch creating it). The html writer tracks it at render
as context (`withUnpatched`, `inUnpatched`) because a child template cannot
see how its parent reached it; the static cases are where `patchWrites` fails.
_Avoid_: client-owned structure, client-selected

**Caught try**:
A `<try>` whose `@catch` took its body's place, in the document, on a client
error or in a patch. Like a `<let>`, it is page state: it stays caught until the
try itself is created anew. A patch never replaces its catch, which follows the
page through fills as unpatched structure does; one rendering its body rejects,
so the browser loads the URL as a document.
_Avoid_: recovered try

**Structural-or-global param**:
A structural param, or one whose reads mix with `$global` — the value
never leaves through an expression channel, so whoever renders must supply
it. Translate derives which groups a patch must fill from this fact. Where a
call site hands the param to the client, a changed `$global` key re-runs the
join there instead: the page ships the value and subscribes the scope.
_Avoid_: server-required param

**`$global` join**:
A signal's client work that reads `$global` as it renders (each expression
records the deepest member it reads, as a property alias would), split into a
function the signal calls. A patch build registers it with the members it
reads, each as its keys from `$global` (`_fill_global_join`), so a patch
changing one re-runs only that work, once, on each scope that ran it. Work
reading under the same keys shares one join; a script keeps its own, so it
runs again only when what it reads changes. A loop's rows reading one share a
single subscription on the loop's owner (`_fill_global_for`, or
`_fill_global_path_for` for a member path), which walks the rows on a change,
so a row the client creates joins none.
_Avoid_: part, global part

**Stable**:
A binding or expression with no sources, so fixed for its scope's lifetime: a
constant, an `<id>`, a `<define>`'s renderer. A patch write of a stable value
only seeds a created scope.

**Kept structure**:
A loop or branch whose expression is stable (its group's mask is `0`), outside
structure a flush creates: its scopes stay, so
the patch renders its body as kept (`withKeptBranchId`, not creatable), ships
no shell, and a kept branch with nothing filled ships no entry. Outside such
structure an `<await>` body whose promise the client settles, or that always
pairs, renders kept too (`keptBranch`): no flush creates it.
_Avoid_: static branch, frozen rows

**Branch path**:
The root section and every section below it crossing no dropped content and
no boundary content reading no params: a `@placeholder`, or a `@catch` reading
none of its error (`enclosing.branchPath`). Outside stateful structure, its text
and attr holes emit direct patch writes (`patchWrites`), a `@catch`'s into the
scope its flush creates.
_Avoid_: capture path, patch section

**Patch fill**:
A value a patch writes into a hole is a _fill_. A _patch fill_ is a
server-sourced binding whose reads intersect client state, so patches refresh
it through a registered fill signal. A _join fill_ is a known child's input read by a join whose other
inputs a caller may pass client state: the section owning the join
registers it on the join alone (`_fill_join`), and writes it only while
another input is client-sourced (otherwise the value is a write). A written
join takes them where each member its patch ships is a template input only it
calls for, its scopes reached by hops; otherwise
the scope inits it, a member only it reads rides its slot write where another
member is client-sourced (a created scope's seed otherwise), and one filled
for other reads registers on it with a dispatch that runs nothing. No template
fills its value into another's param signal.
Assigned state registers through its own declaration (`_fill_let`), which
reaches every join that reads it, so no join registers it again.
_Avoid_: deliver/delivery, forwarder

**Withheld content**:
Content a consumer renders instead of the patch: one the client owns (a tag
client state names, unpatched structure) skips it, and the flush reports the
content (`_content_withhold`). Content a known child renders from its state,
where plain renders it nowhere on the client, or that client state holds, is
_kept content_ (`keepsContent`): it creates from its shell, never by registration,
and a flush renders its holes once per owner under the _withheld entry_
(`PatchWithheld:<id>`), which the client applies to each live instance in the
owner's `WithheldScopes:<id>` set (`_content`'s `elide` 2). It registers under its
_kept shell id_ (`keptShellId`, `~<id>`), which no module registration shares: a
patch sends it bound to its owner by that id, and an instance the client creates
from the shell joins the set and takes the entry the owner last took.

**Written join**:
A join of two or more params, one a caller passes, whose every read the patch
leaves to a hole it writes or an effect its entry re-runs, through any `<const>`
of it (`isPatchWrittenJoin`); not where each call of a `<define>` body passes a
member client state, unless a member reads another join. The patch writes it
where its group is server-sourced on the instance; where the group mixes, its
members' join fills re-run it, or, where some member has none (one below the
template root or reached over subscribers, a member of two, one filled for
other reads), the patch names the join's init on the scope, fresh or existing
(`_patch_join_init`), and no member's fill re-runs it.

**Unpatched key**:
A member's fill key with the `/unpatched` suffix (`getPatchFillKey`), as
withheld content's is `/content`. Where the client may own a written join's
structure, the member ships under it in place of its fill, slot write or
seed. Its run re-runs the join, and it registers wherever the fill key does.
A value a fill ships for other reads too, passed to a call in param-selected
structure of its own (`dispatchesUnpatchedAt`), reaches that call only under
it: a patch keeps the callee per instance where it renders the structure.

**Effect write / capture write**:
Wire channels for values a patch sends that no fill consumes: an accessor write
plus effect re-run, or a bare accessor write for registered-function
captures. The re-run entry also mounts the effect in a scope its flush created,
whose shell names no effect reading what a patch writes (a created `@catch`'s
names them, and gets no entry); an effect the created scope's own render
queues ships as a `QueuedEffect`, which only re-runs it.

**Marked write / marked bind**:
A write (`PatchKey.MarkedWrite`) or bind (`PatchKey.MarkedBind`) of a value an
entry depends on. It sets the slot and, only when the value changed, records the
response in the slot's _change mark_ (`AccessorPrefix.PatchChanged` + accessor),
which effect and init entries read (`depChanged`). A marked bind binds through
the `Bind` patcher, which keeps one function per owner and registration
(`AccessorPrefix.BoundFn` + id, on the owner scope, filled as resume revives
one, on pages linking `patches/marked-bind` or `patches/live-bind`), so it marks
only a new function. Here, as everywhere in the patch protocol, _bind_ means a
registration attached to its owner scope (an owner-bound entry), not main's
two-way binding (`:=`, a change handler binding a control). A plain write
(`PatchKey.Write`) marks nothing; a created scope's setup writes go plain, since
nothing it holds has run.
_Avoid_: dirty flag, version (a mark names its response)

**Live bind**:
How a patch hands the client a live function, one capturing a value a patch may
write. The slot's bind (`PatchKey.LiveBind` + accessor) or the fill's
(`PatchKey.LiveFill` + fill key) sends the registration's id with owner hops,
never the function: _bind_ here is a registration attached to its owner scope,
as for every owner-bound entry, not main's two-way binding (`:=`). The
registration names its captures (`_bind_resume`), and the client makes a new
function only when one changed in that patch, sharing it across slots by
(owner, id) within a run; the first bind finds the function resume revived. A
function reading client state is the client's, so it never takes one. Rides
`patches/live-bind`, linked only where a holder can receive one.
_Avoid_: live value, identity table, binding (main's `:=`)

**Built object**:
A value an object or array literal builds, one a branch may yield one from
(either arm of `?:`, either side of `||` or `??`, the right of `&&`), or the
input a call builds: its readers depend on its sources, not its identity. A call
records the built objects it passes (`_patch_live`), so a child's entries name
their sources.
_Avoid_: fresh object, identity-less value

**Patch pairing**:
How a patch treats a dynamic tag (`PatchPairing`, `renderDynamicTag`): `Render`
pairs the live branch and renders the tag; `Skip` leaves it to the resumed page,
whose renderer is the client's; `Keep` pairs it keeping the live branch, so no
entry ships; `Setup` renders it into the setup only a created scope applies.

**Param group sources**:
Per reason group at a templated call site (`getParamGroupSources`): the
call site's sources for the group, function-body reads included, and
whether it covers a structural-or-global param. Translate composes
group masks and admission from it.
_Avoid_: group feeds, group ownership, provenance, feed/feeder for a source

**Owner-bound entry / bind reference**:
How a flush ships a registration bound to a scope. A value that is one,
bound to the site's scope or an owner up its chain, rides an _owner-bound
entry_ (its id and hops up) that resolves to the registered value as it
applies. Any other is a _bind reference_ `_(path, id)`: the scope's links
down from the page root (loop items by index, checked by key), walked on
use; content resolves to its renderer. Both ride `patches/bind`, which the
module registering a scope-bound value imports.
_Avoid_: bind table, bind source, bind 0

**Patch-keyed node**:
A dom node the writer emits a patch entry keyed on, so its marker or scope ref
is written whatever its reason says: a node rendering a value a flush
writes (`rendersValue`, `writesPatchHole`), a known tag's child scope ref
(`isKnownChildNode`, `patchWrites`), or the marker of loop rows a flush
pairs (`getLoopBody`, `patchesBranchesAt`). Analyze records what the template
renders there; the patch module concludes once per analysis which slots are keyed
(`isPatchKeyedSlot`), which forces their writes (`getSlotWriteReason`). Being
keyed is no reason, so it never makes a template a root, wires a tag variable,
or registers a subscriber.
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
or `always` reason). Everything below a root arrives through its imports. An
entry that initializes the runtime imports every root. A param-only reason is
never a root's own (the parent passing it client state already bundles the
template).
A patch page always initializes, so a registration its payload names always
resolves.
_Avoid_: linked page, unlinked page, scriptless page (as a bundling state)
