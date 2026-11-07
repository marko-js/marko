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

**Known child**:
A section its callers render in place (`isKnownChild`): a template's root, or
a `<define>` body its direct calls render. Text beside its edges is its
callers'.
_Avoid_: inlined section

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
does not mean only `<let>` values. The record also carries `global` (a `$global`
read) and `always` (read whatever changes).
_Avoid_: dependencies, referenced bindings, provenance

**Derives from**:
What a binding's value is computed from: the expressions it reads
(`derivedFrom`, whose reverse is an expression's `derives`) and, for an
alias, the binding it aliases (`aliasOf`), summarized by kind as its
_sources_.
_Avoid_: upstream, downstream, feed, feeder

**Readers**:
What reads a value through its aliases and derives links: its _reason_, and
each read the value reaches, marked if reached directly rather than through a tag the value is passed to,
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
it where its `value=` reads only `<let>`s created with its scope, at theirs, and
no patch fills it or state that reads; otherwise client code computes it.
_Avoid_: first value, init (for a `<let>`'s value)

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
_Avoid_: dependency array, join

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
`always` and state reasons write unconditionally; param-only ones are
_guarded_ (`isGuardedReason`): each call site guards them.
At a call site the guard is one runtime value for plain and patch templates:
two bits per param reason group, client renders and server contributes; a
patch template reads the pair as where the group updates from.
_Avoid_: serialization flag, serialized value, conditional reason, ownership mask as a second value

**Param reason group**:
A param set a template's call sites report as two bits (`paramReasonGroups`),
built from what each write reason leaves guarded. The list is the
template's interface to its callers, fixed at analyze exit.
A patch template adds a group for each question its output asks of where
existing sources update from: fills, writes, intersections, var wiring
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
_Avoid_: slot (the analysis record; see Slot), value

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

**Content site**:
A dynamic tag rendering content in a template the content is passed to: one
naming it, or naming what holds it as `content`. A deep site is one past a
further call, whose template's root edge follows that call, unseen from the first.
_Avoid_: render target, consumer

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
its fills and set up by registered ids (`setup…!scripts…`) in place of a
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
A resume-payload batch of scope ids and the properties it adds, merged into or
adopted as live scopes.
_Avoid_: fill, partial, payload chunk

**Resume comment**:
An SSR HTML comment associating existing nodes or ranges with scopes and
encoding owners, branches, keys, or await state. `_el_mark`, `_text_mark` and
`_html_mark` write one beside a node; `_resume` names a registration instead.
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
One scope's part of a flush: the fills it supplies for the scope's holes (each a write or a registered
fill) and
the structural entries it navigates by (a branch, a loop, a child, a setup
envelope), keyed by the accessors resume uses and applied to the live scope
(`patchScope`). A flush's patches nest under their parent's structural
entries, from the page root's.
_Avoid_: partial

**Shell**:
A body a patch may create, as its id with setup ids (setup reading nothing a
patch writes, or all of a `@catch`'s, which no patch pairs), walks and markup
(`id setup…!scripts…;walks;template`; kept content's id is followed by its section,
`id|section`): registered by the server module at
load and shipped in the first flush that creates from it, so the client
creates the body without bundling its template. Its setup ids lead with
those of each scope its markup composes, a known child's (a template's
`$setup` export), each addressed by its hop (`accessor>id`, after a `>` per
owner up), which sets that scope's owner; an id-less hop (`>a>`) sets only
that. A closure subscriber has one id: among the setup ids it runs its setup
(its `._`, as `_if_closure`'s), where the client contributes the value; under
the setup envelope's `PatchKey.Subscribers` key with its id it resumes it
(main's resume). Composed scopes' scripts mount with the created scope's.
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

**Render entry**:
A registered signal a patch names for a scope (`_patch_render`, `PatchKey.Render`): a
created scope's setup id where the client contributes its group or settles an
`<await>` from it, or, on any scope
where the group mixes, an entry valued by the writes it reads, which re-renders it
once one changed: a signal's counterpart of a patch's effect entry (`_script`). Its
registration is a main helper's patch twin taking the id (`_or_patch`,
`_if_closure_patch`, `_for_closure_patch`, `_closure_get_patch`), kept with its signal.
_Avoid_: init, init entry, patch render (the server's rerender)

**Setup envelope**:
A patch's `PatchKey.Setup` and `PatchKey.SetupValues` entries: what a created
scope gets in place of its renderer's setup (seeds, bindings, setup ids). It
applies only to a scope its flush created; a paired scope ignores it. Its
writes, bindings and setup ids apply at once, ahead of the scope's child
scopes, which may read them; its values follow the scope's child entries on the
wire, as their renders may read what those write. A write never sets a slot a
value's signal sets, which would then skip its renders: a `<let>` whose renders
read members seeds the written ones in that one value too. Where its group
mixes, a filled intersection the scope renders rides the scope's own
`PatchKey.Render` entry, created or paired.
_Avoid_: seed block, init payload

**Waiting flush**:
A flush waiting for the lazy modules it writes into to register
(`patches/ready`, `waitFlush`); later flushes of the response queue behind it, and a
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
derived from its branch expression (`isStatefulStructure`), never stored; or a
content or `<define>` body every consumer renders with client state. Resumed
code re-renders it, so patch renders skip it and flushes omit its entry. A
body only some consumer renders so (`getStatefulConsumers`) is patched
structure whose instances each consumer sets at render: a call by its mask, a
dynamic tag or stateful chain by rendering it unpatched.
_Avoid_: state-selected, client-owned

**Updates from**:
Which side a param group at a call site takes its values from, as the runtime
reads it from the group's two bits (`getUpdatesFrom`: `UpdatesFrom.Client`
renders, `UpdatesFrom.Server` contributes). The client bit is set by
client state, or for a server value the client derives: a call input its
callee reads alone (`isClientDerivedParam`) where the fills of what the input reads
ship, which then reach it and no hole is filled. Only the group of a
known child's param is decided per call, at render, and only code in that body
reads it (`isCallerParamAt`); analysis knows only sources (state, params,
`$global`), so translate code names those and never decides where a group
updates from.
_Avoid_: ownership, owned (owner is the owner scope); server-/client- as a
compile-time fact

**Hole / filled / unfilled**:
A _hole_ is anywhere client code needs a server value: a site the patch renders
(text, attribute, `<show>` display, branch choice), a scope slot client code
reads (a join's member, an effect's or handler's value), or a `<let>`/`$global`
declaration that reaches every read. A patch _fills_ it: the decision
(`fillsHole`, `isFilledHole`) and the act. It lands by a write where main would
serialize the value (`PatchKey.Write`, `_patch_write`; the same verb as main's
write reason) or by a registered fill (**Patch fill**). The write is the value's
write reason on the instance (`getUnfilledPatchWrite`), a `<define>` body's
params mapped to what its calls pass (`mapBodyParams`), a caller group's client
bit deciding a guarded one (`_client_guard`); always where a `<let>` keeps
content reading it, and where a consumer renders the content reading it as a
client branch (`_client_branch_if`). What the client runs on a filled slot is
named by the scope's entries, each valued by the filled reads it depends on
(`writeReadsEntry`): an effect's, which also mounts it in a scope its flush
created whose shell names no effect reading what a patch fills (one the created
scope's own render queues ships as a `QueuedEffect`, which only re-runs it); a
render, a filled intersection's or an `<if>`/`<for>` closure's; and the walk
over a dynamic closure's subscribed scopes (`PatchSubscribers`). The html gates
say which side acts on a param group:
`_filled_guard` (a patch fills it: server-sourced, or constant where a created
scope needs the seed), `_unfilled_if` (no patch fills it: the group is
client-sourced, or the read sits in unpatched structure, unless the value is a `<define>`
param a call passes as a module read from structure the client renders, which
the call's forwards there push first: `derivesConstantParam`). Translate derives reads no patch can
fill (`PatchWrite.unfillable`), never the gate.
_Avoid_: server-side/client-side value, owned read, effect write, capture
write

**Unpatched structure**:
Structure patch renders skip and so never fill: stateful structure, a
branch or loop whose expression derives from a group updating from the client
(not an `<await>` body: its promise settles into the branch its owner made),
a dynamic tag site a patch never pairs, a `@catch` (one reading its error is
written once, by the patch creating it). The html writer tracks it at render
as context (`withUnpatched`, `inUnpatched`) because a child template cannot
see how its parent reached it; the static cases are where `patchFillsSection` fails.
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
signal there instead: the page ships the value and subscribes the scope.
_Avoid_: server-required param

**`$global` signal**:
A signal's client work that reads `$global` as it renders (each expression
records the deepest member it reads, as a property alias would), split into a
function the signal calls. A patch build registers it with the members it
reads, each as its keys from `$global` (`_fill_global`), so a patch
changing one re-runs only that work, once, on each scope that ran it. Work
reading under the same keys shares one signal; a script keeps its own, so it
runs again only when what it reads changes. A loop's rows reading one share a
single subscription on the loop's owner (`_fill_global_for`, or
`_fill_global_path_for` for a member path), which walks the rows on a change,
so a row the client creates subscribes to none.
_Avoid_: part, global part, `$global` join

**Stable**:
A binding or expression with no sources, so fixed for its scope's lifetime: a
constant, an `<id>`, a `<define>`'s renderer. A fill of a stable value
only seeds a created scope.

**Paired structure**:
A loop or branch whose expression is stable (its group's mask is `0`), outside
structure a flush creates: its scopes stay, so
the patch renders its body as paired (`withPairedBranchId`, not creatable), ships
no shell, and a paired branch with nothing filled ships no entry. Outside such
structure an `<await>` body whose promise the client settles, or that always
pairs, renders paired too (`pairedBranch`): no flush creates it.
_Avoid_: static branch, frozen rows

**Branch path**:
The root section and every section below it crossing no dropped content and
no boundary content reading no params: a `@placeholder`, or a `@catch` reading
none of its error (`enclosing.branchPath`). Outside stateful structure, its text
and attr holes are filled by direct patch writes (`patchFillsSection`), a `@catch`'s into the
scope its flush creates.
_Avoid_: capture path, patch section

**Patch fill**:
A fill lands one of two ways. It runs a registered _fill_ only where the hole
is state a server value keeps reaching: a `<let>`'s declaration (`_fill_let`,
`_fill_let_change`, `_fill_let_resume`), which reaches every read, and
`$global`'s per-read setup (`_fill_global*`). Every other fill _writes_ the slot
(`_patch_write`, `PatchKey.Write`).
_Avoid_: deliver/delivery, forwarder

**Client branch**:
Content a consumer renders instead of the patch: one that updates from the client (a tag
client state names, unpatched structure) skips it, and the flush reports the
content (`_client_branch`); a dynamic tag whose renderer is a template renders as
a client branch the content the compiler names for it. A write the branch reads
is guarded by `_client_branch_if`.
_Avoid_: withheld content

**Kept content**:
Content a known child renders from its state, where plain renders it nowhere on
the client (`keepsContent`): it creates from its shell, never by registration, and a flush
renders its holes once per owner under the _client branch entry_
(`PatchClientBranch:<section>`), which the client applies to each live instance in the
set its owner holds them in: the section's scopes main keeps for hoisted reads
(`ClosureScopes:<section>`), which a document fills with `_subscribe` and an
instance created from its shell joins (its shell names the section, `id|section`).

**Filled intersection**:
An intersection of two or more params, one a caller passes, whose every read the patch
leaves to a hole it fills or an effect its entry re-runs, through any `<const>`
of it (`isFilledIntersection`); not where each call of a `<define>` body passes a
member client state, unless a member reads another intersection. Where its group is
server-sourced on the instance the patch fills its holes; where the group mixes the
client re-runs it, by the scope's render entry, created or paired
(`_patch_render`), unless each member it ships re-runs it by its own fill, and a
member the client's side needs is written in place on its slot.

**Marked write / marked bind**:
A live scope's write (`PatchKey.MarkedWrite`) sets the slot and, only when the value
changed, records the response in the slot's _change mark_
(`AccessorPrefix.PatchChanged` + accessor), which the scope's entries read
(`readChanged`). A created scope's setup writes go plain (`PatchKey.Write`), since
nothing it holds has run. A bind (`PatchKey.Bind`) sends a registration with owner
hops; on a page linking `patches/marked-bind`, where a holder compares a function's
identity, it keeps one function per owner and registration (`AccessorPrefix.BoundFn` +
id on the owner scope, filled as resume revives one), so it marks only a new function.
Here, as everywhere in the patch protocol, _bind_ means a registration attached to its
owner scope (an owner-bound entry), not main's two-way binding (`:=`).
_Avoid_: dirty flag, version (a mark names its response)

**Filled references**:
The bindings a registered function references that a patch may fill
(`getFilledReferences`, `hasFilledReferences`). Its registration names them as
reads (`_bind_resume`, keyed `id read …`), and a bind of it makes a new function only
when one of them changed in that response, shared per owner and registration (marked
bind); a function reading client state is the client's and has none.
_Avoid_: written references, written captures, live function, live bind, held function

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
writes (`rendersValue`, `fillsHole`), a known tag's child scope ref
(`isKnownChildNode`, `patchFillsSection`), or the marker of loop rows a flush
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
A patch page always initializes. In a patch build a registration whose value
lands in a `<let>`'s initial value, or a template passed in an unknown tag's
input, is its template's own: a patch writes it with no client caller to load it.
_Avoid_: linked page, unlinked page, scriptless page (as a bundling state)
