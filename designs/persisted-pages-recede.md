# Persisted pages — pending-state recede: prior art and design

What should happen to **already-visible async content** when a persisted
navigation re-runs the server work that produced it? Today a matched
`<await>`/`<try>` boundary keeps showing its previous result until the new
body streams in, with no indication anything is happening; the roadmap
carries three candidate gating models for "recede to placeholder". Before
building any of them, this document surveys how every comparable system
answers the same question, distills the patterns, and lands on a
recommendation. The mechanism itself (shipping a placeholder frame keyed to
the matched try branch, reusing the boundary-body two-frame model) is
settled and cheap — **the design risk is entirely in the policy**, and the
policy space turns out to be extremely well-trodden.

## The problem, restated

| scenario                            | placeholder shown?                       | mechanism                                                                              |
| ----------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| initial load                        | yes                                      | standard SSR streaming                                                                 |
| cross-route nav (fragment swap)     | yes                                      | two-frame model ships the placeholder in the fragment                                  |
| same-route matched await re-await   | **no — stale content lingers, silently** | `_update_branch` fills the resolved body in place; the placeholder render is discarded |
| fresh await via non-fragment `<if>` | no — empty gap instead                   | detached await attaches its body when the frame lands; nothing shown meanwhile         |

Two distinct user-facing gaps hide in row three:

1. **No signal.** The user clicks item→item and _nothing acknowledges the
   click_ in the stale sections — no dimming, no spinner, no `aria-busy`.
   Until the new recommendations stream in, the page shows wrong data with
   full confidence.
2. **No structural reset.** For content where stale data is actively
   misleading (a price, an availability badge), showing the old value at
   all — even dimmed — may be worse than a skeleton.

The three gating models carried on the roadmap: (1) auto-recede only
boundaries still pending at first flush; (2) opt-in per boundary; (3)
automatic input-identity echo. The survey below evaluates all three
against what the ecosystem converged on.

## Prior art survey

### React: transitions keep stale content; identity keys opt into recede

