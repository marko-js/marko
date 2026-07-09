---
"@marko/runtime-tags": minor
"@marko/compiler": minor
---

Add experimental persisted pages: an opt-in mode where a navigation keeps
the live page and a stateless server streams back a minimal patch of
changed values, applied through the existing signal graph. Enabled with the
`persisted` compile option and the `$global.persisted` render flag; output
is unchanged unless both are set, and non-persisted builds are unaffected.

Compiler/translator:

- New `persisted` compile option and entry kinds. `persisted: "update"`
  emits the template's `?update` module (compiled per-section merge
  functions that apply a patch to live scopes); persisted dom builds emit a
  `?persisted` entry carrying the render graph and resume-registry
  registrations, so the main hydration module stays slim and the graph
  rides the first navigation's chunk load.
- The request-time serialize guards split into marker/spine emission vs
  value emission: persisted documents serialize resume markers and an
  addressable scope spine for request-derived content without serializing
  its values (those arrive in update frames). Guards compile to flat
  render-global value-class checks, `$global` is the navigation-refresh
  channel (demoted, not promoted to a binding), and everything outside the
  sanctioned server channels follows a render-once contract.
- Update payloads are filtered by compile-time source class: client-owned
  state never rides a patch, resume-only wiring is suppressed, mixed
  reasons keep only their request bits, and holes a client signal will
  re-render from a patched value are shipped once as raw values rather than
  captured. Value merges are emitted only for bindings that can serialize.
  A generic hole applier handles text/unsafe-html/attr/controllable holes
  and lets server-only component subtrees emit no `?update` module at all.
- Optimized register ids are pre-allocated during analyze so the html,
  dom, `?update`, and `?persisted` compiles of one template agree on ids
  by construction.

Runtime:

- Update-render writer mode (`$global.persisted = "update"`) reuses the
  streaming machinery to emit newline-delimited serializer frames instead
  of a document, crossing `<await>`/`<try>` async boundaries with per-frame
  application and boundary-body delivery.
- `dom/update` applier (`applyUpdate`) replays patches through the page's
  own compiled signals, seeds and constructs fresh server-first subtrees,
  retriggers downstream scripts/effects from patched values, and skips
  state-free request-derived computes client-side. Controllable attrs
  (`value`/`checked`/`open`) and text-only tag content (`<title>`,
  `<script>`, `<style>`) participate in updates.
- Fragment frames with a possession echo (`x-marko-have`) handle cross-route
  navigation: the client reports which renderers it holds so the server
  fragments exactly the diverging dynamic-tag hop; misfires are rejected
  per-instance by the live renderer guard and degrade to a full navigation.
