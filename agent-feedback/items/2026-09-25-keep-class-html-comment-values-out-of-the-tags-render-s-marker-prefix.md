---
type: bug
impact: low
effort: med
site: packages/runtime-class/src/runtime/html/helpers/escape-comment-placeholder.js › escapeCommentHelper
---

# Keep class `<html-comment>` values out of the Marko 6 render's marker prefix

In an interop page the Marko 6 render's inline walker claims every comment starting with its `State.commentPrefix` (`runtimeId` + `renderId`, `Ms` in the `fixtures-interop` renders), but the Marko 5 `<html-comment>` placeholder helper escapes only `>`. So a class template's comment value that spells a Marko 6 resume comment is adopted as a marker in place of the real one, and the Marko 6 content stops updating its node. Direction: break a leading Marko 6 prefix here the way `packages/runtime-tags/src/html/content.ts` › `_escape_comment` does, reading it from the interop `$global` (`packages/runtime-tags/src/html/compat.ts` › `ensureState`), and follow whatever that helper settles on for prefixes of other renders.

Check: a `fixtures-interop` fixture whose class `template.marko` renders `<tags-counter count=state.count/>` (the component from `interop-basic-class-to-tags`), then `<html-comment>${"Ms$1 #text/1"}</html-comment>` and `<init-components/>`, with steps `[{}, click #tags]`: after `pnpm run test:update -- --grep "<fixture> "`, `render.debug.md` shows no change after the click (the button stays `0`) and `debug › csr` fails because it shows `UPDATE: #tags::text "0" => "1"`.
