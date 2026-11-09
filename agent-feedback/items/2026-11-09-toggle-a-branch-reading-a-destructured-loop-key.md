---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/for.ts › keyed `<for>` with a destructured key read in a nested branch
---

# Toggle a branch that reads a property of a destructured loop key

In a keyed loop that destructures its key (`<for|{ name }| of=items by="name">`), an `<if>` inside the row reading a property of the key through a `<const>` (`<const/{ length }=name/>`) renders on the server, but toggling the branch off and on on the client throws `TypeError: Cannot read properties of undefined (reading 'length')`: the branch reads `$scope._["#LoopKey"].length` from a row scope whose loop key the client never set.

Check: a fixture with `<let/items=[{ name: "ab" }, { name: "cde" }]/><let/show=true/><for|{ name }| of=items by="name"><if=show><const/{ length }=name/><span>${length}</span></if></for><button onClick() { show = !show }>t</button>` and steps `[{}, toggle, toggle]`; debug csr/resume fail with the TypeError on origin/main.