React 18+ made "don't hide already-revealed content" the _defining
behavior_ of transitions: an update wrapped in `startTransition` will not
trigger the fallback of an already-visible Suspense boundary — React keeps
the stale UI and exposes `isPending` for indication. The docs call
replacing visible UI with a fallback "a jarring user experience"
([Suspense reference](https://react.dev/reference/react/Suspense),
"Preventing already revealed content from hiding").

Recede is expressed through **identity**, not a flag: "if you navigate to
a route with different parameters, you might want to tell React it is
_different_ content. You can express this with a `key`" — and, critically
for us: "**Suspense-integrated routers should do this automatically**"
("Resetting Suspense boundaries on navigation", same page). The framework's
own position is that parameter-keyed reset is the router's job.

Next.js teaches the same idiom as an application-level workaround: its
search/pagination tutorial wraps the results table in
`<Suspense key={query + currentPage} fallback={<Skeleton/>}>` so the
skeleton reappears exactly when the search input changes
([Next.js Learn](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination));
without the key, param navigations show stale content with no feedback
(their GitHub issues are full of both complaints — fallback flashing when
unwanted _and_ fallback missing when wanted).

### Solid: hold + signal, keyed opt-out

Solid's router bakes transitions in: navigation renders off-screen while
the old page stays visible, and `useIsRouting()` exposes a signal the docs
use for exactly the styling we lack — `<div classList={{ "grey-out": isRouting() }}>`
([solid-router README](https://github.com/solidjs/solid-router)). Forcing a
re-render (and thus fallbacks) is again keyed identity: wrap in
`<Show when={params.id} keyed>`.

### Svelte 5.36 async: pending on first render only, then a signal

The newest design in the space. `<svelte:boundary>`'s `pending` snippet
shows only "when the boundary is first created"; for subsequent async
updates the docs are explicit: "The `pending` snippet will _not_ be shown
for subsequent async updates — for these, you can use `$effect.pending()`"
([svelte:boundary](https://svelte.dev/docs/svelte/svelte-boundary)). Update
semantics are "synchronized": stale UI holds, coherently, until the async
work commits ([await expressions](https://svelte.dev/docs/svelte/await-expressions)).
This is precisely our current matched-boundary behavior — Svelte chose it
deliberately and paired it with a built-in pending _signal_, which we lack.

### TanStack Router/Query: stale-while-revalidate + deps keys + timing math

TanStack Router navigations render stale matched content while loaders
revalidate (`staleReloadMode: 'background'` default), recede is
dependency-keyed (`loaderDeps` — "when these deps changed from navigation
to navigation, it will cause the route to reload", deep-equality compared),
and — uniquely valuable for us — the pending UI has explicit **timing
policy**: `pendingMs` (default **1000ms** — don't show pending UI at all if
data arrives within a second) and `pendingMinMs` (default **500ms** — once
shown, keep it up long enough to not flash)
([data loading guide](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading)).
React Query's `keepPreviousData`/`placeholderData` is the same policy at
the data layer, built specifically because pagination "would cause the UI
to jump in and out of the success and pending states"
([paginated queries](https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries)).

React Router's own pending-UI guide never recedes content at all — it
teaches a global `useNavigation()` indicator plus per-link `isPending`
styling ([Pending UI](https://reactrouter.com/start/framework/pending-ui)).

### The HTML-first cohort: automatic CSS hooks, opt-in placeholders

This group is Marko's closest philosophical kin, and it is strikingly
uniform:

- **Unpoly** automatically sets `.up-active` on the clicked link and
  `.up-loading` on the _targeted fragment_ while a request is loading —
  stale content stays, but the author can dim/overlay it with one CSS rule.
  Structural placeholders are **opt-in and declared at the origin**: the
  _link_ carries `[up-placeholder]` with skeleton HTML (or a template
  reference), shown "instantly after a user interaction, without waiting
  for the server", and auto-reverted if the request aborts
  ([loading state](https://unpoly.com/loading-state),
  [placeholders](https://unpoly.com/placeholders)). Notably, loading
  classes are _not_ set during cache revalidation — silent SWR refreshes
  don't flash indicators.
- **Turbo** sets `[aria-busy="true"]` on a frame while it fetches and
  `[complete]` after — the community pattern is a CSS overlay/dim on
  `[aria-busy]` over the stale frame content
  ([Turbo frames handbook](https://turbo.hotwired.dev/handbook/frames),
  [Rails Designer](https://railsdesigner.com/visual-loading-turbo-frames/)).
  The accessibility dividend is built in: `aria-busy` is the _semantically
  correct_ signal for "this region is updating".
- **Phoenix LiveView** attaches `phx-click-loading` (etc.) classes to the
  triggering element until the server acknowledges, plus
  `phx:page-loading-start/stop` window events for live navigation — "the
  most trivial optimistic UI enhancements can be done in LiveView by simply
  adding a CSS rule"
  ([syncing changes](https://hexdocs.pm/phoenix_live_view/syncing-changes.html)).
- **htmx** adds `htmx-request` to the element (or an `hx-indicator`
  target) for the request duration; indicators are pre-placed HTML toggled
  by class ([hx-indicator](https://htmx.org/attributes/hx-indicator/)).

None of them blank previously-rendered content by default. All of them
ship an automatic, zero-JS-for-the-author styling hook. Structural
skeletons, where offered (Unpoly), are opt-in and origin-declared.

### The counterexample: Astro server islands

Astro's `server:defer` islands render their `slot="fallback"` placeholder
on _every_ document load, replaced when the island's HTML arrives
([server islands](https://docs.astro.build/en/guides/server-islands/)). It
is the "always recede" model — and its known UX complaint is exactly the
one the roadmap predicts for blanket recede: skeletons flash on every
navigation for content that rarely changes. Useful as evidence, not as a
model.

### The platform: hold stale until the new thing is ready — or a timeout

Chrome's **paint holding** keeps the _old page's pixels_ on screen during
same-origin navigations until the new page reaches a paint signal or a
short timeout, specifically to kill the flash-of-white
([Chrome blog](https://developer.chrome.com/blog/paint-holding)). The
browser's own navigation model is therefore: stale content visible, global
progress indicator (spinner/favicon) running, swap when ready or when a
deadline passes. Persisted navigations _remove_ the browser's free global
indicator, which raises the bar on us providing a replacement signal. NN/g
guidance supplies the human numbers: ~1s before attention drifts, looped
spinners only past ~1s, skeletons for sub-10s full-region loads
([progress indicators](https://www.nngroup.com/articles/progress-indicators/),
[skeleton screens](https://www.nngroup.com/articles/skeleton-screens/)).

## What the survey converges on

1. **Keep-stale is the unanimous default.** React, Solid, Svelte, TanStack,
   React Router, Unpoly, Turbo, LiveView, htmx, and the browser itself all
   refuse to blank previously-rendered content just because its data source
   re-ran. The roadmap's instinct to reject "recede every matched await"
   is strongly confirmed; our current in-place fill _is_ the industry
   default behavior.
2. **But keep-stale is never silent.** Every system pairs it with an
   automatic pending signal, and in the HTML-first cohort that signal is a
   class/attribute the author styles with plain CSS (`.up-loading`,
   `[aria-busy]`, `phx-*-loading`, `htmx-request`, `isRouting → grey-out`).
   This is the piece persisted pages is missing entirely, and it is cheaper
   than any recede mechanism.
3. **Structural recede is opt-in and identity-shaped.** Where frameworks
   let content fall back to a placeholder again, the trigger is "this is
   _different content_", expressed as a key/deps (React `key`, Next
   `Suspense key={query}`, Solid `keyed`, TanStack `loaderDeps`) or as an
   origin-declared placeholder (Unpoly's `[up-placeholder]` on the link).
   React's docs go as far as saying parameter-keyed resets are something
   "Suspense-integrated routers should do automatically" — direct
   endorsement of the input-echo end state (roadmap option 3).
4. **Timing policy matters as much as trigger policy.** TanStack's
   `pendingMs`/`pendingMinMs` (1000/500) and Chrome's paint-holding
   deadline both encode the same lesson: don't show pending UI for fast
   responses, and once shown, don't flash it. Unpoly adds the inverse
   lesson: placeholders should appear _at interaction time_, not at
   first-response time, or they lose their perceived-performance value.
5. **Interaction-scoped, not render-scoped.** Unpoly/LiveView/htmx bind
   loading state to the _triggering interaction_ (link, button, form).
   A signal that marks _which regions this navigation is still filling_
   reads better than one that marks "the whole page is navigating".

## Evaluating the roadmap's three options against this

- **Option 1 (auto-recede boundaries still pending at first flush)** —
  refuted as a _recede_ policy: it structurally destroys stale content for
  every slow boundary on every navigation, including unrelated ones — the
  Astro failure mode, gated only by slowness. But its _server-side signal_
  ("this matched boundary's re-await is still pending when the first frame
  flushes") is exactly the right wire-level input for the pending
  _indication_ everyone else ships. Keep the signal, drop the destruction.
- **Option 2 (opt-in per boundary)** — confirmed, as the recede trigger.
  Matches Unpoly's placeholder opt-in and the React/Next/Solid keyed
  idiom. Zero false flashes by construction.
- **Option 3 (input-echo gating)** — confirmed as the automatic end state
  (React: "routers should do this automatically"; TanStack `loaderDeps`),
  but it is a _scoping refinement_ of when recede applies, not a reason to
  recede by default, and it needs the input-identity story that doesn't
  exist yet.

## Recommendation

Three layers, shipped in order. Each is independently valuable; each maps
to unanimous precedent.

### Layer 1 — automatic pending signal (`aria-busy`), CSS-first

> **Status: deferred by decision (2026-07-09).** The `<@placeholder by=>`
> recede (layer 2) ships first; this layer is design-complete and
> unblocked, revisit after.

On a persisted apply, mark each **matched boundary whose re-await is still
unresolved** with `aria-busy="true"`, clearing it when the body frame lands
(or the apply is superseded). The server already knows the set — it is
option 1's "still pending at first flush" signal — and ships it as a small
frame entry of boundary site ids; the client resolves each to its live try
branch through the same `BOUNDARY_SITE_PREFIX` stash the possession echo
walks.

**Placement.** Unlike a `<turbo-frame>` or an Unpoly fragment target, a
matched boundary has no wrapper element — its live branch is a DOM _range_
(text-node bookends around arbitrary siblings). The rule: walk the
branch's `StartNode..EndNode` siblings and set the attribute on **each
top-level element node in the range**.

- A single-element body (the common case) behaves exactly like a Turbo
  frame: `.reviews[aria-busy] { opacity: .5 }` or a global
  `[aria-busy="true"]` rule.
- A multi-root body marks each top-level element. Dimming reads fine; an
  _overlay_ style would double up — the honest cost of having no wrapper.
  Authors wanting an overlay wrap the body in one element.
- A text-only body has nothing to mark — no regional signal (the
  document-level attribute below still covers it); not worth synthesizing
  a wrapper.
- Never the parent element (it usually contains content outside the
  boundary — marking it overclaims both visually and semantically), and
  never `aria-busy` on `<html>` (a partial update is not "the whole
  document is busy").

Clearing has exactly three edges: the boundary's own body fills apply
(`_update_branch`, same elements), a superseding apply begins (the
`bumpNavEpoch` moment — an aborted navigation's marks must not linger), or
the full-navigation fallback replaces the document.

Additionally set a document-level **data** attribute (e.g.
`data-marko-navigating` on `documentElement`) for the global-indicator
case, mirroring `phx:page-loading-start`/`useNavigation` — owned by the
run router (navigation lifecycle), while the applier owns the regional
truth.

- Authors get Unpoly/Turbo-grade loading UX with one CSS rule and zero
  JavaScript — squarely the platform-first, low-JS vision.
- `aria-busy` is the semantically correct accessibility signal — it tells
  assistive tech "this subtree is being updated, defer announcing it",
  which is exactly right for stale content mid-replacement (and is how
  Turbo uses it on fetching frames). Tailwind ships `aria-busy:` variants
  today.
- No content is ever destroyed, so there is no gating decision to get
  wrong and no interaction with the fork-4 matched-scope invariant.
- Mirror Unpoly's cache lesson: never set the signal for updates that
  carry no pending re-awaits (fast navigations stay signal-free apart from
  the document-level attribute).

### Layer 2 — opt-in structural recede, declared on `<@placeholder>`

> **Status: built (2026-07-09)**, pinned by the `persisted-update-recede`
> fixture: identity-unchanged navigations fill in place; identity-changed
>
> - still-pending recedes to the placeholder on frame 1 with the body
>   swapping in on its own frame; identity-changed + resolved-by-first-flush
>   ships the body alone (same-frame keyed remount, no placeholder paint);
>   a receded-then-swapped boundary returns to ordinary matched fills. The
>   client-side anti-flash hold is **not yet built** (see below). Mechanism
>   notes beyond this design: the identity stash rides reserved prefix "U"
>   (`common/accessor.ts`) as `<siteId> <identity>` and echoes into the same
>   `"!"`-keyed map as the pending half (value `"=" + identity`; pending's
>   `"1"` wins); a recede restores the pending-echo stash client-side, so a
>   navigation that supersedes it mid-recede takes the existing
>   markup-delivery path; identities compare by string form over the wire
>   (same author discipline as `<for by=>` string keys).

The opt-in should live on the boundary's existing **`<@placeholder>`**
attribute tag, not as a new attribute on `<try>`/`<await>`. Everything
about this reuse is already in place:

- The placeholder _content_ is what a recede shows — it already exists,
  authored, per boundary, and the update render already renders it (the
  in-place branch of `flushPlaceholder` currently discards that render;
  shipping it is the whole delta).
- The prior art declares pending policy _with the pending UI_: Svelte's
  `pending` snippet is a boundary property, TanStack's `pendingComponent`
  a route option, Unpoly's `[up-placeholder]` carries the skeleton itself.
  "When does this placeholder show again?" is naturally an option of the
  placeholder.
- `<@placeholder>` is shared by `<await>` and `<try>` and both flow
  through the same server machinery, so one option surface covers both —
  no separate sugar question.

The recommended option is the identity form, aligned with `<let by=>`:

```marko
<try>
  <@placeholder by=input.productId>
    <reviews-skeleton/>
  </@placeholder>
  <reviews-list reviews=await(getReviews(input.productId))/>
</try>
```

`by=` names the identity whose _change_ means "the old body is different
content" — exactly the React `key` / Next `Suspense key` / Solid `keyed` /
TanStack `loaderDeps` idiom, in one word, with the same meaning `<let
by=>` gives it (a key that resets the thing it annotates). Mechanically
this is simpler than the roadmap's "automatic input-identity story":
the serialized identity rides the boundary's existing site stash (the
`"!"`-prefixed echo entries carry sentinel `"1"` today — the value slot is
free to carry the identity), the client echoes it back in `x-marko-have`,
and the server recedes only the boundaries whose identity differs from
the echo. Author-declared identity turns option 3 from "the most work"
into a small extension of shipped machinery. (Echoed identities are
bounded — opted-in boundaries only — and update responses are typically
uncacheable, so the cache-key caveat from the T2 digest design barely
applies; note it per-route regardless.)

Whether a _keyless_ form ("recede on every update where the re-await is
slow") is needed at all is doubtful: a slow re-await whose identity did
not change is precisely the case where keep-stale is right (same content,
about to be confirmed), which is why the survey's frameworks all key
their resets. Start with `by=` only; add a keyless escape hatch only if
a real shape demands it.

Gating within the opt-in, per the timing prior art:

- **Server-side fast-path suppression**: even when `by=` differs, if the
  re-await resolved by first flush, ship ordinary fills — no recede. This
  is TanStack's `pendingMs` expressed with zero client timers (the
  "threshold" is first-flush time), and it makes the opt-in safe to
  sprinkle liberally.
- **Client-side anti-flash** (_not yet built_): once a placeholder is
  swapped in, hold it for a minimum display time (~300–500ms, TanStack
  defaults 500) before applying the body frame. This is the one place a
  small client timer is genuinely warranted; it should be the only one.
  Deferred from the initial implementation for test determinism (the
  harness applies frames synchronously); the exposure is bodies resolving
  shortly after first flush — the fast-resolve case is already covered by
  same-frame delivery.
- Recede implies teardown of the receded body's scopes (the fork-4
  carve-out): destroy the branch like a fragment swap does, don't just
  remove DOM — opting in is also the author's acknowledgment that client
  state inside the boundary does not survive navigations that change the
  key. (The initial implementation shares the matched-path body swap's
  recorded teardown edge — DOM removed, scopes not destroyed; see the
  roadmap's placeholder-effects note.)

The recede itself ships the placeholder as a frame keyed to the matched
try branch (reset live body → placeholder via the existing
`applyBoundaryBody`/placeholder-branch machinery), and the body frame
swaps it back through the existing path. This same frame shape fixes the
fresh-non-fragment empty-gap row of the table for free (a fresh detached
await's placeholder ships and shows — that is initial paint, not recede,
and is uncontroversial).

### Layer 3 (future) — automatic identity

With `by=` shipped, "fully automatic" recede (no authored key — the
compiler derives the boundary's input identity from its referenced
bindings, the refinement React says routers should do automatically)
becomes an additive default worth revisiting alongside the T2 digest
work, which explores the same identity/echo territory. Not a blocker for
layers 1–2, and possibly unnecessary if `by=` proves ergonomic enough.

### Explicitly rejected

- **Blanket auto-recede** (any variant, including slow-only): destroys
  correct stale content for unrelated boundaries; the ecosystem
  unanimously avoids it and Astro demonstrates the complaint pattern.
- **Client-side `pendingMs` timers per boundary**: the server's
  first-flush boundary already encodes "was this fast" without shipping
  timer machinery; keep the client's only timer the anti-flash hold.
- **Global-only indication**: a page-level spinner alone fails the
  "which region is updating" question that region-scoped `aria-busy`
  answers; ship both, but the regional signal is the load-bearing one.

## Open questions for sign-off

1. ~~Confirm the layer-2 surface~~ — **decided and built (2026-07-09):
   `by=` on `<@placeholder>`**, name shared with `<for by=>` and
   `<let by=>`; no keyless form (revisit only if a real shape demands
   it).
2. Anti-flash hold duration and whether it is configurable (recommend: a
   constant, not an option, until someone demonstrates a need). The hold
   itself is not yet built — see layer 2's gating notes.
3. Whether the document-level navigating attribute belongs to marko
   (applier) or @marko/run (router). Leaning run: the applier owns
   region-level truth, the router owns navigation lifecycle.
4. View Transitions interplay: a receding boundary is a natural
   `view-transition-name` site; the recede swap and the body swap should
   both be transition-capable. Covered by
   [`persisted-pages-optimistic-transitions.md`](./persisted-pages-optimistic-transitions.md);
   no coupling needed now beyond not painting ourselves out of it (both
   swaps go through `applyBoundaryBody`, which is a single choke point —
   fine).

## Sources

- React [`<Suspense>`](https://react.dev/reference/react/Suspense) /
  [`useTransition`](https://react.dev/reference/react/useTransition)
- Next.js [search & pagination tutorial](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination),
  [loading.js](https://nextjs.org/docs/app/api-reference/file-conventions/loading)
- Solid [solid-router README](https://github.com/solidjs/solid-router)
  (`useIsRouting`, keyed `<Show>`)
- Svelte [`<svelte:boundary>`](https://svelte.dev/docs/svelte/svelte-boundary),
  [await expressions](https://svelte.dev/docs/svelte/await-expressions)
  (`$effect.pending`, synchronized updates)
- TanStack Router [data loading](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading)
  (`pendingMs`/`pendingMinMs`, `loaderDeps`, `staleReloadMode`);
  TanStack Query [paginated queries](https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries)
  (`keepPreviousData`)
- React Router [Pending UI](https://reactrouter.com/start/framework/pending-ui)
- Unpoly [loading state](https://unpoly.com/loading-state),
  [placeholders](https://unpoly.com/placeholders),
  [.up-loading](https://unpoly.com/up-loading)
- Turbo [frames handbook](https://turbo.hotwired.dev/handbook/frames);
  [visual loading states for Turbo Frames](https://railsdesigner.com/visual-loading-turbo-frames/)
- Phoenix LiveView [syncing changes](https://hexdocs.pm/phoenix_live_view/syncing-changes.html)
- htmx [hx-indicator](https://htmx.org/attributes/hx-indicator/)
- Astro [server islands](https://docs.astro.build/en/guides/server-islands/)
- Chrome [paint holding](https://developer.chrome.com/blog/paint-holding)
- NN/g [progress indicators](https://www.nngroup.com/articles/progress-indicators/),
  [skeleton screens](https://www.nngroup.com/articles/skeleton-screens/)
