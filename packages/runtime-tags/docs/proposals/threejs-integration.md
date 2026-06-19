# Proposal: Three.js integration for the Marko Tags API runtime

Status: Draft / RFC
Target: `@marko/runtime-tags` (`marko@6`)
Author: design proposal

## 1. Executive summary

Marko 6's Tags API already contains the hard part of what a high‑performance
3D renderer needs: a **compiled, fine‑grained reactivity system** in which a
state change calls exactly one function that writes exactly one value, with no
virtual‑DOM diff in between. Today those functions write to the DOM
(`element.setAttribute`, `node.data`, `parent.insertBefore`). This proposal
shows how to point that same machinery at a **Three.js scene graph** so that
`<mesh position-x=x>` compiles to a signal that runs `mesh.position.x = x`,
and nothing else.

The plan is layered and incremental:

1. **Host abstraction (core).** Extract the small, localized set of
   DOM‑coupled operations in `src/dom/` behind a `Host` interface. The
   reactivity core — signals (`src/dom/signals.ts`), scopes
   (`src/dom/scope.ts`), the render queue/scheduler (`src/dom/queue.ts`,
   `src/dom/schedule.ts`) — is already host‑agnostic and is reused unchanged.
2. **`@marko/three` package.** A Three.js host adapter plus a taglib that
   defines `<group>`, `<mesh>`, `<perspectiveCamera>`, materials, geometries,
   etc. as *native tags* for the scene host. These compile through the
   existing native‑tag pipeline, so they get fine‑grained reactivity for free.
3. **A `<Canvas>` boundary** that lives in the normal DOM tree (so it
   serializes and resumes like any other component) and hosts the 3D subtree
   inside a WebGL context.
4. **Resumability** by serializing reactive *state* (which Marko already does)
   and reconstructing the non‑serializable Three.js objects on the client from
   that state during the normal "creating" pass — no special hydration path.

A zero‑runtime‑change **userland bridge** (Section 11) is available on day one
and is used both to validate ergonomics and as the permanent escape hatch for
exotic Three.js objects.

## 2. How the Tags runtime works today (the parts that matter)

Three observations drive the entire design.

### 2.1 The reactivity core is already host‑agnostic

A signal is just a function `(scope, value) => void` (`src/dom/signals.ts:19`).
`_let` (`signals.ts:24`) stores a value on the scope and, when it changes,
calls `schedule()` + `queueRender(scope, fn, id)`:

```ts
// signals.ts:33
return (scope, value) => {
  if (rendering) {
    if (scope[AccessorProp.Creating]) { scope[valueAccessor] = value; fn?.(scope); }
  } else if ((scope[valueAccessor] !== value || !(valueAccessor in scope))
      && ((scope[valueAccessor] = value), fn)) {
    schedule();
    queueRender(scope, fn, id as number);
  }
};
```

`queueRender` pushes onto a min‑heap keyed by `scopeId * 1000 + signalId`
(`queue.ts:30`, `queue.ts:60`), and `run()` (`queue.ts:80`) drains it, calling
`signal(scope, value)` for each entry (`runRender`, `queue.ts:172`). **None of
this references the DOM.** The only DOM contact in the whole scheduling path is
in `schedule.ts`, which uses `queueMicrotask` + `requestAnimationFrame`
(`schedule.ts`) — and `requestAnimationFrame` is exactly the cadence a 3D
renderer wants.

Implication: signals, scopes, the queue, and control‑flow branch bookkeeping
can be reused verbatim. Only the *leaf writes* and *node creation/insertion*
are DOM‑specific.

### 2.2 The DOM coupling is small and localized

The host‑specific surface is concentrated in a handful of functions:

| Concern              | Function(s)                                                    | File                         |
| -------------------- | ------------------------------------------------------------- | ---------------------------- |
| Set a leaf property  | `_attr`, `_attr_class`, `_attr_style*`, `_text`, `_text_content` | `src/dom/dom.ts:43‑130`      |
| Insert / remove      | `insertChildNodes`, `removeChildNodes`                        | `src/dom/dom.ts` (~440)      |
| Build nodes (CSR)    | `createCloneableHTML`, `parseHTML`, `cloneNode`               | `src/dom/renderer.ts:161`    |
| Locate nodes (walk)  | `walk` / `walkInternal` (uses `document.createTreeWalker`)    | `src/dom/walker.ts:12,28`    |
| Branch swap (`<if>`) | `setConditionalRenderer`                                      | `src/dom/control-flow.ts`    |
| Mount entry          | `mount(input, reference, position)`                           | `src/dom/template.ts:45`     |

