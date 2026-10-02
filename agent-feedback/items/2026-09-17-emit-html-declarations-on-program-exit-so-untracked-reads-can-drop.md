---
type: cleanup
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › untrackNode
---

# Emit HTML declarations on program exit so an untracked read can drop

The HTML output declares and reads `<const>` aliases and destructured values
by name in place (`const y = x`, `const { a } = x`, a known-tag `{ ...obj
}`), while the DOM output and the reference graph route those reads to the
canonical binding, so every path where emitted HTML names a binding the
graph does not track needs its own bookkeeping, and each missed path is a
server `ReferenceError` once pruning drops the value: an alias of an
attribute tag `<for>` param read in its own section, an alias of a rest read
through a property, and an alias spread into a known tag whose read props
are all overridden each crashed before being patched. That bookkeeping is
`untrackNode` with `Binding.untrackedReads` (a whole-value use, which
`isPossiblyRead` counts), `untrackAliasValue` with `Binding.referencedBy`
(every reference to an alias, and an alias's declaration of what it aliases,
which `isPossiblyRead` must not count or a `<define>` call passes its whole
input), and a `setDerivedFrom` on each alias in `core/const.ts` whose only
job is to drop the alias's value expression with it so the reference there
stops keeping the aliased binding. The untracked reads come only from the
alias value, the destructured `<const>` value and the known-tag spread in
`known-tag.ts`; `dropContent`'s `untrackNode` calls are on pruned content
and never record one. Rewrite HTML reads of an alias or destructured part as
its canonical binding (`getDeclaredBindingExpression` already resolves the
name to emit; rename on shadowing, like the DOM scope-read rewrite), declare
only canonical bindings, and collect declarations to write on program exit:
then all of the above goes, the alias special cases in `pruneBinding` and
`isPossiblyRead` with it, the HTML output stops writing `const y = x`
chains, and `<child ...obj a=1/>` reads only the props the child takes, as
DOM already does.

Check: `grep -rn "untrackNode\|untrackAliasValue\|referencedBy\|untrackedReads" packages/runtime-tags/src/translator` lists the bookkeeping; `pnpm run compile -- -o html -d` on `<const/x={a:1}/><const/y=x/><div>${y}</div>` emits `const y = x`; the fixtures `const-alias-of-attr-tag-for-param`, `const-alias-of-rest-read-through-property`, `const-alias-spread-into-known-tag` and `define-param-alias-read-through-property` pin the crashes and the `<define>` params tree the rewrite must keep.
