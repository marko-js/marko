# Render `{"items":[{"key":"a","outer":{"value":"a"},"inner":{"value":"a"}},{"key":"b","outer":{"value":"b"},"inner":{"value":"b"}}]}`

# Update
```html
<label
  for="sM_1"
>
  a
</label>
<input
  id="sM_1"
/>
<label
  for="sM_2"
>
  b
</label>
<input
  id="sM_2"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1)::text("a")
INSERT: label:nth-of-type(1) + #sM_1
INSERT: #sM_1 + label
INSERT: label:nth-of-type(2)::text("b")
INSERT: label:nth-of-type(2) + #sM_2
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
