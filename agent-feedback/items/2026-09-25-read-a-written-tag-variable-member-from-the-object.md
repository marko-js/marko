---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › trackReference
---

# Read a tag variable's member from the object once any code writes that member

Since `isWrittenMember` (9eeb85b392, #4216, first released in 6.3.53) a write such as `live.open = true` compiles to `$scope.live.open = true`, but every read of `live.open` still goes through `getOrCreatePropertyAlias` and reads the `live_open` slot, which `_const("live", …)` (or `_let`) fills once when `live` itself is assigned and a member write never refreshes. So every handler, `<lifecycle>` listener and `<script>` that reads a member after some other code wrote it sees the value from before the write, with no error. This silently breaks the common "mutable box a closure reads" pattern (`<const/live={ open: false }>` or a `<let>` object written in a handler or `<script>`, read by a listener `onMount` registers, or a timer id cleared in `onDestroy`), so apps using it cannot upgrade past 6.3.52: one real app has 19 split members across 11 templates on 6.3.55 and none on 6.3.52, including a find bar whose keyboard handler never sees itself open. Reverting is not the fix, since 6.3.52 kept reads and writes agreeing only by writing the alias slot and never mutating the object. Once analysis sees a write to a member path of a binding, reads of that path and its sub-paths should resolve to the object instead of a property alias (or the write must also update the alias).

Check: compile `<const/live={ open: false }>`, `<let/log="">`, `<button onClick() { live.open = true }/>`, `<button onClick() { log = String(live.open) }/>`, `<p>${log}</p>` (one tag per line) with `pnpm run compile -- -o dom -d`: the output has `$scope.live.open = true` in the first handler, `String($scope.live_open)` in the second, and `_const("live", $scope => $live_open($scope, $scope.live.open))`. Mounted (jsdom), clicking the first button then the second renders `false`, expected `true` (6.3.52 renders `true`); `<let/live=…>` renders `false` the same way, while replacing the write with `live = { open: true }` renders `true`.
