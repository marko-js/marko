# Render
```html
<button>
  toggle
</button>
<label
  for="sM_1"
>
  client
</label>
<input
  id="sM_1"
/>
<input
  id="sM_2"
/>
<label
  for="sM_2"
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
