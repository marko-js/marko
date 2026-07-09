---
"@marko/runtime-tags": patch
---

Fix multiple `<style>` tags of the same flavor in one template silently dropping all but the last block's static CSS: every block resolved to the same virtual file path (`./template.marko.css`), so each registration overwrote the previous one. Later blocks now get an index suffix (`./template.marko.1.css`); the first block's path is unchanged.
