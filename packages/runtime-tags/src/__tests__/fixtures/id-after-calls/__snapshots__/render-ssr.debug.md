# Render `{"show":true}`
```html
<label
  for="sM_1"
>
  child
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
  after child
</label>
<label
  for="sM_3"
>
  dynamic
</label>
<input
  id="sM_3"
/>
<input
  id="sM_4"
/>
<label
  for="sM_4"
>
  after tag
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```
