---
"@marko/runtime-tags": patch
"marko": patch
---

Make a server render's `toReadable()` lazy (it renders on first read, not on creation) and flush `pipe()` after each chunk so it streams through buffering transforms like `compression`.