Everything else is generic. A Three.js target replaces this table and nothing
more.

### 2.3 Resumability serializes state, not pixels

SSR serializes scope *data* into the HTML payload and re‑attaches behavior on
the client by (a) deserializing scopes (`src/dom/resume.ts`, `applyScopes`),
(b) walking comment markers to bind existing DOM nodes into scopes, and (c)
calling registered functions/effects by id (`_resume`, `_script`).

A WebGL context, a `THREE.Scene`, or a `THREE.Mesh` **cannot be serialized**.
But the *state that produces them* (positions, colors, model URLs, camera
params) is ordinary data and serializes fine. So the resumability story for 3D
is: **serialize the state, reconstruct the objects on the client.** Crucially,
"reconstruct from current state" is already what the runtime does on first
render — the `Creating` pass of every signal sets initial values
(`signals.ts:34‑38`). We reuse that path instead of inventing a new one.

## 3. Goals and non‑goals

**Goals**

- Author 3D scenes declaratively in `.marko` with the same syntax, control
  flow (`<if>`, `<for>`), and component model as DOM Marko.
- Fine‑grained updates: one changed value ⇒ one property write on one Three.js
  object. No reconciliation, no per‑frame allocation in the steady state.
- Work with resumability: server emits a DOM shell + serialized state; the
  client builds the scene from that state with no full re‑render.
- Reuse the existing scheduler and batching; integrate render‑on‑demand.
- Keep DOM Marko unchanged in behavior and bundle size (host abstraction must
  be zero‑cost for the DOM path).

**Non‑goals**

- Server‑side WebGL rendering. (Optional future: headless `gl` for a static
  poster frame — out of scope here.)
- Re‑implementing Three.js concepts (cameras, controls, loaders) in Marko. We
  bind to Three.js; we do not abstract it.
- A general N‑host renderer framework. We design the `Host` seam generically
  but ship exactly one new host (Three.js).

## 4. Architecture overview

```
        ┌─────────────────────────── DOM document (resumable) ───────────────────────────┐
        │  <Canvas> component (normal DOM Marko component)                                │
        │    • owns <canvas>, WebGLRenderer, camera, render loop                          │
        │    • provides scene root + Host via Marko context                               │
        │    • onMount effect: create renderer, build scene from resumed state            │
        │                                                                                 │
        │    ┌──────────────── 3D subtree (Three.js host) ────────────────┐               │
        │    │  <group rotation-y=spin>                                    │               │
        │    │    <mesh position=[x,0,0]>                                  │               │
        │    │      <boxGeometry args=[1,1,1]/>                            │               │
        │    │      <meshStandardMaterial color=c/>                       │               │
        │    │    </mesh>                                                  │               │
        │    │    <for|item| of=items> <mesh .../> </for>                 │               │
        │    │  </group>                                                   │               │
        │    └─────────────────────────────────────────────────────────────┘               │
        └─────────────────────────────────────────────────────────────────────────────────┘

   Reused unchanged:  signals · scopes · render queue (min-heap) · scheduler · <if>/<for>/<await>
   Replaced by Three host:  leaf writes · node create/insert/remove · walk/clone · branch markers
```

Two new pieces of runtime, one new compiler taglib:

1. **`Host` interface** in `runtime-tags` (core refactor, Section 5).
2. **`ThreeHost`** in `@marko/three` (Section 6) implementing that interface.
3. **`marko-three.json` taglib** in `@marko/three` defining the scene tags and
   their property semantics (Section 7).

## 5. The `Host` abstraction (core refactor)

Introduce a minimal interface capturing the localized operations from §2.2.
The DOM implementation is the existing code, moved behind the interface; tree
shaking keeps DOM‑only apps identical in size because the Three host lives in a
separate package and is only pulled in by the `<Canvas>` boundary.

