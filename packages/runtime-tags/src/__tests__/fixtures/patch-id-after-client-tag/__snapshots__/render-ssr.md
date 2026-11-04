# Render
```html
<button>
  toggle
</button>
<label
  for="sM_TA"
>
  client
</label>
<input
  id="sM_TA"
/>
<input
  id="sM_A"
/>
<label
  for="sM_A"
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
