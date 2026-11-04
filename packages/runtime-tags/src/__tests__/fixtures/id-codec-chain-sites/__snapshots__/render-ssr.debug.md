# Render `{"mode":0,"nested":true,"other":true}`
```html
<label
  for="sM_1"
>
  field
</label>
<input
  id="sM_1"
/>
<label
  for="sM_2"
>
  field
</label>
<input
  id="sM_2"
/>
<label
  for="sM_3"
>
  field
</label>
<input
  id="sM_3"
/>
<label
  for="sM_4"
>
  field
</label>
<input
  id="sM_4"
/>
<label
  for="sM_5"
>
  field
</label>
<input
  id="sM_5"
/>
<label
  for="sM_6"
>
  field
</label>
<input
  id="sM_6"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
