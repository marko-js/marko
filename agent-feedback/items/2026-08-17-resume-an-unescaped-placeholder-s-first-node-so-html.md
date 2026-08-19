---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _html
---

# Resume an unescaped placeholder's first node so `_html` replaces the whole range

`_html(scope, value, accessor)` treats `scope[accessor]` as the range's first node and `DynamicHTMLLastChild` (unset on resume) as its last, but the SSR marker (`_el_resume` after the content, `translator/visitors/placeholder.ts` html output for `$!{}`) resumes only the node preceding it: the last node of a multi-node value. A resumed page updating a multi-node `$!{}` leaves every earlier node behind. Resume the range's first node (a leading separator marker, or serialize the last-child accessor) so `_html` replaces the whole range. Persisted `$!{}` admission (`util/persisted/admission.ts` `MarkoPlaceholder` `!node.escape`) is parked on this.

Check: ssr fixture `<let/v="Hello <strong>World</strong>"/><main>$!{v}</main>` with a click step assigning `"<i>a</i> and <b>b</b>"`; the resumed update keeps `Hello ` (`INSERT … REMOVE: main > b + strong`), CSR removes both.
