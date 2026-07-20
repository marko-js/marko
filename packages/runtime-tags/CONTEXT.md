# Runtime Tags (Marko 6)

The Marko 6 runtime and its translator: compiles `.marko` templates into a dependency graph that is lowered to streaming HTML on the server and fine-grained, tree-shakable DOM code on the client, with resume instead of hydration.

Definitions only; for how the concepts fit together end to end (and where each lives in code) see [RESUMABILITY.md](./RESUMABILITY.md).

## Language

**Section**:
A compile-time render unit: a contiguous piece of template that renders independently. Scopes are its runtime instances.
_Avoid_: fragment, block

**Scope**:
A runtime instance of a section: a plain state object whose slots are keyed by accessors. Not a JS lexical scope.
_Avoid_: component state, context

**Renderer**:
The blueprint for producing a section's DOM: template, walk string, and setup work. Branches are its live instances.

**Branch**:
A live DOM range instance created from a renderer by control flow (`<if>`, `<for>`, dynamic tags), owning its nodes and scope.
_Avoid_: instance, fragment

**Owner**:
The scope a nested scope belongs to: the parent instance a section's runtime state hangs off, reachable through the owner accessor and reconstructed during resume. Ownership follows section nesting, not JS prototypes or DOM parentage.
_Avoid_: parent scope

**Closure**:
A binding read in a section other than the one that declares it, giving the declaring section's signal a way to notify live child scopes. Not a JS function closure — the term names the captured binding relationship, not a function.
_Avoid_: captured variable

**Content**:
The renderable children passed to a tag. The canonical Tags API name; the Class API calls the same concept `renderBody`, and the syntax level says "body".
_Avoid_: renderBody, body (except for AST node fields)

**Controllable**:
A native form element whose value/checked/open state Marko keeps in sync with bound state (`dom/controllable.ts`). Unrelated to the ecosystem's "controlled component" pattern beyond surface similarity; prefer "controllable" over "controlled" in new code.
_Avoid_: controlled component

**Fill**:
A serialized batch of scope data applied during resume: scope ids with their partial property sets, merged into (or adopted as) the live scopes.
_Avoid_: partial (as a standalone noun), payload chunk

**Chunk**:
A node in the streaming HTML writer's tree of in-progress output, processed and flushed incrementally. Not a webpack chunk or a Node stream buffer.

**Boundary**:
The streaming coordinator for a render: tracks pending async work, decides when buffered chunks flush, and carries the abort signal. Not an error boundary.

**Binding**:
The owned location of a scope variable: the declaration/storage a section owns for a reactive value or property, with edges for aliases, closures, assignments, hoists, and sources. Distinct from Babel's lexical `Binding`, which also appears throughout translator code.
_Avoid_: dep, variable

**Referenced bindings**:
The sorted, deduped set of bindings an expression or function reads — the usage side of a binding. Signals group work by this key, and serialize reasons are expressed through it.
_Avoid_: refs, references, dependencies

**Sources**:
The set of state and/or input/body-parameter root bindings that can make a value relevant. Computed transitively per binding during analysis.
_Avoid_: roots, dependencies

**Hoist**:
A binding edge marking a value read outside the section that declares it (e.g. a tag variable read by an ancestor), requiring the value to be lifted across section boundaries. Overlaps with but is not JS declaration hoisting.

**Signal**:
A compiled unit of work — keyed by `undefined` for setup programs, or by its referenced bindings (one binding or a canonical intersection) for update programs — existing as a compile-time structure and its lowered runtime form (`_const`/`_let`/`_or`). Not a reactive value container; the value-holding concept is a binding, stored in a scope slot at runtime.
_Avoid_: reactive value, observable

**Effect**:
Client-side work originating from `<script>` content and event handlers/registered functions, queued per scope (`_script`) and run after all pending renders — during resume, updates, and fresh renders alike.
_Avoid_: side effect (in the general JS sense), lifecycle hook

**Intersection**:
A canonical set of two or more bindings whose combined work becomes relevant together; signals may be keyed by an intersection, lowered with `_or` when one remains.

**Accessor**:
A key into a scope's slots. Readable strings in debug; short characters in optimize (`accessor.ts` / `accessor.debug.ts` in lockstep).
_Avoid_: key, slot name

**Serialize reason**:
Why a scope property, marker, section, or registered value must exist in the browser: `true` (unconditional) or a `Sources` set guarding it per call site; absence means omit.
_Avoid_: serialization flag

**Resume**:
Attaching compiled client code to server-rendered DOM: filling scopes from the SSR payload, adopting existing nodes, rebuilding branches, then running effects — no initial client rerender.
_Avoid_: hydrate, hydration

**Walk string**:
A compact string program that locates DOM nodes when cloning a fresh client branch from its renderer's template.

**Resume comment**:
An SSR-emitted HTML comment that attaches existing server-rendered nodes and ranges to scopes during resume, reconstructing owners, branches, keys, and await state.
_Avoid_: hydration marker

**Ready stream**:
A named channel (`readyId`) that holds lazy state out of the main SSR stream until its registered client module has loaded and earlier data is drained.

**Registration**:
Binding an executable value to a stable id via `_resume` so SSR can name it by id instead of serializing source. A registration is a bundle retention root only if SSR emits its id.

**Output mode**:
Which code the translator emits: `html` (SSR/state) or `dom` (client). The third mode name, `hydrate`, is a DOM page entry whose name predates the resume terminology.
