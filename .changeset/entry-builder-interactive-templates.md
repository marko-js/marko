---
"@marko/runtime-tags": patch
"@marko/runtime-class": patch
---

The interop client entry now only ships runtime for templates that actually run on the client, dead code eliminating server only templates of either API and the runtime they would otherwise pull in:

- A Tags API (Marko 6) page that renders only inert/server only Class API (Marko 5) children no longer forces client hydration, so it ships no Marko 5 runtime. Stateful class children continue to hydrate through the Marko 5 runtime independently.
- An _interactive_ Tags API page that renders inert Class API children now inlines its hydrate render with those children stripped, so it ships its own client interactivity without pulling in the Marko 5 runtime for the inert children. Stateful (or event-bound) class children it renders are kept and still hydrate.
- When a Class API page renders interactive Tags API templates, the client entry imports those Tags API island templates directly instead of the Class API entry root, so a server only class root (and its Marko 5 runtime) can be dropped.

To make the above possible, an inert Class API child rendered by a Tags API parent (one with no component file and no parent-bound events) is now rendered inline on the server, exactly as the Class API already renders such implicit components, instead of being given a serialized component boundary. This means it emits no resume markers, matching the client which ships nothing for it.

Pure Tags API pages are unaffected.
