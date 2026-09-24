---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/referenced-identifier.ts › translate
---

# Compile an unread `<const>` of bare `$global` for the client

Any `<const>` whose value is bare `$global` and whose variable ends up unread fails the client compile with "Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it". That covers `<const/g=$global/>`, `<const/{ foo }=$global/>`, and `<const/g=$global/>` spread only into a child that reads no input. Pruning drops the `$global` value, but the DOM translate of a `$global` identifier replaces the node with `$scope.$global`, which has no `extra`, before `<const>`'s exit checks `value.extra?.pruned`, so `<const>` derives the dropped value into setup. `$global.x` keeps its extra because only the inner identifier is replaced. Carry the identifier's `extra` onto the replacement, or have `<const>` read the pruned state before its children translate.

Check: `printf '<const/g=$global/>\n<div>hi</div>\n' > /tmp/d.marko && pnpm run compile -- -o dom -d /tmp/d.marko` throws the internal error; `<const/g=$global.x/>` compiles to an empty setup.
