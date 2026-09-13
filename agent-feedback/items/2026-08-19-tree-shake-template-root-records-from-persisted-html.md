---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/shell.ts › buildShells
---

# Emit root records only for templates a dynamic tag can reference

Every persisted template with a shell-expressible root now emits a root
record (its full template markup, keyed by the template id) into its html
module's `_shells({...})` call, so dynamic tag entries can construct it as a
renderer in-band. Most templates are never rendered through a dynamic tag,
so for them the record is dead server-module weight (it never ships over the
wire, but it inflates the server bundle by roughly the template's markup).

A build-time link step (or an analyze fact exported per template and
consulted by consumers, like the intrinsics pattern) could emit root records
only for templates some dynamic tag references.

Check: compile any static persisted template with `-o html` and observe its
own markup duplicated inside `_shells({ "<template id>": ... })`.