```ts
// src/common/host.ts  (new)
export interface Host<TNode = unknown, TRoot = unknown> {
  // node lifecycle
  createElement(type: string, ns: string | undefined): TNode;
  createText(value: string): TNode;
  createMarker(): TNode;                 // analogue of a comment boundary node

  // tree mutation (ordered children)
  insert(parent: TNode | TRoot, node: TNode, before: TNode | null): void;
  remove(node: TNode): void;

  // leaf writes
  setProperty(node: TNode, key: string, value: unknown, prev: unknown): void;
  setText(node: TNode, value: string): void;

  // teardown of host-owned resources (geometry/material/texture dispose)
  dispose?(node: TNode): void;
}
```

### 5.1 Why a "node construction program" replaces walk/clone

For the DOM, templates are HTML strings that get `parseHTML`‑ed once and
`cloneNode`‑d per instance, then `walk`‑ed to bind dynamic nodes into scope
slots (`renderer.ts:161`, `walker.ts:28`). A scene graph has no HTML string to
clone. Instead, the Three target compiles each template's static structure to a
**build program**: a flat list of `(op, type, parentIndex, scopeAccessor)`
instructions the host executes to instantiate nodes and store the dynamic ones
into scope slots — the exact role `WalkCode.Get` plays today (`walker.ts:49`,
where `scope[accessor] = walker.currentNode`).

Concretely, the existing walk string is replaced by a host‑specific builder
that the renderer invokes in `createBranch` (`renderer.ts:30`). The branch
still records `StartNode`/`EndNode` (now host markers, see §10) so that
`<if>`/`<for>` insertion/removal keep working through `Host.insert`/`remove`.

This is the one genuinely new mechanism. It is small: the compiler already
knows the static tree and which nodes are dynamic; we emit a builder array
instead of (or alongside) the HTML/walks pair. See §8 for the compiler change.

### 5.2 Routing the runtime through the host

The leaf‑write runtime functions become thin dispatchers. Today:

```ts
// dom.ts:43
export function _attr(element, name, value) {
  setAttribute(element, name, normalizeAttrValue(value));
}
```

Under the abstraction the DOM host *is* `setAttribute`, and `_attr` for the
scene host routes to `host.setProperty(node, name, value, prev)`. Rather than
branching at runtime, the compiler emits host‑appropriate calls (the
translator already chooses helper names per attribute, e.g. `_attr_class`
vs `_attr_style` in `native-tag.ts`); the Three taglib supplies a parallel set
of helpers (`_prop`, `_prop3` for vector triples, `_attach`, …) bound to the
ambient host. The ambient host is read from `$global` (the per‑render shared
object already threaded through every scope, `scope[AccessorProp.Global]`),
set by the `<Canvas>` boundary when it creates the child render.

Net core change: extract `Host`, give `$global` an optional `host` slot
(defaulting to the DOM host), and have node create/insert/remove consult it.
DOM‑only renders never set `host`, so the DOM path stays on the existing
direct calls and pays nothing.

## 6. The `@marko/three` package

```
@marko/three
  src/
    host.ts            ThreeHost implements Host<Object3D | Resource>
    canvas.marko       <Canvas> boundary component (DOM side)
    context.ts         scene root + host provided via Marko context
    runtime.ts         _prop, _prop3, _attach, _instances helpers
    loop.ts            render-on-demand + animation loop, ties into scheduler
    tags/              marko-three.json + per-tag metadata
    elements.ts        type → THREE constructor registry (mesh, group, lights…)
```

### 6.1 `ThreeHost`

```ts
class ThreeHost implements Host<Object3D | Resource> {
  createElement(type) { return makeThreeObject(type); }   // elements.ts registry
  createText() { /* Troika/text mesh or no-op */ }
  createMarker() { return new Object3D(); }               // invisible ordering marker
  insert(parent, node, before) {
    if (isAttachable(node)) attach(parent, node);          // material/geometry → parent slot
    else orderedAdd(parent, node, before);                 // Object3D → parent.add at index
  }
  remove(node) { node.parent?.remove(node); this.dispose(node); }
  setProperty(node, key, value, prev) { applyProp(node, key, value, prev); }
  dispose(node) { disposeRecursive(node); }                // geometry/material/texture .dispose()
}
```

