# Render `{"rows":[{"id":1}]}`
```html
<span>
  plain
</span>
<label
  for="sM_1"
>
  1
</label>
<input
  id="sM_1"
/>
caught
<label
  for="sM_2"
>
  row 1
</label>
<input
  id="sM_2"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
