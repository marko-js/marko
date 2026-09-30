---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/renderer.ts › createBranch
---

# Create a branch that follows a nested tag body inside a resumed loop

After resume, a `<for>` whose rows render a custom tag inside another's body, where the tag renders `<${input.content}/>` followed by an `<if>`, crashes with `TypeError: Cannot read properties of null (reading 'namespaceURI')` in `createBranch` when an input update both changes the list and turns the `<if>` on; the client render handles the same steps. Found by `pnpm run fuzz`.

Check: a fixture with `template.marko` `<for|item| of=input.list>\n  <child>\n    <child n=input.n></child>\n  </child>\n</for>`, `tags/child.marko` `<${input.content}/>\n<if=(input.n > 2)>\n  <button>b</button>\n</if>`, and steps `[{ n: 2, list: [1, 3, 2] }, { n: 3, list: [4] }]`: the ssr test throws in both modes; csr passes.
