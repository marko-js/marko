---
type: cleanup
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › untrackNode
---

# Emit HTML declarations on program exit so an untracked read can drop

`untrackNode` exists because the HTML output declares and reads tag
variables by name in place (`const y = x`, `const { a } = x`, `{ ...obj }`)
while the DOM output routes the same reads through the reference graph.
An alias `<const>` value or a known-object spread is therefore emitted by
HTML but has no tracked read, so the graph erases the read and marks the
binding `untracked` to stop `pruneBinding` dropping a value that HTML
still names. That flag is a memo of a deleted read, not a fact about the
binding. Refactor the HTML translator to work like the DOM side: collect
declarations during translate and write them on program exit, and replace
reads of a pruned alias with its canonical binding (a `replaceNode` pass
like the DOM scope-read rewrite, renaming on shadowing). Then the alias
value and the known spread become plain `dropNodes` calls, `untrackNode`
and `Binding.untracked` go away, and the HTML output of
`<child ...obj a=1/>` can read only the props the child takes, as DOM
already does.

Check: `grep -n untrackNode packages/runtime-tags/src/translator/core/const.ts packages/runtime-tags/src/translator/util/known-tag.ts` lists the two sites; `pnpm run compile -- -o html -d` on `<const/x={a:1}/><const/y=x/><div>${y}</div>` still emits `const y = x` after `y` is pruned from the DOM output.
