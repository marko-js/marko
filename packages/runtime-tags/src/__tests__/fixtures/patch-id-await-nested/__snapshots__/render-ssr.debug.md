# Render `{"items":[{"key":"a","outer":{"value":"a"},"inner":{"value":"a"}},{"key":"b","outer":{"value":"b"},"inner":{"value":"b"}}]}`

# Update
```html
<label
  for="sM_[\"a\"].#childScope/0@0.uid"
>
  a
</label>
<input
  id="sM_[\"a\"].#childScope/0@0.uid"
/>
<label
  for="sM_[\"b\"].#childScope/0@0.uid"
>
  b
</label>
<input
  id="sM_[\"b\"].#childScope/0@0.uid"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1)::text("a")
INSERT: label:nth-of-type(1) + #sM_["a"].#childScope/0@0.uid
INSERT: #sM_["a"].#childScope/0@0.uid + label
INSERT: label:nth-of-type(2)::text("b")
INSERT: label:nth-of-type(2) + #sM_["b"].#childScope/0@0.uid
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
