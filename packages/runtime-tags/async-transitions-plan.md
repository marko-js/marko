# Async Transitions

Async transitions keep the page steady while it waits on async work. When a
state change causes an `<await>` tag to start fetching a new promise, the
parts of the page affected by that change keep showing what they already
show. Everything else stays live and interactive. Once the promise resolves,
all of the affected updates — the new awaited content _and_ every other DOM
change caused by that state change — appear together in one atomic update.

For example, given a search page where typing updates `query`, a results
list renders from `<await(search(query))>`, and the heading shows
`Results for "${query}"`: updating `query` starts the search immediately,
but the heading and the old results stay on screen (no loading flicker)
until the new results arrive, at which point the heading and the list update
together. Meanwhile an unrelated counter elsewhere on the page keeps
updating normally.

This is the default behavior for `<await>` updates in the browser. A
placeholder (`<try @placeholder>`) is only shown when the await renders for
the first time and there is no previous content to hold on to.

## Background: how Marko updates the DOM

A few terms this document builds on:

- A **scope** is a plain object holding one rendered template instance's
  data: its state values, and references to the DOM nodes it manages.
- A **signal** is a compiled function that runs when a value changes. It
  receives the scope, stores the new value, and calls the other signals that
  depend on it. Compiled templates are wired together entirely out of
  signals — there is no virtual DOM or diffing; each dynamic piece of the
  template has a signal that knows exactly which node it updates.
- A **branch** is a section of the page that can appear, disappear, or
  repeat — the body of an `<if>`, one iteration of a `<for>`, the content of
  an `<await>`. Each branch has its own scope and its own DOM fragment.
- A **flush** is one round of update processing. State writes (from an event
  handler, a resolved promise, etc.) are batched: they schedule a flush on
  the microtask queue, and the flush runs every affected signal before the
  browser paints.

Two properties of this system matter here:

