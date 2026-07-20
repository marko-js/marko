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

**Referenced bindings**:
The canonical zero/one/many collection of bindings that schedule an expression
or function. Constants, DOM getters, and safe lazy reads are tracked separately.
_Avoid_: refs, dependencies

**Sources**:
The transitive roots that can make a binding browser-relevant, split into
non-parameter `state` and input/body-parameter `param` roots. `state` does not
mean only `<let>` values.
_Avoid_: dependencies, referenced bindings

**Closure**:
A binding read by another section, allowing its signal to notify live child
scopes. This names a binding relationship, not a JavaScript function closure.
_Avoid_: captured variable, hoist

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

**Serialize reason**:
Why a section, scope property, marker, or registration must reach the browser.
`true` and state-backed `Sources` are unconditional; parameter-only sources
produce per-call guards; absence means omit.
_Avoid_: serialization flag, serialized value

## DOM runtime

**Scope**:
A section's runtime record: a plain object of value slots and reserved runtime
state keyed by accessors. Not a lexical scope, component instance, or `$global`.
_Avoid_: component state, context

**Accessor**:
A scope property's key; the property itself is a _scope slot_. Debug builds use
readable strings and optimized builds use compact encodings from the lockstep
`accessor.ts` / `accessor.debug.ts` pair.
_Avoid_: slot, value

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
bound state (`dom/controllable.ts`).
_Avoid_: controlled component

**Walk string**:
A compact program that locates nodes and ranges while cloning a fresh branch.

## Streaming and resume

**Chunk**:
A node in the HTML writer's tree of buffered output, not a bundle chunk or Node
stream buffer.

**Boundary**:
The render coordinator that tracks async work, flushes chunks, and carries the
abort signal. Not an error boundary.

**Resume**:
Filling scopes, adopting server-rendered nodes, rebuilding branches, and running
effects without an initial client rerender.
_Avoid_: hydrate, hydration

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

**Ready stream**:
A `readyId`-keyed serialization channel that withholds lazy resume data until
its module registers and earlier data drains.
_Avoid_: async HTML stream

## Compilation modes

**Output mode**:
`html` emits streaming SSR and resume state; `dom` emits client code.
_Avoid_: entry mode

**Entry mode**:
Unset emits a normal module, `page` a top-level bootstrap, and `load` a lazy
ready notification. Deprecated `output: "hydrate"` aliases a DOM page entry;
Marko 6 still resumes.
_Avoid_: output mode, hydration
