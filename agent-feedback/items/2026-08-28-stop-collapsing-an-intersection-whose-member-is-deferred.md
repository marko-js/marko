---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › getCollapsibleIntersectionSource
---

# Stop collapsing an intersection whose member is produced by another intersection

`getCollapsibleIntersectionSource` merges an intersection's members' sources and returns the single non-array in-section state or param source, and `packages/runtime-tags/src/translator/util/signals.ts › getSignal` then subscribes the intersection to that source signal instead of building an `_or`, so the intersection becomes a plain function appended to the source signal's body while the derived member is persisted as a bare `_const("item_status")` with no downstream. That is sound only if every member's producer runs synchronously before the appended call, and it is not: when the derived member is itself produced by an `_or`, `packages/runtime-tags/src/dom/signals.ts › _or` runs its fn synchronously only while `scope[AccessorProp.Gen] === runId`, the run that created the scope, and on every later run only `queueRender`s it, so the appended intersection executes first against the previous value and is never re-run when the recompute lands. The consequence is silently stale DOM in both dev and optimized builds with no error or warning: a consumer that reads both a property of a derived `<const>` and another value from the same source binding keeps its old class list and its old `<if>` branch, while siblings reading the source binding alone update. The trigger is narrow but common: the `<const>` must be produced by a multi-member `_or` whose extra members contribute no state or param source of their own, that is a never-reassigned `<let>`, a literal `<const>`, or a `<const>` derived from `$global`, whose `globalSources` this function never inspects; an assignable second `<let>` or a second `input` member makes the merged sources a state/param pair or a list, the collapse is skipped and the DOM updates. Reject an intersection any of whose members is produced through another intersection in the same section, or make the collapsed call a subscriber of such a member rather than a trailing inline call, and pin it with the fixture below plus those negative controls.

```marko
<!-- fixtures/<name>/template.marko -->
<let/inc={ status: "open" }/>
<button onClick() { inc = { status: "resolved" } }>go</button>
<row inc=inc/>

<!-- fixtures/<name>/tags/row.marko -->
static function feed(inc, sfx) { return { status: inc.status, label: inc.status + sfx }; }
<let/sfx="!"/>
<const/item=feed(input.inc, sfx)/>
<div class=["row", item.status, input.inc.pending && "pending"]>
  <span class="badge">${item.label}</span>
  <if=item.status !== "resolved" && !input.inc.pending><form class="derived"/></if>
  <if=input.inc.status !== "resolved" && !input.inc.pending><form class="direct"/></if>
</div>
```

Check: with `test.ts` steps `[{}, (document) => document.querySelector("button").click()]`, `pnpm run test:update -- --grep "runtime-tags/translator <name> "` writes a `__snapshots__/render.md` (identical for dom, ssr and csr) whose post-click `## Change` is only `REMOVE: .derived + form` and `UPDATE: .badge::text "open!" => "resolved!"`, leaving `<div class="row open">` and `<form class="derived"/>` in place although `item.status === "resolved"`. Dropping `<let/sfx>` and the `sfx` argument, or making `sfx` assignable, or passing the suffix as `input.sfx`, each updates the class and removes both forms. Mechanism, from `pnpm run compile -- -o dom -d tags/row.marko`: `_const("item_status")` has no downstream and `$input_inc_pending__OR__item_status` is a plain function called at the end of `$input_inc`, after `$input_inc__OR__sfx` (an `_or`) has only queued the recompute of `item`; the controls instead emit `_or(...)` plus `_const("item_status", $input_inc_pending__OR__item_status)`. Bisect: the same `row.marko` compiled against `@marko/runtime-tags@6.1.23` emits the subscribed `_or` shape, and `@6.1.24`, the release carrying "collapse single-source intersections" (#3310), emits the collapsed one.
