# Render `{"show":false,"label":"a"}`
```html
<h1>
  Rows that wait on a settled promise
</h1>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"show":true,"label":"b"}`
```html
<h1>
  Rows that wait on a settled promise
</h1>
<button>
  x
</button>
```
## Change
```
INSERT: h1 + button
```
## Console
```
ERROR Error: Kept content renders in an `<await>` the client settles in structure a patch created: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
