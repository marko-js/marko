---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/dom.ts › insertChildNodes
---

# Insert `<show>` content without losing its anchor

`insertChildNodes` crashes with `TypeError: Cannot read properties of null (reading 'nextSibling')` in two `<show>` shapes found by `pnpm run fuzz`: after resume, toggling a `<show>` whose content is an empty dynamic native tag while the tag name changes (the client render handles the same steps); and on the first client mount of a `<for>` whose rows hold sibling `<show>`s next to text and placeholders (the resumed page renders it).

Check: a fixture `<show=input.on>\n  <${input.section ? "section" : "article"}></>\n</show>` with steps `[{ on: false, section: false }, { on: true, section: true }, { on: false, section: false }, { on: true, section: true }]`: the ssr test throws in both modes; csr passes. And a fixture whose template is

```marko
<for|x11, i12| of=([input.n, input.n])>
  hello
  <show=(true)>
    &amp;
  </show>
  <show=(input.on)>
    ${0}
  </show>
  <div>
    <span>
      ${`${i12 * 2}-${input.s}`}
      ${0}
      ${input.n + (input.on ? x11 : i12)}
    </span>
  </div>
</for>
```

with steps `[{ n: 0, s: "a", on: true }]` throws in the debug csr test.