`makeThreeObject` looks up a registry (`elements.ts`) mapping tag names to
constructors and constructor‑arg handling (`args=[1,1,1]` → `new BoxGeometry(1,1,1)`).
`orderedAdd` maintains child order to match source order so that `<for>`
reorders behave (Three's `children` array is ordered; we splice at the index
implied by the `before` marker).

### 6.2 Attach semantics

Not every child is an `Object3D` added to a parent. A geometry or material is
*assigned to a property* of its parent mesh. The taglib marks these tags with
an `attach` target (`<boxGeometry>` → `geometry`, `<meshStandardMaterial>` →
`material`), and `Host.insert` routes accordingly. This mirrors
react‑three‑fiber's `attach` and is the only place scene composition diverges
from "append child."

## 7. Compiled fine‑grained reactivity, mapped to Three.js

The taglib (`marko-three.json`) declares scene tags as native tags with typed
attributes. Because they flow through the existing native‑tag translator
(`src/translator/visitors/tag/native-tag.ts`), a dynamic attribute already
compiles to a signal bound to its referenced bindings via `addStatement("render", …)`.
We only change *which runtime helper* is emitted.

Authoring:

```marko
<Canvas>
  <let/spin=0/>
  <const/c=spin > 3 ? "tomato" : "teal"/>

  <group rotation-y=spin>
    <mesh position=[x, 0, 0] onClick(){ spin++ }>
      <boxGeometry args=[1, 1, 1]/>
      <meshStandardMaterial color=c/>
    </mesh>
  </group>
</Canvas>
```

Conceptual compiled output (DOM‑host calls swapped for Three‑host calls):

```js
// static build program (run once per branch instance, replaces clone+walk)
const __build = _three_build([
  ["group", -1, /*scope*/ 0],          // node 0 → scope slot a
  ["mesh", 0, 1],                       // node 1 (child of 0) → scope slot b
  ["boxGeometry", 1, _ATTACH /*geometry*/],
  ["meshStandardMaterial", 1, 2],       // node → scope slot c
]);

// reactive bindings (each is ONE write on change — fine grained)
_prop(scope.a, "rotation.y", spin);     // group.rotation.y = spin
_prop3(scope.b, "position", x, 0, 0);   // mesh.position.set(x,0,0)  (only when deps change)
_prop(scope.c, "color", c);             // material.color.set(c) via applyProp color coercion
```

Key properties:

- `rotation-y=spin` becomes `_prop(node, "rotation.y", v)` → `node.rotation.y = v`.
  When `spin` changes, the queue runs exactly this one signal. No diff, no
  traversal.
- Vector/group props (`position`, `scale`, `color`) use a small fixed set of
  helpers (`_prop3`, color coercion in `applyProp`) that write into the
  existing Three object **in place** (`mesh.position.set(...)`), so steady‑state
  updates allocate nothing.
- `onClick` reuses Marko's event mechanism, delegated through the Three
  raycaster owned by `<Canvas>` (one pointer listener on the canvas, hit‑test
  to the target `Object3D`, dispatch to the handler stored in scope — directly
  analogous to `_on`/event delegation in `src/dom/event.ts`).

Because only changed signals fire, this is strictly more efficient than a
React/r3f model: there is no render function to re‑run, no element diffing, and
no reconciliation pass — the compiler already produced the minimal write.

## 8. Compiler changes

The translator needs three additions, all additive:

1. **Taglib.** Ship `marko-three.json` in `@marko/three` declaring the scene
   tags. The taglib loader (`packages/compiler/src/taglib`) already supports
   per‑tag metadata and namespacing — SVG uses the same mechanism
   (`marko-svg.json`, `"htmlType": "svg"`). Add a `host: "three"` (or
   `htmlType: "three"`) marker.

2. **Host‑aware helper selection.** In the native‑tag DOM translation
   (`native-tag.ts`), when the enclosing subtree's host is `three`, emit the
   Three helper names (`_prop`, `_prop3`, `_attach`, `_three_build`) instead of
   `_attr`/`_text`/clone+walks. The host of a subtree is determined statically:
   it switches to `three` under a `<Canvas>` (or any tag whose taglib entry
   declares `providesHost: "three"`), and reverts at a nested DOM portal. This
   is a compile‑time context, not a runtime branch.

