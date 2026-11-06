---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › rendererKey
---

# Tell apart attribute tag loop contents in a dynamic tag

`rendererKey` tells two instances of one content section apart by their owner, but the contents an attribute tag `<for>` creates share both: one section id, and the template's scope as owner, since the loop has no section and passes each row's params through local closures instead. So a dynamic tag switching between two `<@item>` contents from the same loop sees no change, keeps the old branch, and only updates its closure values: state the first item's content held (a `<let>`) carries over to the second. Give each row's content an identity `rendererKey` can compare (or fold its local closure values into the key), so switching rows renders the new content fresh, in client renders and on a resumed page.

Check: with `tags/tabs.marko` = `<let/sel=0/><button id="swap" onClick() { sel = 1 - sel }>swap</button><${[...input.item][sel].content}/>`, render `<tabs><for|name| of=["alpha", "beta"]><@item><let/n=0/><button class="bump" onClick() { n++ }>${name} ${n}</button></@item></for></tabs>` as a fixture with steps `[{}, bump, swap]`: after the swap the button reads "beta 1" (an `UPDATE` of the text node) where "beta 0" is expected.
