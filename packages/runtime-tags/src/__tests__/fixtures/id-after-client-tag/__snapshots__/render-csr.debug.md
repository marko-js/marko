# Render
```html
<button>
  toggle
</button>
<label
  for="cM_0"
>
  client
</label>
<input
  id="cM_0"
/>
<input
  id="cM_1"
/>
<label
  for="cM_1"
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