3. **Build program emission.** Replace the HTML‑string + walks output with the
   builder array (§5.1) for `three`‑host subtrees. The information needed
   (static tree shape, which nodes are dynamic, attach targets) is already
   computed during analysis for the DOM path; only the *serialization format*
   of the static structure differs.

No change is required to signals, sections, references, or the `addStatement`
reactive‑binding machinery — those are host‑independent.

To keep scope: the `<Canvas>` boundary itself is a normal DOM component, so the
DOM/SSR pipeline is untouched above the boundary. Only the subtree *below*
`<Canvas>` uses the Three host.

## 9. Render loop and scheduling

Marko already batches signal updates and flushes them around an animation
frame (`schedule.ts`: `queueMicrotask(flushAndWaitFrame)` →
`requestAnimationFrame(...)` + `run()`). The Three integration layers on top:

- **Render‑on‑demand (default).** `<Canvas>` subscribes to "the queue flushed
  and at least one scene node changed." Implementation: the Three host sets a
  per‑render `dirty` flag on `$global` whenever `setProperty`/`insert`/`remove`
  touches a node; after `run()` completes, if `dirty`, call
  `renderer.render(scene, camera)` once and clear the flag. This means a static
  scene costs zero GPU work, and a scene where only `mesh.position.x` changed
  does exactly one property write + one draw.
- **Continuous animation (opt‑in).** For physics/spinning content, `<Canvas
  loop>` (or a `useFrame`‑style `<frame|delta|>` tag) runs a persistent
  `requestAnimationFrame` loop. The per‑frame callback can mutate signals
  (`spin++`), which feeds back through the normal queue — or mutate Three
  objects directly for hot paths. Both are supported; the declarative path is
  the default, the imperative `<frame>` hook is the escape hatch.

Because Marko's flush already aligns to `requestAnimationFrame`, declarative
state changes and the render call naturally coalesce into one frame.

## 10. Control flow over scene nodes (`<if>`, `<for>`)

`<if>`/`<for>` are reused unchanged. They operate on `BranchScope`
`StartNode`/`EndNode` and call `insertChildNodes`/`removeChildNodes` against a
parent (`control-flow.ts`, `renderer.ts`). For the Three host:

- `StartNode`/`EndNode` become **marker `Object3D`s** (invisible, zero‑cost)
  created by `Host.createMarker()`. They delimit a branch's range within a
  parent's ordered children — the direct analogue of comment boundary nodes in
  the DOM.
- `insertChildNodes(parent, before, start, end)` maps to `Host.insert` over the
  marker‑delimited range; `removeChildNodes(start, end)` removes that range and
  calls `Host.dispose` on each removed `Object3D` subtree (geometries,
  materials, textures) — wiring disposal to removal so `<if>` toggling a mesh
  reclaims GPU memory.
- `setConditionalRenderer` (`control-flow.ts`) swaps branches by start/end
  range; nothing DOM‑specific remains once the markers and insert/remove are
  host‑routed.

`<for>` reordering works because the host keeps children ordered and reuses
branch scopes per key exactly as today; only the underlying "move node" op
changes from `insertBefore` to a `children` splice.

## 11. Resumability

This is the subtle part, and it falls out cleanly because Marko serializes
*state*, not the host tree.

### 11.1 Server

The server renders the **DOM shell** normally:

- The `<Canvas>` component emits a real `<canvas>` element (plus any fallback /
  SEO / no‑WebGL content) into the HTML stream via the standard SSR runtime
  (`src/html/`).
- All reactive state feeding the scene (`spin`, `x`, `c`, `items`, camera
  params, model URLs) is serialized into the resume payload by the existing
  serializer (`src/html/serializer.ts`) — it is ordinary scope data.
