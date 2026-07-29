# Render `{"show":false,"$global":{"persisted":true}}`

# Update `{"show":true,"$global":{"persisted":true,"persistedHeldShells":true}}`
## Console
```
ERROR "navigate() document fallback: Error: A persisted update selected a renderer (\"packages/runtime-tags/src/__tests__/fixtures/persisted-composed-frame-shell/template.marko_1_update\") with no registered update and no loader, so the navigation cannot complete client-side."
```

# Update
```js
if (document.querySelector("span.sibling")) {
assert.equal(
  frameText(document),
  "STATIC FRAME",
  "the constructed branch omitted its child's document frame",
);
  } else {
assert.equal(
  frameText(document),
  undefined,
  "a construction that fell back must leave the page untouched",
);
}
```
