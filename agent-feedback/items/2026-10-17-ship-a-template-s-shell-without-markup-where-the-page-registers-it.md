---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/shell.ts › createsFromRenderer
---

# Ship a template's shell without markup where the page registers the template

A dynamic tag entry naming a template ships the template's root shell with
its markup, even where the page's bundle already registers that template.
`createsFromRenderer` needs `section.parent`, so it never covers a root, and
`patches/registered-content` skips a template's registration. The template's
own compile cannot know the page has it: `_template` is in
`pureDOMFunctions`, so the bundle keeps it only where some importer's client
code reads the import. A shell without markup there would render nothing.
A direction: the importer's compile, which knows its dom output reads the
import, tells the server the page holds the template (or the held-shell
token names it), and `patches/registered-content` builds such a template
from its renderer with the shell's setup, as it does content.

Check: `patch-shell-resident-template`'s first patch ships
`` `b;D ;<i> </i>` `` while its `dom.bundle.js` keeps `_template("b", …)`,
and `patch-dynamic-tag-template-cycle-content` ships `b`'s `<li>…` markup
beside `_template("b", …)`. In `patch-dynamic-tag-recursive-child-content`
the patch names `b`, whose `dom.bundle.js` has no `_template("b", …)`, so
that shell needs its markup.