- The 3D subtree itself emits **no HTML** (WebGL can't be expressed as HTML).
  The compiler, seeing a `three`‑host subtree, suppresses HTML output for those
  tags while still serializing their scopes/state, just as a client‑only
  branch would.

So the wire format is: a normal resumable HTML document whose `<canvas>` is
inert, plus serialized state for everything inside it.

### 11.2 Client

On resume (`src/dom/resume.ts`):

1. Scopes deserialize as usual (`applyScopes`) — the scene's state is now live
   in memory, including the `<Canvas>` scope.
2. The `<Canvas>` boundary is a normal component; its **`onMount` effect** runs
   after resume (effects run post‑render via `queueEffect`/`runEffects`,
   `signals.ts:291`, `queue.ts:122`). That effect:
   - grabs the resumed `<canvas>` DOM node (re‑attached to its scope by the
     normal walk/marker mechanism — this part *is* ordinary DOM resumption),
   - creates the `WebGLRenderer`, camera, and root `Scene`,
   - installs the Three host on the child render's `$global`, and
   - **builds the 3D subtree from current scope state** by running the
     subtree's create pass.
3. Building the subtree is *not* a special hydration path: it is the same
   "creating" pass every branch runs on first render, where each signal's
   `Creating` branch sets the initial value (`signals.ts:34`). Because the
   state was resumed in step 1, the constructed Three objects immediately
   reflect the server‑computed values. No diff, no flicker beyond the first
   paint.

The mental model: **DOM is resumed, WebGL is reconstructed.** The boundary
between "resume" and "reconstruct" is exactly the `<Canvas>` element — above it
everything is standard Marko resumability; below it the host swaps to Three and
state drives a fresh build.

### 11.3 Why this is correct and cheap

- Correct: the reconstructed scene is a pure function of resumed state, and
  resumed state equals server state, so the scene matches what the server
  intended.
- Cheap: reconstruction touches only nodes that exist; fine‑grained signals
  mean subsequent updates remain single‑property writes. There is no
  "hydration mismatch" concept because nothing is being matched against
  pre‑rendered pixels.
- Event handlers inside the scene resume through the standard registry
  (`_resume`/`_script`), and the canvas‑level raycaster (owned by `<Canvas>`)
  is established in the same `onMount` effect.

## 12. Lifecycle, disposal, and memory

Three.js requires explicit disposal of geometries, materials, textures, and
render targets. The runtime already models cleanup with abort signals:
`$signal(scope, -1)` exposes an `AbortController` whose `abort` event fires when
a scope/branch is destroyed (`signals.ts:184`, used for set‑subscription
cleanup; `_lifecycle` wires `onDestroy` to it in `dom.ts`).

The Three host hooks the same mechanism: when a node is created, register a
disposer on the owning scope's abort signal. When `<if>` removes a branch or a
component unmounts, `removeAndDestroyBranch` (`scope.ts`) aborts the scope,
which disposes every Three resource it owns. No new lifecycle concept is
introduced; we reuse the existing abort‑on‑destroy contract.

`<Canvas>` itself disposes the renderer and cancels its animation loop in its
own `onDestroy`.

## 13. Two‑way binding and controls

Camera controls and gizmos need to push values *back* into signals (e.g.
`OrbitControls` changing the camera position should update bound state). Marko
already has the controlled‑attribute pattern for form inputs
(`_attr_input_value` + a change handler, `controllable.ts`). The Three taglib
reuses it: a controllable scene prop declares a `*Change` companion, and the
host wires the Three event (`controls.addEventListener("change", …)`) to invoke
the change handler, which runs `_var_change`/`_let_change` (`signals.ts:52`).
This gives `<perspectiveCamera position:=camPos/>` two‑way binding with the
exact mechanism DOM inputs use.

## 14. Phased implementation plan

| Phase | Deliverable | Runtime changes | Risk |
| ----- | ----------- | --------------- | ---- |
| 0 | **Userland bridge** (Section 15): `<Canvas>` + imperative `<Object3D>` wrappers using `<const>`/effects, no compiler work. Ships as `@marko/three` v0, validates ergonomics. | none | low |
| 1 | **`Host` extraction** in `runtime-tags`; DOM host behind the interface; `$global.host` slot. Prove DOM bundle size/behavior unchanged via existing snapshot suite. | additive, DOM path unchanged | medium |
| 2 | **Compiled native scene tags**: `marko-three.json`, host‑aware helper selection, build‑program emission. `<mesh>`/`<group>`/materials/geometries get fine‑grained reactivity. | translator additive | medium |
| 3 | **Control flow + disposal**: `<if>`/`<for>` over scene nodes via markers; abort‑signal disposal; raycaster events. | host adapter | medium |
| 4 | **Resumability**: suppress HTML for three‑host subtrees while serializing state; `<Canvas>` reconstruct‑on‑mount. | translator + html | medium‑high |
| 5 | **Performance**: render‑on‑demand dirty tracking, `<frame>` loop hook, instancing (`<instancedMesh>` backed by `_instances`), `matrixAutoUpdate` tuning. | host adapter | low‑medium |

Each phase is independently shippable; Phases 0–1 de‑risk the rest.

## 15. Day‑one userland bridge (Phase 0, works today)

No runtime changes are needed to get a correct, resumable‑friendly integration
immediately — it just isn't "compiled native tags" yet. The pattern:

```marko
// canvas.marko
<canvas/el/>
<const/host=new SceneHost(el, { camera, antialias: true })/>
<lifecycle
  onMount() { host.start() }
  onDestroy() { host.stop(); host.dispose() }
/>
<provide:scene=host.root>
  <${input.renderBody}/>
</provide:scene>
```

```marko
// mesh.marko  — an imperative bridge component
<const/parent=consume:scene/>
<const/obj=new THREE.Mesh(input.geometry, input.material)/>

// each of these is a fine-grained effect: one signal -> one write
<const/_x=(obj.position.x = input.x)/>
<const/_y=(obj.position.y = input.y)/>
<const/_c=(obj.material.color.set(input.color))/>

<lifecycle
  onMount() { parent.add(obj) }
  onDestroy() { parent.remove(obj); obj.geometry.dispose(); obj.material.dispose() }
/>
```

Here `<const/_x=(obj.position.x = input.x)>` already gives fine‑grained
behavior: the derived runs only when `input.x` changes (`_const`,
`signals.ts:79`), writing one property. Resumability works because `obj` is
created in client effects from resumed `input` state; the server emits only the
`<canvas>` shell.

This validates the API and property mappings before any compiler investment,
and remains the supported escape hatch for Three.js objects too exotic to model
as tags.

## 16. Risks and open questions

- **Build‑program format (§5.1).** The one new runtime concept. Mitigation:
  keep it a thin list the host interprets; reuse the analyzer's existing static
  tree + dynamic‑node info, changing only serialization.
- **Host context as compile‑time vs runtime.** Determining "this subtree is
  Three‑hosted" statically is cleanest (no per‑call branch) but requires the
  taglib to mark host‑providing tags. Fallback: a runtime `$global.host` check
  in the leaf helpers (tiny cost, only in `@marko/three` helpers, never in DOM).
- **Text in 3D.** No native text node; `<text>` maps to an SDF/Troika mesh or a
  CSS3D overlay. Treat as a normal element with a `value` prop rather than a
  DOM text node.
- **Suspense / async assets.** Model loading (`GLTFLoader`) should integrate
  with `<await>` (`control-flow.ts:_await_promise`) so the scene shows a
  fallback until the asset resolves — reuse, don't reinvent.
- **SSR poster frame.** Optional headless‑GL render for first paint / OG images
  is deferred; the default is an inert `<canvas>` plus reconstruct‑on‑mount.
- **Pointer events precision.** Raycaster‑based hit testing needs per‑frame
  pointer state; ensure it cooperates with render‑on‑demand (raycast on pointer
  move, not every frame).

## 17. Summary

The Tags API runtime is, underneath the DOM, a general fine‑grained reactive
graph: signals call one function, scopes hold slots, a min‑heap queue flushes on
an animation frame. By extracting the small DOM‑coupled surface behind a `Host`
interface and supplying a Three.js host plus a scene taglib, `.marko` templates
can drive a WebGL scene graph with **compiled, allocation‑free, single‑write
updates** — strictly leaner than a virtual‑DOM 3D renderer. Resumability is
preserved by leaning on what Marko already does best: serialize the state, and
let the same "creating" pass that initializes any branch reconstruct the
non‑serializable Three.js objects on the client at the `<Canvas>` boundary.
