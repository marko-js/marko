# Render `{"items":[{"key":"a","outer":{"value":"a"},"inner":{"value":"a"}},{"key":"b","outer":{"value":"b"},"inner":{"value":"b"}}]}`

# Update
```html
<label
  for="sM_gaUA"
>
  a
</label>
<input
  id="sM_gaUA"
/>
<label
  for="sM_gbUA"
>
  b
</label>
<input
  id="sM_gbUA"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1)::text("a")
INSERT: label:nth-of-type(1) + #sM_gaUA
INSERT: #sM_gaUA + label
INSERT: label:nth-of-type(2)::text("b")
INSERT: label:nth-of-type(2) + #sM_gbUA
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