1. State propagation is **eager**. The moment state is written, the new
   value is stored and derived values recompute from it during the flush —
   `<await>` promise expressions always fetch with the newest inputs, and
   async work starts immediately. (What user code can _observe_ of a value
   that is mid-transition is a separate question — see "Pending values are
   not observable" below.)
2. DOM output is **deferred**. Signals compute during the flush, but the
   actual writes to the document happen at the end of the flush, through
   _render effects_ (next section). That gap is what makes it possible to
   finish a flush and decide to hold its output.

## Render effects

A **render effect** is the DOM-writing part of a signal, compiled into its
own function. The compiler separates each signal's statements into:

- computation and wiring (store values, call dependent signals) — runs
  inline during the flush, and
- observable output (setting text, attributes, style rules) — hoisted into a
  render effect that the signal _queues_ instead of running.

```js
// `<div>${count}</div>` plus a dependent tag compiles to:
const $count__render = /*@__PURE__*/ _render(($scope) =>
  _text($scope.textNode, $scope.count),
);
const $count = _let(5, ($scope) => {
  $count__render($scope); // queues the DOM write
  $count__closure($scope); // propagates to dependents
});
```

`_render(fn)` wraps the effect once, at module load, and returns a function
with the same shape as a signal. Calling it queues `fn` (plus the scope, and
a value for effects whose input isn't stored on the scope, such as an
awaited result) onto the current flush's list. At the end of the flush the
list runs, applying all DOM writes just before the browser paints. When a
signal consists of nothing but its render effect, the wrapper simply _is_
the signal — no extra function in between.

A queued render effect **reads the scope when it runs**, not when it was
queued. Run it now and it writes the current state; hold it and run it next
week and it writes whatever the state is then. This one property carries
most of the design: holding work for a transition is just _keeping the
function and running it later_.

Branch changes work the same way, split inside the runtime: when an `<if>`
switches or a `<for>` reorders, the new branches are created and their
scopes set up immediately (off-screen), while the DOM swap — inserting the
new branch, removing the old one — is queued as a render effect. Each
conditional or loop keeps track of which branch the document currently
shows, so the eventual swap goes directly from what's visible to the latest
target, even if the state changed several more times in between.

Error boundaries are the one exception: when rendering throws, the `<try>`
boundary swaps in its catch content immediately, so nothing else queued for
the failed content runs.

## Transitions

A **transition** represents one round of pending async work: the promise(s)
an `<await>` is waiting on, plus all of the held output that should appear
when the wait is over.

**Starting.** During a flush, if an `<await>` receives a new promise while
it has content on screen — or while its first load is still pending, the
placeholder showing — the flush creates a transition (one per flush — every
state write batched into the same flush shares it, which matches how an
event handler's writes naturally belong together). At the end of the flush,
instead of running the queued render effects and effects, the transition
takes ownership of them: they are _held_. The screen keeps showing what it
showed (committed content or the placeholder). We call the state values
written by that flush, and the held functions, **entangled** with the
transition. Only an await's very first render ever shows a placeholder,
and that initial flush never entangles; a superseding update during that
first wait holds its output until the newest promise resolves, at which
point the reveal and the held updates commit together.

**Staying held.** While the transition is pending, other flushes happen
normally — unrelated state commits to the DOM as usual. If a later flush
queues a render effect that is already held, it just stays held; since
held work reads state when it finally runs, it needs no updating. A held
_plain effect_ re-queued by a later flush is judged by that flush: if the
flush wrote entangled state (even when derived values dirty-check short of
the await, so it never reaches it), its re-queues stay held with the rest
of the transition's work; if the flush is genuinely unrelated, the effect
runs now — a fresh observation of the displayed world (a mixed effect
reads the displayed entangled value next to the unrelated value that
changed) — and still replays at commit to catch up to the released
values. Writing an entangled value again re-fires the await with the
newest value: the new promise replaces the old one (a stale promise that
resolves late is ignored), and everything stays held until the newest
promise settles.

**Pending values are not observable.** While a transition is pending, the
values it entangled read as what the document still displays — everywhere
user code can look. The displayed value _rests on the scope property
itself_; the latest parks in a companion slot and is swapped onto the
property only for the render phase of each flush, where derived values
recompute and promise expressions run, so the machine keeps working
eagerly with the newest state while render effects, plain effects, and
event handlers all observe the screen's reality. A newly shown branch that
renders an entangled value therefore displays the old value with no
special casing — there is nothing newer for it to accidentally read.
(Effects queued by the entangling flush itself never run early at all —
they are held, and read the latest at commit after the values are
released.)

A write while pending stays visible through its own tick — a handler reads
its own assignment — and its queued signal carries it into the next render
phase; afterwards the displayed value rests again. Because such a write
lands on the plain property while the displayed world is up, recording it
also syncs the marked value's parked latest: the next flush's swap then
shows the write rather than restoring the stale latest over it.

A write to a marked value dirty-checks against the pending latest — the
state the world is heading toward — not the displayed value. A write equal
to the latest is a no-op for downstream: nothing re-fires (no duplicate
fetch, no superseded promise restarting the wait), though the write stays
visible for its own tick before the flush re-rests the displayed value. A
write that differs from the latest proceeds even when it matches the
displayed value, so a revert back to what the screen shows supersedes the
pending update and wins. One consequence is deliberate: a handler that
reads an entangled value computes from what the user sees. Clicking a +1
button twice against a screen still showing 0 produces 1, not 2 — the
second click acts on the displayed 0, and its write is absorbed into the
already-pending 1.

Every render effect that runs while displayed values rest is remembered —
deduped by function and scope — and re-applied at commit so it catches up
to the released values. Everything stays a plain data property throughout;
scopes never change shape, and reads cost nothing.

**Settlement.** Every participating await counts toward the transition, and
each settles exactly once — by resolving, by rejecting, or by its region
being removed. All three are the same operation: the settlement's callback
(a resolved await's reveal, a rejected await's catch) is deferred, and only
when the _final_ participant settles does the transition commit, running
every callback in settlement order. Superseding a pending await replaces
its promise without settling anything (a stale promise that settles late is
ignored), so each await contributes one settlement no matter how many times
it re-fires. If two pending transitions ever meet at the same await, they
merge into one, combining their participants and held work. A committed
transition is terminal: a settlement arriving after the commit (for
example, an await that resolved after its region was removed) runs its
callback immediately and can never re-hold or re-commit.

**Committing.** When the final participant settles, the transition commits,
all in one flush before the browser paints:

1. release the entangled values (the latest value is simply the live
   property again, with nothing left to swap),
2. re-queue every held render effect, render the awaited results into their
   `<await>` bodies, and re-queue the remembered effects that had written
   previous values — all of which apply together at the flush's end,
   reading the released state,
3. release the held side effects (scripts, event wiring) at the flush's
   end — after every queueing the commit itself caused has landed,
   including ones deferred through queued renders — so each runs exactly
   once, with fresh queueings superseding their held copies.

If another transition is still pending, its values stay swapped during that
final application, so a re-applied effect that also reads one of them keeps
writing what that transition displays — and is remembered again for _its_
commit.

**Rejection.** A rejection settles its await; the catch defers with the
other settlement callbacks. At commit the held work applies first — so the
document reflects the state that produced the failing promise — and then
the nearest `<try>` boundary renders its catch content. With several
rejected awaits, each live boundary catches its own error in settlement
order; a callback whose boundary an earlier catch already destroyed is
skipped.

**Removal.** If the part of the page containing a pending `<await>` is
removed by some other update, that await settles with nothing to apply and
its in-flight promise is forgotten. Removing one of several participants
releases nothing; removing the final one commits immediately, releasing the
held updates elsewhere on the page.

**Transitions are browser-only.** Server rendering streams awaits and
placeholders exactly as it always has, and nothing of a transition —
objects, value marks, held work — is ever serialized. A transition exists
only in the browser, created when client-side state re-evaluates an
await's promise expression; when that happens while the server is still
streaming the awaited content, the client-side transition simply adopts
the eventual reveal as its resolve.

## Eager updates during a hold

Some output must reach the screen even while a transition is holding the
flush it belongs to — a value echoing what the user is doing right now, a
pending indicator flipping on. For this the queue has an **eager** channel:

- A render queued through `queueEagerRender` is flagged eager, and the flag
  is inherited — any renders, render effects, and side effects it queues
  while running are eager too.
- Eager render effects (and eager side effects) collect on their own lists,
  which apply at the end of every flush, whether or not the rest of that
  flush's output was taken by a transition.
- Eagerly queueing a render effect that a transition already holds applies
  it immediately _and_ leaves it held, so the transition still re-applies it
  with the final state at commit.
- When an eager render effect reads an entangled value, the usual audience
  rule applies: it gets the value still on screen and re-runs at commit.
  Values written by an eager render are never recorded as entangled — even
  when the write lands in an entangling flush — so their new content shows
  right away. A node can therefore mix both — its live parts update now,
  its held parts stay consistent with the rest of the page, and everything
  converges at commit.
- Eagerness lasts for the flush it was queued in; the next ordinary queue of
  the same render is ordinary again.
- Two entry points feed the channel: `queueEagerRender` marks a _signal_
  run (and, by inheritance, everything it queues) as eager, while
  `queueEagerRenderEffect` queues one structural _output_ step directly —
  a placeholder dismissal or detached-await re-attachment that must reach
  the screen this flush regardless of any hold.

This is what lets a template opt specific spots into showing the newest
state during a transition: exactly the reads wired to an eager source update
mid-transition, and everything else holds.

## Cost when transitions aren't used

Everything above activates only when it can matter. The compiler emits an
`_enable_transition()` call only for `<await>` tags whose promise expression
depends on state that can change in the browser — the same condition under
which optimized output emits the client-side await helper at all. And
`_enable_transition` is the sole root of the subsystem at runtime: the hold,
mark, and commit machinery is reachable only through the hooks it installs
(the flush-end step, the queueing `_render` implementation, the await
transition handler, write recording), each a no-op or pass-through until
then. A bundle where no template enables transitions therefore contains
none of the machinery — regardless of how clever the bundler's dead-code
analysis is — and a flush pays a single no-op call. Until enabling,
`_render` wrappers apply their effect immediately instead of queueing, so a
template with no client-updating awaits does one extra function call per
DOM write group and nothing else. `_render` calls are also marked pure, so
a bundler can drop render effects whose signals are never used.

## Planned additions

- **`<action>`** — a tag providing a function value for event handlers. Each
  invocation opens an _act_, and a transition started by the act's state
  writes belongs to that act: an async action body keeps both pending until
  its promise settles, so held output commits when the work the user set in
  motion is done. The action value's `pending` property is a live boolean
  driven through the eager channel, for inline pending indicators
  (`<if=save.pending>`) that appear and disappear mid-transition.
- **`<draft>`** — a value derived from another state value, rendered through
  the eager channel. Reads of a draft always show the latest state, so a
  draft acts as a live window onto a value whose other output is held — for
  example `<draft/liveQuery=query/>` keeps a "Searching for …" line echoing
  keystrokes while everything derived from `query` waits for results.
  Assigning to a draft records an act-scoped guess: it shows immediately,
  and when the act settles the draft re-derives from its confirmed source —
  the basis for optimistic UI, where a guessed list entry appears at once
  and is replaced by the server-confirmed truth in the same moment the
  act's held output commits. Draft writes never entangle a transition.
- **Abort on supersede** — expose an abort signal to the promise expression
  so a superseded fetch can be cancelled outright.
- **Compile-time trimming** — signals whose inputs can never change in the
  browser only run during initial, off-screen setup, so the compiler can
  keep their DOM writes inline; render effects for an element's attributes
  could also be merged into one function per element.

## Open questions

- **One hold system.** The placeholder machinery parks renders and effects
  on `<try>` branches while a first-render await is outstanding
  (`PendingRenders`/`PendingEffects`, the pending flag, a branch walk per
  render), and transitions hold render effects and effects until a promise
  settles. Both are "park work until an await settles." Modeling a
  first-render await as a transition that commits into a placeholder
  boundary could leave a single system — the open work is mapping what that
  means for resumed pages, where the server may still be streaming the
  awaited content and the placeholder state is reconstructed from serialized
  markers rather than built in the browser.
- **Re-running effects that observed displayed values.** An effect that
  runs while a transition is pending (a fresh mount, an unrelated re-run)
  observes the displayed value of entangled state, and nothing re-fires it
  when the transition commits — from its dependency graph's perspective the
  value never wrote, so its observation quietly goes stale until one of its
  dependencies writes again. The render-effect replay log cannot be reused
  here: effects are not idempotent (analytics, fetches), so re-running
  every pendency-era effect at commit would duplicate real side effects.
  A precise fix needs to know which effects actually read entangled
  values — likely compiler-emitted read sets (the same information the
  compile-time trimming work needs), enabling replay of exactly the
  affected effects at commit.
- **Read-your-writes scope.** A write while pending is visible for the
  rest of its own tick, then rests back to the displayed value. An
  `<action>`'s async continuation resumes in a later tick, where the act's
  own earlier writes read as displayed again — the intended refinement
  when actions land is bracket-scoped visibility: code running inside an
  act observes its own transaction's values, across awaits, while
  everything outside the act keeps observing the displayed world.
- **Held-effect dedupe at commit.** Replayed held effects are deduped
  against effects the commit itself queued so wiring doesn't run twice. If
  effects were declared idempotent within a flush, the dedupe pass could be
  removed.

## Fixtures and tests

`transition-basic` (hold, unrelated commit, atomic commit, supersede,
handlers computing from displayed values), `transition-effects` (each
script runs exactly once per commit, stays held across writes that
dirty-check short of the await, and an unrelated write while pending runs
its effect immediately with the displayed entangled value),
`transition-first-load` (a click while the placeholder is still up holds
the flush's output and commits it atomically with the revealed content),
`transition-first-load-supersede` (two writes supersede a pending first
load; the reveal happens once, atomically, at the newest state),
`transition-first-load-supersede-streamed` (a write mid-stream, the
content chunk arriving held, then a second write — the reveal still
releases the placeholder), `transition-write-latest` (writes dirty-check
against the pending latest: an equal write fires no duplicate fetch, and
a revert to the displayed value supersedes and wins),
`transition-for` (list holds and grows atomically),
`transition-fresh-branch` (a newly shown branch displays the previous value,
then updates at commit), `transition-destroy` (removing the await region
commits immediately), `transition-multi-await` (two awaits share one
transition and commit atomically at the final resolution), and
`transition-multi-reject` (an early rejection defers its catch until the
sibling await resolves, then everything commits together) exercise the
behavior end to end; the render snapshots of those fixtures read as the
specification. The `render-effect-transitions` unit test drives the queue
directly to cover the settlement lifecycle (either settlement order,
removal of one versus the final participant, merged accounting, and late
settlement after commit) and the eager channel: holds, eager application
during a held flush, eager re-runs of held effects, displayed-value reads
with commit re-runs, and
flush-scoped inheritance.
