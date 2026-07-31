# Deferred render effects

This document explains how Marko 6 can defer its DOM writes until the end of an update, why that ability exists, and the exact rules for when a write is deferred, applied immediately, or skipped. It assumes you know Marko as a user but not its internals.

## Background: how Marko updates the DOM

A compiled Marko template does not build a virtual DOM or diff trees. State updates run small compiled functions that write straight to the real DOM:

```marko
<let/count=0/>
<button onClick() { count++ }>${count}</button>
```

This compiles (in the readable debug build, trimmed to the relevant parts) to:

```js
export const $template = "<button> </button>";

const $count = _let("count/2", ($scope) =>
  _text($scope, "#text/1", $scope.count),
);

const $setup__script = _script("counter.marko_0", ($scope) =>
  _on($scope["#button/0"], "click", function () {
    $count($scope, $scope.count + 1);
  }),
);
```

`$scope` holds this instance's DOM nodes, keyed by accessors like `"#text/1"`. `$count` is the update function for the `count` state: assigning `count` calls it, and its body calls `_text` — a runtime helper that looks up the text node in `$scope` and sets its content, right there, as a direct side effect of running the update. There is no render tree to flush afterward; the `_text` call *is* the DOM update.

If one change fans out to several places in the page, each write happens inline, one after another, while the update is still being computed:

```marko
<let/user=null/>
<div class=user ? "signed-in" : "anonymous">
  <span>${user ? user.name : "Guest"}</span>
</div>
```

The compiled update for `user`:

```js
const $user = _let("user/2", ($scope) => {
  _attr_class($scope, "#div/0", $scope.user ? "signed-in" : "anonymous");
  _text($scope, "#text/1", $scope.user ? $scope.user?.name : "Guest");
});
```

Assigning `user` sets the `class` attribute, then the `<span>` text, in the middle of the function that computes them. In a larger app the same value can flow into other components, each running its own function like this one as the update propagates. So there is no single moment where "the state is final but the DOM has not been touched yet" — computing the update and mutating the page are interleaved.

## What a deferred render effect is

As the compiled output above shows, every DOM-writing operation — `_text`, `_attr_class`, setting any attribute, swapping an `<if>`/`<else>` branch, reordering a `<for>`, toggling a `<show>` — goes through a small helper function. When deferral is active, those helpers do not touch the DOM. The compiled template is unchanged; the helpers themselves are swapped for versions that record each call — the underlying write function plus the `($scope, accessor, value)` arguments it was given — into a queue:

```js
// what _text($scope, "#text/1", $scope.count) does with deferral active:
queue.push(text, $scope, "#text/1", $scope.count);
```

When the update finishes computing, the queue is applied in order. That application point is the commit.

Because the queue replays in the same order the writes would have happened, the final DOM — and even the sequence of mutations a `MutationObserver` would see — is the same as writing directly. Deferral changes *when* the page mutates, not *what* it becomes.

## Why this exists

Two reasons, one shipping today and one it prepares for.

**1. New content attaches finished.** When an `<if>` switches branches or a dynamic tag changes, the incoming content is created and filled in while it is still off the page, and attached as a single insertion. The outgoing content is removed at the commit, not piecemeal while the update is mid-flight. Users never see half-updated content.

**2. It creates the seam async transitions need.** Today the commit happens at the end of the same update, so behavior is unchanged. But because the queue cleanly separates "compute the update" from "apply it to the page", a future update that changes the value an already-rendered `<await>` is waiting on can finish computing, keep its writes queued until the new promise resolves, and let the content already on screen stay visible and interactive instead of falling back to its placeholder — then commit all at once. See [TRANSITIONS.md](TRANSITIONS.md) for that design. Without the queue there is no way to hold an update back: writes would land on the page as a side effect of merely computing it.

## When deferral is active at all

Deferral costs a little bookkeeping, so apps that cannot benefit never pay for it. The helpers are only switched to their queueing versions when the compiled app contains client-side async — any of:

- `<await>` rendered in the browser
- `<try>` with a placeholder (which exists to wrap async content)
- lazily loaded tags

For those apps, the compiler adds one extra module import; evaluating that module swaps the helpers. Apps without any of these keep the direct, check-free helpers, and the queue code is removed from their bundle entirely by tree shaking.

## When a write is deferred — and when it is not

With deferral active, each write decides individually. The rule is a single question: **would this write be visible right now?**

**Deferred: writes to nodes that are in the document.** If the target node is connected to the page (`isConnected`), the write is queued and applied at the commit.

**Immediate: writes to detached nodes.** If the target is not in the document — most commonly content that is still being created, or async content being prepared off the page — the write applies right away. Nobody can see it, so there is nothing to defer, and applying immediately keeps off-page content always up to date so that when it is eventually inserted (which *is* deferred), it arrives complete.

```marko
<let/show=false/>
<button onClick() { show = true }>open</button>
<if=show>
  <section class=input.theme>${input.message}</section>
</if>
```

When `show` becomes true: the `<section>` is created detached, its `class` and text are written immediately (detached targets), and one insertion is queued. At the commit, the finished `<section>` appears in a single operation.

**Structural changes split in two.** For `<if>`, `<for>`, dynamic tags, and dynamic `content` attributes, *creating* new content — building its nodes, rendering into it, starting any async work inside it — always happens immediately, during the update. Only the visible part — removing the outgoing nodes, inserting the incoming ones, moving reordered ones — is queued. For `<for>`, that means matching and creating items runs during the update, while the removal/move/insert pass runs at the commit against the current state of the page.

**Skipped: writes into content this same update is removing.** If an update swaps a branch out, the outgoing content is marked, and any further rendering *from that same update* into it is skipped — the update's state must only become visible through the committed swap, never through the content it is retiring. The mark applies only to that one update: until the commit actually removes it, the outgoing content is still on the page, fully alive, and any *other* update (say, an unrelated counter inside it) still applies to it normally. That distinction matters little today, when the commit follows immediately, but it is the behavior transitions depend on.

**Never deferred: work that runs after the commit.** Attaching event handlers, controllable input synchronization (`value:=`, `checked:=`), and lifecycle callbacks like `onMount` run in the effect phase, which comes after the queue has been applied. They already see the committed DOM; there is nothing to defer.

## The commit

At the end of every update the runtime drains its queue of pending renders, then applies the render-effect queue in order. If applying it causes more rendering — inserting deferred content can trigger the setup of a newly-created branch — those renders run and their own writes are applied too, until everything is quiet. Then effects (event wiring, `onMount`, etc.) run against the final DOM.

While the queue is being applied, helper calls made *by* the queued operations run immediately instead of re-queueing — the commit is the moment the page is supposed to change.

## What this is not

- It is not batching for performance. Writes are not merged or deduplicated; the queue replays every recorded write in order. (Deduplication becomes worthwhile only when one queue can span multiple updates — see the transitions design.)
- It is not a scheduler. The commit is synchronous, at the end of the same update that queued the writes. Nothing is delayed to a later task or animation frame.
- It does not change rendered output. Every test template renders byte-identical HTML with deferral on and off; the `render-effect-helpers` / `render-effect-helpers-async` fixture pair exercises every write helper both ways to keep that true.
