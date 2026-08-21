---
type: dx
impact: med
effort: low
site: packages/runtime-tags/cheatsheet.md › Golden rules
---

# Say in the cheatsheet that `<html-script>`/`<html-style>` escape only the closing tag

`grep -in 'escap\|xss\|html-script\|nonce\|csp' packages/runtime-tags/cheatsheet.md` matches nothing, so the offline reference an agent is told to open never mentions escaping, the `$!{...}` raw form, the two raw-text core tags, or CSP. What escaping exists guards the element boundary and nothing else: `html/content.ts` rewrites only `</script`, `<script` and `<!--` for `_escape_script` and only `</style` for `_escape_style`. So `<html-script>const cfg = { user: "${name}" }</html-script>` with `name` = `";globalThis.codePwn=1;//` renders JavaScript that runs, and the CSS analogue closes the rule and opens another, while `</SCRIPT>` in the same slot is correctly neutralised — partial escaping that reads as total. The website says "never interpolate untrusted input into `<script>`, escaping notwithstanding"; the in-repo reference should carry the same golden rule, since it is the one a contributor working offline actually has.

Check: `grep -in 'escap\|xss\|html-script\|nonce\|csp' packages/runtime-tags/cheatsheet.md` exits 1 with no output; expect a Golden-rules line naming `<html-script>`/`<html-style>`, stating that only their closing tag is escaped and that an interpolation inside them is executed as code.
