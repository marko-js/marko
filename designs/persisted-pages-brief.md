# Persisted Pages — a one-page brief

**Server-first navigation for Marko apps: keep the page, patch the
difference.**

Persisted pages are an opt-in mode (`marko({ persisted: true })` in a
[@marko/run](https://github.com/marko-js/run) app) where navigating doesn't
load a new page. A link click or form submit fetches the target URL from a
**stateless** server, which streams back a minimal patch — only the values
that differ — and the client applies it to the page that's already alive.
The mental model: **a navigation is the current page receiving new input**,
the same semantics a component already has when its parent re-renders it.
It's one flag; there is no client data layer, no API routes, and no
app-owned router code.

## What it buys you

- **SPA feel on an MPA architecture.** The server stays the only place data
  is fetched and pages are rendered. App code is templates and request
  handlers; the router, content negotiation, and patching are generated.
- **Client state survives navigation by construction.** Focus, half-typed
  inputs, open widgets, component state — the compiler's ownership analysis
  excludes client-owned values from patches; nothing is manually lifted or
  restored.
- **Patches, not pages or fragments.** Measured on the benchmark shop
  (production build): item page **2.4 KB** patch vs 12.5 KB document; search
  **16.1 vs 66.5 KB**; a cart mutation **0.3 vs 1.3 KB**.
- **Server code never ships.** Patches are placement-only — derived values
  arrive computed. A search page can import its whole catalog and ranking
  code; none of it reaches the client.
- **Plain HTML forms.** GET forms (filters) and POST + redirect (mutations)
  are intercepted and applied in place — a working cart needs zero client
  code.
- **Streaming end to end.** Patches stream frame-by-frame like Marko's
  streaming SSR; async sections resolve progressively mid-navigation.
- **Always a fallback.** A build-hash mismatch, error, or non-capable route
  falls back to an ordinary full navigation. Crawlers get plain documents,
  byte-identical to a non-persisted build's output.

## How it works, briefly

Marko already compiles templates into fine-grained server (streaming HTML)
and client (targeted DOM updates) programs, and hydrates by _resuming_
server state rather than re-rendering. Persisted pages extend that: the
compiler splits serialization into a structural spine (resume markers,
always emitted) and values (emitted only where a stateful parent — or now,
the network — needs them), and emits two extra lazily-loaded artifacts per
template: a **merge program** (per-section `(patch, live)` functions that
place patched values into live scopes) and a **render-graph module** (what's
needed to build newly-appearing regions client-side). On navigation, the
server renders the target page in update mode — newline-delimited frames of
scope values keyed to ids both sides derive from the same compile — and the
client pairs patch scopes to live scopes top-down and applies sparse merges
through the existing signal graph: absent means unchanged; client-owned
means untouched. Cross-route navigations swap content at the shared-layout
boundary; fresh subtrees are constructed server-first. Nothing about the
page is stored server-side, so any instance can answer any navigation.

## Compared to other answers to the same problem

|                                         | Client JS for pages                 | Navigation payload                       | Client state across nav                                    | Server-only code stays server-only | Backend coupling |
| --------------------------------------- | ----------------------------------- | ---------------------------------------- | ---------------------------------------------------------- | ---------------------------------- | ---------------- |
| SPA + JSON API (React Router, TanStack) | full render code + data layer       | data JSON                                | yes (app-managed)                                          | no (render code ships)             | any              |
| RSC / Next App Router                   | React runtime + client components   | serialized component tree                | yes (client components)                                    | yes                                | React/Node       |
| htmx / Turbo / Unpoly                   | tiny generic client                 | HTML fragments (full markup re-sent)     | lost in swapped regions (morphing heuristics recover some) | yes                                | any              |
| Islands (Astro)                         | per-island                          | full document (navigation not addressed) | no                                                         | yes                                | any              |
| **Persisted pages**                     | interactivity only (slim hydration) | changed values only                      | yes (by compiler analysis)                                 | yes                                | Marko            |

- **vs. SPAs:** no duplicated data layer, no client rendering of pages, no
  loading-state choreography — but also no offline/optimistic-first
  architecture; the server is in the loop for every navigation.
- **vs. RSC:** the closest analog. RSC re-sends the rendered tree
  (structure + props) and diffs it client-side; persisted patches send only
  changed leaf values against a graph both sides already share, and
  structure only when branches actually change — typically smaller and
  cheaper to apply. RSC is mature with a large ecosystem and richer
  mutation story (server actions); our form interception covers the
  request/PRG subset today.
- **vs. HTML-over-the-wire:** those work with any backend and are hard to
  beat for simplicity. But fragment swaps replace DOM, so state inside the
  swapped region (focus, inputs, players) needs morphing heuristics that
  match by DOM shape; persisted pages update through the framework's
  identity model (keyed scopes), so preservation is exact, and payloads
  don't re-send markup.

## Honest costs

- **Marko-only**, and the compiler is doing the heavy lifting — this is not
  a bolt-on library.
- **Initial documents carry more resume markers** (the spine that makes
  precise patching possible): +16% gzip on a typical page, +53% on a
  deliberately hole-dense worst case. Planned marker-suppression levers
  target exactly this.
- **Eager JS sits above the non-persisted baseline** (benchmark search page:
  9.1 kB gz vs 4.5) — the client router plus what interactivity needs; the
  merge programs and render graphs load with the first navigation, not up
  front.

## Status

Working end to end on a real-app benchmark under continuous browser
validation: streaming updates, cross-route swaps, GET/POST form
interception, history/scroll, build-identity gating, slim hydration.
In progress toward "complete": payload pruning against client-held state
(`x-marko-have`), marker-cost suppression, and remaining
controllable-input edge coverage. Route CSS already arrives with
navigations (the update entry's module graph carries and awaits it),
document titles/head holes follow them, and everything runs under a
strict nonce-based CSP — no `unsafe-eval`/`unsafe-inline` — when the app
plumbs `$global.cspNonce` (frames fall back from eval to nonce-inherited
script elements, the same trust model as the document's own resume
scripts). Design docs live alongside this file in `designs/`.
