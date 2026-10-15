---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _show
---

# Show an only-child `<show>` body as it changed while hidden

A `<show>` that is its element's only child has no markers: hiding takes the parent's first and last child as the branch range and parks them in a fragment (`tempDetachBranch`), and showing inserts that range back. Control flow in the body that runs while hidden (an `<if>` switching branches, a nested `<show>` parking its own nodes) replaces those nodes inside the fragment, but the range still points at the replaced ones, so showing inserts stale nodes: the old `<else>`, or nothing but a marker, and content state in it becomes unreachable. Once hidden, the range has to follow what the fragment holds (the fragment itself can be the range).

Check: add a fixture whose `template.marko` is `<let/show=false/><button onClick() { show = !show }>toggle</button><section><show=show><if=show><p>yes</p></if><else><i>no</i></else></show></section>` and whose steps are `[{}, click, click, click]`; `pnpm run test:update -- --grep "runtime-tags/translator <name> "` fails with a `render.debug.md` conflict, and both renders show `<i>no</i>` in the `<section>` after the first click, where `show` is true. With `<let/show=true/><let/n=0/>`, a handler `show = !show; n++` and body `<show=show><show=show><p>${n}</p></show></show>`, the client render leaves `<section>` empty after the second click and conflicts with the resumed one.
