# Render
```html
<button>
  toggle
</button>
<label
  for="sM_.#text/1@0.uid"
>
  client
</label>
<input
  id="sM_.#text/1@0.uid"
/>
<input
  id="sM_.after"
/>
<label
  for="sM_.after"
>
  after
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, 2);
}
```
