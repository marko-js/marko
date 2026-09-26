---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/inlined-runtimes.debug.ts › WALKER_RUNTIME_CODE
---

# Keep user comments and other renders out of a render's marker prefix

The inline walker claims every comment whose data starts with `runtimeId + renderId` (`!op.indexOf(prefix)`) and reads the next character as the resume op, but `html/content.ts` › `_escape_comment` escapes only `>`. So `<html-comment>` text that happens to start with the prefix is adopted as a resume marker, and a forged node visit makes the counter write its text into the comment instead of the button. The same unanchored prefix test lets one render claim another's markers when one prefix starts the other (renderIds `cart` and `cart2`, or runtimeId/renderId splits like `M`+`a_` and `Ma`+`_`); `startRender` only checks the identifier charset. Direction: have `_escape_comment` break a leading render prefix on the server (the render's `State.commentPrefix` is available there), and reject or warn in MARKO_DEBUG when two renders on a page have overlapping prefixes.

Check: a fixture with template `<let/count=0/><button onClick() { count++ }>${count}</button><html-comment>${"M_$1 #text/1"}</html-comment><html-comment>${"M_$1 b"}</html-comment>` (the debug and optimized text accessors), `equivalent: false`, `skip_parity: true` (each build rewrites a different comment) and steps `[{}, click, click]`: `render-ssr.debug.md` shows the button stuck at `0` and a comment rewritten to `1` then `2`, while `render-csr.debug.md` counts up in the button.
