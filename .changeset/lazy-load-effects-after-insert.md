---
"@marko/runtime-tags": patch
---

Run a lazily-loaded branch's setup effects only after it is connected. When a lazy tag loads with pending input values its insertion is deferred until those values resolve, but its setup -- and the effects it queues, such as `<script>` content and event-attach effects -- previously ran before the branch's nodes were inserted. Setup now runs in that same deferred render, so its effects run only once the branch is connected, whether or not a `<try>` ancestor is present.
