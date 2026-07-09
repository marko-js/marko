---
"@marko/runtime-tags": patch
---

Async-correctness fixes surfaced by the persisted-pages audit:

- An abort raised while a flush consumes the chunk chain (a placeholder
  flush failing its render, or an unsupported-shape guard such as the
  multiple-pending-awaits fragment limit) no longer lets the outer flush
  continue into `flushHTML` against the abort-reset state — previously an
  uncaught exception in debug builds and a junk frame line in production
  streams.
- Update responses on pages with `load=` lazy tags are valid frame streams
  again: document asset loader/trigger scripts are suppressed in update
  renders (the live page already runs its own loaders), and multiple
  script pieces per flush (ready-channel fills plus the main frame) emit
  one frame per line instead of being `;`-joined into an unparseable
  line. Previously every persisted navigation on such a page fell back to
  a full document load.
