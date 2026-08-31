---
type: cleanup
impact: low
effort: medium
site: packages/runtime-tags/src/__tests__/utils/capture-console.ts
---

# `captureConsole` records through a process global

The no-argument `captureConsole()` swaps `globalThis.console`, so anything that
logs while a window is open is attributed to whichever fixture happens to be
rendering. Nothing does today — the jsdom path gets its own `virtualConsole`,
the compiler reports through diagnostics, and a fixture's bundles are awaited
before its window opens — but that is a set of separate guarantees rather than
one property, and each new concurrent logger has to rediscover it.

The server render already runs in a `vm` context (`importWithContext`), so it
could take a per-realm `console` the way the jsdom path does, and capture would
stop depending on what else is running.
