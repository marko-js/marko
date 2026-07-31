# Async transitions (design)

This document describes async transitions: what problem they solve, how they are intended to behave, and how they build on [deferred render effects](RENDER-EFFECTS.md). Transitions are **not implemented yet** — deferred render effects are the shipped groundwork, and this records the agreed design for the rest. It assumes you know Marko as a user but not its internals.

## The problem

When an `<await>` first renders, its enclosing `<try>` shows the placeholder until the promise resolves. That is the right experience: nothing was on screen yet, and the placeholder is the loading state the author wrote for it.

The problem is what happens when the value an existing `<await>` is waiting on _changes_:

```marko
<let/userId=1/>
<button onClick() { userId++ }>Next user</button>
<try>
  <await|profile|=fetchProfile(userId)>
    <profile-view=profile/>
  </await>
  <@placeholder>Loading…</@placeholder>
</try>
```

The first render shows "Loading…", then the profile — as it should. But clicking "Next user" hands the `<await>` a new promise, and today that tears the rendered profile back down to "Loading…" until the new fetch resolves. The user had a complete, working view and loses it in exchange for a spinner, even though nothing on screen was wrong — it was just about to be replaced.

A transition inverts that for exactly this case: the update starts the new fetch in the background while the current profile stays on screen — fully rendered and fully interactive — and the page switches straight from the old profile to the new one when it is ready, in one step. The placeholder never reappears; the content the user already has _is_ the loading state.

So the boundary is: an `<await>` rendering for the first time shows its placeholder (there is nothing to keep on screen); an update that changes what an already-rendered `<await>` is waiting for becomes a transition.

## What a transition is

A transition is an update whose commit is delayed past the async work it starts.

With deferred render effects, every update already runs in two parts: computing (state advances, the reactive graph runs, DOM writes queue) and the commit (the queue is applied). Today these always happen back to back. A transition keeps the computing part exactly as it is — assigning `userId` still runs the update, which hands the `<await>` its new promise and starts the fetch — but hands ownership of the queued writes to the transition instead of applying them at the end of the update. The DOM changes the update implies (reverting the boundary to its placeholder, and later replacing it with the resolved content) stay queued; the resolved content renders off the page when the promise settles, exactly as deferred async content already does; and then the transition applies its queue — one atomic commit — taking the page from the old profile directly to the new one. The intermediate placeholder state is simply never applied.

Nothing about this requires new rendering machinery. The state has already advanced; the new promise started when the update ran; the queue already knows every DOM change. The only new concept is _who_ applies the queue, and _when_.

## Rules the design commits to

These rules were settled while building the groundwork, and the shipped runtime already behaves consistently with them wherever it can be observed.

**1. State changed by a transition must not be visible until it commits.** If a transition sets `userId = 2`, no on-screen content may reflect that before the commit — including the still-visible old profile, even if it renders `userId` somewhere itself. The runtime marks content the transition is retiring, and rendering _from that transition's own update_ into it is skipped. The old view keeps showing the old values.

**2. Everything not touched by the transition stays live.** The old UI is not a screenshot. Until the commit, its event handlers fire and unrelated state updates render into it immediately, as ordinary non-deferred updates:

```marko
<let/count=0/>
<button onClick() { count++ }>clicked ${count} times</button>
```

That button keeps working — and its count keeps updating on screen — while a transition elsewhere on the page is pending.

Only updates entangled with the transition's own state are held back; independent updates commit at the end of their own update cycle, exactly as without transitions. This is why the "skip renders into retired content only for the retiring update" rule exists in the shipped runtime: another update must still be able to render into the old view while it remains on screen.

**3. Commits are atomic and ordered.** A transition's queue is applied in one synchronous pass, and when several transitions are pending, they commit in the order they started. Applying commits out of order could show a state the user's actions never produced.

**4. A queue that spans updates needs deduplication.** Today a queue lives for one update and replays every write; that is correct because each target is written at most a handful of times per update, and measurement showed deduplication would have saved almost nothing. A transition's queue is different: it can absorb several updates before committing (the transition's own update, plus later entangled updates that must also wait). At commit, only the last write per target should apply. The planned scheme records a per-target slot on the scope so an existing record can be overwritten in place, keeping the queue flat and the commit a single pass; the details are recorded in `agent-feedback/perf.md`.

## What already works toward this

The shipped runtime provides, and tests, the pieces a transition will drive:

- Every observable DOM write and structural change routes through a queue with a defined commit point ([RENDER-EFFECTS.md](RENDER-EFFECTS.md)).
- Outgoing content stays fully alive until its removal is applied — nodes attached, scopes live, handlers firing — so an on-screen view can outlive the update that replaced it.
- Retired content is marked per update, so renders and replayed effects from the retiring update skip it while other updates still reach it.
- New content renders and starts its async work while detached, and inserts as one finished piece.
- The commit re-enters rendering when applying the queue triggers more (inserting deferred content can set up newly created branches), draining until quiet.

## What remains

- **Ownership.** An API and bookkeeping for a transition to claim an update's queue instead of letting the update apply it, and to apply it when its async work settles.
- **Deduplication** of queues that span updates (rule 4 above).
- **Committed reads.** An event handler on the old view must read the values the old view shows, not the already-advanced state a pending transition wrote. Handlers and effects need a way to read the committed value of a piece of state while render code reads the latest.
- **Effect timing.** Effects belonging to held content (its `onMount`, its event wiring) must run at its commit, not at the update that created it.
- **Interactions with `<try>`/`@catch`** when the awaited work fails: the transition must be discarded — its queue dropped, its created content destroyed — without ever having touched the visible page.
