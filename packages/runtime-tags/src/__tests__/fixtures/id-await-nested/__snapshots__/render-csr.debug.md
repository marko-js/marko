# Render `{"items":[{"key":"a","outer":{"value":"a"},"inner":{"value":"a"}},{"key":"b","outer":{"value":"b"},"inner":{"value":"b"}}]}`

# Update
```html
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_1"
/>
```
## Change
```
INSERT: label, #cM_0
UPDATE: label:nth-of-type(1)::text " " => "a"
INSERT: #cM_0 + :is(label, #cM_1)
UPDATE: label:nth-of-type(2)::text " " => "b"
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
