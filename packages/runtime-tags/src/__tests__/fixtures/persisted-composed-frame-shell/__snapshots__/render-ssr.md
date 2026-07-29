# Render `{"show":false,"$global":{"persisted":true}}`

# Update `{"show":true,"$global":{"persisted":true,"persistedHeldShells":true}}`
## Console
```
ERROR "navigate() document fallback: Error: a2"
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
