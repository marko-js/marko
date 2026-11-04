# Render `{"items":["a","b"],"record":{"a":1},"end":1}`
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
<label
  for="sM_3"
>
  a
</label>
<input
  id="sM_3"
/>
<label
  for="sM_4"
>
  0
</label>
<input
  id="sM_4"
/>
<label
  for="sM_5"
>
  1
</label>
<input
  id="sM_5"
/>
<label
  for="sM_6"
>
  0
</label>
<input
  id="sM_6"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id));
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert(ids.size > 0);
}
```
